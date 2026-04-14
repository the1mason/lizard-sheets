import type {CharacterClass} from "@/types/game/characterClass.ts";
import type {Step} from "@/types/Step.ts";
import type {ClassName} from "@/types/game/className.ts";
import type {AncestryCard, Armor, CommunityCard, InventoryItem, ItemChoiceGroup, Weapon, WeaponSlot} from "@/types/game/character.ts";
import type {ClassOption} from "@/types/game/classOption.ts";

function getStepsByClass(className: ClassName): Step[] {
    const steps: Step[] = [];

    steps.push(
        {
            value: "start",
            isDone: false,
            isUnlocked: true,
            hasError: false
        },
        {
            value: "subclass",
            isDone: false,
            isUnlocked: false,
            hasError: false
        },
        {
            value: "origin",
            isDone: false,
            isUnlocked: false,
            hasError: false
        },
        {
            value: "traits",
            isDone: false,
            isUnlocked: false,
            hasError: false,
            optional: true
        },
        {
            value: "equipment",
            isDone: false,
            isUnlocked: false,
            hasError: false,
            optional: true
        },
        {
            value: "experience",
            isDone: false,
            isUnlocked: false,
            hasError: false
        },
        {
            value: "cards",
            isDone: false,
            isUnlocked: false,
            hasError: false
        },
        {
            value: "flavor",
            isDone: false,
            isUnlocked: false,
            hasError: false
        }
    )

    steps.push(
        {
            value: "finish",
            isDone: false,
            isUnlocked: false,
            hasError: false
        })

    return steps;
}

function getDefaultSteps(): Step[] {
    return [
        {
            value: "start",
            isDone: false,
            isUnlocked: true,
            hasError: false
        },
        {
            value: "something",
            isDone: false,
            isUnlocked: false,
            hasError: false,
            icon: "mdi-help"
        },
        {
            value: "finish",
            isDone: false,
            isUnlocked: false,
            hasError: false
        }
    ]
}

function getClassOptions(className: ClassName): ClassOption {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, weaponSlot, primary: false, secondary: false, left: false, right: false })

    const wizardWeapons = [
        w("game.weapons.shortsword.name",    "game.traits.finesse.name",   "game.distances.melee",       "1d8",    "game.damageKinds.physical", "",                              "any"),
        w("game.weapons.longbow.name",       "game.traits.agility.name",   "game.distances.far",         "1d8",    "game.damageKinds.physical", "",                              "two-handed"),
        w("game.weapons.dagger.name",        "game.traits.finesse.name",   "game.distances.meleeClose",  "1d6",    "game.damageKinds.physical", "game.weaponFeatures.thrownClose", "secondary-only"),
        w("game.weapons.greataxe.name",      "game.traits.strength.name",  "game.distances.melee",       "1d12+3", "game.damageKinds.physical", "",                              "two-handed"),
        w("game.weapons.staff.name",         "game.traits.knowledge.name", "game.distances.melee",       "1d6",    "game.damageKinds.magic",    "game.weaponFeatures.channel",     "primary-only"),
        w("game.weapons.handCrossbow.name",  "game.traits.agility.name",   "game.distances.close",       "1d8",    "game.damageKinds.physical", "game.weaponFeatures.quickDraw",   "any"),
    ]
    const wizardArmors = [
        { name: "game.armors.leatherArmor.name", thresholdLow: 6,  thresholdHigh: 12, score: 2, feature: "" },
        { name: "game.armors.chainMail.name",    thresholdLow: 9,  thresholdHigh: 15, score: 3, feature: "game.armors.chainMail.feature" },
        { name: "game.armors.plateArmor.name",   thresholdLow: 12, thresholdHigh: 18, score: 4, feature: "game.armors.plateArmor.feature" },
        { name: "game.armors.robes.name",        thresholdLow: 3,  thresholdHigh: 7,  score: 1, feature: "game.armors.robes.feature" },
        { name: "game.armors.paddedArmor.name",  thresholdLow: 5,  thresholdHigh: 10, score: 2, feature: "" },
    ]
    const wizardDefaultItems = [
        { name: "game.items.adventurersPack.name", count: 1 },
        { name: "game.items.torch.name",           count: 3 },
        { name: "game.items.rope50ft.name",        count: 1 },
    ]
    const wizardItemChoiceGroups = [
        {
            id: "potion",
            label: "game.itemChoiceGroups.potion.label",
            items: [
                { name: "game.items.healthPotion.name",  count: 1 },
                { name: "game.items.staminaPotion.name", count: 1 },
            ]
        },
        {
            id: "tool",
            label: "game.itemChoiceGroups.tool.label",
            items: [
                { name: "game.items.lockpicks.name",     count: 1 },
                { name: "game.items.herbalismKit.name",  count: 1 },
                { name: "game.items.thievesTools.name",  count: 1 },
            ]
        }
    ]

    switch (className) {
        case "assassin":
            return {
                subclasses: ["poisoners", "executioners"],
                defaultTraits: {agility: 2, strength: -1, finesse: 1, instinct: 0, presence: 0, knowledge: 1},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "bard":
            return {
                subclasses: ["troubadour", "wordsmith"],
                defaultTraits: {agility: 0, strength: -1, finesse: 1, instinct: 0, presence: 2, knowledge: 1},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "brawler":
            return {
                subclasses: ["juggernaut", "martial"],
                defaultTraits: {agility: 1, strength: 1, finesse: 0, instinct: 2, presence: 0, knowledge: -1},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "druid":
            return {
                subclasses: ["elements", "renewal"],
                defaultTraits: {agility: 1, strength: 0, finesse: 1, instinct: 2, presence: -1, knowledge: 0},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "guardian":
            return {
                subclasses: ["stalwart", "vengeance"],
                defaultTraits: {agility: 1, strength: 2, finesse: -1, instinct: 0, presence: 1, knowledge: 0},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "ranger":
            return {
                subclasses: ["wayfinder", "beastbound"],
                defaultTraits: {agility: 2, strength: 0, finesse: 1, instinct: 1, presence: -1, knowledge: 0},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "rogue":
            return {
                subclasses: ["nightwalker", "syndicate"],
                defaultTraits: {agility: 1, strength: -1, finesse: 2, instinct: 0, presence: 1, knowledge: 0},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "seraph":
            return {
                subclasses: ["wielder", "sentinel"],
                defaultTraits: {agility: 0, strength: 2, finesse: 0, instinct: 1, presence: 1, knowledge: -1},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "sorcerer":
            return {
                subclasses: ["primal", "elemental"],
                defaultTraits: {agility: 0, strength: -1, finesse: 1, instinct: 2, presence: 1, knowledge: 0},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "warlock":
            return {
                subclasses: ["wrathful", "endless"],
                defaultTraits: {agility: 1, strength: -1, finesse: 0, instinct: 1, presence: 2, knowledge: 0},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "warrior":
            return {
                subclasses: ["brave", "slayer"],
                defaultTraits: {agility: 2, strength: 1, finesse: 0, instinct: 1, presence: -1, knowledge: 0},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "witch":
            return {
                subclasses: ["moon", "hedge"],
                defaultTraits: {agility: 0, strength: -1, finesse: 0, instinct: 2, presence: 1, knowledge: 1},
                availableWeapons: [],
                availableArmors: [],
                defaultItems: [],
                itemChoiceGroups: [],
            }
        case "wizard":
            return {
                subclasses: ["knowledge", "war"],
                defaultTraits: {agility: -1, strength: 0, finesse: 0, instinct: 1, presence: 1, knowledge: 2},
                availableWeapons: wizardWeapons,
                availableArmors: wizardArmors,
                defaultItems: wizardDefaultItems,
                itemChoiceGroups: wizardItemChoiceGroups,
            }
    }
}

function getCharacterClasses(): CharacterClass[] {
    return [
        {
            id: 'assassin',
            domain1: 'midnight',
            domain2: 'blade'
        },
        {
            id: 'bard',
            domain1: 'grace',
            domain2: 'codex'
        },
        {
            id: 'brawler',
            domain1: 'bone',
            domain2: 'valor'
        },
        {
            id: 'druid',
            domain1: 'sage',
            domain2: 'arcana'
        },
        {
            id: 'guardian',
            domain1: 'valor',
            domain2: 'blade'
        },
        {
            id: 'ranger',
            domain1: 'bone',
            domain2: 'sage'
        },
        {
            id: 'rogue',
            domain1: 'midnight',
            domain2: 'grace'
        },
        {
            id: 'seraph',
            domain1: 'splendor',
            domain2: 'valor'
        },
        {
            id: 'sorcerer',
            domain1: 'arcana',
            domain2: 'midnight',
        },
        {
            id: 'warlock',
            domain1: 'dread',
            domain2: 'grace'
        },
        {
            id: 'warrior',
            domain1: 'blade',
            domain2: 'bone'
        },
        {
            id: 'witch',
            domain1: 'dread',
            domain2: 'sage'
        },
        {
            id: 'wizard',
            domain1: 'codex',
            domain2: 'splendor'
        }
    ]
}

function getAncestries(): AncestryCard[] {
    return [
        {
            id: "aetheris"
        },
        {
            id: "clank"
        },
        {
            id: "drakona"
        },
        {
            id: "dwarf"
        },
        {
            id: "earhkin"
        },
        {
            id: "elf"
        },
        {
            id: "emberkin"
        },
        {
            id: "faerie"
        },
        {
            id: "faun"
        },
        {
            id: "firbolg"
        },
        {
            id: "fungril"
        },
        {
            id: "galapa"
        },
        {
            id: "giant"
        },
        {
            id: "gnome"
        },
        {
            id: "goblin"
        },
        {
            id: "halfling"
        },
        {
            id: "human"
        },
        {
            id: "infernis"
        },
        {
            id: "katari"
        },
        {
            id: "orc"
        },
        {
            id: "ribbet"
        },
        {
            id: "simiah"
        },
        {
            id: "skykin"
        },
        {
            id: "tidekin"
        }
    ]
}

function getCommunities(): CommunityCard[] {
    return [
        {
            id: "duneborne"
        },
        {
            id: "freeborne"
        },
        {
            id: "frostborne"
        },
        {
            id: "hearthborne"
        },
        {
            id: "highborne"
        },
        {
            id: "loreborne"
        },
        {
            id: "orderborne"
        },
        {
            id: "reborne"
        },
        {
            id: "ridgeborne"
        },
        {
            id: "seaborne"
        },
        {
            id: "slyborne"
        },
        {
            id: "underborne"
        },
        {
            id: "wanderborne"
        },
        {
            id: "warborne"
        },
        {
            id: "wildborne"
        }
    ]
}

function getAvailableWeapons(): Weapon[] {
    const w = (name: string, trait: string, distance: string, damageDice: string, damageKind: string, feature: string, weaponSlot: WeaponSlot): Weapon =>
        ({ name, trait, distance, damageDice, damageKind, feature, weaponSlot, primary: false, secondary: false, left: false, right: false })
    return [
        w("game.weapons.shortsword.name",    "game.traits.finesse.name",   "game.distances.melee",       "1d8",    "game.damageKinds.physical", "",                              "any"),
        w("game.weapons.longbow.name",       "game.traits.agility.name",   "game.distances.far",         "1d8",    "game.damageKinds.physical", "",                              "two-handed"),
        w("game.weapons.dagger.name",        "game.traits.finesse.name",   "game.distances.meleeClose",  "1d6",    "game.damageKinds.physical", "game.weaponFeatures.thrownClose", "secondary-only"),
        w("game.weapons.greataxe.name",      "game.traits.strength.name",  "game.distances.melee",       "1d12+3", "game.damageKinds.physical", "",                              "two-handed"),
        w("game.weapons.staff.name",         "game.traits.knowledge.name", "game.distances.melee",       "1d6",    "game.damageKinds.magic",    "game.weaponFeatures.channel",     "primary-only"),
        w("game.weapons.handCrossbow.name",  "game.traits.agility.name",   "game.distances.close",       "1d8",    "game.damageKinds.physical", "game.weaponFeatures.quickDraw",   "any"),
    ]
}

function getAvailableArmors(): Armor[] {
    return [
        { name: "game.armors.leatherArmor.name", thresholdLow: 6,  thresholdHigh: 12, score: 2, feature: "" },
        { name: "game.armors.chainMail.name",    thresholdLow: 9,  thresholdHigh: 15, score: 3, feature: "game.armors.chainMail.feature" },
        { name: "game.armors.plateArmor.name",   thresholdLow: 12, thresholdHigh: 18, score: 4, feature: "game.armors.plateArmor.feature" },
        { name: "game.armors.robes.name",        thresholdLow: 3,  thresholdHigh: 7,  score: 1, feature: "game.armors.robes.feature" },
        { name: "game.armors.paddedArmor.name",  thresholdLow: 5,  thresholdHigh: 10, score: 2, feature: "" },
    ]
}

function getDefaultItems(): InventoryItem[] {
    return [
        { name: "game.items.adventurersPack.name", count: 1 },
        { name: "game.items.torch.name",           count: 3 },
        { name: "game.items.rope50ft.name",        count: 1 },
    ]
}

function getItemChoiceGroups(): ItemChoiceGroup[] {
    return [
        {
            id: "potion",
            label: "game.itemChoiceGroups.potion.label",
            items: [
                { name: "game.items.healthPotion.name",  count: 1 },
                { name: "game.items.staminaPotion.name", count: 1 },
            ]
        },
        {
            id: "tool",
            label: "game.itemChoiceGroups.tool.label",
            items: [
                { name: "game.items.lockpicks.name",    count: 1 },
                { name: "game.items.herbalismKit.name", count: 1 },
                { name: "game.items.thievesTools.name", count: 1 },
            ]
        }
    ]
}

export default {
    getCharacterClasses,
    getStepsByClass,
    getDefaultSteps,
    getClassOptions,
    getAncestries,
    getCommunities,
    getAvailableWeapons,
    getAvailableArmors,
    getDefaultItems,
    getItemChoiceGroups,
}