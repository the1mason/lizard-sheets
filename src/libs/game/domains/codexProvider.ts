import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "book-of-ava", domain: "codex", stress: 2, kind: "grimoire", level: 1},
        {id: "book-of-illiat", domain: "codex", stress: 2, kind: "grimoire", level: 1},
        {id: "book-of-tyfar", domain: "codex", stress: 2, kind: "grimoire", level: 1},
        {id: "book-of-sitil", domain: "codex", stress: 2, kind: "grimoire", level: 2},
        {id: "book-of-vagras", domain: "codex", stress: 2, kind: "grimoire", level: 2},
        {id: "book-of-korvax", domain: "codex", stress: 2, kind: "grimoire", level: 3},
        {id: "book-of-norai", domain: "codex", stress: 2, kind: "grimoire", level: 3},
        {id: "book-of-exota", domain: "codex", stress: 3, kind: "grimoire", level: 4},
        {id: "book-of-grynn", domain: "codex", stress: 2, kind: "grimoire", level: 4},
        {id: "manifest-wall", domain: "codex", stress: 2, kind: "spell", level: 5},
        {id: "teleport", domain: "codex", stress: 2, kind: "spell", level: 5},
        {id: "banish", domain: "codex", stress: 0, kind: "spell", level: 6},
        {id: "sigil-of-retribution", domain: "codex", stress: 2, kind: "spell", level: 6},
        {id: "book-of-homet", domain: "codex", stress: 0, kind: "grimoire", level: 7},
        {id: "codex-touched", domain: "codex", stress: 2, kind: "skill", level: 7},
        {id: "book-of-vyola", domain: "codex", stress: 2, kind: "grimoire", level: 8},
        {id: "safe-haven", domain: "codex", stress: 3, kind: "spell", level: 8},
        {id: "book-of-ronin", domain: "codex", stress: 4, kind: "grimoire", level: 9},
        {id: "disintegration-wave", domain: "codex", stress: 4, kind: "spell", level: 9},
        {id: "book-of-yarrow", domain: "codex", stress: 2, kind: "grimoire", level: 10},
        {id: "transcendent-union", domain: "codex", stress: 1, kind: "spell", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
