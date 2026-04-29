<template>
  <div>
    <markdown :source="$t('game.classes.guardian.unstoppable.trait')" />
    <v-divider class="my-3" />
    <div class="counter-row">
      <div class="counter-label">{{ $t('game.classes.guardian.unstoppable.title') }}</div>
      <template v-if="active">
        <div class="counter-stepper">
          <v-btn
            :aria-label="$t('game.classes.guardian.unstoppable.decrease')"
            density="compact"
            icon="mdi-minus"
            size="small"
            variant="text"
            @click="bump(-1)"
          />
          <span class="counter-value">{{ value }} / {{ max }}</span>
          <v-btn
            :aria-label="$t('game.classes.guardian.unstoppable.increase')"
            density="compact"
            icon="mdi-plus"
            size="small"
            variant="text"
            @click="bump(1)"
          />
        </div>
        <v-btn
          color="error"
          size="small"
          variant="tonal"
          @click="dropOut"
        >
          {{ $t('game.classes.guardian.unstoppable.dropOut') }}
        </v-btn>
      </template>
      <template v-else>
        <span class="counter-inactive">{{ $t('game.classes.guardian.unstoppable.inactive') }}</span>
        <v-btn
          color="primary"
          size="small"
          variant="tonal"
          @click="activate"
        >
          {{ $t('game.classes.guardian.unstoppable.activate') }}
        </v-btn>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Level, UnstoppableState } from '@/types/game/character.ts'
  import { computed } from 'vue'
  import Markdown from '@/components/common/Markdown.vue'

  const props = defineProps<{
    unstoppable?: UnstoppableState
    level: Level
  }>()

  const emit = defineEmits<{
    (e: 'update:unstoppable', state: UnstoppableState): void
  }>()

  const active = computed<boolean>(() => props.unstoppable?.active ?? false)
  const value = computed<number>(() => props.unstoppable?.value ?? 1)
  const max = computed<number>(() => (props.level >= 5 ? 6 : 4))

  function activate () {
    emit('update:unstoppable', { active: true, value: 1 })
  }

  function dropOut () {
    emit('update:unstoppable', { active: false, value: 1 })
  }

  function bump (delta: number) {
    const current = props.unstoppable?.value ?? 1
    const next = current + delta
    if (next < 1) return
    const exceeds = next > max.value
    emit('update:unstoppable', exceeds ? { active: false, value: 1 } : { active: true, value: next })
  }
</script>

<style scoped>
.counter-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.counter-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(var(--v-theme-on-surface), 0.7);
  flex: 1 1 auto;
  min-width: 0;
}

.counter-stepper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.counter-value {
  font-size: 1.05rem;
  font-weight: 600;
  min-width: 56px;
  text-align: center;
}

.counter-inactive {
  font-size: 0.85rem;
  color: rgba(var(--v-theme-on-surface), 0.6);
  font-style: italic;
}
</style>
