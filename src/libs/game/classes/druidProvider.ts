import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const weapons = [
        w("game.weapons.shortstaff.name",
            "game.traits.instinct.name",
            "game.distances.close",
            "d8+1",
            "game.damageKinds.magic",
            "",
            "primary-only"),
        w("game.weapons.roundShield.name",
            "game.traits.strength.name",
            "game.distances.melee",
            "d4",
            "game.damageKinds.physical",
            "game.weapons.roundShield.featureName",
            "secondary-only",
            "game.weapons.roundShield.featureDescription"),
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
                { name: "game.items.loreDruidBones.name",   count: 1 },
                { name: "game.items.loreDruidPendant.name", count: 1 },
            ]
        }
    ]
    const druidFlavorQuestions = {
        ties: [
            "game.classes.druid.flavor.ties.0",
            "game.classes.druid.flavor.ties.1",
            "game.classes.druid.flavor.ties.2",
        ],
        description: [
            "game.classes.druid.flavor.description.0",
            "game.classes.druid.flavor.description.1",
            "game.classes.druid.flavor.description.2",
        ],
        appearance: [
            "game.classes.druid.flavor.appearance.0",
            "game.classes.druid.flavor.appearance.1",
            "game.classes.druid.flavor.appearance.2",
            "game.classes.druid.flavor.appearance.3",
            "game.classes.druid.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.druid.flavor.appearanceHint",
    }

    return {
        subclasses: ["elements", "renewal"],
        defaultTraits: {agility: 1, strength: 0, finesse: 1, instinct: 2, presence: -1, knowledge: 0},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: druidFlavorQuestions,
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
