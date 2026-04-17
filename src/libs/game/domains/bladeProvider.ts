import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "get-back-up", domain: "blade", stress: 1, kind: "skill", level: 1},
        {id: "not-good-enough", domain: "blade", stress: 1, kind: "skill", level: 1},
        {id: "whirlwind", domain: "blade", stress: 0, kind: "skill", level: 1},
        {id: "a-soldiers-bond", domain: "blade", stress: 1, kind: "skill", level: 2},
        {id: "reckless", domain: "blade", stress: 1, kind: "skill", level: 2},
        {id: "scramble", domain: "blade", stress: 1, kind: "skill", level: 3},
        {id: "versatile-fighter", domain: "blade", stress: 1, kind: "skill", level: 3},
        {id: "deadly-focus", domain: "blade", stress: 2, kind: "skill", level: 4},
        {id: "fortified-armor", domain: "blade", stress: 0, kind: "skill", level: 4},
        {id: "champions-edge", domain: "blade", stress: 1, kind: "skill", level: 5},
        {id: "vitality", domain: "blade", stress: 0, kind: "skill", level: 5},
        {id: "battle-hardened", domain: "blade", stress: 2, kind: "skill", level: 6},
        {id: "rage-up", domain: "blade", stress: 1, kind: "skill", level: 6},
        {id: "blade-touched", domain: "blade", stress: 1, kind: "skill", level: 7},
        {id: "glancing-blow", domain: "blade", stress: 1, kind: "skill", level: 7},
        {id: "battle-cry", domain: "blade", stress: 2, kind: "skill", level: 8},
        {id: "frenzy", domain: "blade", stress: 3, kind: "skill", level: 8},
        {id: "gore-and-glory", domain: "blade", stress: 2, kind: "skill", level: 9},
        {id: "reapers-strike", domain: "blade", stress: 3, kind: "skill", level: 9},
        {id: "battle-monster", domain: "blade", stress: 0, kind: "skill", level: 10},
        {id: "onslaught", domain: "blade", stress: 3, kind: "skill", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
