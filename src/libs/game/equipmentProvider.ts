import type { Armor, Weapon, WeaponSlot } from "@/types/game/character.ts"
import type {
    CatalogArmor,
    CatalogConsumable,
    CatalogMisc,
    CatalogWeapon,
    EquipmentArmorFilter,
    EquipmentDamageType,
    EquipmentItemFilter,
    EquipmentRange,
    EquipmentTier,
    EquipmentTrait,
    EquipmentWeaponFilter,
} from "@/types/game/equipment.ts"
import {
    armors as armorCatalog,
    combatWheelchairs as wheelchairCatalog,
    consumables as consumableCatalog,
    items as itemCatalog,
    primaryWeapons as primaryCatalog,
    secondaryWeapons as secondaryCatalog,
} from "@/libs/game/equipment/catalog.ts"

const i18nGroupBySlug: Record<string, string> = {
    'armor': 'armors',
    'primary-weapon': 'primaryWeapons',
    'secondary-weapon': 'secondaryWeapons',
    'combat-wheelchair': 'combatWheelchairs',
    'item': 'items',
    'consumable': 'consumables',
}

const damageKindI18n: Record<EquipmentDamageType, string> = {
    physical: 'game.damageKinds.physical',
    magical: 'game.damageKinds.magic',
    any: 'game.damageKinds.any',
}

const distanceI18n: Record<EquipmentRange, string> = {
    melee: 'game.distances.melee',
    veryclose: 'game.distances.veryclose',
    close: 'game.distances.close',
    far: 'game.distances.far',
    veryfar: 'game.distances.veryfar',
}

const traitI18n: Record<EquipmentTrait, string> = {
    agility: 'game.traits.agility.name',
    strength: 'game.traits.strength.name',
    finesse: 'game.traits.finesse.name',
    instinct: 'game.traits.instinct.name',
    presence: 'game.traits.presence.name',
    knowledge: 'game.traits.knowledge.name',
    spellcast: 'game.traits.spellcast.name',
}

function asArray<T>(v: T | T[] | undefined): T[] | undefined {
    if (v === undefined) return undefined
    return Array.isArray(v) ? v : [v]
}

function inSet<T>(value: T, allowed: T[] | undefined): boolean {
    if (!allowed) return true
    return allowed.includes(value)
}

function matchesSearch(value: string, search?: string): boolean {
    if (!search) return true
    return value.toLowerCase().includes(search.toLowerCase())
}

function filterArmors(filter?: EquipmentArmorFilter): CatalogArmor[] {
    const tiers = asArray(filter?.tier)
    return armorCatalog.filter((a) =>
        inSet<EquipmentTier>(a.tier, tiers) &&
        matchesSearch(a.slug, filter?.search),
    )
}

function filterWeapons(source: CatalogWeapon[], filter?: EquipmentWeaponFilter): CatalogWeapon[] {
    const tiers = asArray(filter?.tier)
    const traits = asArray(filter?.trait)
    const ranges = asArray(filter?.range)
    const damageTypes = asArray(filter?.damageType)
    const burdens = asArray(filter?.burden)
    const subtypes = asArray(filter?.subtype)
    return source.filter((w) =>
        inSet<EquipmentTier>(w.tier, tiers) &&
        inSet<EquipmentTrait>(w.trait, traits) &&
        inSet<EquipmentRange>(w.range, ranges) &&
        inSet<EquipmentDamageType>(w.damageType, damageTypes) &&
        inSet(w.burden, burdens) &&
        (!subtypes || (w.subtypeSlug !== undefined && subtypes.includes(w.subtypeSlug))) &&
        matchesSearch(w.slug, filter?.search),
    )
}

function getArmors(filter?: EquipmentArmorFilter): CatalogArmor[] {
    return filterArmors(filter)
}

function getPrimaryWeapons(filter?: EquipmentWeaponFilter): CatalogWeapon[] {
    return filterWeapons(primaryCatalog, filter)
}

function getSecondaryWeapons(filter?: EquipmentWeaponFilter): CatalogWeapon[] {
    return filterWeapons(secondaryCatalog, filter)
}

function getCombatWheelchairs(filter?: EquipmentWeaponFilter): CatalogWeapon[] {
    return filterWeapons(wheelchairCatalog, filter)
}

function getItems(filter?: EquipmentItemFilter): CatalogMisc[] {
    return itemCatalog.filter((i) => matchesSearch(i.slug, filter?.search))
}

function getConsumables(filter?: EquipmentItemFilter): CatalogConsumable[] {
    return consumableCatalog.filter((i) => matchesSearch(i.slug, filter?.search))
}

function findWeaponBySlug(slug: string): CatalogWeapon | undefined {
    return (
        primaryCatalog.find((w) => w.slug === slug) ??
        secondaryCatalog.find((w) => w.slug === slug) ??
        wheelchairCatalog.find((w) => w.slug === slug)
    )
}

function findArmorBySlug(slug: string): CatalogArmor | undefined {
    return armorCatalog.find((a) => a.slug === slug)
}

function findItemBySlug(slug: string): CatalogMisc | CatalogConsumable | undefined {
    return itemCatalog.find((i) => i.slug === slug) ?? consumableCatalog.find((i) => i.slug === slug)
}

function i18nNameKey(typeSlug: string, key: string): string {
    return `game.equipment.${i18nGroupBySlug[typeSlug]}.${key}.name`
}

function i18nFeatureNameKey(typeSlug: string, key: string): string {
    return `game.equipment.${i18nGroupBySlug[typeSlug]}.${key}.featureName`
}

function i18nFeatureDescriptionKey(typeSlug: string, key: string): string {
    return `game.equipment.${i18nGroupBySlug[typeSlug]}.${key}.featureDescription`
}

function i18nBodyKey(typeSlug: string, key: string): string {
    return `game.equipment.${i18nGroupBySlug[typeSlug]}.${key}.body`
}

function formatDamageDice(dieNum: number, dieSize: number, bonus: number): string {
    const base = dieNum > 1 ? `${dieNum}d${dieSize}` : `d${dieSize}`
    if (bonus > 0) return `${base}+${bonus}`
    if (bonus < 0) return `${base}${bonus}`
    return base
}

function makeWeapon(slug: string, weaponSlot?: WeaponSlot): Weapon {
    const entry = findWeaponBySlug(slug)
    if (!entry) throw new Error(`Unknown weapon slug: ${slug}`)

    const slot = weaponSlot ?? entry.weaponSlot
    const featureName = entry.hasFeature ? i18nFeatureNameKey(entry.typeSlug, entry.key) : ''
    const featureDescription = entry.hasFeature ? i18nFeatureDescriptionKey(entry.typeSlug, entry.key) : undefined

    return {
        name: i18nNameKey(entry.typeSlug, entry.key),
        trait: traitI18n[entry.trait],
        distance: distanceI18n[entry.range],
        damageDice: formatDamageDice(entry.dieNum, entry.dieSize, entry.bonus),
        damageKind: damageKindI18n[entry.damageType],
        feature: featureName,
        featureDescription,
        weaponSlot: slot,
        primary: false,
        secondary: false,
        left: false,
        right: false,
    }
}

function makeArmor(slug: string): Armor {
    const entry = findArmorBySlug(slug)
    if (!entry) throw new Error(`Unknown armor slug: ${slug}`)

    return {
        name: i18nNameKey(entry.typeSlug, entry.key),
        thresholdLow: entry.baseThresholds[0],
        thresholdHigh: entry.baseThresholds[1],
        score: entry.armorScore,
        feature: entry.hasFeature ? i18nFeatureDescriptionKey(entry.typeSlug, entry.key) : '',
    }
}

function makeInventoryItem(slug: string, count = 1) {
    const entry = findItemBySlug(slug)
    if (!entry) throw new Error(`Unknown item slug: ${slug}`)
    return {
        name: i18nNameKey(entry.typeSlug, entry.key),
        count,
    }
}

function bodyI18nKeyFor(slug: string): string {
    const entry = findItemBySlug(slug)
    if (!entry) throw new Error(`Unknown item slug: ${slug}`)
    return i18nBodyKey(entry.typeSlug, entry.key)
}

export default {
    getArmors,
    getPrimaryWeapons,
    getSecondaryWeapons,
    getCombatWheelchairs,
    getItems,
    getConsumables,
    findWeaponBySlug,
    findArmorBySlug,
    findItemBySlug,
    makeWeapon,
    makeArmor,
    makeInventoryItem,
    bodyI18nKeyFor,
}
