import type {CharacterClass} from "@/types/game/characterClass.ts";
import type {Domain} from "@/types/game/domain.ts";
import type {Step} from "@/types/Step.ts";
import type {ClassName} from "@/types/game/className.ts";

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
            hasError: false
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

function getDomainIds(): Domain[] {
    return [
        "arcana",
        "blade",
        "bone",
        "codex",
        "dread",
        "grace",
        "midnight",
        "sage",
        "splendor",
        "valor"
    ]
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

export default {
    getDomainIds,
    getCharacterClasses,
    getStepsByClass,
    getDefaultSteps,
}