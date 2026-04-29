export const builder = {
    title: 'Character Builder',
    recoveryAlert: {
        text: 'Previous session recovered. If you want to create a new character, use the button below',
        clear: 'Reset Builder',
    },
    stepper: {
        previous: 'Previous',
        next: 'Next'
    },
    steps: {
        start: {
            title: 'Start',
            subtitle: 'Name and class'
        },
        something: {
            title: 'Something',
            subtitle: 'choose a class to preview steps'
        },
        subclass: {
            title: 'Subclass',
            subtitle: '',
        },
        origin: {
            title: 'Origin',
            subtitle: 'ancestry, community',
        },
        traits: {
            title: 'Traits',
            subtitle: '',
        },
        equipment: {
            title: 'Equipment',
            subtitle: '',
        },
        experience: {
            title: 'Experience',
            subtitle: '',
        },
        cards: {
            title: 'Cards',
            subtitle: '',
        },
        flavor: {
            title: 'Flavor',
            subtitle: 'ties, backstory - all of it',
        },
        finish: {
            title: 'Profit!',
            subtitle: 'get your sheet'
        }

    },
    start: {
        basics: 'Name and pronouns',
        nameLabel: 'Name',
        pronounsLabel: 'Pronouns',
        classLabel: 'Class',
        subclassLabel: 'Subclass',
        class: 'Choose a class',
    },
    subclass: {
        title: 'Choose a subclass',
    },
    origin: {
        ancestry: "Choose an ancestry",
        community: "Choose a community"
    },
    traits: {
        title: 'Set up your traits',
        suggested: 'Suggested:',
        gmConsent: "I hereby claim that the changes that I have made to this character are allowed by the rulebook" +
            " or my GM. Otherwise I will bear the consequences in full, blaming no one but myself."
    },
    equipment: {
        weapons: {
            title: 'Choose your weapons',
            primaryLabel: 'Primary',
            secondaryLabel: 'Secondary',
            twoHandedLabel: 'Two-handed',
            traitLabel: 'Trait',
            distanceLabel: 'Distance',
            damageLabel: 'Damage',
            damageDiceLabel: 'Damage dice',
            damageKindLabel: 'Damage kind',
            featureLabel: 'Feature',
            featureNameLabel: 'Feature name',
            featureDescriptionLabel: 'Feature description',
            nameLabel: 'Name',
            slotLabel: 'Slot',
            slotAny: 'Any',
            slotPrimaryOnly: 'Primary only',
            slotSecondaryOnly: 'Secondary only',
            slotTwoHanded: 'Two-handed',
            customTitle: 'Custom weapon',
            addCustom: 'Add custom weapon',
            remove: 'Remove',
        },
        armor: {
            title: 'Choose your armor',
            thresholdLabel: 'Threshold',
            thresholdLowLabel: 'Threshold (low)',
            thresholdHighLabel: 'Threshold (high)',
            scoreLabel: 'Armor Score',
            featureLabel: 'Feature',
            nameLabel: 'Name',
            customTitle: 'Custom armor',
            useCustom: 'Use custom armor',
            clearCustom: 'Clear custom armor',
        },
        items: {
            title: 'Starting items',
            defaultSectionTitle: 'You will receive',
            choiceSectionTitle: 'Make your choices',
            customSectionTitle: 'Custom items',
            addCustom: 'Add item',
            nameLabel: 'Name',
            countLabel: 'Count',
            textSectionTitle: 'Inventory notes',
            textLabel: 'Freeform inventory text',
            remove: 'Remove',
        }
    },
    experience: {
        title: 'Pick your experiences',
        description: 'Experiences are words or short phrases that capture training, skills, or aspects of your background.',
        nameLabel: 'Experience',
        namePlaceholder: 'e.g. Silver-tongued diplomat',
        bonusLabel: 'Bonus',
        slotLabel: 'Experience {index}',
    },
    cards: {
        title: 'Pick your domain cards',
        description: 'Choose {max} cards total from your class domains. Selected: {selected}/{max}.',
    },
    flavor: {
        title: 'Add some flavor',
        description: 'Answer a few prompts to bring your character to life. Leave any blank you\'d rather skip.',
        ties: 'Ties with the party',
        descriptionSection: 'About your character',
        spellcastingSource: 'Your spellcasting source',
        appearance: 'How they look',
        answerPlaceholder: 'Write your answer…',
        notes: 'Notes',
        notesLabel: 'Anything else worth noting',
        notesPlaceholder: 'Freeform notes about your character…',
        unavailable: 'No flavor prompts have been prepared for this class yet.',
    },
    finish: {
        title: 'Review and save',
        description: 'Double-check the summary below. Save to store the character locally and download a JSON copy.',
        identity: 'Identity',
        nameLabel: 'Name',
        pronounsLabel: 'Pronouns',
        unnamed: 'Unnamed',
        origin: 'Origin',
        ancestryLabel: 'Ancestry',
        communityLabel: 'Community',
        classSection: 'Class',
        classLabel: 'Class',
        subclassLabel: 'Subclass',
        inventory: 'Inventory',
        weaponsLabel: 'Weapons',
        armorLabel: 'Armor',
        itemsLabel: 'Items',
        inventoryNotesLabel: 'Notes',
        cards: 'Domain cards',
        download: 'Download JSON',
        goToList: 'Go to list',
        savedBanner: 'Character saved locally.',
    }
}