import {defineStore} from "pinia";
import type {Character, Level} from "@/types/game/character.ts";
import type {ClassName} from "@/types/game/className.ts";

const INDEX_KEY = "character.index";
const KEY_PREFIX = "character.";

export type CharacterShort = {
    id: string
    name?: string
    pronouns?: string
    level: Level
    className?: ClassName
    subclassId?: string
}

export const useCharacterStore = defineStore("characterStore", () => {

    function list(): CharacterShort[] {
        const ids = readIndex();
        const result: CharacterShort[] = [];
        for (const id of ids) {
            const character = readCharacter(id);
            if (character) {
                result.push(toShort(character));
            }
        }
        return result;
    }

    function get(id: string): Character | undefined {
        return readCharacter(id);
    }

    function create(character: Character): Character {
        const ids = readIndex();
        if (!ids.includes(character.id)) {
            ids.push(character.id);
            writeIndex(ids);
        }
        writeCharacter(character);
        return character;
    }

    function update(id: string, character: Character): Character {
        const stored: Character = {...character, id};
        const ids = readIndex();
        if (!ids.includes(id)) {
            ids.push(id);
            writeIndex(ids);
        }
        writeCharacter(stored);
        return stored;
    }

    function remove(id: string): void {
        localStorage.removeItem(keyFor(id));
        const ids = readIndex().filter(existing => existing !== id);
        writeIndex(ids);
    }

    return {
        list,
        get,
        create,
        update,
        delete: remove
    }
})

function keyFor(id: string): string {
    return `${KEY_PREFIX}${id}`;
}

function readIndex(): string[] {
    const raw = localStorage.getItem(INDEX_KEY);
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((x: unknown) => typeof x === "string") : [];
    } catch {
        return [];
    }
}

function writeIndex(ids: string[]): void {
    localStorage.setItem(INDEX_KEY, JSON.stringify(ids));
}

function readCharacter(id: string): Character | undefined {
    const raw = localStorage.getItem(keyFor(id));
    if (!raw) return undefined;
    try {
        return JSON.parse(raw) as Character;
    } catch {
        return undefined;
    }
}

function writeCharacter(character: Character): void {
    localStorage.setItem(keyFor(character.id), JSON.stringify(character));
}

function toShort(character: Character): CharacterShort {
    return {
        id: character.id,
        name: character.name,
        pronouns: character.pronouns,
        level: character.level,
        className: character.class?.id,
        subclassId: character.subclasses[0]?.id
    };
}
