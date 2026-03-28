import type {CharacterClass} from "@/types/game/characterClass.ts";
import type {Domain} from "@/types/game/domain.ts";

function getDomainIds() : Domain[] {
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

function getCharacterClasses() : CharacterClass[] {
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
    getCharacterClasses
}