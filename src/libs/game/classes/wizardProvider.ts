import type {ClassOption} from "@/types/game/classOption.ts";
import equipment from "@/libs/game/equipmentProvider.ts";

function getClassOptions() : ClassOption {
    const wizardWeapons = [
        equipment.makeWeapon('greatstaff'),
    ]

    const wizardArmors = [
        equipment.makeArmor('leather-armor'),
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