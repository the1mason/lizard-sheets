import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "deft-maneuvers", domain: "bone", stress: 0, kind: "skill", level: 1},
        {id: "i-see-it-coming", domain: "bone", stress: 1, kind: "skill", level: 1},
        {id: "untouchable", domain: "bone", stress: 1, kind: "skill", level: 1},
        {id: "ferocity", domain: "bone", stress: 2, kind: "skill", level: 2},
        {id: "strategic-approach", domain: "bone", stress: 1, kind: "skill", level: 2},
        {id: "brace", domain: "bone", stress: 1, kind: "skill", level: 3},
        {id: "tactician", domain: "bone", stress: 1, kind: "skill", level: 3},
        {id: "boost", domain: "bone", stress: 1, kind: "skill", level: 4},
        {id: "redirect", domain: "bone", stress: 1, kind: "skill", level: 4},
        {id: "know-thy-enemy", domain: "bone", stress: 1, kind: "skill", level: 5},
        {id: "signature-move", domain: "bone", stress: 1, kind: "skill", level: 5},
        {id: "rapid-riposte", domain: "bone", stress: 0, kind: "skill", level: 6},
        {id: "recovery", domain: "bone", stress: 1, kind: "skill", level: 6},
        {id: "bone-touched", domain: "bone", stress: 2, kind: "skill", level: 7},
        {id: "cruel-precision", domain: "bone", stress: 1, kind: "skill", level: 7},
        {id: "breaking-blow", domain: "bone", stress: 3, kind: "skill", level: 8},
        {id: "wrangle", domain: "bone", stress: 1, kind: "skill", level: 8},
        {id: "on-the-brink", domain: "bone", stress: 1, kind: "skill", level: 9},
        {id: "splintering-strike", domain: "bone", stress: 3, kind: "skill", level: 9},
        {id: "deathrun", domain: "bone", stress: 1, kind: "skill", level: 10},
        {id: "swift-step", domain: "bone", stress: 2, kind: "skill", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
