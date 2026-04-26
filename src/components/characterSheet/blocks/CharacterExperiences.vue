<template>
  <v-card border class="pa-3 mb-3 experiences-card">
    <div class="text-body-large mb-2">{{ $t('sheet.experiences.title') }}</div>
    <div
      v-for="(slot, idx) in slots"
      :key="idx"
      class="experience-row"
    >
      <v-text-field
        class="experience-name"
        density="compact"
        hide-details
        :model-value="slot.name"
        :placeholder="$t('sheet.experiences.namePlaceholder', { index: idx + 1 })"
        variant="outlined"
        @update:model-value="(v: string) => updateName(idx, v)"
      />
      <v-text-field
        class="experience-score"
        density="compact"
        hide-details
        :max="99"
        :min="0"
        :model-value="slot.score"
        prefix="+"
        type="number"
        variant="outlined"
        @update:model-value="(v: string) => updateScore(idx, v)"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import type { Character } from '@/types/game/character.ts'
  import { computed } from 'vue'

  const SLOT_COUNT = 5
  const DEFAULT_BONUS = 2

  type Experience = { name: string, score: number }

  const props = defineProps<{
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:experiences', experiences: Experience[]): void
  }>()

  const slots = computed<Experience[]>(() => {
    const existing = props.character.experiences ?? []
    return Array.from({ length: SLOT_COUNT }, (_, i) => {
      const e = existing[i]
      return e
        ? { name: e.name ?? '', score: Number.isFinite(e.score) ? e.score : DEFAULT_BONUS }
        : { name: '', score: DEFAULT_BONUS }
    })
  })

  function commit (next: Experience[]) {
    emit('update:experiences', next)
  }

  function updateName (idx: number, value: string) {
    const next = slots.value.slice()
    next[idx] = { ...next[idx], name: value ?? '' }
    commit(next)
  }

  function updateScore (idx: number, value: string | number) {
    const n = Math.max(0, Math.floor(Number(value)))
    const score = Number.isFinite(n) ? n : 0
    const next = slots.value.slice()
    next[idx] = { ...next[idx], score }
    commit(next)
  }
</script>

<style scoped>
.experiences-card {
  display: flex;
  flex-direction: column;
}

.experience-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.experience-row:last-child {
  margin-bottom: 0;
}

.experience-name {
  flex: 1 1 auto;
  min-width: 0;
}

.experience-score {
  flex: 0 0 110px;
  width: 110px;
}
</style>
