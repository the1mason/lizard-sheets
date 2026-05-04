import type { WeaponSlot } from "@/types/game/character.ts"

export type EquipmentTier = 1 | 2 | 3 | 4

export type Burden = 'one-handed' | 'two-handed'

export type EquipmentRange =
    | 'melee'
    | 'veryclose'
    | 'close'
    | 'far'
    | 'veryfar'

export type EquipmentDamageType = 'physical' | 'magical' | 'any'

export type EquipmentTrait =
    | 'agility'
    | 'strength'
    | 'finesse'
    | 'instinct'
    | 'presence'
    | 'knowledge'
    | 'spellcast'

export type PrimaryWeaponSubtype = 'physical' | 'magic'

export type WheelchairSubtype =
    | 'arcane-frame-model'
    | 'light-frame-model'
    | 'heavy-frame-model'

export type EquipmentTypeSlug =
    | 'armor'
    | 'primary-weapon'
    | 'secondary-weapon'
    | 'combat-wheelchair'
    | 'item'
    | 'consumable'

export type CatalogEquipmentBase = {
    slug: string
    key: string
    typeSlug: EquipmentTypeSlug
    tier?: EquipmentTier
    sourceSlugs: string[]
    imageUrl?: string
}

export type CatalogArmor = CatalogEquipmentBase & {
    typeSlug: 'armor'
    tier: EquipmentTier
    armorScore: number
    baseThresholds: [number, number]
    hasFeature: boolean
}

export type CatalogWeapon = CatalogEquipmentBase & {
    typeSlug: 'primary-weapon' | 'secondary-weapon' | 'combat-wheelchair'
    tier: EquipmentTier
    trait: EquipmentTrait
    range: EquipmentRange
    damageType: EquipmentDamageType
    dieNum: number
    dieSize: number
    bonus: number
    burden: Burden
    weaponSlot: WeaponSlot
    subtypeSlug?: PrimaryWeaponSubtype | WheelchairSubtype
    hasFeature: boolean
}

export type CatalogConsumable = CatalogEquipmentBase & {
    typeSlug: 'consumable'
    uses?: number
}

export type CatalogMisc = CatalogEquipmentBase & {
    typeSlug: 'item'
}

export type CatalogEntry =
    | CatalogArmor
    | CatalogWeapon
    | CatalogConsumable
    | CatalogMisc

export type EquipmentArmorFilter = {
    tier?: EquipmentTier | EquipmentTier[]
    search?: string
}

export type EquipmentWeaponFilter = {
    tier?: EquipmentTier | EquipmentTier[]
    trait?: EquipmentTrait | EquipmentTrait[]
    range?: EquipmentRange | EquipmentRange[]
    damageType?: EquipmentDamageType | EquipmentDamageType[]
    burden?: Burden | Burden[]
    subtype?: string | string[]
    search?: string
}

export type EquipmentItemFilter = {
    search?: string
}
