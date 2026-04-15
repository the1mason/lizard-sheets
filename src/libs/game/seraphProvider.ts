import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const weapons = [
        w("game.weapons.hallowedAxe.name",
            "game.traits.strength.name",
            "game.distances.melee",
            "d8+1",
            "game.damageKinds.magic",
            "",
            "primary-only"),
        w("game.weapons.roundShield.name",
            "game.traits.strength.name",
            "game.distances.melee",
            "d4",
            "game.damageKinds.physical",
            "game.weapons.roundShield.featureName",
            "secondary-only",
            "game.weapons.roundShield.featureDescription"),
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
                { name: "game.items.loreSeraphOfferings.name", count: 1 },
                { name: "game.items.loreSeraphSigil.name",     count: 1 },
            ]
        }
    ]
    return {
        subclasses: ["wielder", "sentinel"],
        defaultTraits: {agility: 0, strength: 2, finesse: 0, instinct: 1, presence: 1, knowledge: -1},
        availableWeapons: weapons,
        availableArmors: armors,
        defaultItems: defaultItems,
        itemChoiceGroups: itemChoiceGroups,
    }
}

export default {
    getClassOptions
}
