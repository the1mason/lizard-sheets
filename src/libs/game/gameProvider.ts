import type {CharacterClass} from "@/types/game/characterClass.ts";
import type {Step} from "@/types/Step.ts";
import type {ClassName} from "@/types/game/className.ts";
import type {AncestryCard, Armor, CommunityCard, DomainCard, InventoryItem, ItemChoiceGroup, Level, Weapon, WeaponSlot} from "@/types/game/character.ts";
import type {ClassOption} from "@/types/game/classOption.ts";
import type {Domain} from "@/types/game/domain.ts";
import wizardProvider from "@/libs/game/classes/wizardProvider.ts";
import assassinProvider from "@/libs/game/classes/assassinProvider.ts";
import bardProvider from "@/libs/game/classes/bardProvider.ts";
import brawlerProvider from "@/libs/game/classes/brawlerProvider.ts";
import druidProvider from "@/libs/game/classes/druidProvider.ts";
import guardianProvider from "@/libs/game/classes/guardianProvider.ts";
import rangerProvider from "@/libs/game/classes/rangerProvider.ts";
import rogueProvider from "@/libs/game/classes/rogueProvider.ts";
import seraphProvider from "@/libs/game/classes/seraphProvider.ts";
import sorcererProvider from "@/libs/game/classes/sorcererProvider.ts";
import warlockProvider from "@/libs/game/classes/warlockProvider.ts";
import warriorProvider from "@/libs/game/classes/warriorProvider.ts";
import witchProvider from "@/libs/game/classes/witchProvider.ts";
import arcanaProvider from "@/libs/game/domains/arcanaProvider.ts";
import bladeProvider from "@/libs/game/domains/bladeProvider.ts";
import boneProvider from "@/libs/game/domains/boneProvider.ts";
import codexProvider from "@/libs/game/domains/codexProvider.ts";
import dreadProvider from "@/libs/game/domains/dreadProvider.ts";
import graceProvider from "@/libs/game/domains/graceProvider.ts";
import midnightProvider from "@/libs/game/domains/midnightProvider.ts";
import sageProvider from "@/libs/game/domains/sageProvider.ts";
import splendorProvider from "@/libs/game/domains/splendorProvider.ts";
import valorProvider from "@/libs/game/domains/valorProvider.ts";

function getStepsByClass(className: ClassName): Step[] {
    const steps: Step[] = [];

    steps.push(
        {
            value: "start",
            isDone: false,
            isUnlocked: true,
            hasError: false
        },
        {
            value: "subclass",
            isDone: false,
            isUnlocked: false,
            hasError: false
        },
        {
            value: "origin",
            isDone: false,
            isUnlocked: false,
            hasError: false
        },
        {
            value: "traits",
            isDone: false,
            isUnlocked: false,
            hasError: false,
            optional: true
        },
        {
            value: "equipment",
            isDone: false,
            isUnlocked: false,
            hasError: false,
            optional: true
        },
        {
            value: "experience",
            isDone: false,
            isUnlocked: false,
            hasError: false,
            optional: true
        },
        {
            value: "cards",
            isDone: false,
            isUnlocked: false,
            hasError: false
        },
        {
            value: "flavor",
            isDone: false,
            isUnlocked: false,
            hasError: false,
            optional: true
        }
    )

    steps.push(
        {
            value: "finish",
            isDone: false,
            isUnlocked: false,
            hasError: false
        })

    return steps;
}

function getDefaultSteps(): Step[] {
    return [
        {
            value: "start",
            isDone: false,
            isUnlocked: true,
            hasError: false
        },
        {
            value: "something",
            isDone: false,
            isUnlocked: false,
            hasError: false,
            icon: "mdi-help"
        },
        {
            value: "finish",
            isDone: false,
            isUnlocked: false,
            hasError: false
        }
    ]
}

function getClassOptions(className: ClassName): ClassOption {
    switch (className) {
        case "assassin":
            return assassinProvider.getClassOptions()
        case "bard":
            return bardProvider.getClassOptions()
        case "brawler":
            return brawlerProvider.getClassOptions()
        case "druid":
            return druidProvider.getClassOptions()
        case "guardian":
            return guardianProvider.getClassOptions()
        case "ranger":
            return rangerProvider.getClassOptions()
        case "rogue":
            return rogueProvider.getClassOptions()
        case "seraph":
            return seraphProvider.getClassOptions()
        case "sorcerer":
            return sorcererProvider.getClassOptions()
        case "warlock":
            return warlockProvider.getClassOptions()
        case "warrior":
            return warriorProvider.getClassOptions()
        case "witch":
            return witchProvider.getClassOptions()
        case "wizard":
            return wizardProvider.getClassOptions()
    }
}

function getDomainCards(domain: Domain, level: Level): DomainCard[] {
    switch (domain) {
        case "arcana":
            return arcanaProvider.getCardsByLevel(level)
        case "blade":
            return bladeProvider.getCardsByLevel(level)
        case "bone":
            return boneProvider.getCardsByLevel(level)
        case "codex":
            return codexProvider.getCardsByLevel(level)
        case "dread":
            return dreadProvider.getCardsByLevel(level)
        case "grace":
            return graceProvider.getCardsByLevel(level)
        case "midnight":
            return midnightProvider.getCardsByLevel(level)
        case "sage":
            return sageProvider.getCardsByLevel(level)
        case "splendor":
            return splendorProvider.getCardsByLevel(level)
        case "valor":
            return valorProvider.getCardsByLevel(level)
    }
}

function getCharacterClasses(): CharacterClass[] {
    return [
        {
            id: 'assassin',
            domain1: 'midnight',
            domain2: 'blade'
        },
        {
            id: 'bard',
            domain1: 'grace',
            domain2: 'codex'
        },
        {
            id: 'brawler',
            domain1: 'bone',
            domain2: 'valor'
        },
        {
            id: 'druid',
            domain1: 'sage',
            domain2: 'arcana'
        },
        {
            id: 'guardian',
            domain1: 'valor',
            domain2: 'blade'
        },
        {
            id: 'ranger',
            domain1: 'bone',
            domain2: 'sage'
        },
        {
            id: 'rogue',
            domain1: 'midnight',
            domain2: 'grace'
        },
        {
            id: 'seraph',
            domain1: 'splendor',
            domain2: 'valor'
        },
        {
            id: 'sorcerer',
            domain1: 'arcana',
            domain2: 'midnight',
        },
        {
            id: 'warlock',
            domain1: 'dread',
            domain2: 'grace'
        },
        {
            id: 'warrior',
            domain1: 'blade',
            domain2: 'bone'
        },
        {
            id: 'witch',
            domain1: 'dread',
            domain2: 'sage'
        },
        {
            id: 'wizard',
            domain1: 'codex',
            domain2: 'splendor'
        }
    ]
}

function getAncestries(): AncestryCard[] {
    return [
        {
            id: "aetheris"
        },
        {
            id: "clank"
        },
        {
            id: "drakona"
        },
        {
            id: "dwarf"
        },
        {
            id: "earhkin"
        },
        {
            id: "elf"
        },
        {
            id: "emberkin"
        },
        {
            id: "faerie"
        },
        {
            id: "faun"
        },
        {
            id: "firbolg"
        },
        {
            id: "fungril"
        },
        {
            id: "galapa"
        },
        {
            id: "giant"
        },
        {
            id: "gnome"
        },
        {
            id: "goblin"
        },
        {
            id: "halfling"
        },
        {
            id: "human"
        },
        {
            id: "infernis"
        },
        {
            id: "katari"
        },
        {
            id: "orc"
        },
        {
            id: "ribbet"
        },
        {
            id: "simiah"
        },
        {
            id: "skykin"
        },
        {
            id: "tidekin"
        }
    ]
}

function getCommunities(): CommunityCard[] {
    return [
        {
            id: "duneborne"
        },
        {
            id: "freeborne"
        },
        {
            id: "frostborne"
        },
        {
            id: "hearthborne"
        },
        {
            id: "highborne"
        },
        {
            id: "loreborne"
        },
        {
            id: "orderborne"
        },
        {
            id: "reborne"
        },
        {
            id: "ridgeborne"
        },
        {
            id: "seaborne"
        },
        {
            id: "slyborne"
        },
        {
            id: "underborne"
        },
        {
            id: "wanderborne"
        },
        {
            id: "warborne"
        },
        {
            id: "wildborne"
        }
    ]
}

export default {
    getCharacterClasses,
    getStepsByClass,
    getDefaultSteps,
    getClassOptions,
    getAncestries,
    getCommunities,
    getDomainCards
}