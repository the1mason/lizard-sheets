<template>
  <div>
    <div class="prayer-dice-label">{{ $t('game.classes.seraph.prayerDice.title') }}</div>
    <div class="prayer-dice-grid">
      <input
        v-for="(slot, i) in slots"
        :key="i"
        class="prayer-dice-slot"
        inputmode="numeric"
        maxlength="2"
        type="text"
        :value="slot ?? ''"
        @input="(e) => onInput(i, (e.target as HTMLInputElement).value)"
      >
    </div>
    <markdown :source="$t('game.classes.seraph.trait')" />
  </div>
</template>

<script setup lang="ts">
  import type { PrayerDiceState } from '@/types/game/character.ts'
  import { computed } from 'vue'
  import Markdown from '@/components/common/Markdown.vue'

  const SLOT_COUNT = 6

  const props = defineProps<{
    prayerDice?: PrayerDiceState
  }>()

  const emit = defineEmits<{
    (e: 'update:prayerDice', state: PrayerDiceState): void
  }>()

  const slots = computed<(number | null)[]>(() => {
    const current = props.prayerDice?.slots ?? []
    return Array.from({ length: SLOT_COUNT }, (_, i) => current[i] ?? null)
  })

  function onInput (index: number, raw: string) {
    const trimmed = raw.trim()
    let next: number | null = null
    if (trimmed.length > 0) {
      const parsed = Number.parseInt(trimmed, 10)
      if (Number.isFinite(parsed)) next = Math.min(4, Math.max(1, parsed))
    }
    const current = slots.value.slice()
    current[index] = next
    emit('update:prayerDice', { slots: current })
  }
</script>

<style scoped>
.prayer-dice-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.7;
  margin-bottom: 6px;
}

.prayer-dice-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 4px;
  margin-bottom: 12px;
}

.prayer-dice-slot {
  width: 100%;
  aspect-ratio: 1;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.3);
  border-radius: 4px;
  background: transparent;
  color: rgb(var(--v-theme-on-surface));
  outline: none;
  padding: 0;
}

.prayer-dice-slot:focus {
  border-color: rgb(var(--v-theme-primary));
}
</style>
