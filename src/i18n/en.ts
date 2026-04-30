import { builder } from '@/i18n/en/builder.ts'
import { ancestries } from '@/i18n/en/game/ancestries.ts'
import { arcana } from '@/i18n/en/game/cards/arcana.ts'
import { blade } from '@/i18n/en/game/cards/blade.ts'
import { bone } from '@/i18n/en/game/cards/bone.ts'
import { codex } from '@/i18n/en/game/cards/codex.ts'
import { dread } from '@/i18n/en/game/cards/dread.ts'
import { grace } from '@/i18n/en/game/cards/grace.ts'
import { midnight } from '@/i18n/en/game/cards/midnight.ts'
import { sage } from '@/i18n/en/game/cards/sage.ts'
import { splendor } from '@/i18n/en/game/cards/splendor.ts'
import { valor } from '@/i18n/en/game/cards/valor.ts'
import { classes } from '@/i18n/en/game/classes.ts'
import { communities } from '@/i18n/en/game/communities.ts'
import { items } from '@/i18n/en/game/items.ts'
import { subclasses } from '@/i18n/en/game/subclasses.ts'

export const en = {
  navigation: {
    builder: 'New',
    load: 'Load',
    characters: 'Characters',
  },
  characters: {
    title: 'Characters',
    unnamed: 'Unnamed',
    clonedSuffix: ' (Copy)',
    cloneSuccess: 'Cloned as {name}.',
    empty: {
      text: 'No characters yet. Build one or import from JSON.',
      create: 'Create character',
    },
    table: {
      level: 'Level',
    },
    actions: {
      open: 'Open',
      clone: 'Clone',
      export: 'Export JSON',
      delete: 'Delete',
    },
    confirmDelete: {
      title: 'Delete character?',
      body: 'This will permanently remove {name} from local storage. This cannot be undone.',
      confirm: 'Delete',
      cancel: 'Cancel',
    },
    import: {
      button: 'Import JSON',
      success: 'Character imported.',
      errorInvalid: 'That file is not a valid character.',
      errorParse: 'Could not read the file as JSON.',
    },
  },
  home: {
    welcome: 'Get your sheets together!',
  },
  notFound: {
    title: 'Not Found',
  },
  builder,
  sheet: {
    header: {
      nameLabel: 'Name',
      unnamed: 'Unnamed',
      pronounsLabel: 'Pronouns',
      levelLabel: 'Level',
      classLabel: 'Class',
      subclassLabel: 'Subclass',
      ancestryLabel: 'Ancestry',
      communityLabel: 'Community',
    },
    state: {
      evasion: 'Evasion',
      armor: 'Armor',
      thresholds: 'Damage Thresholds',
      thresholdMinor: 'Minor (1 HP)',
      thresholdMajor: 'Major (2 HP)',
      thresholdSevere: 'Severe (3 HP)',
      thresholdLowLabel: 'Major threshold',
      thresholdHighLabel: 'Severe threshold',
      hitPoints: 'Hit Points',
      stress: 'Stress',
      hope: 'Hope',
      increase: 'Increase',
      decrease: 'Decrease',
      settingsTitle: 'Adjust maximums',
      evasionMaxLabel: 'Evasion',
      armorMaxLabel: 'Max armor',
      healthMaxLabel: 'Max HP',
      stressMaxLabel: 'Max stress',
      hopeMaxLabel: 'Max hope',
    },
    notFound: {
      title: 'Character not found.',
      home: 'Back to home',
    },
    equipment: {
      primary: 'Primary Weapon',
      secondary: 'Secondary Weapon',
      armor: 'Armor',
      proficiency: 'Proficiency',
      slotLabel: 'Slot',
      slotAny: 'Any',
      slotPrimaryOnly: 'Primary only',
      slotSecondaryOnly: 'Secondary only',
      slotTwoHanded: 'Two-handed',
      nameLabel: 'Name',
      traitLabel: 'Trait',
      distanceLabel: 'Range',
      damageDiceLabel: 'Damage',
      damageKindLabel: 'Type',
      featureNameLabel: 'Feature',
      featureDescriptionLabel: 'Feature description',
      featureLabel: 'Feature',
      scoreLabel: 'Score',
      thresholdLowLabel: 'Major thr.',
      thresholdHighLabel: 'Severe thr.',
    },
    experiences: {
      title: 'Experiences',
      namePlaceholder: 'Experience {index}',
    },
    inventory: {
      title: 'Inventory',
      nameLabel: 'Item',
      countLabel: 'Count',
      addItem: 'Add item',
      remove: 'Remove',
      notesLabel: 'Notes',
      empty: 'No items yet.',
    },
    gold: {
      title: 'Gold',
      handfuls: 'Handfuls',
      bags: 'Bags',
      chest: 'Chest',
    },
    flavor: {
      title: 'Flavor',
      ties: 'Ties with the party',
      descriptionSection: 'About your character',
      spellcastingSource: 'Spellcasting source',
      appearance: 'How they look',
      notes: 'Notes',
      notesLabel: 'Anything else worth noting',
      notesPlaceholder: 'Freeform notes about your character…',
      answerPlaceholder: 'Write your answer…',
      unavailable: 'No flavor prompts have been prepared for this class yet.',
    },
    classFeature: 'Class Feature',
    dice: {
      title: 'Dice Roller',
      close: 'Close',
      dice: 'Dice',
      special: 'Special',
      traitMods: 'Trait modifiers',
      bonus: 'Bonus',
      placeholder: 'e.g. 2d8 + duality + Strength(2) + 1',
      profButton: '× prof ({count}) on last die',
      profApplied: 'Proficiency: {count}d{faces} × {mult} → {total}d{faces}',
      parseError: 'Cannot parse: {items}',
      roll: 'Roll',
      reset: 'Reset',
      clearHistory: 'Clear history',
      history: 'History',
      kinds: {
        duality: 'duality',
        advantage: 'advantage',
        disadvantage: 'disadvantage',
      },
      outcome: {
        hope: 'with Hope',
        fear: 'with Fear',
        critical: 'Critical Success',
      },
    },
    vault: {
      title: 'Cards',
      open: 'Open card vault',
      close: 'Close',
      equipped: 'Equipped',
      stored: 'Stored',
      empty: 'No cards.',
      add: 'Add',
      pickerTitle: 'Add domain cards',
      selected: 'selected',
      moveToEquipped: 'Move to equipped',
      moveToStored: 'Move to stored',
      upgrade: 'Upgrade subclass',
      downgrade: 'Downgrade subclass',
      filters: {
        title: 'Filters',
        text: 'Search cards…',
        kind: 'Type',
        domain: 'Domain',
        level: 'Level',
      },
      kinds: {
        domain: 'Domain',
        subclass: 'Subclass',
        ancestry: 'Ancestry',
        community: 'Community',
      },
    },
  },
  game: {
    domains: {
      arcana: 'Arcana',
      blade: 'Blade',
      bone: 'Bone',
      codex: 'Codex',
      dread: 'Dread',
      grace: 'Grace',
      midnight: 'Midnight',
      sage: 'Sage',
      splendor: 'Splendor',
      valor: 'Valor',
    },
    cards: {
      stressTooltip: 'Recall cost',
      kinds: {
        spell: 'Spell',
        skill: 'Skill',
        grimoire: 'Grimoire',
      },
      arcana,
      blade,
      bone,
      codex,
      dread,
      grace,
      midnight,
      sage,
      splendor,
      valor,
    },
    weapons: {
      greatstaff: {
        name: 'Greatstaff',
        featureName: 'Powerful',
        featureDescription: 'On a successful attack, roll an additional damage die and discard the lowest result.',
      },
      broadsword: {
        name: 'Broadsword',
        featureName: 'Reliable',
        featureDescription: '+1 to attack rolls',
      },
      shortsword: {
        name: 'Shortsword',
        featureName: 'Paired',
        featureDescription: '+2 to primary weapon damage to targets within Melee range',
      },
      rapier: {
        name: 'Rapier',
        featureName: 'Quick',
        featureDescription: 'When you make an attack, you can mark a Stress to target another creature within range.',
      },
      smallDagger: {
        name: 'Small Dagger',
        featureName: 'Paired',
        featureDescription: '+2 to primary weapon damage to targets within Melee range',
      },
      quarterstaff: {
        name: 'Quarterstaff',
        featureName: '',
        featureDescription: '',
      },
      shortstaff: {
        name: 'Shortstaff',
        featureName: '',
        featureDescription: '',
      },
      roundShield: {
        name: 'Round Shield',
        featureName: 'Protective',
        featureDescription: '+1 to Armor Score',
      },
      battleaxe: {
        name: 'Battleaxe',
        featureName: '',
        featureDescription: '',
      },
      shortbow: {
        name: 'Shortbow',
        featureName: '',
        featureDescription: '',
      },
      dagger: {
        name: 'Dagger',
        featureName: '',
        featureDescription: '',
      },
      hallowedAxe: {
        name: 'Hallowed Axe',
        featureName: '',
        featureDescription: '',
      },
      dualstaff: {
        name: 'Dualstaff',
        featureName: '',
        featureDescription: '',
      },
      scepter: {
        name: 'Scepter',
        featureName: 'Versatile',
        featureDescription: 'This weapon can also be used with these statistics—Presence, Melee, d8.',
      },
      longsword: {
        name: 'Longsword',
        featureName: '',
        featureDescription: '',
      },
    },
    armors: {
      leatherArmor: { name: 'Leather Armor', feature: '' },
      gambesonArmor: { name: 'Gambeson Armor', feature: 'Flexible: +1 to Evasion' },
      chainmailArmor: { name: 'Chainmail Armor', feature: 'Heavy: −1 to Evasion' },
    },
    distances: {
      melee: 'Melee',
      meleeClose: 'Melee/Close',
      close: 'Close',
      far: 'Far',
      veryfar: 'Very Far',
    },
    damageKinds: {
      physical: 'Physical',
      magic: 'Magic',
    },
    items,
    itemChoiceGroups: {
      potion: { label: 'Choose a potion' },
      lore: { label: 'Choose an item' },
    },
    classes,
    ancestries,
    communities,
    subclasses,
    traits: {
      agility: {
        name: 'Agility',
        title: 'Agility',
        usedFor: `
Sprint<br>
Leap<br>
Maneuver
                `,
      },
      strength: {
        name: 'Strength',
        title: 'Strength',
        usedFor: `
Lift<br>
Smash<br>
Grapple
                `,
      },
      finesse: {
        name: 'Finesse',
        title: 'Finesse',
        usedFor: `
Control<br>
Hide<br>
Tinker
                `,
      },
      instinct: {
        name: 'Instinct',
        title: 'Instinct',
        usedFor: `
Perceive<br>
Sense<br>
Navigate
                `,
      },
      presence: {
        name: 'Presence',
        title: 'Presence',
        usedFor: `
Charm<br>
Perform<br>
Deceive
                `,
      },
      knowledge: {
        name: 'Knowledge',
        title: 'Knowledge',
        usedFor: `
Recall<br>
Analyze<br>
Comprehend
                `,
      },
    },
  },
}
