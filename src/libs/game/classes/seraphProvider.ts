import type {ClassOption} from "@/types/game/classOption.ts";
import equipment from "@/libs/game/equipmentProvider.ts";

function getClassOptions() : ClassOption {
    const weapons = [
        equipment.makeWeapon('hallowed-axe'),
        equipment.makeWeapon('round-shield'),
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
                { name: "game.items.loreSeraphOfferings.name", count: 1 },
                { name: "game.items.loreSeraphSigil.name",     count: 1 },
            ]
        }
    ]
    const seraphFlavorQuestions = {
        ties: [
            "game.classes.seraph.flavor.ties.0",
            "game.classes.seraph.flavor.ties.1",
            "game.classes.seraph.flavor.ties.2",
        ],
        description: [
            "game.classes.seraph.flavor.description.0",
            "game.classes.seraph.flavor.description.1",
            "game.classes.seraph.flavor.description.2",
        ],
        appearance: [
            "game.classes.seraph.flavor.appearance.0",
            "game.classes.seraph.flavor.appearance.1",
            "game.classes.seraph.flavor.appearance.2",
            "game.classes.seraph.flavor.appearance.3",
            "game.classes.seraph.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.seraph.flavor.appearanceHint",
    }

    return {
        subclasses: ["wielder", "sentinel"],
        defaultTraits: {agility: 0, strength: 2, finesse: 0, instinct: 1, presence: 1, knowledge: -1},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: seraphFlavorQuestions,
        defaultState: {
            evasion: 9,
            armorMax: 0,
            armor: 0,
            health: 0,
            healthMax: 7,
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
