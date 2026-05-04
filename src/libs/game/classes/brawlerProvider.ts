import type {ClassOption} from "@/types/game/classOption.ts";
import equipment from "@/libs/game/equipmentProvider.ts";

function getClassOptions() : ClassOption {
    const weapons = [
        equipment.makeWeapon('quarterstaff'),
    ]

    const armors = [
        equipment.makeArmor('leather-armor'),
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
                { name: "game.items.loreBrawlerWraps.name", count: 1 },
                { name: "game.items.loreBrawlerBook.name",  count: 1 },
            ]
        }
    ]
    const brawlerFlavorQuestions = {
        ties: [
            "game.classes.brawler.flavor.ties.0",
            "game.classes.brawler.flavor.ties.1",
            "game.classes.brawler.flavor.ties.2",
        ],
        description: [
            "game.classes.brawler.flavor.description.0",
            "game.classes.brawler.flavor.description.1",
            "game.classes.brawler.flavor.description.2",
        ],
        appearance: [
            "game.classes.brawler.flavor.appearance.0",
            "game.classes.brawler.flavor.appearance.1",
            "game.classes.brawler.flavor.appearance.2",
            "game.classes.brawler.flavor.appearance.3",
            "game.classes.brawler.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.brawler.flavor.appearanceHint",
    }

    return {
        subclasses: ["juggernaut", "martial"],
        defaultTraits: {agility: 1, strength: 1, finesse: 0, instinct: 2, presence: 0, knowledge: -1},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: brawlerFlavorQuestions,
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
