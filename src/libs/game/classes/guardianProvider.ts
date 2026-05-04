import type {ClassOption} from "@/types/game/classOption.ts";
import equipment from "@/libs/game/equipmentProvider.ts";

function getClassOptions() : ClassOption {
    const weapons = [
        equipment.makeWeapon('battleaxe'),
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
                { name: "game.items.loreGuardianTotem.name", count: 1 },
                { name: "game.items.loreGuardianKey.name",   count: 1 },
            ]
        }
    ]
    const guardianFlavorQuestions = {
        ties: [
            "game.classes.guardian.flavor.ties.0",
            "game.classes.guardian.flavor.ties.1",
            "game.classes.guardian.flavor.ties.2",
        ],
        description: [
            "game.classes.guardian.flavor.description.0",
            "game.classes.guardian.flavor.description.1",
            "game.classes.guardian.flavor.description.2",
        ],
        appearance: [
            "game.classes.guardian.flavor.appearance.0",
            "game.classes.guardian.flavor.appearance.1",
            "game.classes.guardian.flavor.appearance.2",
            "game.classes.guardian.flavor.appearance.3",
            "game.classes.guardian.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.guardian.flavor.appearanceHint",
    }

    return {
        subclasses: ["stalwart", "vengeance"],
        defaultTraits: {agility: 1, strength: 2, finesse: -1, instinct: 0, presence: 1, knowledge: 0},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: guardianFlavorQuestions,
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
