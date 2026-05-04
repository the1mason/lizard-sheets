import fs from 'node:fs'
import path from 'node:path'

const repoRoot = process.cwd()
const defaultApiDir = path.join(repoRoot, '.cache/daggerheart-equipment-api')
const args = process.argv.slice(2)
const refresh = args.includes('--refresh')
const apiDirArg = args.find((arg) => arg.startsWith('--api-dir='))
const apiDir = apiDirArg?.slice('--api-dir='.length) ?? process.env.DAGGERHEART_EQUIPMENT_API_DIR ?? defaultApiDir
const apiBaseUrl = process.env.DAGGERHEART_API_BASE_URL ?? 'https://daggerheart.su/api'
const langs = ['en', 'ru']

const i18nDirs = Object.fromEntries(langs.map((lang) => [lang, path.join(repoRoot, `src/i18n/${lang}/game/equipment`)]))
const catalogFile = path.join(repoRoot, 'src/libs/game/equipment/catalog.ts')

const typeToFile = {
  'armor': 'armors',
  'primary-weapon': 'primaryWeapons',
  'secondary-weapon': 'secondaryWeapons',
  'combat-wheelchair': 'combatWheelchairs',
  'item': 'items',
  'consumable': 'consumables',
}

const itemTypes = ['item', 'consumable']

function readApi(lang) {
  const file = path.join(apiDir, lang, 'equipment.json')
  if (!fs.existsSync(file)) {
    throw new Error(`API cache file is missing: ${file}`)
  }

  const json = JSON.parse(fs.readFileSync(file, 'utf8'))
  return json.data ?? json
}

async function refreshApiCache() {
  for (const lang of langs) {
    const langDir = path.join(apiDir, lang)
    fs.mkdirSync(langDir, { recursive: true })

    const url = `${apiBaseUrl}/equipment?lang=${lang}`
    const response = await fetch(url, { headers: { Cookie: `lang=${lang}` } })
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
    }

    const text = await response.text()
    JSON.parse(text)
    fs.writeFileSync(path.join(langDir, 'equipment.json'), text, 'utf8')
  }
}

function isApiCacheMissing() {
  return langs.some((lang) => !fs.existsSync(path.join(apiDir, lang, 'equipment.json')))
}

function slugToCamel(slug) {
  return slug
    .split(/[-_]/)
    .map((part, idx) => (idx === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('')
}

function stripMarkdownLinks(text) {
  return text.replace(/\[([^\]]+)]\((?:[^()\\]|\\.)*\)/g, '$1')
}

function normalizeText(text = '') {
  const normalized = String(text)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/ /g, ' ')

  return stripMarkdownLinks(normalized).trim()
}

function canUseBareKey(key) {
  return /^[$A-Z_a-z][$\w]*$/.test(key) || /^\d+$/.test(key)
}

function formatKey(key) {
  return canUseBareKey(key) ? key : JSON.stringify(key)
}

function formatString(value) {
  if (value.includes('\n')) {
    return `\`${value
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${')}\``
  }

  return `'${value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")}'`
}

function formatValue(value, indentLevel = 0) {
  const indent = '  '.repeat(indentLevel)
  const nextIndent = '  '.repeat(indentLevel + 1)

  if (typeof value === 'string') return formatString(value)
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (value === null) return 'null'

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'

    return `[\n${value
      .map((item) => `${nextIndent}${formatValue(item, indentLevel + 1)},`)
      .join('\n')}\n${indent}]`
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value)
    if (entries.length === 0) return '{}'

    return `{\n${entries
      .map(([key, item]) => `${nextIndent}${formatKey(key)}: ${formatValue(item, indentLevel + 1)},`)
      .join('\n')}\n${indent}}`
  }

  throw new TypeError(`Unsupported value type: ${typeof value}`)
}

function writeModule(file, exportName, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, `export const ${exportName} = ${formatValue(value)}\n`, 'utf8')
}

function burdenFromCode(code) {
  if (code === 1) return 'one-handed'
  if (code === 2) return 'two-handed'
  return 'one-handed'
}

function weaponSlotFor(typeSlug, burden) {
  if (burden === 'two-handed') return 'two-handed'
  if (typeSlug === 'secondary-weapon') return 'secondary-only'
  return 'primary-only'
}

function buildI18nEntry(record, type) {
  const feature = record.features?.[0]
  if (itemTypes.includes(type)) {
    return {
      name: record.name ?? '',
      body: normalizeText(record.main_body ?? ''),
    }
  }

  return {
    name: record.name ?? '',
    featureName: feature?.name ?? '',
    featureDescription: normalizeText(feature?.main_body ?? ''),
  }
}

function buildI18n(items, type) {
  const result = {}
  for (const record of items) {
    if (record.type_slug !== type) continue
    result[slugToCamel(record.slug)] = buildI18nEntry(record, type)
  }
  return Object.fromEntries(
    Object.entries(result).sort(([a], [b]) => a.localeCompare(b)),
  )
}

function buildCatalogEntry(record) {
  const key = slugToCamel(record.slug)
  const base = {
    slug: record.slug,
    key,
    typeSlug: record.type_slug,
    sourceSlugs: record.source_slugs ?? [],
  }
  if (record.image_url) base.imageUrl = record.image_url

  if (record.type_slug === 'armor') {
    return {
      ...base,
      tier: record.tier,
      armorScore: record.armor_score,
      baseThresholds: record.base_thresholds ?? [0, 0],
      hasFeature: Boolean(record.features?.length),
    }
  }

  if (
    record.type_slug === 'primary-weapon' ||
    record.type_slug === 'secondary-weapon' ||
    record.type_slug === 'combat-wheelchair'
  ) {
    const burden = burdenFromCode(record.burden)
    return {
      ...base,
      tier: record.tier,
      trait: record.char_trait,
      range: record.range,
      damageType: record.damage_ty,
      dieNum: record.die_num,
      dieSize: record.die_size,
      bonus: record.bonus ?? 0,
      burden,
      weaponSlot: weaponSlotFor(record.type_slug, burden),
      ...(record.subtype_slug ? { subtypeSlug: record.subtype_slug } : {}),
      hasFeature: Boolean(record.features?.length),
    }
  }

  if (record.type_slug === 'consumable') {
    return {
      ...base,
      ...(record.uses ? { uses: record.uses } : {}),
    }
  }

  return base
}

function buildCatalog(items) {
  const groups = {
    armors: [],
    primaryWeapons: [],
    secondaryWeapons: [],
    combatWheelchairs: [],
    items: [],
    consumables: [],
  }

  for (const record of items) {
    const entry = buildCatalogEntry(record)
    switch (record.type_slug) {
      case 'armor': groups.armors.push(entry); break
      case 'primary-weapon': groups.primaryWeapons.push(entry); break
      case 'secondary-weapon': groups.secondaryWeapons.push(entry); break
      case 'combat-wheelchair': groups.combatWheelchairs.push(entry); break
      case 'item': groups.items.push(entry); break
      case 'consumable': groups.consumables.push(entry); break
    }
  }

  for (const list of Object.values(groups)) {
    list.sort((a, b) => a.slug.localeCompare(b.slug))
  }

  return groups
}

function writeCatalog(catalog) {
  fs.mkdirSync(path.dirname(catalogFile), { recursive: true })

  const header = `// AUTO-GENERATED by scripts/generate-equipment-i18n.mjs. Do not edit by hand.\n` +
    `import type {\n` +
    `  CatalogArmor,\n` +
    `  CatalogConsumable,\n` +
    `  CatalogMisc,\n` +
    `  CatalogWeapon,\n` +
    `} from "@/types/game/equipment.ts"\n\n`

  const body =
    `export const armors: CatalogArmor[] = ${formatValue(catalog.armors)}\n\n` +
    `export const primaryWeapons: CatalogWeapon[] = ${formatValue(catalog.primaryWeapons)}\n\n` +
    `export const secondaryWeapons: CatalogWeapon[] = ${formatValue(catalog.secondaryWeapons)}\n\n` +
    `export const combatWheelchairs: CatalogWeapon[] = ${formatValue(catalog.combatWheelchairs)}\n\n` +
    `export const items: CatalogMisc[] = ${formatValue(catalog.items)}\n\n` +
    `export const consumables: CatalogConsumable[] = ${formatValue(catalog.consumables)}\n`

  fs.writeFileSync(catalogFile, header + body, 'utf8')
}

if (refresh || isApiCacheMissing()) {
  await refreshApiCache()
}

const enItems = readApi('en')
const ruItems = readApi('ru')

for (const lang of langs) {
  const items = lang === 'en' ? enItems : ruItems
  for (const [type, fileBase] of Object.entries(typeToFile)) {
    writeModule(
      path.join(i18nDirs[lang], `${fileBase}.ts`),
      fileBase,
      buildI18n(items, type),
    )
  }
}

writeCatalog(buildCatalog(enItems))

const counts = Object.fromEntries(Object.entries(typeToFile).map(([type, base]) => {
  return [base, enItems.filter((i) => i.type_slug === type).length]
}))

console.log('Generated equipment i18n + catalog')
console.log('Counts:', counts)
console.log('i18n out:', i18nDirs.en, '+', i18nDirs.ru)
console.log('Catalog out:', catalogFile)
