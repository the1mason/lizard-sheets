import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const weapons = [
        w("game.weapons.scepter.name",
            "game.traits.presence.name",
            "game.distances.far",
            "d6",
            "game.damageKinds.physical",
            "game.weapons.scepter.featureName",
            "two-handed",
            "game.weapons.scepter.featureDescription"),
    ]

    const armors = [
        { name: "game.armors.leatherArmor.name", thresholdLow: 6, thresholdHigh: 13, score: 3, feature: "" },
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
                { name: "game.items.loreWarlockCarving.name", count: 1 },
                { name: "game.items.loreWarlockRing.name",    count: 1 },
            ]
        }
    ]
    return {
        subclasses: ["wrathful", "endless"],
        defaultTraits: {agility: 1, strength: -1, finesse: 0, instinct: 1, presence: 2, knowledge: 0},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
    }
}

export default {
    getClassOptions
}
