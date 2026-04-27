export const en = {
    navigation: {
        builder: 'New',
        load: 'Load',
        characters: 'Characters'
    },
    characters: {
        title: 'Characters',
        unnamed: 'Unnamed',
        clonedSuffix: ' (Copy)',
        cloneSuccess: 'Cloned as {name}.',
        empty: {
            text: 'No characters yet. Build one or import from JSON.',
            create: 'Create character'
        },
        table: {
            level: 'Level'
        },
        actions: {
            open: 'Open',
            clone: 'Clone',
            export: 'Export JSON',
            delete: 'Delete'
        },
        confirmDelete: {
            title: 'Delete character?',
            body: 'This will permanently remove {name} from local storage. This cannot be undone.',
            confirm: 'Delete',
            cancel: 'Cancel'
        },
        import: {
            button: 'Import JSON',
            success: 'Character imported.',
            errorInvalid: 'That file is not a valid character.',
            errorParse: 'Could not read the file as JSON.'
        }
    },
    home: {
        welcome: 'Get your sheets together!'
    },
    notFound: {
        title: 'Not Found'
    },
    builder: {
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
    },
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
        classFeature: 'Class Feature',
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
            valor: 'Valor'
        },
        cards: {
            stressTooltip: 'Recall cost',
            kinds: {
                spell: 'Spell',
                skill: 'Skill',
                grimoire: 'Grimoire',
            },
            arcana: {
                "rune-ward": {
                    name: "Rune Ward",
                    body: `_**Rune Ward:**_ You have a deeply personal trinket that can be infused with protective magic and held as a ward by you or an ally. Describe what it is and why it's important to you. The ward's holder can spend a Hope to reduce incoming damage by **1d8**.
If the Ward Die result is 8, the ward's power ends after it reduces damage this turn. It can be recharged for free on your next rest.`
                },
                "unleash-chaos": {
                    name: "Unleash Chaos",
                    body: `_**Unleash Chaos:**_ At the beginning of a session, place a number of tokens equal to your Spellcast trait on this card.
Make a **Spellcast Roll** against a target within Far range and spend any number of tokens to channel raw energy from within yourself to unleash against them. On a success, roll a number of **d10s** equal to the tokens you spent and deal that much magic damage to the target. **Mark a** **Stress** to replenish this card with tokens (up to your Spellcast trait).
At the end of each session, clear all unspent tokens.`
                },
                "wall-walk": {
                    name: "Wall Walk",
                    body: `_**Wall Walk:**_ **Spend a** **Hope** to allow a creature you can touch to climb on walls and ceilings as easily as walking on the ground. This lasts until the end of the scene or you cast Wall Walk again.`
                },
                "cinder-grasp": {
                    name: "Cinder Grasp",
                    body: `_**Cinder Grasp:**_ Make a **Spellcast Roll** against a target within Melee range. On a success, the target instantly bursts into flames, takes **1d20+3** magic damage, and is temporarily lit _On Fire_.
When a creature acts while _On Fire_, they must take an extra **2d6** magic damage if they are still _On Fire_ at the end of their action.`
                },
                "floating-eye": {
                    name: "Floating Eye",
                    body: `_**Floating Eye:**_ **Spend a** **Hope** to create a single, small floating orb that you can move anywhere within Very Far range. While this spell is active, you can see through the orb as though you're looking out from its position. You can transition between using your own senses and seeing through the orb freely. If the orb takes damage or moves out of range, the spell ends.`
                },
                "counterspell": {
                    name: "Counterspell",
                    body: `_**Counterspell:**_ You can interrupt a magical effect taking place by making a reaction roll using your Spellcast trait. On a success, the effect stops and any consequences are avoided, and this card is placed in your vault.`
                },
                "flight": {
                    name: "Flight",
                    body: `_**Flight:**_ Make a **Spellcast Roll** **(15)**. On a success, place a number of tokens equal to your Agility on this card (minimum 1). When you make an action roll while flying, spend a token from this card. After the action that spends the last token is resolved, you descend to the ground directly below you.`
                },
                "blink-out": {
                    name: "Blink Out",
                    body: `_**Blink Out:**_ Make a **Spellcast Roll** **(12)**. On a success, **spend a** **Hope** to teleport to another point you can see within Far range. If any willing creatures are within Very Close range, **spend an additional Hope** for each creature to bring them with you.`
                },
                "preservation-blast": {
                    name: "Preservation Blast",
                    body: `_**Preservation Blast:**_ Make a **Spellcast Roll** against all targets within Melee range. Targets you succeed against are forced back to Far range and take **d8+3** magic damage using your Spellcast trait.`
                },
                "chain-lightning": {
                    name: "Chain Lightning",
                    body: `_**Chain Lightning:**_ **Mark 2** **Stress** to make a **Spellcast Roll**, unleashing lightning on all targets within Close range. Targets you succeed against must make a reaction roll with a Difficulty equal to the result of your Spellcast Roll. Targets who fail take **2d8+4** magic damage. Additional adversaries not already targeted by Chain Lightning and within Close range of previous targets who took damage must also make the reaction roll. Targets who fail take **2d8+4** magic damage. This chain continues until there are no more adversaries within range.`
                },
                "premonition": {
                    name: "Premonition",
                    body: `_**Premonition:**_ You can channel arcane energy to have visions of the future. Once per long rest, immediately after the GM conveys the consequences of a roll you made, you can rescind the move and consequences like they never happened and make another move instead.`
                },
                "rift-walker": {
                    name: "Rift Walker",
                    body: `_**Rift Walker:**_ Make a **Spellcast Roll** **(15)**. On a success, you place an arcane marking on the ground where you currently stand. The next time you successfully cast Rift Walker, a rift in space opens up, providing safe passage back to the exact spot where the marking was placed. This rift stays open until you choose to close it or you cast another spell.
You can drop the spell at any time to cast Rift Walker again and place the marking somewhere new.`
                },
                "telekinesis": {
                    name: "Telekinesis",
                    body: `_**Telekinesis:**_ Make a **Spellcast Roll** against a target within Far range. On a success, you can use your mind to move them anywhere within Far range of their original position. You can throw the lifted target as an attack by making an additional Spellcast Roll against the second target you're trying to attack. On a success, deal **d12+4** physical damage to the second target using your Proficiency. This spell then ends.`
                },
                "arcana-touched": {
                    name: "Arcana-Touched",
                    body: `_**Arcana-Touched:**_ When 4 or more of the domain cards in your loadout are from the Arcana domain, gain the following benefits:
- +1 bonus to your Spellcast Rolls
- Once per rest, you can switch the results of your Hope and Fear Dice.`
                },
                "cloaking-blast": {
                    name: "Cloaking Blast",
                    body: `_**Cloaking Blast:**_ When you make a successful **Spellcast Roll** to cast a different spell, you can **spend a** **Hope** to become _Cloaked_. While _Cloaked_, you remain unseen if you are stationary when an adversary moves to where they would normally see you. When you move into or within an adversary's line of sight or make an attack, you are no longer _Cloaked_.`
                },
                "arcane-reflection": {
                    name: "Arcane Reflection",
                    body: `_**Arcane Reflection:**_ When you would take magic damage, you can **spend any number of** **Hope** to roll that many **d6s**. If any roll a 6, the attack is reflected back to the caster, dealing the damage to them instead.`
                },
                "confusing-aura": {
                    name: "Confusing Aura",
                    body: `_**Confusing Aura:**_ Make a **Spellcast Roll** **(14)**. Once per long rest on a success, you create a layer of illusion over your body that makes it hard to tell exactly where you are. **Mark any number of** **Stress** to make that many additional layers. When an adversary makes an attack against you, roll a number of **d6s** equal to the number of layers currently active. If any roll a 5 or higher, one layer of the aura is destroyed and the attack fails. If all the results are 4 or lower, you take the damage and this spell ends.`
                },
                "earthquake": {
                    name: "Earthquake",
                    body: `_**Earthquake:**_ Make a **Spellcast Roll** **(16)**. Once per rest on a success, all targets within Very Far range who aren't flying must make a Reaction Roll (18). Targets who fail take **3d10+8** physical damage and are temporarily _Vulnerable_. Targets who succeed take half damage.
Additionally, when you succeed on the Spellcast Roll, all terrain within Very Far range becomes difficult to move through and structures within this range might sustain damage or crumble.`
                },
                "sensory-projection": {
                    name: "Sensory Projection",
                    body: `_**Sensory Projection:**_ Once per rest, make a **Spellcast Roll** **(15)**. On a success, drop into a vision that lets you clearly see and hear any place you have been before as though you are standing there in this moment. You can move freely in this vision and are not constrained by the physics or impediments of a physical body. This spell cannot be detected by mundane or magical means. You drop out of this vision upon taking damage or casting another spell.`
                },
                "adjust-reality": {
                    name: "Adjust Reality",
                    body: `_**Adjust Reality:**_ After you or a willing ally make any roll, you can **spend 5** **Hope** to change the numerical result of that roll to a result of your choice instead. The result must be plausible within the range of the dice.`
                },
                "falling-sky": {
                    name: "Falling Sky",
                    body: `_**Falling Sky:**_ Make a **Spellcast Roll** against all adversaries within Far range. **Mark any number of** **Stress** to make shards of arcana rain down from above. Targets you succeed against take **1d20+2** magic damage for each Stress marked.`
                }
            },
            blade: {
                "get-back-up": {
                    name: "Get Back Up",
                    body: `_**Get Back Up:**_ When you take Severe damage, you can **mark a** **Stress** to reduce the severity by one threshold.`
                },
                "not-good-enough": {
                    name: "Not Good Enough",
                    body: `_**Not Good Enough:**_ When you roll your damage dice, you can reroll any 1s or 2s.`
                },
                "whirlwind": {
                    name: "Whirlwind",
                    body: `_**Whirlwind:**_ When you make a successful attack against a target within Very Close range, you can **spend a Hope** to use the attack against all other targets within Very Close range. All additional adversaries you succeed against with this ability take half damage.`
                },
                "a-soldiers-bond": {
                    name: "A Soldier's Bond",
                    body: `_**A Soldier's Bond:**_ Once per long rest, when you compliment someone or ask them about something they're good at, you can both gain 3 Hope.`
                },
                "reckless": {
                    name: "Reckless",
                    body: `_**Reckless:**_ **Mark a** **Stress** to gain advantage on an attack.`
                },
                "scramble": {
                    name: "Scramble",
                    body: `_**Scramble:**_ Once per rest, when a creature within Melee range would deal damage to you, you can avoid the attack and safely move out of Melee range of the enemy.`
                },
                "versatile-fighter": {
                    name: "Versatile Fighter",
                    body: `_**Versatile Fighter:**_ You can use a different character trait for an equipped weapon, rather than the trait the weapon calls for.

When you deal damage, you can **mark a** **Stress** to use the maximum result of one of your damage dice instead of rolling it.`
                },
                "deadly-focus": {
                    name: "Deadly Focus",
                    body: `_**Deadly Focus:**_ Once per rest, you can apply all your focus toward a target of your choice. Until you attack another creature, you defeat the target, or the battle ends, gain a +1 bonus to your Proficiency.`
                },
                "fortified-armor": {
                    name: "Fortified Armor",
                    body: `_**Fortified Armor:**_ While you are wearing armor, gain a +2 bonus to your damage thresholds.`
                },
                "champions-edge": {
                    name: "Champion's Edge",
                    body: `_**Champion's Edge:**_ When you critically succeed on an attack, you can **spend up to 3** **Hope** and choose one of the following options for each Hope spent:
- You clear a Hit Point.
- You clear an Armor Slot.
- The target must mark an additional Hit Point.
You can't choose the same option more than once.`
                },
                "vitality": {
                    name: "Vitality",
                    body: `_**Vitality:**_ When you choose this card, permanently gain two of the following benefits:
- One Stress slot
- One Hit Point slot
- +2 bonus to your damage thresholds
Then place this card in your vault permanently.`
                },
                "battle-hardened": {
                    name: "Battle-Hardened",
                    body: `_**Battle-Hardened:**_ Once per long rest when you would make a Death Move, you can **spend a** **Hope** to clear a Hit Point instead.`
                },
                "rage-up": {
                    name: "Rage Up",
                    body: `_**Rage Up:**_ Before you make an attack, you can **mark a** **Stress** to gain a bonus to your damage roll equal to twice your Strength.
You can Rage Up twice per attack.`
                },
                "blade-touched": {
                    name: "Blade-Touched",
                    body: `_**Blade-Touched:**_ When 4 or more of the domain cards in your loadout are from the Blade domain, gain the following benefits:
- +2 bonus to your attack rolls
- +4 bonus to your Severe damage threshold`
                },
                "glancing-blow": {
                    name: "Glancing Blow",
                    body: `_**Glancing Blow:**_ When you fail an attack, you can **mark a** **Stress** to deal weapon damage using half your Proficiency.`
                },
                "battle-cry": {
                    name: "Battle Cry",
                    body: `_**Battle Cry:**_ Once per long rest, while you're charging into danger, you can muster a rousing call that inspires your allies. All allies who can hear you each clear a Stress and gain a Hope. Additionally, your allies gain advantage on attack rolls until you or an ally rolls a failure with Fear.`
                },
                "frenzy": {
                    name: "Frenzy",
                    body: `_**Frenzy:**_ Once per long rest, you can go into a _Frenzy_ until there are no more adversaries within sight.
While _Frenzied_, you can't use Armor Slots, and you gain a +10 bonus to your damage rolls and a +8 bonus to your Severe damage threshold.`
                },
                "gore-and-glory": {
                    name: "Gore And Glory",
                    body: `_**Gore And Glory:**_ When you critically succeed on a weapon attack, gain an additional Hope or clear an additional Stress.
Additionally, when you deal enough damage to defeat an enemy, gain a Hope or clear a Stress.`
                },
                "reapers-strike": {
                    name: "Reaper's Strike",
                    body: `_**Reaper's Strike:**_ Once per long rest, **spend a** **Hope** to make an attack roll. The GM tells you which targets within range it would succeed against. Choose one of these targets and force them to mark 5 Hit Points.`
                },
                "battle-monster": {
                    name: "Battle Monster",
                    body: `_**Battle Monster:**_ When you make a successful attack against an adversary, you can **mark 4** **Stress** to force the target to mark a number of Hit Points equal to the number of Hit Points you currently have marked instead of rolling for damage.`
                },
                "onslaught": {
                    name: "Onslaught",
                    body: `_**Onslaught:**_ When you successfully make an attack with your weapon, you never deal damage beneath a target's Major damage threshold (the target always marks a minimum of 2 Hit Points).
Additionally, when a creature within your weapon's range deals damage to an ally with an attack that doesn't include you, you can **mark a** **Stress** to force them to make a Reaction Roll (15). On a failure, the target must mark a Hit Point.`
                }
            },
            bone: {
                "deft-maneuvers": {
                    name: "Deft Maneuvers",
                    body: `_**Deft Maneuvers:**_ Once per rest, **mark a** **Stress** to sprint anywhere within Far range without making an Agility Roll to get there.
If you end this movement within Melee range of an adversary and immediately make an attack against them, gain a +1 bonus to the attack roll.`
                },
                "i-see-it-coming": {
                    name: "I See It Coming",
                    body: `_**I See It Coming:**_ When you're targeted by an attack made from beyond Melee range, you can **mark a Stress** to roll a **d4** and gain a bonus to your Evasion equal to the result against the attack.`
                },
                "untouchable": {
                    name: "Untouchable",
                    body: `_**Untouchable:**_ Gain a bonus to your Evasion equal to half your Agility.`
                },
                "ferocity": {
                    name: "Ferocity",
                    body: `_**Ferocity:**_ When you cause an adversary to mark 1 or more Hit Points, you can **spend 2** **Hope** to increase your Evasion by the number of Hit Points they marked. This bonus lasts until after the next attack made against you.`
                },
                "strategic-approach": {
                    name: "Strategic Approach",
                    body: `_**Strategic Approach:**_ After a long rest, place a number of tokens equal to your Knowledge on this card (minimum 1). The first time you move within Close range of an adversary and make an attack against them, you can spend one token to choose one of the following options:
- You make the attack with advantage.
- You clear a Stress on an ally within Melee range of the adversary.
- You add a **d8** to your damage roll.
When you take a long rest, clear all unspent tokens.`
                },
                "brace": {
                    name: "Brace",
                    body: `_**Brace:**_ When you mark an Armor Slot to reduce incoming damage, you can **mark a** **Stress** to mark an additional Armor Slot.`
                },
                "tactician": {
                    name: "Tactician",
                    body: `_**Tactician:**_ When you Help an Ally, they can spend a Hope to add one of your Experiences to their roll alongside your advantage die.
When making a Tag Team Roll, you can roll a **d20** as your Hope Die.`
                },
                "boost": {
                    name: "Boost",
                    body: `_**Boost:**_ **Mark a** **Stress** to boost off a willing ally within Close range, fling yourself into the air, and perform an aerial attack against a target within Far range. You have advantage on the attack, add a **d10** to the damage roll, and end your move within Melee range of the target.`
                },
                "redirect": {
                    name: "Redirect",
                    body: `_**Redirect:**_ When an attack made against you from beyond Melee range fails, roll a number of **d6s** equal to your Proficiency. If any roll a 6, you can **mark a** **Stress** to redirect the attack to damage an adversary within Very Close range instead.`
                },
                "know-thy-enemy": {
                    name: "Know Thy Enemy",
                    body: `_**Know Thy Enemy:**_ When observing a creature, you can make an **Instinct** **Roll** against them. On a success, **spend a** **Hope** and ask the GM for one set of information about the target from the following options:
- Their unmarked Hit Points and Stress.
- Their Difficulty and damage thresholds.
- Their tactics and standard attack damage dice.
- Their features and Experiences.
Additionally on a success, you can **mark a** **Stress** to remove a Fear from the GM's Fear Pool.`
                },
                "signature-move": {
                    name: "Signature Move",
                    body: `_**Signature Move:**_ Name and describe your signature combat move. Once per rest, when you perform this signature move as part of an action you're taking, you can roll a **d20** as your Hope Die. On a success, clear a Stress.`
                },
                "rapid-riposte": {
                    name: "Rapid Riposte",
                    body: `_**Rapid Riposte:**_ When an attack made against you from within Melee range fails, you can **mark a** **Stress** and seize the opportunity to deal the weapon damage of one of your active weapons to the attacker.`
                },
                "recovery": {
                    name: "Recovery",
                    body: `_**Recovery:**_ During a short rest, you can choose a long rest downtime move instead. You can **spend a** **Hope** to let an ally do the same.`
                },
                "bone-touched": {
                    name: "Bone-Touched",
                    body: `_**Bone-Touched:**_ When 4 or more of the domain cards in your loadout are from the Bone domain, gain the following benefits:
- +1 bonus to Agility
- Once per rest, you can **spend 3** **Hope** to cause an attack that succeeded against you to fail instead.`
                },
                "cruel-precision": {
                    name: "Cruel Precision",
                    body: `_**Cruel Precision:**_ When you make a successful attack with a weapon, gain a bonus to your damage roll equal to either your Finesse or Agility.`
                },
                "breaking-blow": {
                    name: "Breaking Blow",
                    body: `_**Breaking Blow:**_ When you make a successful attack, you can **mark a** **Stress** to make the next successful attack against that same target deal an extra **2d12** damage.`
                },
                "wrangle": {
                    name: "Wrangle",
                    body: `_**Wrangle:**_ Make an Agility Roll against all targets within Close range. **Spend a** **Hope** to move targets you succeed against, and any willing allies within Close range, to another point within Close range.`
                },
                "on-the-brink": {
                    name: "On The Brink",
                    body: `_**On The Brink:**_ When you have 2 or fewer Hit Points unmarked, you don't take Minor damage.`
                },
                "splintering-strike": {
                    name: "Splintering Strike",
                    body: `_**Splintering Strike:**_ **Spend a** **Hope** and make an attack against all adversaries within your weapon's range. Once per long rest, on a success against any targets, roll your weapon's damage and distribute that damage however you wish between the targets you succeeded against. Before you deal damage to each target, roll an additional damage die and add its result to the damage you deal to them.`
                },
                "deathrun": {
                    name: "Deathrun",
                    body: `_**Deathrun:**_ **Spend 3** **Hope** to run a straight path through the battlefield to a point within Far range, making an attack against all adversaries within your weapon's range along that path. Choose the order in which you deal damage to the targets you succeeded against. For the first, roll your weapon damage with a +1 bonus to your Proficiency. Then remove a die from your damage roll and deal the remaining damage to the next target. Continue to remove a die for each subsequent target until you have no more damage dice or adversaries.
You can't target the same adversary more than once per attack.`
                },
                "swift-step": {
                    name: "Swift Step",
                    body: `_**Swift Step:**_ When an attack made against you fails, clear a Stress. If you can't clear a Stress, gain a Hope.`
                }
            },
            codex: {
                "book-of-ava": {
                    name: "Book Of Ava",
                    body: `_**Power Push:**_ Make a **Spellcast Roll** against a target within Melee range. On a success, they're knocked back to Far range and take **d10+2** magic damage using your Proficiency.

_**Tava's Armor:**_ **Spend a** **Hope** to give a target you can touch a +1 bonus to their Armor Score until their next rest or you cast Tava's Armor again.

_**Ice Spike:**_ Make a **Spellcast Roll (12)** to summon a large ice spike within Far range. If you use it as a weapon, make the Spellcast Roll against the target's Difficulty instead. On a success, deal **d6** physical damage using your Proficiency.`
                },
                "book-of-illiat": {
                    name: "Book Of Illiat",
                    body: `_**Slumber:**_ Make a **Spellcast Roll** against a target within Very Close range. On a success, they're _Asleep_ until they take damage or the GM spends a **Fear** on their turn to clear this condition.

_**Arcane Barrage:**_ Once per rest, **spend any number of** **Hope** and shoot magical projectiles that strike a target of your choice within Close range. Roll a number of **d6s** equal to the Hope spent and deal that much magic damage to the target.

_**Telepathy:**_ **Spend a Hope** to open a line of mental communication with one target you can see. This connection lasts until your next rest or you cast Telepathy again.`
                },
                "book-of-tyfar": {
                    name: "Book Of Tyfar",
                    body: `_**Wild Flame:**_ Make a **Spellcast Roll** against up to three adversaries within Melee range. Targets you succeed against take **2d6** magic damage and must mark a Stress as flames erupt from your hand.

_**Magic Hand:**_ You conjure a magical hand with the same size and strength as your own within Far range.

_**Mysterious Mist:**_ Make a **Spellcast Roll (13)** to cast a temporary thick fog that gathers in a stationary area within Very Close range. The fog heavily obscures this area and everything in it.`
                },
                "book-of-sitil": {
                    name: "Book Of Sitil",
                    body: `_**Adjust Appearance:**_ You magically shift your appearance and clothing to avoid recognition.

_**Parallela:**_ **Spend 2** **Hope** to cast this spell on yourself or an ally within Close range. The next time the target makes an attack, they can hit an additional target within range that their attack roll would succeed against. You can only hold this spell on one creature at a time.

_**Illusion:**_ Make a **Spellcast Roll** **(14)**. On a success, create a temporary visual illusion no larger than you within Close range that lasts for as long as you look at it. It holds up to scrutiny until an observer is within Melee range.`
                },
                "book-of-vagras": {
                    name: "Book Of Vagras",
                    body: `_**Runic Lock:**_ Make a **Spellcast Roll** **(15)** on an object you're touching that can close (such as a lock, chest, or box). Once per rest on a success, you can lock the object so it can only be opened by creatures of your choice. Someone with access to magic and an hour of time to study the spell can break it.

_**Arcane Door:**_ When you have no adversaries within Melee range, make a **Spellcast Roll (13)**. On a success, **spend a** **Hope** to create a portal from where you are to a point within Far range you can see. It closes once a creature has passed through it.

_**Reveal:**_ Make a **Spellcast Roll**. If there is anything magically hidden within Close range the roll would succeed against, it is revealed.`
                },
                "book-of-korvax": {
                    name: "Book Of Korvax",
                    body: `_**Levitation:**_ Make a **Spellcast Roll** to temporarily lift a target you can see up into the air and move them within Close range of their original position.

_**Recant:**_ **Spend a** **Hope** to force a target within Melee range to make a Reaction Roll (15). On a failure, they forget the last minute of your conversation.

_**Rune Circle:**_ **Mark a** **Stress** to create a temporary magical circle on the ground where you stand. All adversaries within Melee range, or who enter Melee range, take **2d12+4** magic damage and are knocked back to Very Close range.`
                },
                "book-of-norai": {
                    name: "Book Of Norai",
                    body: `_**Mystic Tether:**_ Make a **Spellcast Roll** against a target within Far range. On a success, they're temporarily _Restrained_ and must mark a Stress. If you target a flying creature, this spell grounds and temporarily _Restrains_ them.

_**Fireball:**_ Make a **Spellcast Roll** against a target within Very Far range. On a success, hurl a sphere of fire toward them that explodes on impact. The target and all creatures within Very Close range of them must make a Reaction Roll (13). Targets who fail take **d20+5** magic damage using your Proficiency. Targets who succeed take half damage.`
                },
                "book-of-exota": {
                    name: "Book Of Exota",
                    body: `_**Repudiate:**_ You can interrupt a magical effect taking place. Make a reaction roll using your Spellcast trait. Once per rest on a success, the effect stops and any consequences are avoided.

_**Create Construct:**_ **Spend a** **Hope** to choose a group of objects around you and create an animated construct from them that obeys basic commands. Make a **Spellcast Roll** to command them to take action. When necessary, they share your Evasion and traits and their attacks deal **2d10+3** physical damage. You can only maintain one construct at a time, and they fall apart when they take any amount of damage.`
                },
                "book-of-grynn": {
                    name: "Book Of Grynn",
                    body: `_**Arcane Deflection:**_ Once per long rest, **spend a** **Hope** to negate the damage of an attack targeting you or an ally within Very Close range.

_**Time Lock:**_ Target an object within Far range. That object stops in time and space exactly where it is until your next rest. If a creature tries to move it, make a **Spellcast Roll** against them to maintain this spell.

_**Wall Of Flame:**_ Make a **Spellcast Roll (15)**. On a success, create a temporary wall of magical flame between two points within Far range. All creatures in its path must choose a side to be on, and anything that subsequently passes through the wall takes **4d10+3** magic damage.`
                },
                "manifest-wall": {
                    name: "Manifest Wall",
                    body: `_**Manifest Wall:**_ Make a **Spellcast Roll** **(15)**. Once per rest on a success, **spend a** **Hope** to create a temporary magical wall between two points within Far range. It can be up to 50 feet high and form at any angle. Creatures or objects in its path are shunted to a side of your choice. The wall stays up until your next rest or you cast Manifest Wall again.`
                },
                "teleport": {
                    name: "Teleport",
                    body: `_**Teleport:**_ Once per long rest, you can instantly teleport yourself and any number of willing targets within Close range to a place you've been before. Choose one of the following options, then make a **Spellcast Roll** **(16)**:
- If you know the place very well, gain a +3 bonus.
- If you've visited the place frequently, gain a +1 bonus.
- If you've visited the place infrequently, gain no modifier.
- If you've only been there once, gain a −2 penalty.
On a success, you appear where you were intending to go. On a failure, you appear off course, with the range of failure determining how far off course.`
                },
                "banish": {
                    name: "Banish",
                    body: `_**Banish:**_ Make a **Spellcast Roll** against a target within Close range. On a success, roll a number of **d20s** equal to your Spellcast trait. The target must make a reaction roll with a Difficulty equal to your highest result. On a success, the target must mark a Stress but isn't banished. Once per rest on a failure, they are banished from this realm.
When the PCs roll with Fear, the Difficulty gains a −1 penalty and the target makes another reaction roll. On a success, they return from banishment.`
                },
                "sigil-of-retribution": {
                    name: "Sigil Of Retribution",
                    body: `_**Sigil Of Retribution:**_ Mark an adversary within Close range with a sigil of retribution. The GM gains a Fear. When the marked adversary deals damage to you or your allies, place a **d8** on this card. You can hold a number of **d8s** equal to your level. When you successfully attack the marked adversary, roll the dice on this card and add the total to your damage roll, then clear the dice. This effect ends when the marked adversary is defeated or you cast Sigil of Retribution again.`
                },
                "book-of-homet": {
                    name: "Book Of Homet",
                    body: `_**Pass Through:**_ Make a **Spellcast Roll** **(13)**. Once per rest on a success, you and all creatures touching you can pass through a wall or door within Close range. The effect ends once everyone is on the other side.

_**Plane Gate:**_ Make a **Spellcast Roll (14)**. Once per long rest on a success, open a gateway to a location in another dimension or plane of existence you've been to before. This gateway lasts until your next rest.`
                },
                "codex-touched": {
                    name: "Codex-Touched",
                    body: `_**Codex-Touched:**_ When 4 or more of the domain cards in your loadout are from the Codex domain, gain the following benefits:
- You can **mark a** **Stress** to add your Proficiency to a Spellcast Roll.
- Once per rest, replace this card with any card from your vault without paying its Recall Cost.`
                },
                "book-of-vyola": {
                    name: "Book Of Vyola",
                    body: `_**Memory Delve:**_ Make a **Spellcast Roll** against a target within Far range. On a success, peer into the target's mind and ask the GM a question. The GM describes any memories the target has pertaining to the answer.

_**Shared Clarity:**_ Once per long rest, **spend a** **Hope** to choose two willing creatures. When one of them would mark Stress, they can choose between the two of them who marks it. This spell lasts until their next rest.`
                },
                "safe-haven": {
                    name: "Safe Haven",
                    body: `_**Safe Haven:**_ When you have a few minutes of calm to focus, you can **spend 2** **Hope** to summon your Safe Haven, a large interdimensional home where you and your allies can take shelter. When you do, a magical door appears somewhere within Close range. Only creatures of your choice can enter. Once inside, you can make the entrance invisible. You and anyone else inside can always exit. Once you leave, the doorway must be summoned again.
When you take a rest within your own Safe Haven, you can choose an additional downtime move.`
                },
                "book-of-ronin": {
                    name: "Book Of Ronin",
                    body: `_**Transform:**_ Make a Spellcast Roll **(15)**. On a success, transform into an inanimate object no larger than twice your normal size. You can remain in this shape until you take damage.

_**Eternal Enervation:**_ Once per long rest, make a **Spellcast Roll** against a target within Close range. On a success, they become permanently _Vulnerable_. They can't clear this condition by any means.`
                },
                "disintegration-wave": {
                    name: "Disintegration Wave",
                    body: `_**Disintegration Wave:**_ Make a **Spellcast Roll** **(18)**. Once per long rest on a success, the GM tells you which adversaries within Far range have a Difficulty of 18 or lower. **Mark a** **Stress** for each one you wish to hit with this spell. They are killed and can't come back to life by any means.`
                },
                "book-of-yarrow": {
                    name: "Book Of Yarrow",
                    body: `_**Timejammer:**_ Make a **Spellcast Roll** **(18)**. On a success, time temporarily slows to a halt for everyone within Far range except for you. It resumes the next time you make an action roll that targets another creature.

_**Magic Immunity:**_ **Spend 5** **Hope** to become immune to magic damage until your next rest.`
                },
                "transcendent-union": {
                    name: "Transcendent Union",
                    body: `_**Transcendent Union:**_ Once per long rest, **spend 5** **Hope** to cast this spell on two or more willing creatures. Until your next rest, when a creature connected by this union would mark Stress or Hit Points, the connected creatures can choose who marks it.`
                }
            },
            dread: {
                "blighting-strike": {
                    name: "Blighting Strike",
                    body: `_**Blighting Strike:**_ Make a **Spellcast Roll** against a target within Far range. On a success, the target takes **d6+1** magic damage using your Proficiency and the next time the target deals damage to an ally, it is reduced by half. If you succeed with Fear, the target instead takes **d10+1** magic damage using your Proficiency.`
                },
                "umbral-veil": {
                    name: "Umbral Veil",
                    body: `_**Umbral Veil:**_ Once per rest, when you roll with Fear, you can **spend any number of Hope** to place an equal number of tokens on this card, encasing yourself in a shadowy energy. After an attack roll is made against you, you can spend any number of tokens to give the attack roll a **-1** penalty per token. On your next rest, remove all tokens from this card.`
                },
                "voice-of-dread": {
                    name: "Voice Of Dread",
                    body: `_**Voice Of Dread:**_ You can magically speak directly into the ears of a creature you can see. To torment them with your words, make a **Spellcast Roll** against them. On a success, they must mark a Stress and become temporarily _Vulnerable_.`
                },
                "hideous-retribution": {
                    name: "Hideous Retribution",
                    body: `_**Hideous Retribution:**_ When an ally within Close range takes damage from a target you can see, you can make a **Spellcast Reaction Roll** against the target. On a success, **mark a Stress** to deal them **d6** magic damage using your Proficiency.`
                },
                "siphon-essence": {
                    name: "Siphon Essence",
                    body: `_**Siphon Essence:**_ Make a **Spellcast Roll** against a target within Very Close range. On a success, once per long rest, the target takes **d20** magic damage using your Proficiency. You clear a number of Hit Points equal to the number Hit Points the target marked from this attack. On a success with Fear, you gain a +1 bonus to your Proficiency for this attack.`
                },
                "shared-trauma": {
                    name: "Shared Trauma",
                    body: `_**Shared Trauma:**_ You can transfer suffering from one creature to another. Once per rest, mark any number of Hit Points on a willing creature within Melee range to clear an equal number of Hit Points on another willing creature within Melee range. You can choose yourself in place of either creature.`
                },
                "terrify": {
                    name: "Terrify",
                    body: `_**Terrify:**_ Make a **Spellcast Roll** against a target within Far range. On a success, the target marks **1d4 Stress** and you can choose to make the target run one range away from you (Close to Far, Far to Very Far, etc). On a success with Fear, the target becomes temporarily _Vulnerable_.`
                },
                "chains-of-affliction": {
                    name: "Chains Of Affliction",
                    body: `_**Chains Of Affliction:**_ Mark **2 Stress** to temporarily _Chain_ a target within Close range. When a _Chained_ creature deals damage, the target of their attack reduces the number of Hit Points they mark by one. You can't have more than one creature _Chained_ at a time.`
                },
                "summon-horror": {
                    name: "Summon Horror",
                    body: `_**Summon Horror:**_ Make a **Spellcast Roll** against a target within Far range. On a success, **spend a Hope** to call forth an otherworldly creature to attack them and deal **d10** magic damage using your Proficiency. The target must succeed on a **Reaction Roll (12)** to steel themselves from the horror or mark **1d4 Stress**.
After making the attack, the creature dissipates.`
                },
                "dire-strike": {
                    name: "Dire Strike",
                    body: `_**Dire Strike:**_ After making a successful attack, you can **spend 2 Hope** to leach power from the target. For each Hit Point your target marked from this attack, the GM loses a Fear.`
                },
                "spectral-mist": {
                    name: "Spectral Mist",
                    body: `_**Spectral Mist:**_ **Mark a Stress** to summon an eerie mist that turns you and any targets within Close range momentarily incorporeal. While a creature is incorporeal, they can move through solid objects and are immune to physical damage. A creature becomes corporeal again after they pass through a solid object or make an action roll. Otherwise, this effect drops at the end of the scene.`
                },
                "darkfire": {
                    name: "Darkfire",
                    body: `_**Darkfire:**_ Make a **Spellcast Roll** against all adversaries within Close range. You can **spend a Hope** for any you succeed against, and they must make a **Reaction Roll (14)**. On a failure, they take **d8+6** magic damage using your Proficiency as they are engulfed in dark fire. On a success, they take half damage.`
                },
                "jump-scare": {
                    name: "Jump Scare",
                    body: `_**Jump Scare:**_ When you deal magic damage to a target, you can **mark a Stress** to immediately teleport into Melee range of them. When you do, they become _Vulnerable_ until they mark one or more Hit Points.`
                },
                "dread-touched": {
                    name: "Dread-Touched",
                    body: `_**Dread-Touched:**_ When 4 or more of the domain cards in your loadout are from the Dread domain, gain the following benefits:
- When you succeed with Fear, you can **mark 2 Stress** to keep the GM from gaining a Fear.
- Once per rest, when making an action roll, you can add a +1 bonus to the roll for each Fear token the GM has stored.`
                },
                "wall-of-hunger": {
                    name: "Wall Of Hunger",
                    body: `_**Wall Of Hunger:**_ Succeed a **Spellcast Roll (13)** to create a visible wall of writhing, necrotic energy in a line between two points within Far range that lasts until you mark a Hit Point or cast this spell again. Any creatures inside the wall when it appears or who try to pass through the wall must **mark 2 Stress**, then make a **Reaction Roll (16)**. On a failure, they are temporarily _Restrained_ by the wall.`
                },
                "dark-army": {
                    name: "Dark Army",
                    body: `_**Dark Army:**_ Make a **Spellcast Roll (14)**. Once per long rest, on a success you can summon a group of fiends that surround and move with you. Place 8 tokens on this card. When you deal damage to a target within Very Close range, you can spend a token to increase it by **+1d8**. Additionally, when you take damage, you can spend a token to reduce it by **1d8**. Each time you spend a token, a fiend acts on your behalf, then disappears.
Remove all tokens from this card on your next rest.`
                },
                "eldritch-flesh": {
                    name: "Eldritch Flesh",
                    body: `_**Eldritch Flesh:**_ You embody the darkness you have dallied with. When this card is in your loadout:
- Gain a +1 bonus to your damage thresholds for each Stress you have marked.
- When you roll with Fear, you can **spend 2 Hope** to clear an Armor Slot.`
                },
                "damnation": {
                    name: "Damnation",
                    body: `_**Damnation:**_ Make a **Spellcast Roll** against a target within Far range. On a success, mark **any number of Stress** to roll an equal number of **d20s**, dealing magic damage equal to the total result. If the target is defeated as a result of this attack, all adversaries within Far range of the target mark a Stress.`
                },
                "savor-the-anguish": {
                    name: "Savor The Anguish",
                    body: `_**Savor The Anguish:**_ When an adversary within Close range marks Stress or takes Severe damage, you can **spend a Hope** to clear a Stress or force the GM to lose a Fear.`
                },
                "avatar-of-terror": {
                    name: "Avatar Of Terror",
                    body: `_**Avatar Of Terror:**_ **Mark a Stress** to transform into a creature fueled by fear. While in this form, your damage rolls gain a **+1d6** bonus for each Fear the GM has. Additionally, gain a Hope when the GM uses a Fear feature on an adversary within Close range.
You must **spend a Hope** to make an action roll while in this form. Otherwise, you drop out of this form.`
                },
                "invoke-torment": {
                    name: "Invoke Torment",
                    body: `_**Invoke Torment:**_ Targets with all of their Stress marked take double damage from your attacks.
Additionally, when you defeat a creature with all of its Stress marked, you clear a Stress.`
                }
            },
            grace: {
                "deft-deceiver": {
                    name: "Deft Deceiver",
                    body: `_**Deft Deceiver:**_ **Spend a** **Hope** to gain advantage on a roll to deceive or trick someone into believing a lie you tell them.`
                },
                "enrapture": {
                    name: "Enrapture",
                    body: `_**Enrapture:**_ Make a **Spellcast Roll** against a target within Close range. On a success, they become temporarily _Enraptured_. While _Enraptured_, a target's attention is fixed on you, narrowing their field of view and drowning out any sound but your voice. Once per rest on a success, you can **mark a** **Stress** to force the _Enraptured_ target to mark a Stress as well.`
                },
                "inspirational-words": {
                    name: "Inspirational Words",
                    body: `_**Inspirational Words:**_ Your speech is imbued with power. After a long rest, place a number of tokens on this card equal to your Presence. When you speak with an ally, you can spend a token from this card to give them one benefit from the following options:
- Your ally clears a Stress.
- Your ally clears a Hit Point.
- Your ally gains a Hope.
When you take a long rest, clear all unspent tokens.`
                },
                "tell-no-lies": {
                    name: "Tell No Lies",
                    body: `_**Tell No Lies:**_ Make a **Spellcast Roll** against a target within Very Close range. On a success, they can't lie to you while they remain within Close range, but they are not compelled to speak. If you ask them a question and they refuse to answer, they must mark a Stress and the effect ends. The target is typically unaware this spell has been cast on them until it causes them to utter the truth.`
                },
                "troublemaker": {
                    name: "Troublemaker",
                    body: `_**Troublemaker:**_ When you taunt or provoke a target within Far range, make a **Presence** **Roll** against them. Once per rest on a success, roll a number of **d4s** equal to your Proficiency. The target must mark Stress equal to the highest result rolled.`
                },
                "hypnotic-shimmer": {
                    name: "Hypnotic Shimmer",
                    body: `_**Hypnotic Shimmer:**_ Make a **Spellcast Roll** against all adversaries in front of you within Close range. Once per rest on a success, create an illusion of flashing colors and lights that temporarily _Stuns_ targets you succeed against and forces them to mark a Stress. While _Stunned_, they can't use reactions and can't take any other actions until they clear this condition.`
                },
                "invisibility": {
                    name: "Invisibility",
                    body: `_**Invisibility:**_ Make a **Spellcast Roll** **(10)**. On a success, **mark a** **Stress** and choose yourself or an ally within Melee range to become _Invisible_. An _Invisible_ creature can't be seen except through magical means and attack rolls against them are made with disadvantage. Place a number of tokens on this card equal to your Spellcast Trait. When the _Invisible_ creature takes an action, spend a token from this card. After the action that spends the last token is resolved, the effect ends.
You can only hold Invisibility on one creature at a time.`
                },
                "soothing-speech": {
                    name: "Soothing Speech",
                    body: `_**Soothing Speech:**_ During a short rest, when you take the time to comfort another character while using the Tend to Wounds downtime move on them, clear an additional Hit Point on that character. When you do, you also clear 2 Hit Points.`
                },
                "through-your-eyes": {
                    name: "Through Your Eyes",
                    body: `_**Through Your Eyes:**_ Choose a target within Very Far range. You can see through their eyes and hear through their ears. You can transition between using your own senses or the target's freely until you cast another spell or until your next rest.`
                },
                "thought-delver": {
                    name: "Thought Delver",
                    body: `_**Thought Delver:**_ You can peek into the minds of others. **Spend a** **Hope** to read the vague surface thoughts of a target within Far range. Make a **Spellcast Roll** against the target to delve for deeper, more hidden thoughts.
On a roll with Fear, the target might, at the GM's discretion, become aware that you're reading their thoughts.`
                },
                "words-of-discord": {
                    name: "Words Of Discord",
                    body: `_**Words Of Discord:**_ Whisper words of discord to an adversary within Melee range and make a **Spellcast Roll** **(13)**. On a success, the target must mark a Stress and make an attack against another adversary instead of against you or your allies.
Once this attack is over, the target realizes what happened. The next time you cast Words of Discord on them, gain a −5 penalty to the Spellcast Roll.`
                },
                "never-upstaged": {
                    name: "Never Upstaged",
                    body: `_**Never Upstaged:**_ When you mark 1 or more Hit Points from an attack, you can **mark a** **Stress** to place a number of tokens equal to the number of Hit Points you marked on this card. On your next successful attack, gain a +5 bonus to your damage roll for each token on this card, then clear all tokens.`
                },
                "share-the-burden": {
                    name: "Share The Burden",
                    body: `_**Share The Burden:**_ Once per rest, take on the Stress from a willing creature within Melee range. The target describes what intimate knowledge or emotions telepathically leak from their mind in this moment between you. Transfer any number of their marked Stress to you, then gain a Hope for each Stress transferred.`
                },
                "endless-charisma": {
                    name: "Endless Charisma",
                    body: `_**Endless Charisma:**_ After you make an action roll to persuade, lie, or garner favor, you can **spend a** **Hope** to reroll the Hope or Fear Die.`
                },
                "grace-touched": {
                    name: "Grace-Touched",
                    body: `_**Grace-Touched:**_ When 4 or more of the domain cards in your loadout are from the Grace domain, gain the following benefits:
- You can **mark an** **Armor Slot** instead of marking a Stress.
- When you would force a target to mark a number of Hit Points, you can choose instead to force them to mark that number of Stress.`
                },
                "astral-projection": {
                    name: "Astral Projection",
                    body: `_**Astral Projection:**_ Once per long rest, **mark a** **Stress** to create a projected copy of yourself that can appear anywhere you've been before.
You can see and hear through the projection as though it were you and affect the world as though you were there. A creature investigating the projection can tell it's of magical origin. This effect lasts until your next rest or your projection takes any damage.`
                },
                "mass-enrapture": {
                    name: "Mass Enrapture",
                    body: `_**Mass Enrapture:**_ Make a **Spellcast Roll** against all targets within Far range. Targets you succeed against become temporarily _Enraptured_. While _Enraptured_, a target's attention is fixed on you, narrowing their field of view and drowning out any sound but your voice. **Mark a** **Stress** to force all _Enraptured_ targets to mark a Stress, ending this spell.`
                },
                "copycat": {
                    name: "Copycat",
                    body: `_**Copycat:**_ Once per long rest, this card can mimic the features of another domain card of level 8 or lower in another player's loadout. **Spend** **Hope** **equal to half the card's level** to gain access to the feature. It lasts until your next rest or they place the card in their vault.`
                },
                "master-of-the-craft": {
                    name: "Master Of The Craft",
                    body: `_**Master Of The Craft:**_ Gain a permanent +2 bonus to two of your Experiences or a permanent +3 bonus to one of your Experiences. Then place this card in your vault permanently.`
                },
                "encore": {
                    name: "Encore",
                    body: `_**Encore:**_ When an ally within Close range deals damage to an adversary, you can make a **Spellcast Roll** against that same target. On a success, you deal the same damage to the target that your ally dealt. If your Spellcast Roll succeeds with Fear, place this card in your vault.`
                },
                "notorious": {
                    name: "Notorious",
                    body: `_**Notorious:**_ People know who you are and what you've done, and they treat you differently because of it. When you leverage your notoriety to get what you want, you can **mark a** **Stress** before you roll to gain a +10 bonus to the result. Your food and drinks are always free wherever you go, and everything else you buy is reduced in price by one bag of gold (to a minimum of one handful).
This card doesn't count against your loadout's domain card maximum of 5 and can't be placed in your vault.`
                }
            },
            midnight: {
                "pick-and-pull": {
                    name: "Pick And Pull",
                    body: `_**Pick And Pull:**_ You have advantage on action rolls to pick nonmagical locks, disarm nonmagical traps, or steal items from a target (either through stealth or by force).`
                },
                "rain-of-blades": {
                    name: "Rain of Blades",
                    body: `_**Rain of Blades:**_ **Spend a** **Hope** to make a **Spellcast Roll** and conjure throwing blades that strike out at all targets within Very Close range. Targets you succeed against take **d8+2** magic damage using your Proficiency.
If a target you hit is _Vulnerable_, they take an extra **1d8** damage.`
                },
                "uncanny-disguise": {
                    name: "Uncanny Disguise",
                    body: `_**Uncanny Disguise:**_ When you have a few minutes to prepare, you can **mark a** **Stress** to don the facade of any humanoid you can picture clearly in your mind. While disguised, you have advantage on Presence Rolls to avoid scrutiny.
Place a number of tokens equal to your Spellcast trait on this card. When you take an action while disguised, spend a token from this card. After the action that spends the last token is resolved, the disguise drops.`
                },
                "midnight-spirit": {
                    name: "Midnight Spirit",
                    body: `_**Midnight Spirit:**_ **Spend a** **Hope** to summon a humanoid-sized spirit that can move or carry things for you until your next rest.
You can also send it to attack an adversary. When you do, make a **Spellcast Roll** against a target within Very Far range. On a success, the spirit moves into Melee range with that target. Roll a number of **d6s** equal to your Spellcast trait and deal that much magic damage to the target. The spirit then dissipates. You can only have one spirit at a time.`
                },
                "shadowbind": {
                    name: "Shadowbind",
                    body: `_**Shadowbind:**_ Make a **Spellcast Roll** against all adversaries within Very Close range. Targets you succeed against are temporarily _Restrained_ as their shadow binds them in place.`
                },
                "chokehold": {
                    name: "Chokehold",
                    body: `_**Chokehold:**_ When you position yourself behind a creature who's about your size, you can **mark a** **Stress** to pull them into a chokehold, making them temporarily _Vulnerable_.
When a creature attacks a target who is _Vulnerable_ in this way, they deal an extra **2d6** damage.`
                },
                "veil-of-night": {
                    name: "Veil of Night",
                    body: `_**Veil of Night:**_ Make a **Spellcast Roll** **(13)**. On a success, you can create a temporary curtain of darkness between two points within Far range. Only you can see through this darkness. You're considered _Hidden_ to adversaries on the other side of the veil, and you have advantage on attacks you make through the darkness. The veil remains until you cast another spell.`
                },
                "glyph-of-nightfall": {
                    name: "Glyph of Nightfall",
                    body: `_**Glyph of Nightfall:**_ Make a **Spellcast Roll** against a target within Very Close range. On a success, **spend a** **Hope** to conjure a dark glyph upon their body that exposes their weak points, temporarily reducing the target's Difficulty by a value equal to your Knowledge (minimum 1).`
                },
                "stealth-expertise": {
                    name: "Stealth Expertise",
                    body: `_**Stealth Expertise:**_ When you roll with Fear while attempting to move unnoticed through a dangerous area, you can **mark a** **Stress** to roll with Hope instead.
If an ally within Close range is also attempting to move unnoticed and rolls with Fear, you can **mark a Stress** to change their result to a roll with Hope.`
                },
                "hush": {
                    name: "Hush",
                    body: `_**Hush:**_ Make a **Spellcast Roll** against a target within Close range. On a success, **spend a** **Hope** to conjure suppressive magic around the target that encompasses everything within Very Close range of them and follows them as they move.
The target and anything within the area is _Silenced_ until the GM spends a Fear on their turn to clear this condition, you cast Hush again, or you take Major damage. While _Silenced_, they can't make noise and can't cast spells.`
                },
                "phantom-retreat": {
                    name: "Phantom Retreat",
                    body: `_**Phantom Retreat:**_ **Spend a** **Hope** to activate Phantom Retreat where you're currently standing. **Spend another Hope** at any time before your next rest to disappear from where you are and reappear where you were standing when you activated Phantom Retreat. This spell ends after you reappear.`
                },
                "dark-whispers": {
                    name: "Dark Whispers",
                    body: `_**Dark Whispers:**_ You can speak into the mind of any person with whom you've made physical contact. Once you've opened a channel with them, they can speak back into your mind. Additionally, you can **mark a** **Stress** to make a **Spellcast Roll** against them. On a success, you can ask the GM one of the following questions and receive an answer:
- Where are they?
- What are they doing?
- What are they afraid of?
- What do they cherish most in the world?`
                },
                "mass-disguise": {
                    name: "Mass Disguise",
                    body: `_**Mass Disguise:**_ When you have a few minutes of silence to focus, you can **mark a** **Stress** to change the appearance of all willing creatures within Close range. Their new forms must share a general body structure and size, and can be somebody or something you've seen before or entirely fabricated. A disguised creature has advantage on Presence Rolls to avoid scrutiny.
Activate a Countdown (8). It ticks down as a consequence the GM chooses. When it triggers, the disguise drops.`
                },
                "midnight-touched": {
                    name: "Midnight-Touched",
                    body: `_**Midnight-Touched:**_ When 4 or more of the domain cards in your loadout are from the Midnight domain, gain the following benefits:
- Once per rest, when you have 0 Hope and the GM would gain a Fear, you can gain a Hope instead.
- When you make a successful attack, you can **mark a** **Stress** to add the result of your Fear Die to your damage roll.`
                },
                "vanishing-dodge": {
                    name: "Vanishing Dodge",
                    body: `_**Vanishing Dodge:**_ When an attack made against you that would deal physical damage fails, you can **spend a** **Hope** to envelop yourself in shadow, becoming _Hidden_ and teleporting to a point within Close range of the attacker. You remain _Hidden_ until the next time you make an action roll.`
                },
                "shadowhunter": {
                    name: "Shadowhunter",
                    body: `_**Shadowhunter:**_ Your prowess is enhanced under the cover of shadow. While you're shrouded in low light or darkness, you gain a +1 bonus to your Evasion and make attack rolls with advantage.`
                },
                "spellcharge": {
                    name: "Spellcharge",
                    body: `_**Spellcharge:**_ When you take magic damage, place tokens equal to the number of Hit Points you marked on this card. You can store a number of tokens equal to your Spellcast trait.
When you make a successful attack against a target, you can spend any number of tokens to add a **d6** for each token spent to your damage roll.`
                },
                "night-terror": {
                    name: "Night Terror",
                    body: `_**Night Terror:**_ Once per long rest, choose any targets within Very Close range to perceive you as a nightmarish horror. The targets must succeed on a Reaction Roll (16) or become temporarily _Horrified_. While _Horrified_, they're _Vulnerable_. Steal a number of Fear from the GM equal to the number of targets that are _Horrified_ (up to the number of Fear in the GM's pool). Roll a number of **d6s** equal to the number of stolen Fear and deal the total damage to each _Horrified_ target. Discard the stolen Fear.`
                },
                "twilight-toll": {
                    name: "Twilight Toll",
                    body: `_**Twilight Toll:**_ Choose a target within Far range. When you succeed on an action roll against them that doesn't result in making a damage roll, place a token on this card. When you deal damage to this target, spend any number of tokens to add a **d12** for each token spent to your damage roll. You can only hold Twilight Toll on one creature at a time.
When you choose a new target or take a rest, clear all unspent tokens.`
                },
                "eclipse": {
                    name: "Eclipse",
                    body: `_**Eclipse:**_ Make a **Spellcast Roll** **(16)**. Once per long rest on a success, plunge the entire area within Far range into complete darkness only you and your allies can see through. Attack rolls have disadvantage when targeting you or an ally within this shadow.
Additionally, when you or an ally succeeds with Hope against an adversary within this shadow, the target must mark a Stress.
This spell lasts until the GM spends a **Fear** on their turn to clear this effect or you take Severe damage.`
                },
                "specter-of-the-dark": {
                    name: "Specter of The Dark",
                    body: `_**Specter of The Dark:**_ **Mark a** **Stress** to become _Spectral_ until you make an action roll targeting another creature. While _Spectral_, you're immune to physical damage and can float and pass through solid objects. Other creatures can still see you while you're in this form.`
                }
            },
            sage: {
                "gifted-tracker": {
                    name: "Gifted Tracker",
                    body: `_**Gifted Tracker:**_ When you're tracking a specific creature or group of creatures based on signs of their passage, you **can spend any number of** **Hope** and ask the GM that many questions from the following list.
- What direction did they go?
- How long ago did they pass through?
- What were they doing in this location?
- How many of them were here?
When you encounter creatures you've tracked in this way, gain a +1 bonus to your Evasion against them.`
                },
                "natures-tongue": {
                    name: "Nature's Tongue",
                    body: `_**Nature's Tongue:**_ You can speak the language of the natural world. When you want to speak to the plants and animals around you, make an **Instinct** **Roll (12)**. On a success, they'll give you the information they know. On a roll with Fear, their knowledge might be limited or come at a cost.
Additionally, before you make a Spellcast Roll while within a natural environment, you can **spend a** **Hope** to gain a +2 bonus to the roll.`
                },
                "vicious-entangle": {
                    name: "Vicious Entangle",
                    body: `_**Vicious Entangle:**_ Make a **Spellcast Roll** against a target within Far range. On a success, roots and vines reach out from the ground, dealing **1d8+1** physical damage and temporarily _Restraining_ the target.
Additionally on a success, you can **spend a** **Hope** to temporarily _Restrain_ another adversary within Very Close range of your target.`
                },
                "conjure-swarm": {
                    name: "Conjure Swarm",
                    body: `_**Tekaira Armored Beetles:**_ **Mark a** **Stress** to conjure armored beetles that encircle you. When you next take damage, reduce the severity by one threshold. You can **spend a** **Hope** to keep the beetles conjured after taking damage.

_**Fire Flies:**_ Make a **Spellcast Roll** against all adversaries within Close range. **Spend a Hope** to deal **2d8+3** magic damage to targets you succeeded against.`
                },
                "natural-familiar": {
                    name: "Natural Familiar",
                    body: `_**Natural Familiar:**_ **Spend a** **Hope** to summon a small nature spirit or forest critter to your side until your next rest, you cast Natural Familiar again, or the familiar is targeted by an attack. If you **spend an additional Hope**, you can summon a familiar that flies. You can communicate with them, make a **Spellcast Roll** to command them to perform simple tasks, and **mark a** **Stress** to see through their eyes.
When you deal damage to an adversary within Melee range of your familiar, you add a **d6** to your damage roll.`
                },
                "corrosive-projectile": {
                    name: "Corrosive Projectile",
                    body: `_**Corrosive Projectile:**_ Make a **Spellcast Roll** against a target within Far range. On a success, deal **d6+4** magic damage using your Proficiency. Additionally, **mark 2 or more** **Stress** to make them permanently _Corroded_. While a target is _Corroded_, they gain a −1 penalty to their Difficulty for every 2 Stress you spent. This condition can stack.`
                },
                "towering-stalk": {
                    name: "Towering Stalk",
                    body: `_**Towering Stalk:**_ Once per rest, you can conjure a thick, twisting stalk within Close range that can be easily climbed. Its height can grow up to Far range.
**Mark a** **Stress** to use this spell as an attack. Make a **Spellcast Roll** against an adversary or group of adversaries within Close range. The erupting stalk lifts targets you succeed against into the air and drops them, dealing **d8** physical damage using your Proficiency.`
                },
                "death-grip": {
                    name: "Death Grip",
                    body: `_**Death Grip:**_ Make a **Spellcast Roll** against a target within Close range and choose one of the following options:
- You pull the target into Melee range or pull yourself into Melee range of them.
- You constrict the target and force them to mark 2 Stress.
- All adversaries between you and the target must succeed on a Reaction Roll (13) or be hit by vines, taking **3d6+2** physical damage.
On a success, vines reach out from your hands, causing the chosen effect and temporarily _Restraining_ the target.`
                },
                "healing-field": {
                    name: "Healing Field",
                    body: `_**Healing Field:**_ Once per long rest, you can conjure a field of healing plants around you. Everywhere within Close range of you bursts to life with vibrant nature, allowing you and all allies in the area to clear a Hit Point.
**Spend 2** **Hope** to allow you and all allies to clear 2 Hit Points instead.`
                },
                "thorn-skin": {
                    name: "Thorn Skin",
                    body: `_**Thorn Skin:**_ Once per rest, **spend a** **Hope** to sprout thorns all over your body. When you do, place a number of tokens equal to your Spellcast trait on this card. When you take damage, you can spend any number of tokens to roll that number of **d6s**. Add the results together and reduce the incoming damage by that amount. If you're within Melee range of the attacker, deal that amount of damage back to them.
When you take a rest, clear all unspent tokens.`
                },
                "wild-fortress": {
                    name: "Wild Fortress",
                    body: `_**Wild Fortress:**_ Make a **Spellcast Roll** **(13)**. On a success, **spend 2** **Hope** to grow a natural barricade in the shape of a dome that you and one ally can take cover within. While inside the dome, a creature can't be targeted by attacks and can't make attacks. Attacks made against the dome automatically succeed. The dome has a Major Damage threshold of 15 and a Severe damage threshold of 30, and lasts until it marks 3 Hit Points. Place tokens on this card to represent marking Hit Points.`
                },
                "conjured-steeds": {
                    name: "Conjured Steeds",
                    body: `_**Conjured Steeds:**_ **Spend any number of** **Hope** to conjure that many magical steeds (such as horses, camels, or elephants) that you and your allies can ride until your next long rest or the steeds take any damage. The steeds double your land speed while traveling and, when in danger, allow you to move within Far range without having to roll. Creatures riding a steed gain a −2 penalty to attack rolls and a +2 bonus to damage rolls.`
                },
                "forager": {
                    name: "Forager",
                    body: `_**Forager:**_ As an additional downtime move you can choose, roll a d6 to see what you forage. Work with the GM to describe it and add it to your inventory as a consumable. Your party can carry up to five foraged consumables at a time.
- A unique food (Clear 2 Stress)
- A beautiful relic (Gain 2 Hope)
- An arcane rune (+2 to a Spellcast Roll)
- A healing vial (Clear 2 Hit Points)
- A luck charm (Reroll any die)
- Choose one of the options above.`
                },
                "sage-touched": {
                    name: "Sage-Touched",
                    body: `_**Sage-Touched:**_ When 4 or more of the domain cards in your loadout are from the Sage domain, gain the following benefits:
- While you're in a natural environment, you gain a +2 bonus to your Spellcast Rolls.
- Once per rest, you can double your Agility or Instinct when making a roll that uses that trait. You must choose to do this before you roll.`
                },
                "wild-surge": {
                    name: "Wild Surge",
                    body: `_**Wild Surge:**_ Once per long rest, **mark a** **Stress** to channel the natural world around you and enhance yourself. Describe how your appearance changes, then place a **d6** on this card with the 1 value facing up.
While the Wild Surge Die is active, you add its value to every action roll you make. After you add its value to a roll, increase the Wild Surge Die's value by one. When the die's value would exceed 6 or you take a rest, this form drops and you must **mark an additional Stress**.`
                },
                "forest-sprites": {
                    name: "Forest Sprites",
                    body: `_**Forest Sprites:**_ Make a **Spellcast Roll** **(13)**. On a success, **spend any number of** **Hope** to create an equal number of small forest sprites who appear at points you choose within Far range, providing the following benefits:
- Your allies gain a +3 bonus to attack rolls against adversaries within Melee range of a sprite.
- An ally who marks an Armor Slot while within Melee range of a sprite can mark an additional Armor Slot.
A sprite vanishes after granting a benefit or taking any damage.`
                },
                "rejuvenation-barrier": {
                    name: "Rejuvenation Barrier",
                    body: `_**Rejuvenation Barrier:**_ Make a **Spellcast Roll** **(15)**. Once per rest on a success, create a temporary barrier of protective energy around you at Very Close range. You and all allies within the barrier when this spell is cast clear **1d4** Hit Points. While the barrier is up, you and all allies within have resistance to physical damage from outside the barrier.
When you move, the barrier follows you.`
                },
                "fane-of-the-wilds": {
                    name: "Fane of The Wilds",
                    body: `_**Fane of The Wilds:**_ After a long rest, place a number of tokens equal to the number of Sage domain cards in your loadout and vault on this card.
When you would make a Spellcast Roll, you can spend any number of tokens after the roll to gain a +1 bonus for each token spent.
When you critically succeed on a Spellcast Roll for a Sage domain spell, gain a token.
When you take a long rest, clear all unspent tokens.`
                },
                "plant-dominion": {
                    name: "Plant Dominion",
                    body: `_**Plant Dominion:**_ Make a **Spellcast Roll** **(18)**. Once per long rest on a success, you reshape the natural world, changing the surrounding plant life anywhere within Far range of you. For example, you can grow trees instantly, clear a path through dense vines, or create a wall of roots.`
                },
                "force-of-nature": {
                    name: "Force of Nature",
                    body: `_**Force of Nature:**_ **Mark a** **Stress** to transform into a hulking nature spirit, gaining the following benefits:
- When you succeed on an attack or Spellcast Roll, gain a +10 bonus to the damage roll.
- When you deal enough damage to defeat a creature within Close range, you absorb them and clear an Armor Slot.
- You can't be _Restrained_.
Before you make an action roll, you must **spend a** **Hope**. If you can't, you revert to your normal form.`
                },
                "tempest": {
                    name: "Tempest",
                    body: `_**Tempest:**_ Choose one of the following tempests and make a **Spellcast Roll** against all targets within Far range. Targets you succeed against experience its effects until the GM spends a Fear on their turn to end this spell.
- _**Blizzard:**_ Deal **2d20+8** magic damage and targets are temporarily _Vulnerable_.
- _**Hurricane:**_ Deal **3d10+10** magic damage and choose a direction the wind is blowing. Targets can't move against the wind.
- _**Sandstorm:**_ Deal **5d6+9** magic damage. Attacks made from beyond Melee range have disadvantage.`
                }
            },
            splendor: {
                "bolt-beacon": {
                    name: "Bolt Beacon",
                    body: `_**Bolt Beacon:**_ Make a **Spellcast Roll** against a target within Far range. On a success, **spend a** **Hope** to send a bolt of shimmering light toward them, dealing **d8+2** magic damage using your Proficiency. The target becomes temporarily _Vulnerable_ and glows brightly until this condition is cleared.`
                },
                "mending-touch": {
                    name: "Mending Touch",
                    body: `_**Mending Touch:**_ You lay your hands upon a creature and channel healing magic to close their wounds. When you can take a few minutes to focus on the target you're helping, you can **spend 2** **Hope** to clear a Hit Point or a Stress on them.
Once per long rest, when you spend this healing time learning something new about them or revealing something about yourself, you can clear 2 Hit Points or 2 Stress on them instead.`
                },
                "reassurance": {
                    name: "Reassurance",
                    body: `_**Reassurance:**_ Once per rest, after an ally attempts an action roll but before the consequences take place, you can offer assistance or words of support. When you do, your ally can reroll their dice.`
                },
                "final-words": {
                    name: "Final Words",
                    body: `_**Final Words:**_ You can infuse a corpse with a moment of life to speak with it. Make a **Spellcast Roll** **(13)**. On a success with Hope, the corpse answers up to three questions. On a success with Fear, the corpse answers one question. The corpse answers truthfully, but it can't impart information it didn't know in life. On a failure, or once the corpse has finished answering your questions, the body turns to dust.`
                },
                "healing-hands": {
                    name: "Healing Hands",
                    body: `_**Healing Hands:**_ Make a **Spellcast Roll** **(13)** and target a creature other than yourself within Melee range. On a success, **mark a** **Stress** to clear 2 Hit Points or 2 Stress on the target. On a failure, **mark a Stress** to clear a Hit Point or a Stress on the target. You can't heal the same target again until your next long rest.`
                },
                "second-wind": {
                    name: "Second Wind",
                    body: `_**Second Wind:**_ Once per rest, when you succeed on an attack against an adversary, you can clear 3 Stress or a Hit Point. On a success with Hope, you also clear 3 Stress or a Hit Point on an ally within Close range of you.`
                },
                "voice-of-reason": {
                    name: "Voice of Reason",
                    body: `_**Voice of Reason:**_ You speak with an unmatched power and authority. You have advantage on action rolls to de-escalate violent situations or convince someone to follow your lead.
Additionally, you're emboldened in moments of duress. When all of your Stress slots are marked, you gain a +1 bonus to your Proficiency for damage rolls.`
                },
                "divination": {
                    name: "Divination",
                    body: `_**Divination:**_ Once per long rest, **spend 3** **Hope** to reach out to the forces beyond and ask one "yes or no" question about an event, person, place, or situation in the near future. For a moment, the present falls away and you see the answer before you.`
                },
                "life-ward": {
                    name: "Life Ward",
                    body: `_**Life Ward:**_ **Spend 3** **Hope** and choose an ally within Close range. They are marked with a glowing sigil of protection. When this ally would make a death move, they clear a Hit Point instead.

This effect ends when it saves the target from a death move, you cast Life Ward on another target, or you take a long rest.`
                },
                "shape-material": {
                    name: "Shape Material",
                    body: `_**Shape Material:**_ **Spend a** **Hope** to shape a section of natural material you're touching (such as stone, ice, or wood) to suit your purpose. The area of the material can be no larger than you. For example, you can form a rudimentary tool or create a door.
You can only affect the material within Close range of where you're touching it.`
                },
                "smite": {
                    name: "Smite",
                    body: `_**Smite:**_ Once per rest, **spend 3** **Hope** to charge your powerful smite. When you next successfully attack with a weapon, double the result of your damage roll. This attack deals magic damage regardless of the weapon's damage type.`
                },
                "restoration": {
                    name: "Restoration",
                    body: `_**Restoration:**_ After a long rest, place a number of tokens equal to your Spellcast trait on this card. Touch a creature and spend any number of tokens to clear 2 Hit Points or 2 Stress for each token spent.
You can also spend a token from this card when touching a creature to clear the _Vulnerable_ condition or heal a physical or magical ailment (the GM might require additional tokens depending on the strength of the ailment).
When you take a long rest, clear all unspent tokens.`
                },
                "zone-of-protection": {
                    name: "Zone of Protection",
                    body: `_**Zone of Protection:**_ Make a **Spellcast Roll** **(16)**. Once per long rest on a success, choose a point within Far range and create a visible zone of protection there for all allies within Very Close range of that point. When you do, place a **d6** on this card with the 1 value facing up. When an ally in this zone takes damage, they reduce it by the die's value. You then increase the die's value by one. When the die's value would exceed 6, this effect ends.`
                },
                "healing-strike": {
                    name: "Healing Strike",
                    body: `_**Healing Strike:**_ When you deal damage to an adversary, you can **spend 2** **Hope** to clear a Hit Point on an ally within Close range.`
                },
                "splendor-touched": {
                    name: "Splendor-Touched",
                    body: `_**Splendor-Touched:**_ When 4 or more of the domain cards in your loadout are from the Splendor domain, gain the following benefits:
- +3 bonus to your Severe damage threshold
- Once per long rest, when incoming damage would require you to mark a number of Hit Points, you can choose to mark that much Stress or spend that much Hope instead.`
                },
                "shield-aura": {
                    name: "Shield Aura",
                    body: `_**Shield Aura:**_ **Mark a** **Stress** to cast a protective aura on a target within Very Close range. When the target marks an Armor Slot, they reduce the severity of the attack by an additional threshold. If this spell causes a creature who would be damaged to instead mark no Hit Points, the effect ends.
You can only hold Shield Aura on one creature at a time.`
                },
                "stunning-sunlight": {
                    name: "Stunning Sunlight",
                    body: `_**Stunning Sunlight:**_ Make a **Spellcast Roll** to unleash powerful rays of burning sunlight against all adversaries in front of you within Far range. On a success, **spend any number of** **Hope** and force that many targets you succeeded against to make a Reaction Roll (14).
Targets who succeed take **3d20+3** magic damage. Targets who fail take **4d20+5** magic damage and are temporarily _Stunned_. While _Stunned_, they can't use reactions and can't take any other actions until they clear this condition.`
                },
                "overwhelming-aura": {
                    name: "Overwhelming Aura",
                    body: `_**Overwhelming Aura:**_ Make a **Spellcast Roll** **(15)** to magically empower your aura. On a success, **spend 2** **Hope** to make your Presence equal to your Spellcast trait until your next long rest.
While this spell is active, an adversary must mark a Stress when they target you with an attack.`
                },
                "salvation-beam": {
                    name: "Salvation Beam",
                    body: `_**Salvation Beam:**_ Make a **Spellcast Roll** **(16)**. On a success, **mark any number of** **Stress** to target a line of allies within Far range. You can clear Hit Points on the targets equal to the number of Stress marked, divided among them however you'd like.`
                },
                "invigoration": {
                    name: "Invigoration",
                    body: `_**Invigoration:**_ When you or an ally within Close range has used a feature that has an exhaustion limit (such as once per rest or once per session), you can **spend any number of** **Hope** and roll that many **d6s**. If any roll a 6, the feature can be used again.`
                },
                "resurrection": {
                    name: "Resurrection",
                    body: `_**Resurrection:**_ Make a **Spellcast Roll** **(20)**. On a success, restore one creature who has been dead no longer than 100 years to full strength. Then roll a **d6**. On a result of 5 or lower, place this card in your vault permanently.
On a failure, you can't cast Resurrection again for a week.`
                }
            },
            valor: {
                "bare-bones": {
                    name: "Bare Bones",
                    body: `_**Bare Bones:**_ When you choose not to equip armor, you have a base Armor Score of 3 + your Strength and use the following as your base damage thresholds:
- _**Tier 1:**_ 9/19
- _**Tier 2:**_ 11/24
- _**Tier 3:**_ 13/31
- _**Tier 4:**_ 15/38`
                },
                "forceful-push": {
                    name: "Forceful Push",
                    body: `_**Forceful Push:**_ Make an attack with your primary weapon against a target within Melee range. On a success, you deal damage and knock them back to Close range. On a success with Hope, add a **d6** to your damage roll.
Additionally, you can **spend a Hope** to make them temporarily _Vulnerable_.`
                },
                "i-am-your-shield": {
                    name: "I am Your Shield",
                    body: `_**I am Your Shield:**_ When an ally within Very Close range would take damage, you can **mark a** **Stress** to stand in the way and make yourself the target of the attack instead. When you take damage from this attack, you can mark any number of Armor Slots.`
                },
                "body-basher": {
                    name: "Body Basher",
                    body: `_**Body Basher:**_ You use the full force of your body in a fight. On a successful attack using a weapon with a Melee range, gain a bonus to your damage roll equal to your Strength.`
                },
                "bold-presence": {
                    name: "Bold Presence",
                    body: `_**Bold Presence:**_ When you make a Presence Roll, you can **spend a** **Hope** to add your Strength to the roll.
Additionally, once per rest when you would gain a condition, you can describe how your bold presence aids you in the situation and avoid gaining the condition.`
                },
                "critical-inspiration": {
                    name: "Critical Inspiration",
                    body: `_**Critical Inspiration:**_ Once per rest, when you critically succeed on an attack, all allies within Very Close range can clear a Stress or gain a Hope.`
                },
                "lean-on-me": {
                    name: "Lean on Me",
                    body: `_**Lean on Me:**_ Once per long rest, when you console or inspire an ally who failed an action roll, you can both clear 2 Stress.`
                },
                "goad-them-on": {
                    name: "Goad Them On",
                    body: `_**Goad Them On:**_ Describe how you taunt a target within Close range, then make a **Presence** **Roll** against them. On a success, the target must mark a Stress, and the next time the GM spotlights them, they must target you with an attack, which they make with disadvantage.`
                },
                "support-tank": {
                    name: "Support Tank",
                    body: `_**Support Tank:**_ When an ally within Close range fails a roll, you can **spend 2** **Hope** to allow them to reroll either their Hope or Fear Die.`
                },
                "armorer": {
                    name: "Armorer",
                    body: `_**Armorer:**_ While you're wearing armor, gain a +1 bonus to your Armor Score.
During a rest, when you choose to repair your armor as a downtime move, your allies also clear an Armor Slot.`
                },
                "rousing-strike": {
                    name: "Rousing Strike",
                    body: `_**Rousing Strike:**_ Once per rest, when you critically succeed on an attack, you and all allies who can see or hear you can clear a Hit Point or **1d4** Stress.`
                },
                "inevitable": {
                    name: "Inevitable",
                    body: `_**Inevitable:**_ When you fail an action roll, your next action roll has advantage.`
                },
                "rise-up": {
                    name: "Rise Up",
                    body: `_**Rise Up:**_ Gain a bonus to your Severe threshold equal to your Proficiency.
When you mark 1 or more Hit Points from an attack, clear a Stress.`
                },
                "shrug-it-off": {
                    name: "Shrug It Off",
                    body: `_**Shrug It Off:**_ When you would take damage, you can **mark a** **Stress** to reduce the severity of the damage by one threshold. When you do, roll a **d6**. On a result of 3 or lower, place this card in your vault.`
                },
                "valor-touched": {
                    name: "Valor-Touched",
                    body: `_**Valor-Touched:**_ When 4 or more of the domain cards in your loadout are from the Valor domain, gain the following benefits:
- +1 bonus to your Armor Score
- When you mark 1 or more Hit Points without marking an Armor Slot, clear an Armor Slot.`
                },
                "full-surge": {
                    name: "Full Surge",
                    body: `_**Full Surge:**_ Once per long rest, **mark 3** **Stress** to push your body to its limits. Gain a +2 bonus to all of your character traits until your next rest.`
                },
                "ground-pound": {
                    name: "Ground Pound",
                    body: `_**Ground Pound:**_ **Spend 2** **Hope** to strike the ground where you stand and make a **Strength** **Roll** against all targets within Very Close range. Targets you succeed against are thrown back to Far range and must make a Reaction Roll (17). Targets who fail take **4d10+8** damage. Targets who succeed take half damage.`
                },
                "hold-the-line": {
                    name: "Hold The Line",
                    body: `_**Hold The Line:**_ Describe the defensive stance you take and **spend a** **Hope**. If an adversary moves within Very Close range, they're pulled into Melee range and _Restrained_.
This condition lasts until you move or fail a roll with Fear, or the GM spends 2 Fear on their turn to clear it.`
                },
                "lead-by-example": {
                    name: "Lead By Example",
                    body: `_**Lead By Example:**_ When you deal damage to an adversary, you can **mark a** **Stress** and describe how you encourage your allies. The next PC to make an attack against that adversary can clear a Stress or gain a Hope.`
                },
                "unbreakable": {
                    name: "Unbreakable",
                    body: `_**Unbreakable:**_ When you mark your last Hit Point, instead of making a death move, you can roll a **d6** and clear a number of Hit Points equal to the result. Then place this card in your vault.`
                },
                "unyielding-armor": {
                    name: "Unyielding Armor",
                    body: `_**Unyielding Armor:**_ When you would mark an Armor Slot, roll a number of **d6s** equal to your Proficiency. If any roll a 6, reduce the severity by one threshold without marking an Armor Slot.`
                }
            }
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
        items: {
            torch: { name: 'Torch' },
            rope50ft: { name: 'Rope (50 ft)' },
            basicSupplies: {name: 'Basic Supplies'},
            healthPotionS: {name: 'Minor Health Potion (1d4)'},
            staminaPotionS: {name: 'Minor Stamina Potion (1d4)'},
            loreWizardBook: {name: 'A book you are trying to translate'},
            loreWizardPet: {name: 'A tiny, harmless elemental pet'},
            loreAssassinList: {name: 'A list of names with several marked of'},
            loreAssassinMortar: {name: 'A mortar and pestle inscribed with a\n' +
                    'mysterious insignia'},
            loreBardNovel: {name: 'A romance novel'},
            loreBardLetter: {name: 'A letter never opened'},
            loreBrawlerWraps: {name: 'Hand wraps from a mentor'},
            loreBrawlerBook: {name: 'A book about your secret hobby'},
            loreDruidBones: {name: 'A small bag of rocks and bones'},
            loreDruidPendant: {name: 'A strange pendant found in the dirt'},
            loreGuardianTotem: {name: 'A totem from your mentor'},
            loreGuardianKey: {name: 'A secret key'},
            loreRangerTrophy: {name: 'A trophy from your first kill'},
            loreRangerCompass: {name: 'A seemingly broken compass'},
            loreRogueForgery: {name: 'A set of forgery tools'},
            loreRogueHook: {name: 'A grappling hook'},
            loreSeraphOfferings: {name: 'A bundle of offerings'},
            loreSeraphSigil: {name: 'A sigil of your god'},
            loreSorcererOrb: {name: 'A whispering orb'},
            loreSorcererHeirloom: {name: 'A family heirloom'},
            loreWarlockCarving: {name: 'A carving that symbolizes your patron'},
            loreWarlockRing: {name: "A ring you can't remove"},
            loreWarriorDrawing: {name: 'The drawing of a lover'},
            loreWarriorStone: {name: 'A sharpening stone'},
            loreWitchPet: {name: 'A small, harmless pet'},
            loreWitchSkull: {name: 'A talking skull'},
            // note to self: inventory includes lore questions (decide what you store your spells in)
            // it should be in the flavor section.
            // pets/lore items are ok here though
        },
        itemChoiceGroups: {
            potion: { label: 'Choose a potion' },
            lore: { label: 'Choose an item' },
        },
        classes: {
            assassin: {
                name: 'Assassin',
                description: 'As an assassin, you utilize unmatched stealth and precision to ambush the unwary.'
            },
            bard: {
                name: 'Bard',
                description: 'As a bard, you know how to get people to talk, bring attention to yourself, and use words or music to influence the world around you.'
            },
            brawler: {
                name: 'Brawler',
                description: 'As a brawler, you can use your fists just as well as any weapon to fight off the threats that get in your way.'
            },
            druid: {
                name: 'Druid',
                description: 'As a druid, you are a force of nature, preserving the balance of life and death by channeling the wilds themselves through you.'
            },
            guardian: {
                name: 'Guardian',
                description: 'As a guardian, you run into danger to protect your party, keeping watch over those who might not survive without you there.'
            },
            ranger: {
                name: 'Ranger',
                description: 'As a ranger, your keen eyes and graceful haste make you indispensable when tracking down enemies and navigating the wilds.'
            },
            rogue: {
                name: 'Rogue',
                description: 'As a rogue, you have experience fighting with your blade as well as your wit, preferring to move quickly and fight quietly.'
            },
            seraph: {
                name: 'Seraph',
                description: 'As a seraph, you’ve taken a vow to a god who helps you channel sacred arcane power to keep your party on their feet.'
            },
            sorcerer: {
                name: 'Sorcerer',
                description: 'As a sorcerer, you were born with innate magical power, and you’ve learned how to wield that power to get what you want.'
            },
            warlock: {
                name: 'Warlock',
                description: 'As a warlock, you’ve pledged your life to a patron in exchange for great power.'
            },
            warrior: {
                name: 'Warrior',
                description: 'As a warrior, you run into battle without hesitation or caution, knowing you can strike down whatever enemy stands in your path.'
            },
            witch: {
                name: 'Witch',
                description: 'As a witch, you weave together the mysterious powers of earth, sky, and spirit to craft protective charms and hex your enemies.'
            },
            wizard: {
                name: 'Wizard',
                description: 'As a wizard, you’ve become familiar with the arcane through the relentless study of grimoires and other tools of magic.',
                flavor: {
                    ties: [
                        'Who in the party has seen your arcane studies push you too far, and what did they do about it?',
                        'Which teammate do you quietly consider your student, and what lesson are you trying to impart?',
                        'One of you owes the other a debt that can\'t be paid in coin. Who owes whom, and for what?',
                    ],
                    description: [
                        'What drew you into the study of magic, and what do you fear you\'ve given up to pursue it?',
                        'Which long-dead scholar\'s work do you live in the shadow of, and why?',
                        'Describe the moment a spell of yours went terribly wrong. Who paid the price?',
                    ],
                    spellcastingSource: 'Where does your magic come from — a grimoire, a patron, an inheritance, something else? Describe it.',
                    appearance: [
                        'What does your everyday attire look like, and how does it mark you as a practitioner of magic?',
                        'What is the most unusual feature someone would notice about you at a glance?',
                        'What do you carry on your person at all times, and where do you keep it?',
                    ],
                },
                hopeFeat: 'Not This Time: Spend 3 Hope to force an adversary within\n' +
                    'Far range to reroll an attack or damage roll.',
                trait:
                    `
PRESTIDIGITATION
You can perform harmless, subtle magical
effects at will. For example, you can change
an object’s color, create a smell, light a candle,
cause a tiny object to float, illuminate a room, or
repair a small object.
STRANGE PATTERNS
Choose a number between 1 and 12. When
you roll that number on a Duality Die, gain a
Hope or clear a Stress. You can change this
number when you take a long rest.
`
            }
        },
        communities: {
            duneborne: {
                name: "Duneborne",
                description: `
Being part of a duneborne community means you’ve made a home among the shifting sands and arid climate of the desert.

_**Oasis:**_ During a short rest, you or an ally can reroll a die used for a downtime action.
`
            },
            freeborne: {
                name: "Freeborne",
                description: `
Being part of a freeborne community means you’re from a collective that lived under tyrannical rule and is now liberated.

_**Unbound:**_ Once per session, when you make an action roll with Fear, you can instead change it to a roll with Hope instead.
`
            },
            frostborne: {
                name: "Frostborne",
                description: `
Being part of a frostborne community means you come from a place of snow and ice.

_**Hardy:**_ Once per rest, you can Help an Ally traverse difficult terrain without spending a Hope.
`
            },
            hearthborne: {
                name: "Hearthborne",
                description: `
Coming from a hearthborne community means you come from humble origins, having lived in a small village or the countryside.

_**Close-Knit:**_ Once per long rest, you can **spend any number of Hope** to give an ally the same number of Hope.
`
            },
            highborne: {
                name: "Highborne",
                description: `
Being part of a highborne community means you’re accustomed to a life of elegance, opulence, and prestige within the upper echelons of society.

_**Privilege:**_ You have advantage on rolls to consort with nobles, negotiate prices, or leverage your reputation to get what you want.
`
            },
            loreborne: {
                name: "Loreborne",
                description: `
Being part of a loreborne community means you’re from a society that favors strong academic or political prowess.

_**Well-Read:**_ You have advantage on rolls that involve the history, culture, or politics of a prominent person or place.
`
            },
            orderborne: {
                name: "Orderborne",
                description: `
Being part of an orderborne community means you’re from a collective that focuses on discipline or faith, and you uphold a set of principles that reflect your experience there.

_**Dedicated:**_ Record three sayings or values your upbringing instilled in you. Once per rest, when you describe how you’re embodying one of these principles through your current action, you can roll a **d20** as your Hope Die.
`
            },
            reborne: {
                name: "Reborne",
                description: `
You were once a member of another community, but you can no longer remember it.

_**Found Family:**_ Once per session, you can **spend a Hope** to use an ally’s community ability. When you do, your ally gains a Hope.
At any point, when you’ve discovered the community you were once a part of, or have joined a new community, you can permanently trade this community card for that one instead.
`
            },
            ridgeborne: {
                name: "Ridgeborne",
                description: `
Being part of a ridgeborne community means you’ve called the rocky peaks and sharp cliffs of the mountainside home.

_**Steady:**_ You have advantage on rolls to traverse dangerous cliffs and ledges, navigate harsh environments, and use your survival knowledge.
`
            },
            seaborne: {
                name: "Seaborne",
                description: `
Being part of a seaborne community means you lived on or near a large body of water.

_**Know The Tide:**_ You can sense the ebb and flow of life. When you roll with Fear, place a token on this card. You can hold a number of tokens equal to your level. Before you make an action roll, you can spend any number of these tokens to gain a +1 bonus to the roll for each token spent. At the end of each session, clear all unspent tokens.
`
            },
            slyborne: {
                name: "Slyborne",
                description: `
Being part of a slyborne community means you come from a group that operates outside the law, including all manner of criminals, grifters, and con artists.

_**Scoundrel:**_ You have advantage on rolls to negotiate with criminals, detect lies, or find a safe place to hide.
`
            },
            underborne: {
                name: "Underborne",
                description: `
Being part of an underborne community means you’re from a subterranean society.

_**Low-Light Living:**_ When you’re in an area with low light or heavy shadow, you have advantage on rolls to hide, investigate, or perceive details within that area.
`
            },
            wanderborne: {
                name: "Wanderborne",
                description: `
Being part of a wanderborne community means you’ve lived as a nomad, forgoing a permanent home and experiencing a wide variety of cultures.

_**Nomadic Pack:**_ Add a Nomadic Pack to your inventory. Once per session, you can **spend a** **Hope** to reach into this pack and pull out a mundane item that’s useful to your situation. Work with the GM to figure out what item you take out.
`
            },
            warborne: {
                name: "Warborne",
                description: `
Being part of a warborne community means you come from a place that is, or was, ravaged by war.

_**Brave Face:**_ Once per session, when an attack would cause you to mark a Stress, you can **spend a Hope** instead.
`
            },
            wildborne: {
                name: "Wildborne",
                description: `
Being part of a wildborne community means you lived deep within the forest.

_**Lightfoot:**_ Your movement is naturally silent. You have advantage on rolls to move without being heard.
`
            }
        },
        subclasses: {
            levels: {
                1: "foundation",
                2: "specialization",
                3: "mastery"
            },
            poisoners: {
                name: "Poisoners Guild",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>KNOWLEDGE</i></p>

_**Toxic Concoctions:**_ **Mark a Stress** to add **1d4+1** tokens to this card. On your next long rest, clear this card. You know these poisons:
- _**Gorgon Root:** The target gains a permanent **-1** penalty to their Difficulty. This can only affect them once._
- _**Grave Spore:** The target must also mark a **Stress**._
- _**Leech Weed:** Gain a **+1d6** damage bonus on this attack._
_**Envenomate:**_ When you make a successful weapon attack, you can spend a token from this card to afflict the target with a known poison’s effect.

`,
                specialization: `

`,
                mastery: `

`
            },
            executioners: {
                name: "Executioners Guild",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>AGILITY</i></p>

_**First Strike:**_ The first time in a scene you succeed on an attack roll double the damage of the attack.

_**Ambush:**_ Your “Marked for Death” feature uses **d6s** instead of **d4s**.
`,
                specialization: `

`,
                mastery: `

`,
            },
            troubadour: {
                name: "Troubadour",
                foundation: `
<p style=\"text-align: center;\"><b>SPELLCAST:</b> <i>PRESENCE</i></p>

_**Gifted Performer:**_ Describe how you perform for others. You can play each song once per long rest:
- _**Relaxing Song:**_ You and all allies within Close range clear a Hit Point.
- _**Epic Song:**_ Make a target within Close range temporarily _Vulnerable._
- _**Heartbreaking Song:**_ You and all allies within Close range gain a Hope.
`,
                specialization: `

`,
                mastery: `

`,
            },
            wordsmith: {
                name: "Wordsmith",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>PRESENCE</i></p>

_**Rousing Speech:**_ Once per long rest you can give a heartfelt, inspiring speech. All allies within Far range clear 2 Stress.

_**Heart of a Poet:**_ After you make an action roll to impress, persuade, or offend someone, you can **spend a** **Hope** to add a **d4** to the roll.
`,
                specialization: `

`,
                mastery: `

`,
            },
            juggernaut: {
                name: "Juggernaut",
                foundation: `
_**Powerhouse:**_ Increase the d8 damage dice for your unarmed attack to d10s. Additionally, you can mark a Stress to target two creatures within Melee range with a single attack roll.

_**Overwhelm:**_ On a successful attack, you can spend a Hope to force the target to mark a Stress or to throw them within Close range.
`,
                specialization: `

`,
                mastery: `

`,
            },
            martial: {
                name: "Martial Artist",
                foundation: `
_**Martial Form:**_ Take the Martial Form sheet. You start with two martial stances from Tier 1. When you reach a new tier, take two additional stances at your tier or lower.

_**Focus:**_ During a rest, roll a number of **d6s** equal to your Instinct and place a number of Focus tokens equal to the highest value rolled on this card. 
**Spend a Focus** to shift into a stance until you you take Severe damage, the scene ends, you mark your last Hit Point, or you shift into another stance.
`,
                specialization: `

`,
                mastery: `

`,
            },
            elements: {
                name: "Warden of the Elements",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>INSTINCT</i></p>

_**Elemental Incarnation:**_ **Mark a Stress** to _Channel_ one of the following elements until you take Severe damage or until your next rest:
- _**Fire:**_ When an adversary within Melee range deals damage to you, they take _1d10_ magic damage.
- _**Earth:**_ Gain a bonus to your damage thresholds equal to your Proficiency.
- _**Water:**_ When you deal damage to an adversary within Melee range, all other adversaries within Very Close range must mark a Stress.
- _**Air:**_ You can hover, gaining advantage on Agility Rolls.
`,
                specialization: `

`,
                mastery: `

`,
            },
            renewal: {
                name: "Warden of Renewal",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>INSTINCT</i></p>

_**Clarity of Nature:**_ Once per long rest, you can create a space of natural serenity within Close range. When you spend a few minutes resting within the space, clear Stress equal to your Instinct, distributed as you choose between you and your allies.

_**Regeneration:**_ Touch a creature and **spend 3** **Hope** **.** That creature clears **1d4** Hit Points.

`,
                specialization: `

`,
                mastery: `

`,
            },
            stalwart: {
                name: "Stalwart",
                foundation: `
_**Unwavering:**_ Gain a permanent +1 bonus to your damage thresholds.

_**Iron Will:**_ When you take physical damage, you can **mark an additional** **Armor Slot** to reduce the severity

`,
                specialization: `

`,
                mastery: `

`,
            },
            vengeance: {
                name: "Vengeance",
                foundation: `
_**At Ease:**_ Gain an additional Stress slot.

_**Revenge:**_ When an adversary within Melee range succeeds on an attack against you, you can **mark 2 Stress** to force the attacker to mark a Hit Point.
`,
                specialization: `

`,
                mastery: `

`,
            },
            wayfinder: {
                name: "Wayfinder",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>AGILITY</i></p>

_**Ruthless Predator:**_ When you make a damage roll, you can **mark a** **Stress** to gain a +1 bonus to your Proficiency. Additionally, when you deal Severe damage to an adversary, they must mark a Stress.

_**Path Forward:**_ When you’re traveling to a place you’ve previously visited or you carry an object that has been at the location before, you can identify the shortest, most direct path to your destination.
`,
                specialization: `

`,
                mastery: `

`,
            },
            beastbound: {
                name: "Beastbound", //TODO: companion sheet
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>AGILITY</i></p>

_**Companion:**_ You have an animal companion of your choice (at the GM’s discretion). They stay by your side unless you tell them otherwise.
Take the Ranger Companion sheet. When you level up your character, choose a level-up option for your companion from this sheet as well.
`,
                specialization: `

`,
                mastery: `

`,
            },
            nightwalker: {
                name: "Nightwalker",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>FINESSE</i></p>

_**Shadow Stepper:**_ You can move from shadow to shadow. When you move into an area of darkness or a shadow cast by another creature or object, you can **mark a** **Stress** to disappear from where you are and reappear inside another shadow within Far range. When you reappear, you are Cloaked.
`,
                specialization: `

`,
                mastery: `

`,
            },
            syndicate: {
                name: "Syndicate",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>FINESSE</i></p>

_**Well-Connected:**_ When you arrive in a prominent town or environment, you know somebody who calls this place home. Give them a name, note how you think they could be useful, and choose one fact from the following list:
- They owe me a favor, but they’ll be hard to find.
- They’re going to ask for something in exchange.
- They’re always in a great deal of trouble.
- We used to be together. It’s a long story.
- We didn’t part on great terms.
`,
                specialization: `

`,
                mastery: `

`,
            },
            wielder: {
                name: "Divine Wielder",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>STRENGTH</i></p>

_**Spirit Weapon:**_ When you have an equipped weapon with a range of Melee or Very Close, it can fly from your hand to attack an adversary within Close range and then return to you. You can **mark a** **Stress** to target an additional adversary within range with the same attack Roll.

_**Sparing Touch:**_ Once per long rest, touch a creature and clear 2 Hit Points or 2 Stress from them.

`,
                specialization: `

`,
                mastery: `

`,
            },
            sentinel: {
                name: "Winged Sentinel",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>STRENGTH</i></p>

_**Wings of Light:**_ You can fly. While flying, you can do the following:
- **Mark a** **Stress** to pick up and carry another willing creature approximately your size or smaller.
- **Spend a** **Hope** to deal an extra **1d8** damage on a successful attack.
`,
                specialization: `

`,
                mastery: `

`,
            },
            primal: {
                name: "Primal Origin",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>INSTINCT</i></p>

_**Manipulate Magic:**_ Your primal origin allows you to modify the essence of magic itself. After you cast a spell or make an attack using a weapon that deals magic damage, you can **mark a** **Stress** to do one of the following:
- Extend the spell or attack’s reach by one range
- Gain a +2 bonus to the action roll’s result
- Double a damage die of your choice
- Hit an additional target within range
`,
                specialization: `

`,
                mastery: `

`,
            },
            elemental: {
                name: "Elemental Origin",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>INSTINCT</i></p>

_**Elementalist:**_ Choose one of the following elements at character creation:
**Air · Earth · Fire · Lightning · Water**
You can shape this element into harmless effects. Additionally, **spend a** **Hope** and describe how your control over this element helps an action roll you’re about to make, then either gain a +2 bonus to the roll or a +3 bonus to the roll’s damage.
`,
                specialization: `

`,
                mastery: `

`,
            },
            wrathful: {
                name: "Pact of the Wrathful",
                foundation: `
_**Favored Weapon:**_ **Mark a Stress** to _Imbue_ your weapon with your Patron’s fury until you deal Severe damage.  
On a successful _Imbued_ weapon attack, you can **spend any number of Favor** to gain a **+1d6** damage bonus for each Favor spent.

_**Herald Of Death:**_ When you fail an attack roll, you can **spend a Favor** to reroll it. If it fails again, mark a Stress and take the new result.
`,
                specialization: `

`,
                mastery: `

`,
            },
            endless: {
                name: "Pact of the Endless",
                foundation: `
_**Patron's Mantle:**_ **Mark a Stress** to cloak yourself in a terrifying aspect of your Patron that lasts until you take Severe damage or the scene ends:
- _When you would mark an Armor Slot, you can **spend 2 Favor** instead._
- _You gain a bonus equal to your tier on action roll to intimidate a target._
_**Deadly Devotion:**_ On a successful attack, you can **spend a Favor** to gain a +1 bonus to your Evasion until you mark a Hit Point or take a rest.

`,
                specialization: `

`,
                mastery: `

`,
            },
            brave: {
                name: "Call of the Brave",
                foundation: `
_**Courage:**_ When you fail a roll with Fear, you gain a Hope.

_**Battle Ritual:**_ Once per long rest, before you attempt something incredibly dangerous or face off against a foe who clearly outmatches you, describe what ritual you perform or preparations you make. When you do, clear 2 Stress and gain 2 Hope.
`,
                specialization: `

`,
                mastery: `

`,
            },
            slayer: {
                name: "Call of the Slayer",
                foundation: `

_**Slayer:**_ You gain a pool of dice called Slayer Dice. On a roll with Hope, you can place a **d6** on this card instead of gaining a Hope, adding the die to the pool.  
You can store a number of Slayer Dice equal to your Proficiency. When you make an attack roll or damage roll, you can spend any number of these Slayer Dice, rolling them and adding their result to the roll. At the end of each session, clear any unspent Slayer Dice on this card and gain a Hope per die cleared.
`,
                specialization: `

`,
                mastery: `

`,
            },
            moon: {
                name: "Moon",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>INSTINCT</i></p>

_**Night's Glamour:**_ **Mark a Stress** to _Glamour_ yourself in a magical facade that lasts until you mark a Hit Point, make an attack, or take a rest. While _Glamoured_, you can:
- Disguise yourself to look like any creature of your approximate size that you’ve seen.
- Enhance your own appearance. You gain advantage on Presence Rolls that leverage this change.

`,
                specialization: `

`,
                mastery: `

`,
            },
            hedge: {
                name: "Hedge",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>KNOWLEDGE</i></p>

_**Herbal Remedies:**_ When you or an ally clear one or more Hit Points or Stress as the result of using a consumable, increase the number cleared by one.

_**Tethered Talisman:**_ Once per rest, you can imbue a small item with your protective essence. When the person holding the talisman takes damage, you can expend its magic to reduce the number of Hit Points they mark by one. You can’t create a new talisman until the old one has been used.

`,
                specialization: `

`,
                mastery: `

`,
            },
            knowledge: {
                name: "School of Knowledge",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>KNOWLEDGE</i></p>

_**Prepared:**_ Take an additional domain card of your level or lower from a domain you have access to.

_**Adept:**_ When you Utilize an Experience, you can **mark a** **Stress** instead of spending a Hope. If you do, double your Experience modifier for that roll.
`,
            },
            war: {
                name: "School of War",
                foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>KNOWLEDGE</i></p>

_**Battlemage:**_ You’ve focused your studies on becoming an unconquerable force on the battlefield. Gain an additional Hit Point slot.

_**Face Your Fear:**_ When you succeed with Fear on an attack roll, you deal an extra 1d10 magic damage.
`,
            }
        },
        traits: {
            agility: {
                name: 'Agility',
                title: "Agility",
                usedFor: `
Sprint<br>
Leap<br>
Maneuver
                `
            },
            strength: {
                name: 'Strength',
                title: "Strength",
                usedFor: `
Lift<br>
Smash<br>
Grapple
                `
            },
            finesse: {
                name: 'Finesse',
                title: "Finesse",
                usedFor: `
Control<br>
Hide<br>
Tinker
                `
            },
            instinct: {
                name: 'Instinct',
                title: "Instinct",
                usedFor: `
Perceive<br>
Sense<br>
Navigate
                `
            },
            presence: {
                name: 'Presence',
                title: "Presence",
                usedFor: `
Charm<br>
Perform<br>
Deceive
                `
            },
            knowledge: {
                name: 'Knowledge',
                title: "Knowledge",
                usedFor: `
Recall<br>
Analyze<br>
Comprehend
                `
            }
        }
    }
}