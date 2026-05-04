import type {ClassOption} from "@/types/game/classOption.ts";
import equipment from "@/libs/game/equipmentProvider.ts";

function getClassOptions() : ClassOption {
    const weapons = [
        equipment.makeWeapon('rapier'),
        equipment.makeWeapon('small-dagger'),
    ]

    const armors = [
        equipment.makeArmor('gambeson-armor'),
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
                { name: "game.items.loreBardNovel.name",  count: 1 },
                { name: "game.items.loreBardLetter.name", count: 1 },
            ]
        }
    ]
    const bardFlavorQuestions = {
        ties: [
            "game.classes.bard.flavor.ties.0",
            "game.classes.bard.flavor.ties.1",
            "game.classes.bard.flavor.ties.2",
        ],
        description: [
            "game.classes.bard.flavor.description.0",
            "game.classes.bard.flavor.description.1",
            "game.classes.bard.flavor.description.2",
        ],
        appearance: [
            "game.classes.bard.flavor.appearance.0",
            "game.classes.bard.flavor.appearance.1",
            "game.classes.bard.flavor.appearance.2",
            "game.classes.bard.flavor.appearance.3",
            "game.classes.bard.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.bard.flavor.appearanceHint",
    }

    return {
        subclasses: ["troubadour", "wordsmith"],
        defaultTraits: {agility: 0, strength: -1, finesse: 1, instinct: 0, presence: 2, knowledge: 1},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: bardFlavorQuestions,
        defaultState: {
            evasion: 10,
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
