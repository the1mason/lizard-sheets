import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "deft-deceiver", domain: "grace", stress: 0, kind: "skill", level: 1},
        {id: "enrapture", domain: "grace", stress: 0, kind: "spell", level: 1},
        {id: "inspirational-words", domain: "grace", stress: 1, kind: "skill", level: 1},
        {id: "tell-no-lies", domain: "grace", stress: 1, kind: "spell", level: 2},
        {id: "troublemaker", domain: "grace", stress: 2, kind: "skill", level: 2},
        {id: "hypnotic-shimmer", domain: "grace", stress: 1, kind: "spell", level: 3},
        {id: "invisibility", domain: "grace", stress: 1, kind: "spell", level: 3},
        {id: "soothing-speech", domain: "grace", stress: 1, kind: "skill", level: 4},
        {id: "through-your-eyes", domain: "grace", stress: 1, kind: "spell", level: 4},
        {id: "thought-delver", domain: "grace", stress: 2, kind: "spell", level: 5},
        {id: "words-of-discord", domain: "grace", stress: 1, kind: "spell", level: 5},
        {id: "never-upstaged", domain: "grace", stress: 2, kind: "skill", level: 6},
        {id: "share-the-burden", domain: "grace", stress: 0, kind: "spell", level: 6},
        {id: "endless-charisma", domain: "grace", stress: 1, kind: "skill", level: 7},
        {id: "grace-touched", domain: "grace", stress: 2, kind: "skill", level: 7},
        {id: "astral-projection", domain: "grace", stress: 0, kind: "spell", level: 8},
        {id: "mass-enrapture", domain: "grace", stress: 3, kind: "spell", level: 8},
        {id: "copycat", domain: "grace", stress: 3, kind: "spell", level: 9},
        {id: "master-of-the-craft", domain: "grace", stress: 0, kind: "skill", level: 9},
        {id: "encore", domain: "grace", stress: 1, kind: "spell", level: 10},
        {id: "notorious", domain: "grace", stress: 0, kind: "skill", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
