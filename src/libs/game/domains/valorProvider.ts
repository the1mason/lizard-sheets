import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "bare-bones", domain: "valor", stress: 0, kind: "skill", level: 1},
        {id: "forceful-push", domain: "valor", stress: 0, kind: "skill", level: 1},
        {id: "i-am-your-shield", domain: "valor", stress: 1, kind: "skill", level: 1},
        {id: "body-basher", domain: "valor", stress: 1, kind: "skill", level: 2},
        {id: "bold-presence", domain: "valor", stress: 0, kind: "skill", level: 2},
        {id: "critical-inspiration", domain: "valor", stress: 1, kind: "skill", level: 3},
        {id: "lean-on-me", domain: "valor", stress: 1, kind: "skill", level: 3},
        {id: "goad-them-on", domain: "valor", stress: 1, kind: "skill", level: 4},
        {id: "support-tank", domain: "valor", stress: 2, kind: "skill", level: 4},
        {id: "armorer", domain: "valor", stress: 1, kind: "skill", level: 5},
        {id: "rousing-strike", domain: "valor", stress: 1, kind: "skill", level: 5},
        {id: "inevitable", domain: "valor", stress: 1, kind: "skill", level: 6},
        {id: "rise-up", domain: "valor", stress: 2, kind: "skill", level: 6},
        {id: "shrug-it-off", domain: "valor", stress: 1, kind: "skill", level: 7},
        {id: "valor-touched", domain: "valor", stress: 1, kind: "skill", level: 7},
        {id: "full-surge", domain: "valor", stress: 1, kind: "skill", level: 8},
        {id: "ground-pound", domain: "valor", stress: 2, kind: "skill", level: 8},
        {id: "hold-the-line", domain: "valor", stress: 1, kind: "skill", level: 9},
        {id: "lead-by-example", domain: "valor", stress: 3, kind: "skill", level: 9},
        {id: "unbreakable", domain: "valor", stress: 4, kind: "skill", level: 10},
        {id: "unyielding-armor", domain: "valor", stress: 1, kind: "skill", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
