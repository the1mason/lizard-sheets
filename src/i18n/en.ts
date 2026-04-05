export const en = {
    navigation: {
        builder: 'New',
        upload: 'Upload'
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
            suggested: 'Suggested:'
        }
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
                description: 'As a wizard, you’ve become familiar with the arcane through the relentless study of grimoires and other tools of magic.'
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
            agility: 'Agility',
            strength: 'Strength',
            finesse: 'Finesse',
            instinct: 'Instinct',
            presence: 'Presence',
            knowledge: 'Knowledge'
        }
    }
}