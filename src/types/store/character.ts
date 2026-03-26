export type Character = {
    id: string
    version: number
    name?: string
    pronouns?: string
    level: Level
    ancestry?: AncestryCard
    community?: CommunityCard
    domains: Domain[]
    class?: Class
    multiclass?: Class
    subclass: Subclass[]
    traits: CharacterTraits
    state: CharacterState
    weapons: Weapon[]
    armor?: Armor
    inventory?: string
    experiences: {
        score: number
        name: string
    }[]
    backgroundQuestions: string[]
    ties: string[]
    domainCards: DomainCard[];
    domainCardsStored: DomainCard[];
    levelingChoices: string[]
    background?: string
    description?: string
    notes?: string
}

export type AncestryCard = {
    id: string;
    name: string
    description: string;
    custom: boolean;
}

export type CommunityCard = {
    id: string;
    name: string;
    description: string;
    custom: boolean;
}

export type Domain = {
    id: string;
    name: string;
}

export type Class = {
    id: string;
    name: string;
    domain1: string;
    domain2: string;
}

export type Subclass = {
    id: string;
    name: string;
    class: string;
    custom: boolean;
    description: string;
    level: 1 | 2 | 3;
}

export type CharacterTraits = {
    agility: number;
    strength: number;
    finesse: number;
    instinct: number;
    presence: number;
    knowledge: number;
}

export type CharacterState = {
    evasion: number;
    armorMax: number;
    armor: number;
    health: number;
    healthMax: number;
    stress: number;
    stressMax: number;
    hope: number;
    hopeMax: number;
    money: number; // bits 19/18-10/9-0 chest/bags/handfuls
}

export type Weapon = {
    name: string;
    trait: string;
    distance: string;
    damageDice: string;
    damageKind: string;
    feature: string;
    primary: boolean;
    secondary: boolean;
    left: boolean;
    right: boolean;
}

export type Armor = {
    name: string;
    thresholdLow: number;
    thresholdHigh: number;
    score: number;
    feature: string;
}

export type DomainCard = {
    id: string;
    name: string;
    domain: string;
    stress: number;
    kind: string;
    level: Level
    custom: boolean;
}

export type Level =
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;


export type Tier =
    1 | 2 | 3 | 4;