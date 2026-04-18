import type {CharacterTraits} from "@/types/game/characterTraits.ts";
import type {Armor, CharacterState, InventoryItem, ItemChoiceGroup, Weapon} from "@/types/game/character.ts";

export type ClassOption = {
    subclasses: string[]
    defaultTraits: CharacterTraits
    availableWeapons: Weapon[]
    availableArmors: Armor[]
    defaultItems: InventoryItem[]
    itemChoiceGroups: ItemChoiceGroup[]
    flavorQuestions?: FlavorQuestions
    defaultState?: CharacterState
}

export type FlavorQuestions = {
    ties: string[]
    description: string[]
    spellcastingSource?: string
    appearance: string[]
}
