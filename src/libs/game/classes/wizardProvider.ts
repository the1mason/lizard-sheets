import type {ClassOption} from "@/types/game/classOption.ts";
import type {Weapon, WeaponSlot} from "@/types/game/character.ts";

function getClassOptions() : ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot, featureDescription?: string): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, featureDescription, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const wizardWeapons = [
        w("game.weapons.greatstaff.name",
            "game.traits.knowledge.name",
            "game.distances.veryfar",
            "d6",
            "game.damageKinds.magic",
            "game.weapons.greatstaff.featureName",
            "two-handed",
            "game.weapons.greatstaff.featureDescription"),
    ]

    const wizardArmors = [
        { name: "game.armors.leatherArmor.name", thresholdLow: 6,  thresholdHigh: 13, score: 3, feature: "" },
    ]
    const wizardDefaultItems = [
        { name: "game.items.torch.name",           count: 1 },
        { name: "game.items.rope50ft.name",        count: 1 },
        { name: "game.items.basicSupplies.name",        count: 1 },
    ]
    const wizardItemChoiceGroups = [
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
                { name: "game.items.loreWizardBook.name",     count: 1 },
                { name: "game.items.loreWizardPet.name",  count: 1 },
            ]
        }
    ]
    return {
        subclasses: ["knowledge", "war"],
        defaultTraits: {agility: -1, strength: 0, finesse: 0, instinct: 1, presence: 1, knowledge: 2},
        availableWeapons: wizardWeapons,
        availableArmors: wizardArmors,
        defaultItems: wizardDefaultItems,
        itemChoiceGroups: wizardItemChoiceGroups,
    }
}

export default {
    getClassOptions
}