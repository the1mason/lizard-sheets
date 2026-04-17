import type {DomainCard, Level} from "@/types/game/character.ts";

function getCards(): DomainCard[] {
    return [
        {id: "blighting-strike", domain: "dread", stress: 1, kind: "spell", level: 1},
        {id: "umbral-veil", domain: "dread", stress: 1, kind: "spell", level: 1},
        {id: "voice-of-dread", domain: "dread", stress: 0, kind: "spell", level: 1},
        {id: "hideous-retribution", domain: "dread", stress: 2, kind: "spell", level: 2},
        {id: "siphon-essence", domain: "dread", stress: 1, kind: "spell", level: 2},
        {id: "shared-trauma", domain: "dread", stress: 1, kind: "spell", level: 3},
        {id: "terrify", domain: "dread", stress: 1, kind: "spell", level: 3},
        {id: "chains-of-affliction", domain: "dread", stress: 2, kind: "spell", level: 4},
        {id: "summon-horror", domain: "dread", stress: 2, kind: "spell", level: 4},
        {id: "dire-strike", domain: "dread", stress: 1, kind: "spell", level: 5},
        {id: "spectral-mist", domain: "dread", stress: 0, kind: "spell", level: 5},
        {id: "darkfire", domain: "dread", stress: 2, kind: "spell", level: 6},
        {id: "jump-scare", domain: "dread", stress: 0, kind: "spell", level: 6},
        {id: "dread-touched", domain: "dread", stress: 2, kind: "spell", level: 7},
        {id: "wall-of-hunger", domain: "dread", stress: 2, kind: "spell", level: 7},
        {id: "dark-army", domain: "dread", stress: 2, kind: "spell", level: 8},
        {id: "eldritch-flesh", domain: "dread", stress: 1, kind: "spell", level: 8},
        {id: "damnation", domain: "dread", stress: 2, kind: "spell", level: 9},
        {id: "savor-the-anguish", domain: "dread", stress: 0, kind: "spell", level: 9},
        {id: "avatar-of-terror", domain: "dread", stress: 1, kind: "spell", level: 10},
        {id: "invoke-torment", domain: "dread", stress: 2, kind: "spell", level: 10}
    ]
}

function getCardsByLevel(level: Level): DomainCard[] {
    return getCards().filter(c => c.level === level)
}

export default {
    getCards,
    getCardsByLevel
}
