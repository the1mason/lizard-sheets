export const classes = {
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
        description: 'As a guardian, you run into danger to protect your party, keeping watch over those who might not survive without you there.',
        flavor: {
            ties: [
                'How did I save your life the first time we met?',
                'What small gift did you give me that you notice I always carry with me?',
                'What lie have you told me about yourself that I absolutely believe?',
            ],
            description: [
                'Who from your community did you fail to protect, and why do you still think of them?',
                'You\'ve been tasked with protecting something important and delivering it somewhere dangerous. What is it, and where does it need to go?',
                'You consider an aspect of yourself to be a weakness. What is it, and how has it affected you?',
            ],
            appearance: [
                'Clothes that are: casual, intricate, loose, padded, royal, tactical, weathered',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a captain, a caretaker, an elephant, a general, a wrestler',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        unstoppable: {
            trait:
                `
**UNSTOPPABLE**
Once per long rest, you can become Unstoppable.
You gain an Unstoppable Counter. At level 1, your
Unstoppable Counter has a maximum value of 4. Place it on this sheet
in the space provided, starting at the value of 1.
After you make a damage roll that
deals 1 or more Hit Points to a target, increase the
Unstoppable Counter value by one. When the counter's value
would exceed its maximum value or when the scene
ends, remove the counter and drop out of Unstoppable. At
level 5, your Unstoppable Counter's maximum value increases to 6.

While Unstoppable, you gain the following benefits:
- You reduce the severity of physical damage by one threshold (Severe to Major, Major to Minor, Minor to None).
- You add the current value of the Unstoppable Counter to your damage roll.
- You can't be Restrained or Vulnerable.
`,
            title: 'Unstoppable Counter',
            activate: 'Become Unstoppable',
            dropOut: 'Drop out',
            increase: 'Increase',
            decrease: 'Decrease',
            inactive: 'Inactive',
        }
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
}