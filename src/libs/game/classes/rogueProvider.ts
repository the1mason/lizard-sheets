import type {ClassOption} from "@/types/game/classOption.ts";
import equipment from "@/libs/game/equipmentProvider.ts";

function getClassOptions() : ClassOption {
    const weapons = [
        equipment.makeWeapon('dagger'),
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
                { name: "game.items.loreRogueForgery.name", count: 1 },
                { name: "game.items.loreRogueHook.name",    count: 1 },
            ]
        }
    ]
    const rogueFlavorQuestions = {
        ties: [
            "game.classes.rogue.flavor.ties.0",
            "game.classes.rogue.flavor.ties.1",
            "game.classes.rogue.flavor.ties.2",
        ],
        description: [
            "game.classes.rogue.flavor.description.0",
            "game.classes.rogue.flavor.description.1",
            "game.classes.rogue.flavor.description.2",
        ],
        appearance: [
            "game.classes.rogue.flavor.appearance.0",
            "game.classes.rogue.flavor.appearance.1",
            "game.classes.rogue.flavor.appearance.2",
            "game.classes.rogue.flavor.appearance.3",
            "game.classes.rogue.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.rogue.flavor.appearanceHint",
    }

    return {
        subclasses: ["nightwalker", "syndicate"],
        defaultTraits: {agility: 1, strength: -1, finesse: 2, instinct: 0, presence: 1, knowledge: 0},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: rogueFlavorQuestions,
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
