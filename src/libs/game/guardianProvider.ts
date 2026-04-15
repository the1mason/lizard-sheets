import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const weapons = [
        w("game.weapons.battleaxe.name",
            "game.traits.strength.name",
            "game.distances.melee",
            "d10+3",
            "game.damageKinds.physical",
            "",
            "two-handed"),
    ]

    const armors = [
        { name: "game.armors.chainmailArmor.name", thresholdLow: 7, thresholdHigh: 15, score: 4, feature: "game.armors.chainmailArmor.feature" },
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
    return {
        subclasses: ["stalwart", "vengeance"],
        defaultTraits: {agility: 1, strength: 2, finesse: -1, instinct: 0, presence: 1, knowledge: 0},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
    }
}

export default {
    getClassOptions
}
