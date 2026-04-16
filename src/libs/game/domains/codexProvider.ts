import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "codex-cipher", domain: "codex", stress: 0, kind: "grimoire", level: 1},
        {id: "codex-cipher1", domain: "codex", stress: 0, kind: "grimoire", level: 1},
        {id: "codex-cipher2", domain: "codex", stress: 0, kind: "grimoire", level: 1}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
