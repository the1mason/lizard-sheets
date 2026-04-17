import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "bolt-beacon", domain: "splendor", stress: 1, kind: "spell", level: 1},
        {id: "mending-touch", domain: "splendor", stress: 1, kind: "spell", level: 1},
        {id: "reassurance", domain: "splendor", stress: 0, kind: "skill", level: 1},
        {id: "final-words", domain: "splendor", stress: 1, kind: "spell", level: 2},
        {id: "healing-hands", domain: "splendor", stress: 1, kind: "spell", level: 2},
        {id: "second-wind", domain: "splendor", stress: 2, kind: "skill", level: 3},
        {id: "voice-of-reason", domain: "splendor", stress: 1, kind: "skill", level: 3},
        {id: "divination", domain: "splendor", stress: 1, kind: "spell", level: 4},
        {id: "life-ward", domain: "splendor", stress: 1, kind: "spell", level: 4},
        {id: "shape-material", domain: "splendor", stress: 1, kind: "spell", level: 5},
        {id: "smite", domain: "splendor", stress: 2, kind: "spell", level: 5},
        {id: "restoration", domain: "splendor", stress: 2, kind: "spell", level: 6},
        {id: "zone-of-protection", domain: "splendor", stress: 2, kind: "spell", level: 6},
        {id: "healing-strike", domain: "splendor", stress: 1, kind: "spell", level: 7},
        {id: "splendor-touched", domain: "splendor", stress: 2, kind: "skill", level: 7},
        {id: "shield-aura", domain: "splendor", stress: 2, kind: "spell", level: 8},
        {id: "stunning-sunlight", domain: "splendor", stress: 2, kind: "spell", level: 8},
        {id: "overwhelming-aura", domain: "splendor", stress: 2, kind: "spell", level: 9},
        {id: "salvation-beam", domain: "splendor", stress: 2, kind: "spell", level: 9},
        {id: "invigoration", domain: "splendor", stress: 3, kind: "spell", level: 10},
        {id: "resurrection", domain: "splendor", stress: 2, kind: "spell", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
