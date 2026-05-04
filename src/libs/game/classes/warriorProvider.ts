import type {ClassOption} from "@/types/game/classOption.ts";
import equipment from "@/libs/game/equipmentProvider.ts";

function getClassOptions() : ClassOption {
    const weapons = [
        equipment.makeWeapon('longsword'),
    ]

    const armors = [
        equipment.makeArmor('chainmail-armor'),
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
                { name: "game.items.loreWarriorDrawing.name", count: 1 },
                { name: "game.items.loreWarriorStone.name",   count: 1 },
            ]
        }
    ]
    const warriorFlavorQuestions = {
        ties: [
            "game.classes.warrior.flavor.ties.0",
            "game.classes.warrior.flavor.ties.1",
            "game.classes.warrior.flavor.ties.2",
        ],
        description: [
            "game.classes.warrior.flavor.description.0",
            "game.classes.warrior.flavor.description.1",
            "game.classes.warrior.flavor.description.2",
        ],
        appearance: [
            "game.classes.warrior.flavor.appearance.0",
            "game.classes.warrior.flavor.appearance.1",
            "game.classes.warrior.flavor.appearance.2",
            "game.classes.warrior.flavor.appearance.3",
            "game.classes.warrior.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.warrior.flavor.appearanceHint",
    }

    return {
        subclasses: ["brave", "slayer"],
        defaultTraits: {agility: 2, strength: 1, finesse: 0, instinct: 1, presence: -1, knowledge: 0},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: warriorFlavorQuestions,
        defaultState: {
            evasion: 11,
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
