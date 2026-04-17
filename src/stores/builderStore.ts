import {defineStore} from "pinia";
import type {Armor, Character, InventoryItem, Weapon} from "@/types/game/character.ts";
import {ref} from "vue";
import type {Step} from "@/types/Step.ts";
import gameProvider from "@/libs/game/gameProvider.ts"
import type {ClassOption} from "@/types/game/classOption.ts";

const LOCAL_STORE_NAME = "builder";

export const useBuilderStore = defineStore("builderStore", () => {

    const store = ref<BuilderState>(getDefaultState());

    async function init(): Promise<void> {
        store.value = getBuilderState();
    }

    function set(builder: BuilderState) {
        store.value = builder;
        saveBuilderState(builder);
    }

    function get() {
        return store.value;
    }

    function reset() {
        store.value = getDefaultState();
        saveBuilderState(store.value)
        return store.value;
    }

    return {
        init,
        set,
        reset,
        get
    }

})

function saveBuilderState(state: BuilderState) {
    localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(state))
}

function getBuilderState() : BuilderState {
    const data = localStorage.getItem(LOCAL_STORE_NAME);
    return data ? JSON.parse(data) : getDefaultState();
}

function getDefaultState(): BuilderState {
    return {
        isBlank: true,
        currentStep: "start",
        steps: gameProvider.getDefaultSteps(),
        data: {
            id: crypto.randomUUID(),
            version: 1,
            level: 1,
            traits: {
                agility: 0,
                strength: 0,
                finesse: 0,
                instinct: 0,
                presence: 0,
                knowledge: 0
            },
            state: {
                evasion: 0,
                armorMax: 0,
                armor: 0,
                health: 0,
                healthMax: 0,
                stress: 0,
                stressMax: 0,
                hope: 0,
                hopeMax: 0,
                money: 0
            },
            domains: [],
            subclasses: [],
            weapons: [],
            experiences: [],
            backgroundQuestions: [],
            ties: [],
            appearance: [],
            domainCards: [],
            domainCardsStored: [],
            levelingChoices: [],
        },
        options: {

        },
    }
}

// TODO: Move validation of steps into steps themselves, then set IsDone from the validator functions to
// TODO: allow for dynamic model checking after steps reset or if step is in valid state as is

export type BuilderState = {
    isBlank: boolean;
    currentStep: string;
    steps: Step[];
    data: Character;
    options: {
        classOption?: ClassOption,
        traitsChosen?: true,
        itemChoices?: Record<string, string>,
        customWeapons?: Weapon[],
        customArmor?: Armor,
        customItems?: InventoryItem[],
        inventoryText?: string,
    }
}

export type ValidateBuilderFn = (builder: BuilderState) => string[]