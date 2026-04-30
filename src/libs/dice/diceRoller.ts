export type PlainDie = 'd2' | 'd4' | 'd6' | 'd8' | 'd10' | 'd20' | 'd100'

export const PLAIN_DICE: PlainDie[] = ['d100', 'd20', 'd10', 'd8', 'd6', 'd4', 'd2']

export type DiceMod = {
  label: string
  value: number
}

export type DualityOutcome = 'hope' | 'fear' | 'critical'

export type RollBlockKind = 'plain' | 'hope' | 'fear' | 'advantage' | 'disadvantage'

export type RollBlock = {
  kind: RollBlockKind
  label: string
  rolls: number[]
  sign: 1 | -1
  subtotal: number
}

export type ParsedToken
  = | { type: 'plain', count: number, faces: number, prof: boolean, sign: 1 | -1 }
    | { type: 'duality' }
    | { type: 'adv', count: number }
    | { type: 'disadv', count: number }
    | { type: 'const', value: number, label?: string }

export type ParseResult = {
  tokens: ParsedToken[]
  errors: string[]
}

export type RollResult = {
  blocks: RollBlock[]
  diceTotal: number
  modifiers: DiceMod[]
  modifiersTotal: number
  total: number
  outcome?: DualityOutcome
  proficiencyApplications: { faces: number, multiplier: number, count: number }[]
  timestamp: number
}

export function rollDie (faces: number): number {
  return Math.floor(Math.random() * faces) + 1
}

function rollMany (faces: number, count: number): number[] {
  const out: number[] = []
  for (let i = 0; i < count; i++) {
    out.push(rollDie(faces))
  }
  return out
}

function splitTerms (input: string): { sign: 1 | -1, body: string }[] {
  const norm = input.replaceAll('−', '-')
  const parts: { sign: 1 | -1, body: string }[] = []
  let buf = ''
  let curSign: 1 | -1 = 1
  let depth = 0
  for (const c of norm) {
    if (c === '(') {
      depth++
      buf += c
      continue
    }
    if (c === ')') {
      depth = Math.max(0, depth - 1)
      buf += c
      continue
    }
    if (depth === 0 && (c === '+' || c === '-')) {
      const body = buf.trim()
      if (body) {
        parts.push({ sign: curSign, body })
      }
      buf = ''
      curSign = c === '-' ? -1 : 1
      continue
    }
    buf += c
  }
  const tail = buf.trim()
  if (tail) {
    parts.push({ sign: curSign, body: tail })
  }
  return parts
}

export function parseExpression (input: string): ParseResult {
  const tokens: ParsedToken[] = []
  const errors: string[] = []
  for (const { sign, body } of splitTerms(input)) {
    const tok = parseTerm(body, sign)
    if (tok) {
      tokens.push(tok)
    } else {
      errors.push(body)
    }
  }
  return { tokens, errors }
}

function parseTerm (body: string, sign: 1 | -1): ParsedToken | null {
  const die = /^(\d+)\s*d\s*(\d+)\s*(\(\s*prof\s*\))?$/i.exec(body)
  if (die) {
    return {
      type: 'plain',
      count: Number.parseInt(die[1], 10),
      faces: Number.parseInt(die[2], 10),
      prof: !!die[3],
      sign,
    }
  }
  if (/^duality$/i.test(body)) {
    return { type: 'duality' }
  }
  const adv = /^(\d+)?\s*adv(?:antage)?$/i.exec(body)
  if (adv) {
    const n = adv[1] ? Number.parseInt(adv[1], 10) : 1
    return { type: 'adv', count: sign === -1 ? -n : n }
  }
  const dis = /^(\d+)?\s*disadv(?:antage)?$/i.exec(body)
  if (dis) {
    const n = dis[1] ? Number.parseInt(dis[1], 10) : 1
    return { type: 'disadv', count: sign === -1 ? -n : n }
  }
  const named = /^([A-Za-z][\w'\s]*?)\s*\(\s*(-?\d+)\s*\)$/.exec(body)
  if (named) {
    return {
      type: 'const',
      value: sign * Number.parseInt(named[2], 10),
      label: named[1].trim(),
    }
  }
  const num = /^(\d+)$/.exec(body)
  if (num) {
    return { type: 'const', value: sign * Number.parseInt(num[1], 10) }
  }
  return null
}

export function rollFromTokens (tokens: ParsedToken[], proficiency: number): RollResult {
  const blocks: RollBlock[] = []
  const mods: DiceMod[] = []
  const profApplications: RollResult['proficiencyApplications'] = []
  let outcome: DualityOutcome | undefined
  const prof = proficiency > 1 ? proficiency : 0

  for (const t of tokens) {
    switch (t.type) {
      case 'plain': {
        const baseCount = t.count
        const count = t.prof && prof > 0 ? baseCount * prof : baseCount
        if (count <= 0) {
          continue
        }
        const rolls = rollMany(t.faces, count)
        const sum = rolls.reduce((a, b) => a + b, 0)
        blocks.push({
          kind: 'plain',
          label: `${t.sign === -1 ? '−' : ''}${count}d${t.faces}${t.prof && prof > 0 ? ' (prof)' : ''}`,
          rolls,
          sign: t.sign,
          subtotal: t.sign * sum,
        })
        if (t.prof && prof > 0) {
          profApplications.push({ faces: t.faces, multiplier: prof, count: baseCount })
        }

        break
      }
      case 'duality': {
        const hope = rollDie(12)
        const fear = rollDie(12)
        outcome = hope === fear ? 'critical' : (hope > fear ? 'hope' : 'fear')
        blocks.push(
          { kind: 'hope', label: 'Hope d12', rolls: [hope], sign: 1, subtotal: hope },
          { kind: 'fear', label: 'Fear d12', rolls: [fear], sign: 1, subtotal: fear },
        )

        break
      }
      case 'adv': {
        if (t.count <= 0) {
          continue
        }
        const rolls = rollMany(6, t.count)
        const sum = rolls.reduce((a, b) => a + b, 0)
        blocks.push({
          kind: 'advantage',
          label: t.count > 1 ? `+${t.count}d6 adv` : '+d6 adv',
          rolls,
          sign: 1,
          subtotal: sum,
        })

        break
      }
      case 'disadv': {
        if (t.count <= 0) {
          continue
        }
        const rolls = rollMany(6, t.count)
        const sum = rolls.reduce((a, b) => a + b, 0)
        blocks.push({
          kind: 'disadvantage',
          label: t.count > 1 ? `−${t.count}d6 disadv` : '−d6 disadv',
          rolls,
          sign: -1,
          subtotal: -sum,
        })

        break
      }
      case 'const': {
        mods.push({ label: t.label ?? '', value: t.value })

        break
      }
    // No default
    }
  }

  const diceTotal = blocks.reduce((a, b) => a + b.subtotal, 0)
  const modifiersTotal = mods.reduce((a, m) => a + m.value, 0)

  return {
    blocks,
    diceTotal,
    modifiers: mods,
    modifiersTotal,
    total: diceTotal + modifiersTotal,
    outcome,
    proficiencyApplications: profApplications,
    timestamp: Date.now(),
  }
}
