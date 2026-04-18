import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const weapons = [
        w("game.weapons.dagger.name",
            "game.traits.finesse.name",
            "game.distances.melee",
            "d8+1",
            "game.damageKinds.physical",
            "",
            "primary-only"),
        w("game.weapons.smallDagger.name",
            "game.traits.finesse.name",
            "game.distances.melee",
            "d8",
            "game.damageKinds.physical",
            "game.weapons.smallDagger.featureName",
            "secondary-only",
            "game.weapons.smallDagger.featureDescription"),
    ]

    const armors = [
        { name: "game.armors.gambesonArmor.name", thresholdLow: 5, thresholdHigh: 11, score: 3, feature: "game.armors.gambesonArmor.feature" },
    ]
    const defaultItems = [
        { name: "game.items.torch.name",           count: 1 },
        { name: "game.items.rope50ft.name",        count: 1 },
        { name: "game.items.basicSupplies.name",   count: 1 },
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
                { name: "game.items.loreRogueForgery.name", count: 1 },
                { name: "game.items.loreRogueHook.name",    count: 1 },
            ]
        }
    ]
    return {
        subclasses: ["nightwalker", "syndicate"],
        defaultTraits: {agility: 1, strength: -1, finesse: 2, instinct: 0, presence: 1, knowledge: 0},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        defaultState: {
            evasion: 12,
            armorMax: 0,
            armor: 0,
            health: 0,
            healthMax: 6,
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
