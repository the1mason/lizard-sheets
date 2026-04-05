import type {CharacterClass} from "@/types/game/characterClass.ts";
import type {Step} from "@/types/Step.ts";
import type {ClassName} from "@/types/game/className.ts";
import type {AncestryCard, CommunityCard} from "@/types/game/character.ts";
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
            hasError: false
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
    switch (className) {
        case "assassin":
            return {
                subclasses: ["poisoners", "executioners"],
                defaultTraits: {agility: 2, strength: -1, finesse: 1, instinct: 0, presence: 0, knowledge: 1}
            }
        case "bard":
            return {
                subclasses: ["troubadour", "wordsmith"],
                defaultTraits: {agility: 0, strength: -1, finesse: 1, instinct: 0, presence: 2, knowledge: 1}
            }
        case "brawler":
            return {
                subclasses: ["juggernaut", "martial"],
                defaultTraits: {agility: 1, strength: 1, finesse: 0, instinct: 2, presence: 0, knowledge: -1}
            }
        case "druid":
            return {
                subclasses: ["elements", "renewal"],
                defaultTraits: {agility: 1, strength: 0, finesse: 1, instinct: 2, presence: -1, knowledge: 0}
            }
        case "guardian":
            return {
                subclasses: ["stalwart", "vengeance"],
                defaultTraits: {agility: 1, strength: 2, finesse: -1, instinct: 0, presence: 1, knowledge: 0}
            }
        case "ranger":
            return {
                subclasses: ["wayfinder", "beastbound"],
                defaultTraits: {agility: 2, strength: 0, finesse: 1, instinct: 1, presence: -1, knowledge: 0}
            }
        case "rogue":
            return {
                subclasses: ["nightwalker", "syndicate"],
                defaultTraits: {agility: 1, strength: -1, finesse: 2, instinct: 0, presence: 1, knowledge: 0}
            }
        case "seraph":
            return {
                subclasses: ["wielder", "sentinel"],
                defaultTraits: {agility: 0, strength: 2, finesse: 0, instinct: 1, presence: 1, knowledge: -1}
            }
        case "sorcerer":
            return {
                subclasses: ["primal", "elemental"],
                defaultTraits: {agility: 0, strength: -1, finesse: 1, instinct: 2, presence: 1, knowledge: 0}
            }
        case "warlock":
            return {
                subclasses: ["wrathful", "endless"],
                defaultTraits: {agility: 1, strength: -1, finesse: 0, instinct: 1, presence: 2, knowledge: 0}
            }
        case "warrior":
            return {
                subclasses: ["brave", "slayer"],
                defaultTraits: {agility: 2, strength: 1, finesse: 0, instinct: 1, presence: -1, knowledge: 0}
            }
        case "witch":
            return {
                subclasses: ["moon", "hedge"],
                defaultTraits: {agility: 0, strength: -1, finesse: 0, instinct: 2, presence: 1, knowledge: 1}
            }
        case "wizard":
            return {
                subclasses: ["knowledge", "war"],
                defaultTraits: {agility: -1, strength: 0, finesse: 0, instinct: 1, presence: 1, knowledge: 2}
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

export default {
    getCharacterClasses,
    getStepsByClass,
    getDefaultSteps,
    getClassOptions,
    getAncestries,
    getCommunities,
}