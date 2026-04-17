import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "pick-and-pull", domain: "midnight", stress: 0, kind: "skill", level: 1},
        {id: "rain-of-blades", domain: "midnight", stress: 1, kind: "spell", level: 1},
        {id: "uncanny-disguise", domain: "midnight", stress: 0, kind: "spell", level: 1},
        {id: "midnight-spirit", domain: "midnight", stress: 1, kind: "spell", level: 2},
        {id: "shadowbind", domain: "midnight", stress: 0, kind: "spell", level: 2},
        {id: "chokehold", domain: "midnight", stress: 1, kind: "skill", level: 3},
        {id: "veil-of-night", domain: "midnight", stress: 1, kind: "spell", level: 3},
        {id: "glyph-of-nightfall", domain: "midnight", stress: 1, kind: "spell", level: 4},
        {id: "stealth-expertise", domain: "midnight", stress: 0, kind: "skill", level: 4},
        {id: "hush", domain: "midnight", stress: 1, kind: "spell", level: 5},
        {id: "phantom-retreat", domain: "midnight", stress: 2, kind: "spell", level: 5},
        {id: "dark-whispers", domain: "midnight", stress: 0, kind: "spell", level: 6},
        {id: "mass-disguise", domain: "midnight", stress: 0, kind: "spell", level: 6},
        {id: "midnight-touched", domain: "midnight", stress: 2, kind: "skill", level: 7},
        {id: "vanishing-dodge", domain: "midnight", stress: 1, kind: "spell", level: 7},
        {id: "shadowhunter", domain: "midnight", stress: 2, kind: "skill", level: 8},
        {id: "spellcharge", domain: "midnight", stress: 1, kind: "spell", level: 8},
        {id: "night-terror", domain: "midnight", stress: 2, kind: "spell", level: 9},
        {id: "twilight-toll", domain: "midnight", stress: 1, kind: "skill", level: 9},
        {id: "eclipse", domain: "midnight", stress: 2, kind: "spell", level: 10},
        {id: "specter-of-the-dark", domain: "midnight", stress: 1, kind: "spell", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
