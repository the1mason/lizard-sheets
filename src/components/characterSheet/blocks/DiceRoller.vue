<template>
  <teleport to="body">
    <v-btn
      :aria-label="$t('sheet.dice.title')"
      class="dice-fab"
      :class="{ 'dice-fab--mobile-offset': mobile }"
      color="secondary"
      elevation="6"
      :icon="open ? 'mdi-close' : 'mdi-dice-multiple'"
      size="x-large"
      @click="open = !open"
    />
    <transition name="dice-panel-fade">
      <v-card
        v-if="open"
        border
        class="dice-panel pa-3"
        elevation="12"
      >
        <div class="d-flex align-center mb-2">
          <span class="text-h6">{{ $t('sheet.dice.title') }}</span>
          <v-spacer />
          <v-btn
            :aria-label="$t('sheet.dice.close')"
            density="comfortable"
            icon="mdi-close"
            size="small"
            variant="text"
            @click="open = false"
          />
        </div>

        <v-card v-if="lastResult" class="dice-result pa-2 mb-3" color="lighten" flat>
          <div class="d-flex align-center justify-space-between mb-1">
            <span class="text-caption text-medium-emphasis dice-result-expr">
              {{ formatExpression(lastResult) }}
            </span>
            <span
              v-if="lastResult.outcome"
              class="text-caption font-weight-bold ml-2"
              :class="outcomeClass(lastResult.outcome)"
            >
              {{ $t(`sheet.dice.outcome.${lastResult.outcome}`) }}
            </span>
          </div>
          <div class="dice-result-row">
            <template v-for="(block, bi) in lastResult.blocks" :key="bi">
              <span
                v-for="(value, vi) in block.rolls"
                :key="`${bi}-${vi}`"
                class="dice-pill"
                :class="blockPillClass(block)"
                :title="block.label"
              >
                <span v-if="vi === 0 && block.sign === -1" class="dice-pill-sign">−</span>
                {{ value }}
              </span>
            </template>
            <template v-if="lastResult.modifiers.length > 0">
              <span class="dice-op">{{ lastResult.modifiersTotal >= 0 ? '+' : '−' }}</span>
              <span class="dice-pill dice-mod">{{ Math.abs(lastResult.modifiersTotal) }}</span>
            </template>
            <span class="dice-eq">=</span>
            <span class="dice-total">{{ lastResult.total }}</span>
          </div>
          <div
            v-if="lastResult.modifiers.length > 0"
            class="text-caption text-medium-emphasis mt-1"
          >
            {{ formatModifierBreakdown(lastResult.modifiers) }}
          </div>
          <div
            v-for="(p, i) in lastResult.proficiencyApplications"
            :key="i"
            class="text-caption text-medium-emphasis mt-1"
          >
            {{ $t('sheet.dice.profApplied', {
              count: p.count,
              mult: p.multiplier,
              total: p.count * p.multiplier,
              faces: p.faces,
            }) }}
          </div>
        </v-card>

        <v-text-field
          v-model="expression"
          density="compact"
          :error-messages="parseErrors"
          hide-details="auto"
          :placeholder="$t('sheet.dice.placeholder')"
          variant="outlined"
        />

        <div class="dice-section-label mt-3">{{ $t('sheet.dice.dice') }}</div>
        <div class="d-flex flex-wrap mb-2" style="gap: 4px;">
          <v-btn
            v-for="d in plainDice"
            :key="d"
            color="primary"
            density="comfortable"
            size="small"
            variant="tonal"
            @click="appendDie(faces(d))"
          >
            +{{ d }}
          </v-btn>
        </div>

        <div class="dice-section-label">{{ $t('sheet.dice.special') }}</div>
        <div class="d-flex flex-wrap mb-2" style="gap: 4px;">
          <v-btn
            color="primary"
            density="comfortable"
            size="small"
            :variant="hasDuality ? 'flat' : 'tonal'"
            @click="toggleDuality"
          >
            {{ $t('sheet.dice.kinds.duality') }}
          </v-btn>
          <v-btn
            color="primary"
            density="comfortable"
            size="small"
            variant="tonal"
            @click="appendAdv"
          >
            +{{ $t('sheet.dice.kinds.advantage') }}
          </v-btn>
          <v-btn
            color="primary"
            density="comfortable"
            size="small"
            variant="tonal"
            @click="appendDisadv"
          >
            +{{ $t('sheet.dice.kinds.disadvantage') }}
          </v-btn>
          <v-btn
            color="primary"
            density="comfortable"
            :disabled="!hasAnyPlainDie"
            size="small"
            :variant="lastDieHasProf ? 'flat' : 'tonal'"
            @click="toggleProfOnLast"
          >
            {{ $t('sheet.dice.profButton', { count: proficiencyCount }) }}
          </v-btn>
        </div>

        <div class="dice-section-label">{{ $t('sheet.dice.traitMods') }}</div>
        <div class="d-flex flex-wrap mb-2" style="gap: 4px;">
          <v-chip
            v-for="trait in traitOrder"
            :key="trait"
            filter
            :model-value="isTraitInExpression(trait)"
            size="small"
            @click="toggleTrait(trait)"
          >
            {{ traitLabel(trait) }} {{ formatSign(traitValue(trait)) }}
          </v-chip>
        </div>

        <div class="dice-section-label">{{ $t('sheet.dice.bonus') }}</div>
        <div class="d-flex flex-wrap mb-3" style="gap: 4px;">
          <v-btn
            v-for="n in [1, 2, 3, 5]"
            :key="`p${n}`"
            density="comfortable"
            size="small"
            variant="tonal"
            @click="appendConst(n)"
          >
            +{{ n }}
          </v-btn>
          <v-btn
            v-for="n in [1, 2, 3, 5]"
            :key="`m${n}`"
            density="comfortable"
            size="small"
            variant="tonal"
            @click="appendConst(-n)"
          >
            −{{ n }}
          </v-btn>
        </div>

        <div class="d-flex align-center" style="gap: 8px;">
          <v-btn
            color="primary"
            :disabled="!canRoll"
            variant="flat"
            @click="roll"
          >
            {{ $t('sheet.dice.roll') }}
          </v-btn>
          <v-btn
            v-if="expression.length > 0"
            density="comfortable"
            size="small"
            variant="text"
            @click="reset"
          >
            {{ $t('sheet.dice.reset') }}
          </v-btn>
          <v-spacer />
          <v-btn
            v-if="history.length > 0"
            density="comfortable"
            size="small"
            variant="text"
            @click="history = []"
          >
            {{ $t('sheet.dice.clearHistory') }}
          </v-btn>
        </div>

        <div v-if="historyTail.length > 0" class="mt-3">
          <div class="dice-section-label">{{ $t('sheet.dice.history') }}</div>
          <div class="dice-history">
            <div
              v-for="(r, i) in historyTail"
              :key="r.timestamp + '-' + i"
              class="dice-history-row"
            >
              <span class="text-caption text-medium-emphasis dice-history-detail">
                {{ formatExpression(r) }}
              </span>
              <span class="ml-auto"><b>{{ r.total }}</b></span>
            </div>
          </div>
        </div>
      </v-card>
    </transition>
    <transition name="dice-backdrop-fade">
      <div v-if="open" class="dice-backdrop" @click="open = false" />
    </transition>
  </teleport>
</template>

<script setup lang="ts">
  import type { DiceMod, RollBlock, RollResult } from '@/libs/dice/diceRoller.ts'
  import type { Character } from '@/types/game/character.ts'
  import type { CharacterTraits } from '@/types/game/characterTraits.ts'
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useDisplay } from 'vuetify'
  import { parseExpression, PLAIN_DICE, rollFromTokens } from '@/libs/dice/diceRoller.ts'

  const props = defineProps<{
    character: Character
  }>()

  const { t } = useI18n()
  const { mobile } = useDisplay()

  const traitOrder: (keyof CharacterTraits)[] = [
    'agility', 'strength', 'finesse', 'instinct', 'presence', 'knowledge',
  ]
  const plainDice = PLAIN_DICE

  const open = ref(false)
  const expression = ref('')
  const history = ref<RollResult[]>([])

  const lastResult = computed<RollResult | null>(() => history.value[0] ?? null)
  const historyTail = computed<RollResult[]>(() => history.value.slice(1, 11))

  const proficiencyCount = computed(() => {
    const v = props.character.proficiency
    return typeof v === 'number' && v > 0 ? v : 1
  })

  const parsed = computed(() => parseExpression(expression.value))
  const parseErrors = computed(() => {
    return parsed.value.errors.length > 0
      ? [t('sheet.dice.parseError', { items: parsed.value.errors.join(', ') })]
      : undefined
  })
  const canRoll = computed(() => parsed.value.tokens.length > 0 && parsed.value.errors.length === 0)

  const hasDuality = computed(() => /\bduality\b/i.test(expression.value))
  const hasAnyPlainDie = computed(() => /\d+\s*d\s*\d+/i.test(expression.value))
  const lastDieHasProf = computed(() => {
    const m = findLastDie(expression.value)
    return !!m && !!m.prof
  })

  function faces (d: string): number {
    return Number.parseInt(d.slice(1), 10)
  }

  function traitLabel (name: keyof CharacterTraits): string {
    return t(`game.traits.${name}.name`)
  }

  function traitValue (name: keyof CharacterTraits): number {
    return props.character.traits?.[name] ?? 0
  }

  function escapeRegex (s: string): string {
    return s.replaceAll(/[\\^$.*+?()[\]{}|]/g, String.raw`\$&`)
  }

  function appendTerm (text: string) {
    const cur = expression.value.trim()
    expression.value = cur ? `${cur} + ${text}` : text
  }

  function appendDie (facesNum: number) {
    const trimmed = expression.value.trimEnd()
    const re = new RegExp(String.raw`(\d+)d${facesNum}\b(?!\s*\(\s*prof)`, 'i')
    const matches: RegExpExecArray[] = []
    let m: RegExpExecArray | null
    const global = new RegExp(re.source, 'gi')
    while ((m = global.exec(trimmed)) !== null) matches.push(m)
    const last = matches.at(-1)
    const trailing = last && last.index + last[0].length === trimmed.length
    if (trailing && last) {
      const newCount = Number.parseInt(last[1], 10) + 1
      expression.value = trimmed.slice(0, last.index) + `${newCount}d${facesNum}` + trimmed.slice(last.index + last[0].length)
      return
    }
    appendTerm(`1d${facesNum}`)
  }

  function appendAdv () {
    const trimmed = expression.value.trimEnd()
    const re = /(\d+)?\s*advantage\s*$/i
    const m = re.exec(trimmed)
    if (m) {
      const cur = m[1] ? Number.parseInt(m[1], 10) : 1
      expression.value = trimmed.replace(re, `${cur + 1} advantage`)
      return
    }
    appendTerm('advantage')
  }

  function appendDisadv () {
    const trimmed = expression.value.trimEnd()
    const re = /(\d+)?\s*disadvantage\s*$/i
    const m = re.exec(trimmed)
    if (m) {
      const cur = m[1] ? Number.parseInt(m[1], 10) : 1
      expression.value = trimmed.replace(re, `${cur + 1} disadvantage`)
      return
    }
    appendTerm('disadvantage')
  }

  function toggleDuality () {
    if (hasDuality.value) {
      expression.value = expression.value
        .replaceAll(/\s*[+-]\s*duality\b/gi, '')
        .replace(/^\s*duality\s*[+-]?\s*/i, '')
        .trim()
    } else {
      appendTerm('duality')
    }
  }

  function findLastDie (input: string): { index: number, len: number, count: number, faces: number, prof: boolean } | null {
    const re = /(\d+)\s*d\s*(\d+)\s*(\(\s*prof\s*\))?/gi
    let last: RegExpExecArray | null = null
    let m: RegExpExecArray | null
    while ((m = re.exec(input)) !== null) last = m
    if (!last) return null
    return {
      index: last.index,
      len: last[0].length,
      count: Number.parseInt(last[1], 10),
      faces: Number.parseInt(last[2], 10),
      prof: !!last[3],
    }
  }

  function toggleProfOnLast () {
    const found = findLastDie(expression.value)
    if (!found) return
    const replacement = found.prof
      ? `${found.count}d${found.faces}`
      : `${found.count}d${found.faces} (prof)`
    expression.value = expression.value.slice(0, found.index) + replacement + expression.value.slice(found.index + found.len)
  }

  function isTraitInExpression (name: keyof CharacterTraits): boolean {
    const label = traitLabel(name)
    const re = new RegExp(String.raw`${escapeRegex(label)}\s*\(\s*-?\d+\s*\)`, 'i')
    return re.test(expression.value)
  }

  function toggleTrait (name: keyof CharacterTraits) {
    const label = traitLabel(name)
    const re = new RegExp(String.raw`\s*[+-]\s*${escapeRegex(label)}\s*\(\s*-?\d+\s*\)`, 'gi')
    if (re.test(expression.value)) {
      expression.value = expression.value
        .replaceAll(re, '')
        .replace(/^\s*[+-]\s*/, '')
        .trim()
      return
    }
    const value = traitValue(name)
    appendTerm(`${label}(${value})`)
  }

  function appendConst (n: number) {
    if (n >= 0) {
      appendTerm(`${n}`)
    } else {
      const cur = expression.value.trim()
      expression.value = cur ? `${cur} − ${Math.abs(n)}` : `−${Math.abs(n)}`
    }
  }

  function reset () {
    expression.value = ''
  }

  function roll () {
    if (!canRoll.value) return
    const result = rollFromTokens(parsed.value.tokens, proficiencyCount.value)
    history.value.unshift(result)
    if (history.value.length > 20) history.value.length = 20
  }

  function formatSign (n: number): string {
    return n >= 0 ? `+${n}` : `${n}`
  }

  function formatExpression (r: RollResult): string {
    const parts: string[] = []
    for (const b of r.blocks) {
      if (b.kind === 'plain') parts.push(b.label.replace('−', '-'))
    }
    if (r.blocks.some(b => b.kind === 'hope' || b.kind === 'fear')) {
      parts.push('duality')
    }
    for (const b of r.blocks) {
      if (b.kind === 'advantage' || b.kind === 'disadvantage') parts.push(b.label)
    }
    let expr = parts.join(' + ').replaceAll('+ -', '− ').replaceAll('+ −', '− ')
    if (r.modifiers.length > 0) {
      for (const m of r.modifiers) {
        const sign = m.value >= 0 ? '+' : '−'
        const labelPart = m.label ? `${m.label}(${Math.abs(m.value)})` : `${Math.abs(m.value)}`
        expr += expr ? ` ${sign} ${labelPart}` : `${sign === '−' ? '−' : ''}${labelPart}`
      }
    }
    return expr
  }

  function formatModifierBreakdown (mods: DiceMod[]): string {
    return mods.map(m => m.label ? `${m.label} ${formatSign(m.value)}` : `${formatSign(m.value)}`).join(', ')
  }

  function blockPillClass (block: RollBlock): string {
    if (block.kind === 'hope') return 'dice-pill-hope'
    if (block.kind === 'fear') return 'dice-pill-fear'
    if (block.kind === 'advantage') return 'dice-pill-adv'
    if (block.kind === 'disadvantage') return 'dice-pill-disadv'
    return ''
  }

  function outcomeClass (o: NonNullable<RollResult['outcome']>): string {
    if (o === 'hope') return 'text-primary'
    if (o === 'fear') return 'text-secondary'
    return 'text-warning'
  }
</script>

<style lang="scss" scoped>
.dice-fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 2001;
}

.dice-fab--mobile-offset {
  right: 88px;
}

.dice-panel {
  position: fixed;
  bottom: 96px;
  right: 16px;
  width: min(440px, calc(100vw - 32px));
  max-height: calc(100vh - 128px);
  overflow-y: auto;
  z-index: 2001;
}

.dice-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 2000;
}

.dice-section-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(var(--v-theme-on-surface), 0.65);
  margin-bottom: 4px;
  margin-top: 4px;
}

.dice-result-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}

.dice-result-expr {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  word-break: break-word;
}

.dice-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 30px;
  padding: 0 8px;
  border-radius: 6px;
  background: rgba(var(--v-theme-on-surface), 0.08);
  font-weight: 600;
  font-size: 0.95rem;
}

.dice-pill-sign {
  margin-right: 2px;
  opacity: 0.8;
}

.dice-pill-hope {
  background: rgba(var(--v-theme-primary), 0.22);
  color: rgb(var(--v-theme-primary));
}

.dice-pill-fear {
  background: rgba(var(--v-theme-secondary), 0.25);
  color: rgb(var(--v-theme-secondary));
}

.dice-pill-adv {
  background: rgba(var(--v-theme-primary), 0.18);
}

.dice-pill-disadv {
  background: rgba(var(--v-theme-error), 0.18);
}

.dice-mod {
  background: rgba(var(--v-theme-on-surface), 0.04);
  font-weight: 500;
}

.dice-op,
.dice-eq {
  font-size: 0.95rem;
  opacity: 0.7;
}

.dice-total {
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 4px;
}

.dice-history {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 180px;
  overflow-y: auto;
}

.dice-history-row {
  display: flex;
  align-items: center;
  padding: 2px 0;
  font-size: 0.78rem;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.06);
  gap: 8px;
}

.dice-history-detail {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  opacity: 0.85;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
}

.dice-panel-fade-enter-active,
.dice-panel-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.dice-panel-fade-enter-from,
.dice-panel-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.dice-backdrop-fade-enter-active,
.dice-backdrop-fade-leave-active {
  transition: opacity 0.18s ease;
}

.dice-backdrop-fade-enter-from,
.dice-backdrop-fade-leave-to {
  opacity: 0;
}
</style>
