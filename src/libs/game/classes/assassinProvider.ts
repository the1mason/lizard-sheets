import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const weapons = [
        w("game.weapons.broadsword.name",
            "game.traits.agility.name",
            "game.distances.melee",
            "d8",
            "game.damageKinds.physical",
            "game.weapons.broadsword.featureName",
            "primary-only",
            "game.weapons.broadsword.featureDescription"),
        w("game.weapons.shortsword.name",
            "game.traits.agility.name",
            "game.distances.melee",
            "d8",
            "game.damageKinds.physical",
            "game.weapons.shortsword.featureName",
            "secondary-only",
            "game.weapons.shortsword.featureDescription"),
    ]

    const armors = [
        { name: "game.armors.leatherArmor.name", thresholdLow: 6,  thresholdHigh: 13, score: 3, feature: "" },
    ]
    const defaultItems = [
        { name: "game.items.torch.name",           count: 1 },
        { name: "game.items.rope50ft.name",        count: 1 },
        { name: "game.items.basicSupplies.name",        count: 1 },
    ]
    const itemChoiceGroups = [
        {
            id: "potion",
            label: "game.itemChoiceGroups.potion.label",
            items: [
                { name: "game.items.healthPotionS.name",  count: 1 },
                { name: "game.items.staminaPotionS.name", count: 1 },
            ]
        },
        {
            id: "lore",
            label: "game.itemChoiceGroups.lore.label",
            items: [
                { name: "game.items.loreAssassinList.name",     count: 1 },
                { name: "game.items.loreAssassinMortar.name",  count: 1 },
            ]
        }
    ]
    return {
        subclasses: ["poisoners", "executioners"],
        defaultTraits: {agility: 2, strength: -1, finesse: 1, instinct: 0, presence: 0, knowledge: 1},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        defaultState: {
            evasion: 12,
            armorMax: 0,
            armor: 0,
            health: 0,
            healthMax: 5,
            stress: 0,
            stressMax: 6,
            hope: 2,
            hopeMax: 6,
            money: 1
        }
    }
}

export default {
    getClassOptions
}