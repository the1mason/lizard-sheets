import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const weapons = [
        w("game.weapons.scepter.name",
            "game.traits.presence.name",
            "game.distances.far",
            "d6",
            "game.damageKinds.physical",
            "game.weapons.scepter.featureName",
            "two-handed",
            "game.weapons.scepter.featureDescription"),
    ]

    const armors = [
        { name: "game.armors.leatherArmor.name", thresholdLow: 6, thresholdHigh: 13, score: 3, feature: "" },
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
                { name: "game.items.loreWarlockCarving.name", count: 1 },
                { name: "game.items.loreWarlockRing.name",    count: 1 },
            ]
        }
    ]
    const warlockFlavorQuestions = {
        ties: [
            "game.classes.warlock.flavor.ties.0",
            "game.classes.warlock.flavor.ties.1",
            "game.classes.warlock.flavor.ties.2",
        ],
        description: [
            "game.classes.warlock.flavor.description.0",
            "game.classes.warlock.flavor.description.1",
            "game.classes.warlock.flavor.description.2",
        ],
        appearance: [
            "game.classes.warlock.flavor.appearance.0",
            "game.classes.warlock.flavor.appearance.1",
            "game.classes.warlock.flavor.appearance.2",
            "game.classes.warlock.flavor.appearance.3",
            "game.classes.warlock.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.warlock.flavor.appearanceHint",
    }

    return {
        subclasses: ["wrathful", "endless"],
        defaultTraits: {agility: 1, strength: -1, finesse: 0, instinct: 1, presence: 2, knowledge: 0},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: warlockFlavorQuestions,
        defaultState: {
            evasion: 11,
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
