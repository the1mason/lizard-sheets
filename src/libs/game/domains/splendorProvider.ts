import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "splendor-beacon", domain: "splendor", stress: 0, kind: "spell", level: 1},
        {id: "splendor-beacon2", domain: "splendor", stress: 0, kind: "spell", level: 1},
        {id: "splendor-beacon3", domain: "splendor", stress: 0, kind: "spell", level: 1},
        {id: "splendor-beacon4", domain: "splendor", stress: 0, kind: "spell", level: 1},
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
