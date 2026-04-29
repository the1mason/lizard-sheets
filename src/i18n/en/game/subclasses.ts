export const subclasses = {
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
_**Poison Compendium:**_ You also know these poisons:
- _**Midnight’s Veil:** The target gains a permanent **-2** penalty to attack rolls. This can only affect them once._
- _**Ghost Petal:** Permanently decrease the damage dice of the target’s standard attack by one step (d10 to d8, d8 to d6, etc.). This can only affect them once._

_**Adder's Blessing:**_ You are immune to poisons and other toxins.
`,
        mastery: `
_**Venomancer:**_ You also know these poisons:
- _**Blight Seed:** The target gains a permanent **-3** penalty to their damage thresholds. This can only affect them once._
- _**Fear Leaf:** The damage from this attack gains a bonus equal to the result of your Fear Die._

_**Twin Fang:**_ When you afflict a target with a known poison’s effect, you can spend an additional token to inflict the effect of a second known poison.
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
_**Death Strike:**_ When you deal Severe damage to a creature, you can **mark a Stress** to make them mark an additional Hit Point.

_**Scorpion's Poise:**_ You gain a **+2** bonus to your Evasion against any attacks made by the creature **Marked for Death**.
`,
        mastery: `
_**True Strike:**_ Once per long rest, when you fail an attack roll, you can **spend a Hope** to make it a success instead.

_**Backstab:**_ Your “Marked for Death” feature uses **d8s** instead of **d6s**.
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
_**Maestro:**_ Your rallying songs steel the courage of those who listen. When you give a Rally Die to an ally, they can gain a Hope or clear a Stress.
`,
        mastery: `
_**Virtuoso:**_ You are among the greatest of your craft and your skill is boundless. You can perform each of your “Gifted Performer” feature’s songs twice instead of once per long rest.
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
_**Eloquent:**_ Your moving words boost morale. Once per session, when you encourage an ally, you can do one of the following:
- Allow them to find a mundane object or tool they need.
- Help an Ally without spending Hope.
- Give them an additional downtime move during their next rest.
`,
        mastery: `
_**Epic Poetry:**_ Your Rally Die increases to a **d10**. Additionally, when you Help an Ally, you can narrate the moment as if you were writing the tale of their heroism in a memoir. When you do, roll a **d10** as your advantage die.
`,
    },
    juggernaut: {
        name: "Juggernaut",
        foundation: `
_**Powerhouse:**_ Increase the d8 damage dice for your unarmed attack to d10s. Additionally, you can mark a Stress to target two creatures within Melee range with a single attack roll.

_**Overwhelm:**_ On a successful attack, you can spend a Hope to force the target to mark a Stress or to throw them within Close range.
`,
        specialization: `
_**Rugged:**_ Gain a permanent +3 bonus to your Severe damage threshold. Additionally, your “Powerhouse” feature can target three creatures instead of two.

_**Eye for an Eye:**_ When you mark more than one Hit Point from an attack in melee range, the attacker must make a Reaction Roll (13). On a failure, once per rest, they immediately mark the same number of Hit Points in return.
`,
        mastery: `
_**Pummeljoy:**_ When you critically succeed on a weapon attack in Melee range, you gain an additional Hope, clear an additional Stress, and gain a +1 bonus to your Proficiency for the attack.

_**Not Done Yet:**_ When you mark more than one HP from an attack, you may gain a Hope or clear a Stress.
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
_**Keen Defenses:**_ When you are targeted by an attack, you can spend a Focus to give the attack roll disadvantage.

_**Spirit Blast:**_ Spend a Focus to make an Instinct Roll against an adversary within Close range. On a success, you deal **d20+3** magic damage using your Proficiency and you can spend an additional Focus to make them temporary _Vulnerable_.
`,
        mastery: `
_**Limit Breaker:**_ Once per rest, you can perform an unbelievable feat such as running across water, leaping between distant rooftops, or scaling the side of a building without needing to roll. When you do, gain a Hope and clear a Stress.
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
_**Elemental Aura:**_ Once per rest while _Channeling_, you can assume an aura matching your element. The aura affects targets within Close range until your _Channeling_ ends.
- _**Fire:**_ When an adversary marks 1 or more Hit Points, they must also mark a Stress.
- _**Earth:**_ Your allies gain a +1 bonus to Strength.
- _**Water:**_ When an adversary deals damage to you, you can **mark a Stress** to move them anywhere within Very Close range of where they are.
- _**Air:**_ When you or an ally takes damage from an attack beyond Melee range, reduce the damage by **1d8**.
`,
        mastery: `
_**Elemental Dominion:**_ You further embody your element. While _Channeling_, you gain the following benefit:
- _**Fire:**_ You gain a +1 bonus to your Proficiency for attacks and spells that deal damage.
- _**Earth:**_ When you would mark Hit Points, roll a **d6** per Hit Point marked. For each result of 6, reduce the number of Hit Points you mark by 1.
- _**Water:**_ When an attack against you succeeds, you can **mark a Stress** to make the attacker temporarily _Vulnerable_.
- _**Air:**_ You gain a +1 bonus to your Evasion and can fly.
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
_**Regenerative Reach:**_ You can target creatures within Very Close range with your “Regeneration” feature.

_**Warden's Protection:**_ Once per long rest, **spend 2** **Hope** to clear 2 Hit Points on **1d4** allies within Close range.
`,
        mastery: `
_**Defender:**_ Your animal transformation embodies a healing guardian spirit. When you’re in Beastform and an ally within Close range marks 2 or more Hit Points, you can **mark a** **Stress** to reduce the number of Hit Points they mark by 1.
`,
    },
    stalwart: {
        name: "Stalwart",
        foundation: `
_**Unwavering:**_ Gain a permanent +1 bonus to your damage thresholds.

_**Iron Will:**_ When you take physical damage, you can **mark an additional** **Armor Slot** to reduce the severity

`,
        specialization: `
_**Unrelenting:**_ Gain a permanent +2 bonus to your damage thresholds.

_**Partners-in-Arms:**_ When an ally within Very Close range takes damage, you can **mark an** **Armor Slot** to reduce the severity by one threshold.
`,
        mastery: `
_**Undaunted:**_ Gain a permanent +3 bonus to your damage thresholds.

_**Loyal Protector:**_ When an ally within Close range has 2 or fewer Hit Points and would take damage, you can **mark a** **Stress** to sprint to their side and take the damage instead.
`,
    },
    vengeance: {
        name: "Vengeance",
        foundation: `
_**At Ease:**_ Gain an additional Stress slot.

_**Revenge:**_ When an adversary within Melee range succeeds on an attack against you, you can **mark 2 Stress** to force the attacker to mark a Hit Point.
`,
        specialization: `
_**Act of Reprisal:**_ When an adversary damages an ally within Melee range, you gain a +1 bonus to your Proficiency for the next successful attack you make against that adversary.
`,
        mastery: `
_**Nemesis:**_ **Spend 2 Hope** to _Prioritize_ an adversary until your next rest. When you make an attack against your _Prioritized_ adversary, you can swap the results of your Hope and Fear Dice. You can only _Prioritize_ one adversary at a time.
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
_**Elusive Predator:**_ When your _Focus_ makes an attack against you, you gain a +2 bonus to your Evasion against the attack.
`,
        mastery: `
_**Apex Predator:**_ Before you make an attack roll against your _Focus_, you can **spend a** **Hope**. On a successful attack, you remove a Fear from the GM’s Fear pool.
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
_**Expert Training:**_ Choose an additional level-up option for your companion.

_**Battle-Bonded:**_ When an adversary attacks you while they’re within your companion’s Melee range, you gain a +2 bonus to your Evasion against the attack.
`,
        mastery: `
_**Advanced Training:**_ Choose two additional level-up options for your companion.

_**Loyal Friend:**_ Once per long rest, when the damage from an attack would mark your companion’s last Stress or your last Hit Point and you’re within Close range of each other, you or your companion can rush to the other’s side and take that damage instead.
`,
    },
    nightwalker: {
        name: "Nightwalker",
        foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>FINESSE</i></p>

_**Shadow Stepper:**_ You can move from shadow to shadow. When you move into an area of darkness or a shadow cast by another creature or object, you can **mark a** **Stress** to disappear from where you are and reappear inside another shadow within Far range. When you reappear, you are Cloaked.
`,
        specialization: `
_**Dark Cloud:**_ Make a **Spellcast Roll** **(15).** On a success, create a temporary dark cloud that covers any area within Close range. Anyone in this cloud can’t see outside of it, and anyone outside of it can’t see in. You’re considered Cloaked from any adversary for whom the cloud blocks line of sight.

_**Adrenaline:**_ While you’re _Vulnerable_, add your level to your damage rolls.
`,
        mastery: `
_**Fleeting Shadow:**_ Gain a permanent +1 bonus to your Evasion. You can use your “Shadow Stepper” feature to move within Very Far range.

_**Vanishing Act:**_ **Mark a Stress** to become Cloaked at any time. When _Cloaked_ from this feature, you automatically clear the _Restrained_ condition if you have it. You remain _Cloaked_ in this way until you roll with Fear or until your next rest.
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
_**Contacts Everywhere:**_ Once per session, you can briefly call on a shady contact. Choose one of the following benefits and describe what brought them here to help you in this moment:
- They provide 1 handful of gold, a unique tool, or a mundane object that the situation requires.
- On your next action roll, their help provides a +3 bonus to the result of your Hope or Fear Die.
- The next time you deal damage, they snipe from the shadows, adding **2d8** to your damage roll.
`,
        mastery: `
_**Reliable Backup:**_ You can use your “Contacts Everywhere” feature three times per session. The following options are added to the list of benefits you can choose from when you use that feature:
- When you mark 1 or more Hit Points, they can rush out to shield you, reducing the Hit Points marked by 1.
- When you make a Presence Roll in conversation, they back you up. You can roll a **d20** as your Hope Die.
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
_**Devout:**_ When you roll your Prayer Dice, you can roll an additional die and discard the lowest result. Additionally, you can use your “Sparing Touch” feature twice instead of once per long rest.
`,
        mastery: `
_**Sacred Resonance:**_ When you roll damage for your “Spirit Weapon” feature, if any of the die results match, double the value of each matching die. For example, if you roll two 5s, they count as two 10s.
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
_**Ethereal Visage:**_ Your supernatural visage strikes awe and fear. While flying, you have advantage on Presence Rolls. When you succeed with Hope on a Presence Roll, you can remove a Fear from the GM’s Fear pool instead of gaining Hope.
`,
        mastery: `
_**Ascendant:**_ Gain a permanent +4 bonus to your Severe damage threshold.

_**Power of The Gods:**_ While flying, you deal an extra **1d12** damage instead of 1d8 from your “Wings of Light” feature.
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
_**Enchanted Aid:**_ You can enhance the magic of others with your essence. When you Help an Ally with a Spellcast Roll, you can roll a **d8** as your advantage die. Once per long rest, after an ally has made a Spellcast Roll with your help, you can swap the results of their Duality Dice.
`,
        mastery: `
_**Arcane Charge:**_ You can gather magical energy to enhance your capabilities. When you take magic damage, you become _Charged_. Alternatively, you can **spend 2** **Hope** to become _Charged_. When you successfully make an attack that deals magic damage while _Charged_, you can clear your _Charge_ to either gain a +10 bonus to the damage roll or gain a +3 bonus to the Difficulty of a reaction roll the spell causes the target to make. You stop being _Charged_ at your next long rest.
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
_**Natural Evasion:**_ You can call forth your element to protect you from harm. When an attack roll against you succeeds, you can **mark a** **Stress** and describe how you use your element to defend you. When you do, roll a **d6** and add its result to your Evasion against the attack.
`,
        mastery: `
_**Transcendence:**_ Once per long rest, you can transform into a physical manifestation of your element. When you do, describe your transformation and choose two of the following benefits to gain until your next rest:
- +4 bonus to your Severe threshold
- +1 bonus to a character trait of your choice
- +1 bonus to your Proficiency
- +2 bonus to your Evasion
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
_**Menacing Reach:**_ When you _Imbue_ your weapon with your Patron’s fury, you can **mark an additional Stress** to increase its range by one step (Melee to Very Close, Very Close to Close, etc.).

_**Diminish My Foes:**_ When you succeed with Hope on an action roll against a target, you can **spend a Hope** to make your target mark a Stress.
`,
        mastery: `
_**Fearsome Attack:**_ You can always **spend a Favor** to reroll any number of your damage dice. You can continue spending Favor to reroll the same dice as many times as you’d like.

_**Divine Ire:**_ Once per rest, when you take damage, you can **spend any number of Favor** to target that many adversaries within Close range. Each target must mark a Hit Point.
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
_**Draining Invocation:**_ When an adversary attacks you or an ally within Very Close range, you can **spend a Favor** to make them use a **d12** instead of a **d20** for the attack roll. Additionally, the adversary must mark a Stress, and you can clear a Stress.
`,
        mastery: `
_**Dark Aegis:**_ Once per long rest, when you would mark any number of Hit Points, you can **spend a Favor** instead.

_**Draining Bane:**_ When an adversary attacks you or an ally within Very Close range, you can **spend 2 Favor** to temporarily _Drain_ them. When you do, they must mark a Stress and you can clear a Stress. A _Drained_ creature uses a **d12** instead of a **d20** for attack rolls.
`,
    },
    brave: {
        name: "Call of the Brave",
        foundation: `
_**Courage:**_ When you fail a roll with Fear, you gain a Hope.

_**Battle Ritual:**_ Once per long rest, before you attempt something incredibly dangerous or face off against a foe who clearly outmatches you, describe what ritual you perform or preparations you make. When you do, clear 2 Stress and gain 2 Hope.
`,
        specialization: `
_**Rise to the Challenge:**_ You are vigilant in the face of mounting danger. While you have 2 or fewer Hit Points unmarked, you can roll a **d20** as your Hope Die.
`,
        mastery: `
_**Camaraderie:**_ Your unwavering bravery is a rallying point for your allies. You can initiate a Tag Team Roll one additional time per session. Additionally, when an ally initiates a Tag Team Roll with you, they only need to spend 2 Hope to do so.
`,
    },
    slayer: {
        name: "Call of the Slayer",
        foundation: `

_**Slayer:**_ You gain a pool of dice called Slayer Dice. On a roll with Hope, you can place a **d6** on this card instead of gaining a Hope, adding the die to the pool.  
You can store a number of Slayer Dice equal to your Proficiency. When you make an attack roll or damage roll, you can spend any number of these Slayer Dice, rolling them and adding their result to the roll. At the end of each session, clear any unspent Slayer Dice on this card and gain a Hope per die cleared.
`,
        specialization: `
_**Weapon Specialist:**_ You can wield multiple weapons with dangerous ease. When you succeed on an attack, you can **spend a** **Hope** to add one of the damage dice from your secondary weapon to the damage roll. Additionally, once per long rest when you roll your Slayer Dice, reroll any 1s.
`,
        mastery: `
_**Martial Preparation:**_ You’re an inspirational warrior to all who travel with you. Your party gains access to the Martial Preparation downtime move. To use this move during a rest, describe how you instruct and train with your party. You and each ally who chooses this downtime move gain a **d6** Slayer Die. A PC with a Slayer Die can spend it to roll the die and add the result to an attack or damage roll of their choice.
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
_**Moonbeam:**_ Once per session, you can conjure a column of moonlight that illuminates the area within Close range until the end of the scene. While bathed in this moonlight, you and any allies gain a +1 bonus to Spellcast Rolls and advantage on rolls to see through illusions.

_**Ire of Pale Light:**_ When a Hexed creature within Far range fails an attack roll, they must mark a Stress.
`,
        mastery: `
_**Lunar Phases:**_ Your spirit ebbs and flows like the phases of the moon. At the beginning of each session, roll a **d4** and gain the matching effect until the end of the session:
- _**1:** New - You can always spend a **Hope** to reduce Minor damage to None._
- _**2:** Waxing - Gain a **+2** bonus to your damage rolls._
- _**3:** Full - Gain a **+2** bonus to your damage thresholds._
- _**4:** Waning - Gain a **+1** bonus to your Evasion._
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
_**Walk Between Worlds:**_ Make a **Spellcast Roll (13)** to step beyond the veil of death and converse with any nearby spirits. Place a number of tokens equal to your Spellcast trait on this card and remove one each time a spirit answers a question. You return to the mortal realm when the last token is removed.

_**Enhanced Hex:**_ Attacks you make against _Hexed_ creatures gain a damage bonus equal to your Proficiency.
`,
        mastery: `
_**Circle of Power:**_ Once per rest, mark a circle on the ground around you up to Very Close range and place a number of tokens equal to your Spellcast Trait on this card. Each time you or any ally within the circle makes an action roll or is hit with an attack, remove a token. This spell lasts until the last token is removed or you step out of the circle. While within this circle, you and any allies:
- _Gain a **+4** bonus to your damage thresholds._
- _Gain a **+2** bonus to your attack rolls._
- _Gain a **+1** bonus to your Evasion._
`,
    },
    knowledge: {
        name: "School of Knowledge",
        foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>KNOWLEDGE</i></p>

_**Prepared:**_ Take an additional domain card of your level or lower from a domain you have access to.

_**Adept:**_ When you Utilize an Experience, you can **mark a** **Stress** instead of spending a Hope. If you do, double your Experience modifier for that roll.
`,
        specialization: `
_**Accomplished:**_ Take an additional domain card of your level or lower from a domain you have access to.

_**Perfect Recall:**_ Once per rest, when you recall a domain card in your vault, you can reduce its Recall Cost by 1.
`,
        mastery: `
_**Brilliant:**_ Take an additional domain card of your level or lower from a domain you have access to.

_**Honed Expertise:**_ When you use an Experience, roll a **d6**. On a result of 5 or higher, you can use it without spending Hope.
`,
    },
    war: {
        name: "School of War",
        foundation: `
<p style="text-align: center;"><b>SPELLCAST:</b> <i>KNOWLEDGE</i></p>

_**Battlemage:**_ You’ve focused your studies on becoming an unconquerable force on the battlefield. Gain an additional Hit Point slot.

_**Face Your Fear:**_ When you succeed with Fear on an attack roll, you deal an extra 1d10 magic damage.
`,
        specialization: `
_**Conjure Shield:**_ You can maintain a protective barrier of magic. While you have at least 2 Hope, you add your Proficiency to your Evasion.

_**Fueled by Fear:**_ The extra magic damage from your “Face Your Fear” feature increases to **2d10**.
`,
        mastery: `
_**Thrive in Chaos:**_ When you succeed on an attack, you can **mark a** **Stress** after rolling damage to force the target to mark an additional Hit Point.

_**Have No Fear:**_ The extra magic damage from your “Face Your Fear” feature increases to **3d10**.
`,
    }
}