import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "gifted-tracker", domain: "sage", stress: 0, kind: "skill", level: 1},
        {id: "natures-tongue", domain: "sage", stress: 0, kind: "skill", level: 1},
        {id: "vicious-entangle", domain: "sage", stress: 1, kind: "spell", level: 1},
        {id: "conjure-swarm", domain: "sage", stress: 1, kind: "spell", level: 2},
        {id: "natural-familiar", domain: "sage", stress: 1, kind: "spell", level: 2},
        {id: "corrosive-projectile", domain: "sage", stress: 1, kind: "spell", level: 3},
        {id: "towering-stalk", domain: "sage", stress: 1, kind: "spell", level: 3},
        {id: "death-grip", domain: "sage", stress: 1, kind: "spell", level: 4},
        {id: "healing-field", domain: "sage", stress: 2, kind: "spell", level: 4},
        {id: "thorn-skin", domain: "sage", stress: 1, kind: "spell", level: 5},
        {id: "wild-fortress", domain: "sage", stress: 1, kind: "spell", level: 5},
        {id: "conjured-steeds", domain: "sage", stress: 0, kind: "spell", level: 6},
        {id: "forager", domain: "sage", stress: 1, kind: "skill", level: 6},
        {id: "sage-touched", domain: "sage", stress: 2, kind: "skill", level: 7},
        {id: "wild-surge", domain: "sage", stress: 2, kind: "spell", level: 7},
        {id: "forest-sprites", domain: "sage", stress: 2, kind: "spell", level: 8},
        {id: "rejuvenation-barrier", domain: "sage", stress: 1, kind: "spell", level: 8},
        {id: "fane-of-the-wilds", domain: "sage", stress: 2, kind: "skill", level: 9},
        {id: "plant-dominion", domain: "sage", stress: 1, kind: "spell", level: 9},
        {id: "force-of-nature", domain: "sage", stress: 2, kind: "spell", level: 10},
        {id: "tempest", domain: "sage", stress: 2, kind: "spell", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
