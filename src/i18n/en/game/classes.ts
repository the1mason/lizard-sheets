export const classes = {
    assassin: {
        name: 'Assassin',
        description: 'As an assassin, you utilize unmatched stealth and precision to ambush the unwary.',
        hopeFeat: 'Get In & Get Out: Spend a Hope to ask the GM for either a quick or inconspicuous way into or out of a building or structure you can see. The next roll you make that capitalizes on this information has advantage.',
        flavor: {
            ties: [
                'What about me frightens you?',
                'You once asked me to do something that keeps you up at night. What was it?',
                'What secret about myself did I tell you, and how did it change your view of me?',
            ],
            description: [
                'What organization trained you in the art of killing, and how did you gain membership into it?',
                'Throughout your entire career, one target has eluded you. Who are they, and how have they managed to slip through your fingers?',
                'You always do what you must to take down your target, but there\'s one line that you will never cross. What is it?',
            ],
            appearance: [
                'Clothes that are: sinister, weathered, hooded, finely tailored, incognito, padded for silence',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a hidden razor, a judge, an owl, a butcher, a coiled viper, a merchant, a hunter',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**MARKED FOR DEATH**
On a successful weapon attack, you can mark a Stress to make the target Marked for Death. Attacks you make against a target that's Marked for Death gain a bonus to damage equal to +1d4 per tier.

You can only have one adversary Marked for Death at a time, and can't transfer or remove the condition except by defeating the target. The GM can spend a number of Fear equal to your Proficiency to remove the Marked for Death condition. Otherwise, it ends automatically when you take a rest.

**GET IN & GET OUT**
Spend a Hope to ask the GM for either a quick or inconspicuous way into or out of a building or structure you can see. The next roll you make that capitalizes on this information has advantage.
`
    },
    bard: {
        name: 'Bard',
        description: 'As a bard, you know how to get people to talk, bring attention to yourself, and use words or music to influence the world around you.',
        hopeFeat: 'Make a Scene: Spend 3 Hope to temporarily Distract a target within Close range, giving them a −2 penalty to their Difficulty.',
        flavor: {
            ties: [
                'What made you realize we were going to be such good friends?',
                'What do I do that annoys you?',
                'Why do you grab my hand at night?',
            ],
            description: [
                'Who from your community taught you to have such confidence in yourself?',
                'You were in love once. Who did you adore, and how did they hurt you?',
                'You\'ve always looked up to another bard. Who are they, and why do you idolize them?',
            ],
            appearance: [
                'Clothes that are: extravagant, fancy, loud, oversized, ragged, sleek, wild',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a barkeep, a magician, a ringmaster, a rock star, a swashbuckler',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**RALLY**
Once per session, describe how you rally the party and give yourself and each of your allies a Rally Die. At level 1, your Rally Die is a d6. A PC can spend their Rally Die to roll it, adding the result to their action roll, reaction roll, damage roll, or to clear a number of Stress equal to the result. At the end of each session, clear all unspent Rally Dice.

At level 5, your Rally Die increases to a d8.
`
    },
    brawler: {
        name: 'Brawler',
        description: 'As a brawler, you can use your fists just as well as any weapon to fight off the threats that get in your way.',
        hopeFeat: 'Staggering Strike: Spend 3 Hope when you succeed on an attack to temporarily Stagger your target and force them to mark a Stress. While Staggered, they have disadvantage on attack rolls.',
        comboDie: {
            title: 'Combo Die',
        },
        flavor: {
            ties: [
                'What is one thing we\'re both afraid of?',
                'I rely on you for something important during our travels together. What is it and how do you feel about it?',
                'I still haven\'t forgiven you for something you said to me. What was it and why did you say it?',
            ],
            description: [
                'Where did you spend time during your formative years that taught you, directly or indirectly, how to fight in the style you use?',
                'What group or organization has always had your back, and how did you get in their good graces?',
                'Who did you lose a fight to long ago that you are desperate for a rematch against?',
            ],
            appearance: [
                'Clothes that are: practical, haphazard, pristine, standard-issue, bright, someone else\'s',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a loose cannon, a parent, a veteran, a flowing river, a golden retriever, a protector',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**I AM THE WEAPON**
While you don't have any equipped weapons:
- You gain a +1 bonus to Evasion.
- Your unarmed strikes are considered a Melee weapon, use the trait of your choice, and deal d8+d6 phy damage using your Proficiency.

**COMBO STRIKES**
After making a damage roll with a Melee weapon but before dealing that damage to the target, mark a Stress to start a combo strike. When you do, roll your Combo Die and note its value. Then, roll your Combo Die again. If the value of the second roll is equal to or greater than your first roll, continue rolling until the latest Combo Die's roll is less than the roll that preceeded it. Total all rolled values and add that amount to your weapon's damage. These values cannot be adjusted by features that affect damage dice.

Your Combo Die starts as a d4. When you level up, once per tier you may use one of your advancement options to increase your Combo Die instead.
`
    },
    druid: {
        name: 'Druid',
        description: 'As a druid, you are a force of nature, preserving the balance of life and death by channeling the wilds themselves through you.',
        hopeFeat: 'Evolution: Spend 3 Hope to transform into Beastform without marking a Stress. When you do, choose one trait to raise by +1 until you drop out of that Beastform.',
        flavor: {
            ties: [
                'What did you confide in me that makes me leap into danger for you every time?',
                'What animal do I say you remind me of?',
                'What affectionate nickname have you given me?',
            ],
            description: [
                'Who has been trying to hunt you down? What do they want from you?',
                'Who was the first wild animal you bonded with? Why did your bond end?',
                'Why was the community you grew up in so reliant on nature and its creatures?',
            ],
            appearance: [
                'Clothes that are: camouflaged, grown, loose, natural, patchwork, regal, scraps',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a firecracker, a fox, a guide, a hippie, a witch',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**BEASTFORM**
Mark a Stress to magically transform into a creature of your tier or lower from the Beastform list. You can drop out of this form at any time. While transformed, you can't use weapons or cast spells from domain cards, but you can still use other features or abilities you have access to. Spells you cast before you transform stay active and last for their normal duration, and you can talk and communicate as normal.

Additionally, you gain the Beastform's features, add their Evasion bonus to your Evasion, and use the trait specified in their statistics for your attack. While you're in a Beastform, your armor becomes part of your body and you mark Armor Slots as usual; when you drop out of a Beastform, those marked Armor Slots remain marked. If you mark your last Hit Point, you automatically drop out of this form.

**WILDTOUCH**
You can perform harmless, subtle effects that involve nature—such as causing a flower to rapidly grow, summoning a slight gust of wind, or starting a campfire—at will.
`
    },
    guardian: {
        name: 'Guardian',
        hopeFeat: 'Frontline Tank: Spend 3 Hope to clear 2 Armor Slots.',
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
        description: 'As a ranger, your keen eyes and graceful haste make you indispensable when tracking down enemies and navigating the wilds.',
        hopeFeat: 'Hold Them Off: Spend 3 Hope when you succeed on an attack with a weapon to use that same roll against two additional adversaries within range of the attack.',
        flavor: {
            ties: [
                'What friendly competition do we have?',
                'Why do you act differently when we\'re alone than when others are around?',
                'What threat have you asked me to watch for, and why are you worried about it?',
            ],
            description: [
                'A terrible creature hurt your community, and you\'ve vowed to hunt them down. What are they, and what unique trail or sign do they leave behind?',
                'Your first kill almost killed you, too. What was it, and what part of you was never the same after that event?',
                'You\'ve traveled many dangerous lands, but what is the one place you refuse to go?',
            ],
            appearance: [
                'Clothes that are: flowing, muted, natural, stained, tactical, tight, woven',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a child, a ghost, a survivalist, a teacher, a watchdog',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**RANGER'S FOCUS**
Spend a Hope and make an attack against a target. On a success, deal your attack's normal damage and temporarily make the attack's target your Focus. Until this feature ends or you make a different creature your Focus, you gain the following benefits against your Focus:
- You know precisely what direction they are in.
- When you deal damage to them, they must mark a Stress.
- When you fail an attack against them, you can end your Ranger's Focus feature to reroll your Duality Dice.
`
    },
    rogue: {
        name: 'Rogue',
        description: 'As a rogue, you have experience fighting with your blade as well as your wit, preferring to move quickly and fight quietly.',
        hopeFeat: 'Rogue\'s Dodge: Spend 3 Hope to gain a +2 bonus to your Evasion until the next time an attack succeeds against you. Otherwise, this bonus lasts until your next rest.',
        flavor: {
            ties: [
                'What did I recently convince you to do that got us both in trouble?',
                'What have I discovered about your past that I hold secret from the others?',
                'Who do you know from my past, and how have they influenced your feelings about me?',
            ],
            description: [
                'What did you get caught doing that got you exiled from your home community?',
                'You used to have a different life, but you\'ve tried to leave it behind. Who from your past is still chasing you?',
                'Who from your past were you most sad to say goodbye to?',
            ],
            appearance: [
                'Clothes that are: clean, dark, inconspicuous, leather, scary, tactical, tight',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a bandit, a con artist, a gambler, a mob boss, a pirate',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**CLOAKED**
Any time you would be Hidden, you are instead Cloaked. In addition to the benefits of the Hidden condition, while Cloaked you remain unseen if you are stationary when an adversary moves to where they would normally see you. After you make an attack or end a move within line of sight of an adversary, you are no longer Cloaked.

**SNEAK ATTACK**
When you succeed on an attack while Cloaked or while an ally is within Melee range of your target, add a number of d6s equal to your tier to your damage roll.

- Level 1 is Tier 1
- Levels 2–4 are Tier 2
- Levels 5–7 are Tier 3
- Levels 8–10 are Tier 4
`
    },
    seraph: {
        name: 'Seraph',
        description: 'As a seraph, you’ve taken a vow to a god who helps you channel sacred arcane power to keep your party on their feet.',
        hopeFeat: 'Life Support: Spend 3 Hope to clear a Hit Point on an ally within Close range.',
        prayerDice: {
            title: 'Prayer Dice',
        },
        flavor: {
            ties: [
                'What promise did you make me agree to, should you die on the battlefield?',
                'Why do you ask me so many questions about my god?',
                'You\'ve told me to protect one member of our party above all others, even yourself. Who are they and why?',
            ],
            description: [
                'Which god did you devote yourself to? What incredible feat did they perform for you in a moment of desperation?',
                'How did your appearance change after taking your oath?',
                'In what strange or unique way do you communicate with your god?',
            ],
            appearance: [
                'Clothes that are: glowing, rippling, ornate, tight, modest, strange, natural',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: an angel, a doctor, an evangelist, a monk, a priest',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**PRAYER DICE**
At the beginning of each session, roll a number of d4s equal to your subclass's Spellcast trait and place them on this sheet in the space provided. These are your Prayer Dice. You can spend any number of Prayer Dice to aid yourself or an ally within Far range. You can use a spent die's value to reduce incoming damage, add to a roll's result after the roll is made, or gain Hope equal to the result. At the end of each session, clear all unspent Prayer Dice.
`
    },
    sorcerer: {
        name: 'Sorcerer',
        description: 'As a sorcerer, you were born with innate magical power, and you’ve learned how to wield that power to get what you want.',
        hopeFeat: 'Volatile Magic: Spend 3 Hope to reroll any number of your damage dice on an attack that deals magic damage.',
        flavor: {
            ties: [
                'Why do you trust me so deeply?',
                'What did I do that makes you cautious around me?',
                'Why do we keep our shared past a secret?',
            ],
            description: [
                'What did you do that made the people in your community wary of you?',
                'What mentor taught you to control your untamed magic, and why are they no longer able to guide you?',
                'You have a deep fear you hide from everyone. What is it, and why does it scare you?',
            ],
            appearance: [
                'Clothes that are: always moving, flamboyant, inconspicuous, layered, ornate, tight',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a celebrity, a commander, a politician, a prankster, a wolf in sheep\'s clothing',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**ARCANE SENSE**
You can sense the presence of magical people and objects within Close range.

**MINOR ILLUSION**
Make a Spellcast Roll (10). On a success, you create a minor visual illusion no larger than yourself within Close range. This illusion is convincing to anyone at Close range or farther.

**CHANNEL RAW POWER**
Once per long rest, you can place a domain card from your loadout into your vault and choose to either:
- Gain Hope equal to the level of the card.
- Enhance a spell that deals damage, gaining a bonus to your damage roll equal to twice the level of the card.
`
    },
    warlock: {
        name: 'Warlock',
        description: 'As a warlock, you’ve pledged your life to a patron in exchange for great power.',
        hopeFeat: 'Patron\'s Boon: Spend 3 Hope to call out to your patron for help, gaining 1d4 Favor.',
        patron: {
            title: 'Warlock Patron',
            description: 'You have committed yourself to a patron (god, demon, fae, or other supernatural entity) in exchange for power. Write their name above. Then choose their spheres of influence, at GM discretion (Nature & Mischief, Love & War, Knowledge & Shadow, etc.), record them below, and set their values to +2. Anytime you increase your tier, these spheres of influence gain a permanent +1 bonus. Before making an action roll that relates to one of your patron\'s spheres of influence, you can spend a Favor to call on them and add its value to the roll.',
            namePlaceholder: 'Patron name',
            spheresTitle: 'Spheres of Influence',
            sphereName: 'Sphere',
            sphereValue: 'Value',
            spheresAdd: 'Add sphere',
            spheresRemove: 'Remove sphere',
            favorTitle: 'Favor',
            favorDescription: 'Start with 3 Favor. During a rest, spend one of your downtime moves to tithe to your patron. When you do, gain Favor equal to your Presence. If you choose to forgo this offering, the GM instead gains a Fear.',
        },
        flavor: {
            ties: [
                'I confide in you about what my patron says and does. Why?',
                'You once saw me tithe to my patron and it\'s changed how you interact with me. What did you see and how has it affected you?',
                'I once did something very foolish, and you have never let me live it down. What was it?',
            ],
            description: [
                'What desperate situation led you to pledge your life to your patron?',
                'Your patron has given you one task you must accomplish above all else. What is it, and why does it worry you?',
                'You and your patron are similar in a very specific way. What characteristic do you share, and how do you feel about it?',
            ],
            appearance: [
                'Clothes that are: shadowy, billowing, smoking, lavish, sacred, mended, neat, luminous',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a coming storm, a devotee, a jester, a soothsayer, a monarch, a live wire, a hot mess',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
    },
    warrior: {
        name: 'Warrior',
        description: 'As a warrior, you run into battle without hesitation or caution, knowing you can strike down whatever enemy stands in your path.',
        hopeFeat: 'No Mercy: Spend 3 Hope to gain a +1 bonus to your attack rolls until your next rest.',
        flavor: {
            ties: [
                'We knew each other long before this party came together. How?',
                'What mundane task do you usually help me with off the battlefield?',
                'What fear am I helping you overcome?',
            ],
            description: [
                'Who taught you to fight, and why did they stay behind when you left home?',
                'Somebody defeated you in battle years ago and left you to die. Who was it, and how did they betray you?',
                'What legendary place have you always wanted to visit, and why is it so special?',
            ],
            appearance: [
                'Clothes that are: bold, patched, reinforced, royal, sleek, sparing, weathered',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a bull, a dedicated soldier, a gladiator, a hero, a hired hand',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**ATTACK OF OPPORTUNITY**
When an adversary within Melee range attempts to leave that range, make a reaction roll using a trait of your choice against their Difficulty. Choose one effect on a success, or two if you critically succeed:
- They can't move from where they are.
- You deal damage to them equal to your primary weapon's damage.
- You move with them.

**COMBAT TRAINING**
You ignore burden when equipping weapons. When you deal physical damage, you gain a bonus to your damage roll equal to your level.
`
    },
    witch: {
        name: 'Witch',
        description: 'As a witch, you weave together the mysterious powers of earth, sky, and spirit to craft protective charms and hex your enemies.',
        hopeFeat: 'Witch\'s Charm: When you or an ally within Far range rolls a failure on an action roll, you can spend 3 Hope to change it into a success with Fear instead.',
        flavor: {
            ties: [
                'What about my magical practice makes you most ill at ease?',
                'I once appeared to you in a dream and shared a vision of the future. What did I tell you?',
                'Why do you come to me for advice?',
            ],
            description: [
                'How did you first discover your affinity for magical craft?',
                'You once used your power to help someone in a dire situation. Who were they and why did they come to you?',
                'Your magic once opened a door best left closed. Who or what was on the other side?',
            ],
            appearance: [
                'Clothes that are: foreboding, ragged, flowing, stately, diaphanous, uniquely patterned',
                'Eyes like: carnations, earth, endless ocean, fire, ivy, lilacs, night, seafoam, winter',
                'Body that\'s: broad, carved, curvy, lanky, rotund, short, stocky, tall, thin, tiny, toned',
                'Skin the color of: ashes, clover, falling snow, fine sand, obsidian, rose, sapphire, wisteria',
                'Attitude like: a spider, a sunny day, a doctor, a candle flame, an old tree, a cat, an oracle',
            ],
            appearanceHint: 'Choose one (or more) from each line, or write your own description.',
        },
        trait:
            `
**HEX**
When a creature causes you or an ally within Close range to mark any number of Hit Points, you can mark a Stress to Hex them. Action and damage rolls against a Hexed creature gain a bonus equal to your tier.

This condition lasts until the GM spends a number of Fear equal to your Spellcast trait to remove it or you Hex another creature. Otherwise, remove it when the scene ends.

**COMMUNE**
Once per long rest, during a moment of calm, you can commune with an ancestor, deity, nature spirit, or otherworldly being. Ask them a question, then roll a number of d6s equal to your Spellcast trait. Choose one value from the rolled results and reference the chart below for the effect:
- **1–3:** You taste a flavor, smell a scent, or feel a sensation relevant to the answer.
- **4–5:** You hear sounds or see a vision relevant to the answer.
- **6:** You psychically experience a scene relevant to the answer as if you were there.
`
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
        strangePatterns: {
            title: 'Strange Patterns',
            label: 'Number (1–12)',
        },
        trait:
            `
**PRESTIDIGITATION**
You can perform harmless, subtle magical effects at will. For example, you can change an object's color, create a smell, light a candle, cause a tiny object to float, illuminate a room, or repair a small object.

**STRANGE PATTERNS**
Choose a number between 1 and 12. When you roll that number on a Duality Die, gain a Hope or clear a Stress. You can change this number when you take a long rest.
`
    }
}