import type {ClassOption} from "@/types/game/classOption.ts";
import equipment from "@/libs/game/equipmentProvider.ts";

function getClassOptions() : ClassOption {
    const weapons = [
        equipment.makeWeapon('broadsword'),
        equipment.makeWeapon('shortsword'),
    ]

    const armors = [
        equipment.makeArmor('leather-armor'),
    ]
    const defaultItems = [
        { name: "game.items.torch.name",           count: 1 },
        { name: "game.items.rope50ft.name",        count: 1 },
        { name: "game.items.basicSupplies.name",        count: 1 },
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
                { name: "game.items.loreAssassinList.name",     count: 1 },
                { name: "game.items.loreAssassinMortar.name",  count: 1 },
            ]
        }
    ]
    const assassinFlavorQuestions = {
        ties: [
            "game.classes.assassin.flavor.ties.0",
            "game.classes.assassin.flavor.ties.1",
            "game.classes.assassin.flavor.ties.2",
        ],
        description: [
            "game.classes.assassin.flavor.description.0",
            "game.classes.assassin.flavor.description.1",
            "game.classes.assassin.flavor.description.2",
        ],
        appearance: [
            "game.classes.assassin.flavor.appearance.0",
            "game.classes.assassin.flavor.appearance.1",
            "game.classes.assassin.flavor.appearance.2",
            "game.classes.assassin.flavor.appearance.3",
            "game.classes.assassin.flavor.appearance.4",
        ],
        appearanceHint: "game.classes.assassin.flavor.appearanceHint",
    }

    return {
        subclasses: ["poisoners", "executioners"],
        defaultTraits: {agility: 2, strength: -1, finesse: 1, instinct: 0, presence: 0, knowledge: 1},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
        flavorQuestions: assassinFlavorQuestions,
        defaultState: {
            evasion: 12,
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