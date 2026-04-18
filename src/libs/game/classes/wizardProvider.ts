import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const wizardWeapons = [
        w("game.weapons.greatstaff.name",
            "game.traits.knowledge.name",
            "game.distances.veryfar",
            "d6",
            "game.damageKinds.magic",
            "game.weapons.greatstaff.featureName",
            "two-handed",
            "game.weapons.greatstaff.featureDescription"),
    ]

    const wizardArmors = [
        { name: "game.armors.leatherArmor.name", thresholdLow: 6,  thresholdHigh: 13, score: 3, feature: "" },
    ]
    const wizardDefaultItems = [
        { name: "game.items.torch.name",           count: 1 },
        { name: "game.items.rope50ft.name",        count: 1 },
        { name: "game.items.basicSupplies.name",        count: 1 },
    ]
    const wizardItemChoiceGroups = [
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
                { name: "game.items.loreWizardBook.name",     count: 1 },
                { name: "game.items.loreWizardPet.name",  count: 1 },
            ]
        }
    ]
    const wizardFlavorQuestions = {
        ties: [
            "game.classes.wizard.flavor.ties.0",
            "game.classes.wizard.flavor.ties.1",
            "game.classes.wizard.flavor.ties.2",
        ],
        description: [
            "game.classes.wizard.flavor.description.0",
            "game.classes.wizard.flavor.description.1",
            "game.classes.wizard.flavor.description.2",
        ],
        spellcastingSource: "game.classes.wizard.flavor.spellcastingSource",
        appearance: [
            "game.classes.wizard.flavor.appearance.0",
            "game.classes.wizard.flavor.appearance.1",
            "game.classes.wizard.flavor.appearance.2",
        ],
    }

    return {
        subclasses: ["knowledge", "war"],
        defaultTraits: {agility: -1, strength: 0, finesse: 0, instinct: 1, presence: 1, knowledge: 2},
        availableWeapons: wizardWeapons,
        availableArmors: wizardArmors,
        defaultItems: wizardDefaultItems,
        itemChoiceGroups: wizardItemChoiceGroups,
        flavorQuestions: wizardFlavorQuestions,
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