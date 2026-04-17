import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "rune-ward", domain: "arcana", stress: 0, kind: "spell", level: 1},
        {id: "unleash-chaos", domain: "arcana", stress: 1, kind: "spell", level: 1},
        {id: "wall-walk", domain: "arcana", stress: 1, kind: "spell", level: 1},
        {id: "cinder-grasp", domain: "arcana", stress: 1, kind: "spell", level: 2},
        {id: "floating-eye", domain: "arcana", stress: 0, kind: "spell", level: 2},
        {id: "counterspell", domain: "arcana", stress: 2, kind: "spell", level: 3},
        {id: "flight", domain: "arcana", stress: 1, kind: "spell", level: 3},
        {id: "blink-out", domain: "arcana", stress: 1, kind: "spell", level: 4},
        {id: "preservation-blast", domain: "arcana", stress: 2, kind: "spell", level: 4},
        {id: "chain-lightning", domain: "arcana", stress: 1, kind: "spell", level: 5},
        {id: "premonition", domain: "arcana", stress: 2, kind: "spell", level: 5},
        {id: "rift-walker", domain: "arcana", stress: 2, kind: "spell", level: 6},
        {id: "telekinesis", domain: "arcana", stress: 0, kind: "spell", level: 6},
        {id: "arcana-touched", domain: "arcana", stress: 2, kind: "skill", level: 7},
        {id: "cloaking-blast", domain: "arcana", stress: 2, kind: "spell", level: 7},
        {id: "arcane-reflection", domain: "arcana", stress: 1, kind: "spell", level: 8},
        {id: "confusing-aura", domain: "arcana", stress: 2, kind: "spell", level: 8},
        {id: "earthquake", domain: "arcana", stress: 2, kind: "spell", level: 9},
        {id: "sensory-projection", domain: "arcana", stress: 0, kind: "spell", level: 9},
        {id: "adjust-reality", domain: "arcana", stress: 1, kind: "spell", level: 10},
        {id: "falling-sky", domain: "arcana", stress: 1, kind: "spell", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
