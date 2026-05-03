import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const repoRoot = process.cwd()
const defaultApiDir = path.join(repoRoot, '.cache/daggerheart-ru-api')
const args = process.argv.slice(2)
const refresh = args.includes('--refresh')
const apiDirArg = args.find((arg) => arg.startsWith('--api-dir='))
const apiDir = apiDirArg?.slice('--api-dir='.length) ?? process.env.DAGGERHEART_RU_API_DIR ?? defaultApiDir
const apiBaseUrl = process.env.DAGGERHEART_RU_API_BASE_URL ?? 'https://daggerheart.su/api'
const outDir = path.join(repoRoot, 'src/i18n/ru')
const apiEndpoints = [
  'class',
  'subclass',
  'ancestry',
  'community',
  'domain-card',
  'equipment',
]

const domainFileNames = [
  'arcana',
  'blade',
  'bone',
  'codex',
  'dread',
  'grace',
  'midnight',
  'sage',
  'splendor',
  'valor',
]

const classKeyToSlug = {
  assassin: 'playtest-assassin',
  bard: 'bard',
  brawler: 'playtest-fighter',
  druid: 'druid',
  guardian: 'guardian',
  ranger: 'ranger',
  rogue: 'rogue',
  seraph: 'seraph',
  sorcerer: 'sorcerer',
  warlock: 'playtest-warlock',
  warrior: 'warrior',
  witch: 'witch',
  wizard: 'wizard',
}

const subclassKeyToSlug = {
  poisoners: 'poisoners-guild',
  executioners: 'executioners-guild',
  troubadour: 'troubadour',
  wordsmith: 'wordsmith',
  juggernaut: 'playtest-juggernaut',
  martial: 'playtest-martial-artist',
  elements: 'warden-of-the-elements',
  renewal: 'warden-of-renewal',
  stalwart: 'stalwart',
  vengeance: 'vengeance',
  wayfinder: 'wayfinder',
  beastbound: 'beastbound',
  nightwalker: 'nightwalker',
  syndicate: 'syndicate',
  wielder: 'divine-wielder',
  sentinel: 'winged-sentinel',
  primal: 'primal-origin',
  elemental: 'elemental-origin',
  wrathful: 'playtest-pact-of-the-wraithful',
  endless: 'playtest-pact-of-the-endless',
  brave: 'call-of-the-brave',
  slayer: 'call-of-the-slayer',
  moon: 'moon',
  hedge: 'hedge',
  knowledge: 'school-of-knowledge',
  war: 'school-of-war',
}

const ancestryKeyToSlug = {
  aetheris: 'aetheris',
  clank: 'clank',
  drakona: 'drakona',
  dwarf: 'dwarf',
  earhkin: 'earthkin',
  elf: 'elf',
  emberkin: 'emberkin',
  faerie: 'faerie',
  faun: 'faun',
  firbolg: 'firbolg',
  fungril: 'fungril',
  galapa: 'galapa',
  giant: 'giant',
  gnome: 'gnome',
  goblin: 'goblin',
  halfling: 'halfling',
  human: 'human',
  infernis: 'infernis',
  katari: 'katari',
  orc: 'orc',
  ribbet: 'ribbet',
  simiah: 'simiah',
  skykin: 'skykin',
  tidekin: 'tidekin',
}

const communityKeyToSlug = {
  duneborne: 'duneborne',
  freeborne: 'freeborne',
  frostborne: 'frostborne',
  hearthborne: 'hearthborne',
  highborne: 'highborne',
  loreborne: 'loreborne',
  orderborne: 'orderborne',
  reborne: 'reborne',
  ridgeborne: 'ridgeborne',
  seaborne: 'seaborne',
  slyborne: 'slyborne',
  underborne: 'underborne',
  wanderborne: 'wanderborne',
  warborne: 'warborne',
  wildborne: 'wildborne',
}

const classItemKeys = {
  loreWizardBook: ['wizard', 0],
  loreWizardPet: ['wizard', 1],
  loreAssassinList: ['assassin', 0],
  loreAssassinMortar: ['assassin', 1],
  loreBardNovel: ['bard', 0],
  loreBardLetter: ['bard', 1],
  loreBrawlerWraps: ['brawler', 0],
  loreBrawlerBook: ['brawler', 1],
  loreDruidBones: ['druid', 0],
  loreDruidPendant: ['druid', 1],
  loreGuardianTotem: ['guardian', 0],
  loreGuardianKey: ['guardian', 1],
  loreRangerTrophy: ['ranger', 0],
  loreRangerCompass: ['ranger', 1],
  loreRogueForgery: ['rogue', 0],
  loreRogueHook: ['rogue', 1],
  loreSeraphOfferings: ['seraph', 0],
  loreSeraphSigil: ['seraph', 1],
  loreSorcererOrb: ['sorcerer', 0],
  loreSorcererHeirloom: ['sorcerer', 1],
  loreWarlockCarving: ['warlock', 0],
  loreWarlockRing: ['warlock', 1],
  loreWarriorDrawing: ['warrior', 0],
  loreWarriorStone: ['warrior', 1],
  loreWitchPet: ['witch', 0],
  loreWitchSkull: ['witch', 1],
}

const classFeatureIndexes = {
  guardian: {
    unstoppable: 1,
  },
  warlock: {
    patron: 1,
    favor: 2,
  },
}

function readApi(lang, endpoint) {
  const file = path.join(apiDir, lang, `${endpoint}.json`)
  if (!fs.existsSync(file)) {
    throw new Error(`API cache file is missing: ${file}`)
  }

  const json = JSON.parse(fs.readFileSync(file, 'utf8'))
  return json.data ?? json
}

async function refreshApiCache() {
  for (const lang of ['ru']) {
    const langDir = path.join(apiDir, lang)
    fs.mkdirSync(langDir, { recursive: true })

    for (const endpoint of apiEndpoints) {
      const url = `${apiBaseUrl}/${endpoint}?lang=${lang}`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`)
      }

      const text = await response.text()
      JSON.parse(text)
      fs.writeFileSync(path.join(langDir, `${endpoint}.json`), text, 'utf8')
    }
  }
}

function isApiCacheMissing() {
  return apiEndpoints.some((endpoint) => {
    return !fs.existsSync(path.join(apiDir, 'ru', `${endpoint}.json`))
  })
}

function bySlug(records) {
  return new Map(records.map((record) => [record.slug, record]))
}

function stripMarkdownLinks(text) {
  return text.replace(/\[([^\]]+)]\((?:[^()\\]|\\.)*\)/g, '$1')
}

function normalizeText(text = '') {
  const normalized = String(text)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/#{([^}]+)}#/g, '$1')
    .replace(/\u00a0/g, ' ')

  return stripMarkdownLinks(normalized)
    .trim()
}

function plainText(markdown = '') {
  return normalizeText(markdown)
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function featureBlock(feature, options = {}) {
  const body = normalizeText(feature?.main_body)
  if (!feature?.name) return body
  const prefix = options.card ? `_**${feature.name}:**_` : `**${feature.name.toUpperCase()}**`
  return `${prefix}\n${body}`
}

function featureList(features, options = {}) {
  return (features ?? [])
    .filter((feature) => feature?.main_body || feature?.name)
    .map((feature) => featureBlock(feature, options))
    .join('\n\n')
}

function descriptionWithFeatures(record) {
  return normalizeText([
    record.short_description,
    featureList(record.features, { card: true }),
  ].filter(Boolean).join('\n\n'))
}

function firstFeatureSummary(record) {
  const feature = record.features?.[0]
  if (!feature) return ''
  return `${feature.name}: ${plainText(feature.main_body)}`
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

async function readExistingModuleExport(file, exportName) {
  if (!fs.existsSync(file)) return {}

  try {
    const url = pathToFileURL(file).href + `?mtime=${fs.statSync(file).mtimeMs}`
    const module = await import(url)
    return module[exportName] ?? {}
  } catch {
    return {}
  }
}

function readTopLevelKeys(file) {
  const source = fs.readFileSync(file, 'utf8')
  const keys = []
  const re = /^ {4}(?:"([^"]+)"|([$\w]+)):\s*\{/gm
  let match

  while ((match = re.exec(source)) !== null) {
    keys.push(match[1] ?? match[2])
  }

  return keys
}

function orderObjectByKeys(object, keys) {
  const ordered = {}
  for (const key of keys) {
    if (Object.hasOwn(object, key)) ordered[key] = object[key]
  }

  for (const [key, value] of Object.entries(object)) {
    if (!Object.hasOwn(ordered, key)) ordered[key] = value
  }

  return ordered
}

function domainFileName(apiDomainSlug) {
  return apiDomainSlug === 'playtest-dread' ? 'dread' : apiDomainSlug
}

function buildAppearance(record) {
  const appearance = {
    clothes: record.description_clothes,
    eyes: record.description_eyes,
    body: record.description_body,
    color: record.description_color,
    attitude: record.description_attitude,
  }

  return Object.fromEntries(Object.entries(appearance).filter(([, values]) => values?.length))
}

// The Russian class API returns some Core appearance options in English.
// Keep manual appearance values already present in ru/game/classes.ts.
function existingAppearanceFor(existingClasses, key) {
  const appearance = existingClasses[key]?.flavor?.appearance
  if (!appearance || Array.isArray(appearance) || typeof appearance !== 'object') return null
  return Object.keys(appearance).length ? appearance : null
}

function cardBody(card) {
  const features = card.features?.length
    ? card.features
    : [{ name: card.name, main_body: card.main_body }]

  return features
    .filter((feature) => feature?.main_body || feature?.name)
    .map((feature) => {
      const name = feature.name ?? card.name
      return normalizeText(`_**${name}:**_ ${feature.main_body}`)
    })
    .join('\n\n')
}

function buildClasses(classBySlug, existingClasses) {
  const result = {}

  for (const [key, slug] of Object.entries(classKeyToSlug)) {
    const record = classBySlug.get(slug)
    if (!record) throw new Error(`Missing class in API cache: ${slug}`)

    const entry = {
      name: record.name,
      description: normalizeText(record.short_description),
      hopeFeat: firstFeatureSummary(record),
      flavor: {
        ties: record.connection_questions ?? [],
        description: record.background_questions ?? [],
        appearance: existingAppearanceFor(existingClasses, key) ?? buildAppearance(record),
      },
      trait: featureList(record.features?.slice(1)),
    }

    if (key === 'guardian') {
      const unstoppable = record.features?.[classFeatureIndexes.guardian.unstoppable]
      entry.unstoppable = {
        trait: featureBlock(unstoppable),
      }
    }

    if (key === 'warlock') {
      const patron = record.features?.[classFeatureIndexes.warlock.patron]
      const favor = record.features?.[classFeatureIndexes.warlock.favor]
      entry.patron = {
        description: normalizeText(patron?.main_body),
        favorDescription: normalizeText(favor?.main_body),
      }
    }

    result[key] = entry
  }

  return result
}

function buildSubclasses(subclassBySlug) {
  const result = {}

  for (const [key, slug] of Object.entries(subclassKeyToSlug)) {
    const record = subclassBySlug.get(slug)
    if (!record) throw new Error(`Missing subclass in API cache: ${slug}`)

    const entry = {
      name: record.name,
      foundation: featureList(record.foundation_features, { card: true }),
      specialization: featureList(record.specialization_features, { card: true }),
      mastery: featureList(record.mastery_features, { card: true }),
    }

    if (record.spellcast_trait) {
      entry.spellcastTrait = record.spellcast_trait
    }

    result[key] = entry
  }

  return result
}

function buildAncestries(ancestryBySlug) {
  const result = {}
  for (const [key, slug] of Object.entries(ancestryKeyToSlug)) {
    const record = ancestryBySlug.get(slug)
    if (!record) throw new Error(`Missing ancestry in API cache: ${slug}`)
    result[key] = {
      name: record.name,
      description: descriptionWithFeatures(record),
    }
  }
  return result
}

function buildCommunities(communityBySlug) {
  const result = {}
  for (const [key, slug] of Object.entries(communityKeyToSlug)) {
    const record = communityBySlug.get(slug)
    if (!record) throw new Error(`Missing community in API cache: ${slug}`)
    result[key] = {
      name: record.name,
      description: descriptionWithFeatures(record),
    }
  }
  return result
}

function buildCards(cards) {
  const cardsByDomain = Object.fromEntries(domainFileNames.map((name) => [name, {}]))

  for (const card of cards) {
    const localDomain = domainFileName(card.domain_slug)
    if (!cardsByDomain[localDomain]) continue
    cardsByDomain[localDomain][card.slug] = {
      name: card.name,
      body: cardBody(card),
    }
  }

  return cardsByDomain
}

function buildItems(classBySlug, equipmentBySlug) {
  const result = {}
  const healthPotion = equipmentBySlug.get('minor-health-potion')
  const staminaPotion = equipmentBySlug.get('minor-stamina-potion')

  if (healthPotion) result.healthPotionS = { name: healthPotion.name }
  if (staminaPotion) result.staminaPotionS = { name: staminaPotion.name }

  for (const [itemKey, [classKey, index]] of Object.entries(classItemKeys)) {
    const classRecord = classBySlug.get(classKeyToSlug[classKey])
    result[itemKey] = { name: classRecord?.class_items?.[index] ?? '' }
  }

  return result
}

if (refresh || isApiCacheMissing()) {
  await refreshApiCache()
}

const ruClasses = readApi('ru', 'class')
const ruClassBySlug = bySlug(ruClasses)
const ruSubclasses = readApi('ru', 'subclass')
const ruSubclassBySlug = bySlug(ruSubclasses)
const ruAncestries = readApi('ru', 'ancestry')
const ruAncestryBySlug = bySlug(ruAncestries)
const ruCommunities = readApi('ru', 'community')
const ruCommunityBySlug = bySlug(ruCommunities)
const ruCards = readApi('ru', 'domain-card')
const ruEquipment = readApi('ru', 'equipment')
const ruEquipmentBySlug = bySlug(ruEquipment)
const existingClasses = await readExistingModuleExport(path.join(outDir, 'game/classes.ts'), 'classes')

const classes = buildClasses(ruClassBySlug, existingClasses)
const subclasses = buildSubclasses(ruSubclassBySlug)
const ancestries = buildAncestries(ruAncestryBySlug)
const communities = buildCommunities(ruCommunityBySlug)
const cardsByDomain = buildCards(ruCards)
const items = buildItems(ruClassBySlug, ruEquipmentBySlug)

writeModule(path.join(outDir, 'game/classes.ts'), 'classes', classes)
writeModule(path.join(outDir, 'game/subclasses.ts'), 'subclasses', subclasses)
writeModule(path.join(outDir, 'game/ancestries.ts'), 'ancestries', ancestries)
writeModule(path.join(outDir, 'game/communities.ts'), 'communities', communities)
writeModule(path.join(outDir, 'game/items.ts'), 'items', items)

for (const [domain, cards] of Object.entries(cardsByDomain)) {
  const englishCardFile = path.join(repoRoot, `src/i18n/en/game/cards/${domain}.ts`)
  writeModule(
    path.join(outDir, `game/cards/${domain}.ts`),
    domain,
    fs.existsSync(englishCardFile) ? orderObjectByKeys(cards, readTopLevelKeys(englishCardFile)) : cards,
  )
}

console.log(`Generated Russian game data i18n files from ${apiDir}`)
