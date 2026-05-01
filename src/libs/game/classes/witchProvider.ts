import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const weapons = [
        w("game.weapons.dualstaff.name",
            "game.traits.instinct.name",
            "game.distances.far",
            "d6+3",
            "game.damageKinds.magic",
            "",
            "two-handed"),
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
                { name: "game.items.loreWitchPet.name",   count: 1 },
                { name: "game.items.loreWitchSkull.name", count: 1 },
            ]
        }
    ]
    const witchFlavorQuestions = {
        ties: [
            "game.classes.witch.flavor.ties.0",
            "game.classes.witch.flavor.ties.1",
            "game.classes.witch.flavor.ties.2",
        ],
        description: [
            "game.classes.witch.flavor.description.0",
            "game.classes.witch.flavor.description.1",
            "game.classes.witch.flavor.description.2",
        ],
        appearance: [
            "game.classes.witch.flavor.appearance.0",
            "game.classes.witch.flavor.appearance.1",
            "game.classes.witch.flavor.appearance.2",
            "game.classes.witch.flavor.appearance.3",
            "game.classes.witch.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.witch.flavor.appearanceHint",
    }

    return {
        subclasses: ["moon", "hedge"],
        defaultTraits: {agility: 0, strength: -1, finesse: 0, instinct: 2, presence: 1, knowledge: 1},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: witchFlavorQuestions,
        defaultState: {
            evasion: 10,
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
