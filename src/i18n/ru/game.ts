import { ancestries } from '@/i18n/ru/game/ancestries.ts'
import { arcana } from '@/i18n/ru/game/cards/arcana.ts'
import { blade } from '@/i18n/ru/game/cards/blade.ts'
import { bone } from '@/i18n/ru/game/cards/bone.ts'
import { codex } from '@/i18n/ru/game/cards/codex.ts'
import { dread } from '@/i18n/ru/game/cards/dread.ts'
import { grace } from '@/i18n/ru/game/cards/grace.ts'
import { midnight } from '@/i18n/ru/game/cards/midnight.ts'
import { sage } from '@/i18n/ru/game/cards/sage.ts'
import { splendor } from '@/i18n/ru/game/cards/splendor.ts'
import { valor } from '@/i18n/ru/game/cards/valor.ts'
import { classes as generatedClasses } from '@/i18n/ru/game/classes.ts'
import { communities } from '@/i18n/ru/game/communities.ts'
import { items as generatedItems } from '@/i18n/ru/game/items.ts'
import { subclasses as generatedSubclasses } from '@/i18n/ru/game/subclasses.ts'

const appearanceHint = 'Выберите один или несколько вариантов из каждой строки либо опишите своего персонажа сами.'
const appearanceFields = ['clothes', 'eyes', 'body', 'color', 'attitude'] as const
const appearanceLabels = {
  clothes: 'Одежда',
  eyes: 'Глаза',
  body: 'Телосложение',
  color: 'Цвет кожи',
  attitude: 'Манера',
}
const traits = {
  agility: {
    name: 'Проворность',
    title: 'Проворность',
    usedFor: `Пробежать<br>
Прыгнуть<br>
Маневрировать`,
  },
  strength: {
    name: 'Сила',
    title: 'Сила',
    usedFor: `Поднять<br>
Крушить<br>
Схватить`,
  },
  finesse: {
    name: 'Искусность',
    title: 'Искусность',
    usedFor: `Взломать<br>
Скрыться<br>
Смастерить`,
  },
  instinct: {
    name: 'Инстинкт',
    title: 'Инстинкт',
    usedFor: `Увидеть<br>
Чувствовать<br>
Ориентироваться`,
  },
  presence: {
    name: 'Влияние',
    title: 'Влияние',
    usedFor: `Очаровать<br>
Выступить<br>
Обмануть`,
  },
  knowledge: {
    name: 'Знание',
    title: 'Знание',
    usedFor: `Вспоминать<br>
Анализировать<br>
Понимать`,
  },
}

type AppearanceField = typeof appearanceFields[number]
type GeneratedAppearance = Partial<Record<AppearanceField, string[]>>
type GeneratedFlavor = {
  appearance?: GeneratedAppearance
  [key: string]: unknown
}
type GeneratedClass = {
  flavor?: GeneratedFlavor
  [key: string]: unknown
}
type GeneratedSubclass = {
  spellcastTrait?: string
  foundation?: string
  [key: string]: unknown
}

function formatAppearance(appearance: GeneratedAppearance = {}) {
  return appearanceFields
    .filter((field) => appearance[field]?.length)
    .map((field) => `${appearanceLabels[field]}: ${appearance[field]?.join(', ')}`)
}

function classWithFlavor(classData: GeneratedClass) {
  const flavor = classData.flavor ?? {}

  return {
    ...classData,
    flavor: {
      ...flavor,
      appearance: formatAppearance(flavor.appearance),
      appearanceHint,
    },
  }
}

function spellcastHeader(trait: string | undefined) {
  if (!trait) return ''

  const traitName = traits[trait as keyof typeof traits]?.name ?? trait
  return `<p style="text-align: center;"><b>ХАРАКТЕРИСТИКА ЗАКЛИНАТЕЛЯ:</b> <i>${traitName.toLocaleUpperCase('ru')}</i></p>\n\n`
}

function subclassWithSpellcast(subclass: GeneratedSubclass) {
  const { spellcastTrait, foundation = '', ...rest } = subclass

  return {
    ...rest,
    foundation: `${spellcastHeader(spellcastTrait)}${foundation}`,
  }
}

const classes = {
  ...Object.fromEntries(Object.entries(generatedClasses).map(([key, classData]) => [key, classWithFlavor(classData)])),
  brawler: {
    ...classWithFlavor(generatedClasses.brawler),
    comboDie: { title: 'Кость Комбо' },
  },
  guardian: {
    ...classWithFlavor(generatedClasses.guardian),
    unstoppable: {
      ...generatedClasses.guardian.unstoppable,
      title: 'Кость Неудержимости',
      activate: 'Стать Неудержимым',
      dropOut: 'Завершить',
      increase: 'Увеличить',
      decrease: 'Уменьшить',
      inactive: 'Неактивно',
    },
  },
  seraph: {
    ...classWithFlavor(generatedClasses.seraph),
    prayerDice: { title: 'Кости Молитвы' },
  },
  warlock: {
    ...classWithFlavor(generatedClasses.warlock),
    patron: {
      ...generatedClasses.warlock.patron,
      title: 'Покровитель',
      namePlaceholder: 'Имя покровителя',
      spheresTitle: 'Сферы влияния',
      sphereName: 'Сфера',
      sphereValue: 'Значение сферы',
      spheresAdd: 'Добавить сферу',
      spheresRemove: 'Удалить сферу',
      favorTitle: 'Милость',
    },
  },
  wizard: {
    ...classWithFlavor(generatedClasses.wizard),
    strangePatterns: {
      title: 'Странные закономерности',
      label: 'Число странной закономерности',
    },
  },
}

const subclasses = {
  levels: {
    1: 'Основа',
    2: 'Специализация',
    3: 'Мастерство',
  },
  ...Object.fromEntries(Object.entries(generatedSubclasses).map(([key, subclass]) => [key, subclassWithSpellcast(subclass)])),
}

const items = {
  ...generatedItems,
  torch: { name: 'Факел' },
  rope50ft: { name: 'Веревка (15 м)' },
  basicSupplies: { name: 'Базовые припасы' },
  healthPotionS: { name: generatedItems.healthPotionS?.name ?? 'Малое Зелье Лечения' },
  staminaPotionS: { name: generatedItems.staminaPotionS?.name ?? 'Малое Зелье Выносливости' },
}

export const game = {
  domains: {
    arcana: 'Аркана',
    blade: 'Клинок',
    bone: 'Кость',
    codex: 'Кодекс',
    dread: 'Ужас',
    grace: 'Грация',
    midnight: 'Полночь',
    sage: 'Мудрость',
    splendor: 'Величие',
    valor: 'Доблесть',
  },
  cards: {
    stressTooltip: 'Стоимость Призыва',
    kinds: {
      spell: 'Заклинание',
      skill: 'Навык',
      grimoire: 'Гримуар',
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
      name: 'Двуручный Посох',
      featureName: 'Мощное',
      featureDescription: 'При успешной атаке бросьте дополнительную кость урона и отбросьте результат с наименьшим значением.',
    },
    broadsword: {
      name: 'Палаш',
      featureName: 'Надёжное',
      featureDescription: '+1 к броскам атаки',
    },
    shortsword: {
      name: 'Короткий Меч',
      featureName: 'Парное',
      featureDescription: '+2 к урону основного оружия по целям, Вплотную к вам',
    },
    rapier: {
      name: 'Рапира',
      featureName: 'Быстрое',
      featureDescription: 'Когда вы совершаете атаку, вы можете отметить Стресс, чтобы выбрать целью еще одно существо в пределах дальности.',
    },
    smallDagger: {
      name: 'Малый Кинжал',
      featureName: 'Парное',
      featureDescription: '+2 к урону основного оружия по целям, Вплотную к вам',
    },
    quarterstaff: {
      name: 'Боевой Посох',
      featureName: '',
      featureDescription: '',
    },
    shortstaff: {
      name: 'Короткий Посох',
      featureName: '',
      featureDescription: '',
    },
    roundShield: {
      name: 'Круглый Щит',
      featureName: 'Защитное',
      featureDescription: '+1 к Показателю Брони',
    },
    battleaxe: {
      name: 'Секира',
      featureName: '',
      featureDescription: '',
    },
    shortbow: {
      name: 'Короткий Лук',
      featureName: '',
      featureDescription: '',
    },
    dagger: {
      name: 'Кинжал',
      featureName: '',
      featureDescription: '',
    },
    hallowedAxe: {
      name: 'Священный Топор',
      featureName: '',
      featureDescription: '',
    },
    dualstaff: {
      name: 'Двойной Посох',
      featureName: '',
      featureDescription: '',
    },
    scepter: {
      name: 'Скипетр',
      featureName: 'Универсальное',
      featureDescription: 'Это оружие также можно использовать со следующими характеристиками: Влияние, Вплотную, d8.',
    },
    longsword: {
      name: 'Длинный Меч',
      featureName: '',
      featureDescription: '',
    },
  },
  armors: {
    leatherArmor: {
      name: 'Кожаный Доспех',
      feature: '',
    },
    gambesonArmor: {
      name: 'Стеганый Доспех',
      feature: 'Гибкое: +1 к Уклонению',
    },
    chainmailArmor: {
      name: 'Кольчужный Доспех',
      feature: 'Тяжёлое: −1 к Уклонению',
    },
  },
  distances: {
    melee: 'Вплотную',
    meleeClose: 'Вплотную/Средне',
    close: 'Средне',
    far: 'Далеко',
    veryfar: 'Очень далеко',
  },
  damageKinds: {
    physical: 'Физический',
    magic: 'Магический',
  },
  items,
  itemChoiceGroups: {
    potion: {
      label: 'Выберите зелье',
    },
    lore: {
      label: 'Выберите предмет',
    },
  },
  classes,
  ancestries,
  communities,
  subclasses,
  traits,
}
