<template>
  <div>
    <div class="patron-header">
      <span class="patron-title">{{ $t('game.classes.warlock.patron.title') }}:</span>
      <input
        class="patron-name"
        :placeholder="$t('game.classes.warlock.patron.namePlaceholder')"
        type="text"
        :value="patronName"
        @input="(e) => onPatronName((e.target as HTMLInputElement).value)"
      >
    </div>
    <p class="patron-description">{{ $t('game.classes.warlock.patron.description') }}</p>

    <div class="section-title">{{ $t('game.classes.warlock.patron.spheresTitle') }}</div>
    <div class="spheres-list">
      <div v-for="(sphere, i) in spheres" :key="i" class="sphere-row">
        <input
          class="sphere-name"
          :placeholder="$t('game.classes.warlock.patron.sphereName')"
          type="text"
          :value="sphere.name"
          @input="(e) => updateSphere(i, { name: (e.target as HTMLInputElement).value })"
        >
        <input
          :aria-label="$t('game.classes.warlock.patron.sphereValue')"
          class="sphere-value"
          inputmode="numeric"
          type="text"
          :value="sphere.value"
          @input="(e) => updateSphere(i, { value: parseValue((e.target as HTMLInputElement).value) })"
        >
        <v-btn
          :aria-label="$t('game.classes.warlock.patron.spheresRemove')"
          density="compact"
          icon="mdi-close"
          size="small"
          variant="text"
          @click="removeSphere(i)"
        />
      </div>
    </div>
    <v-btn
      class="mb-3"
      density="compact"
      prepend-icon="mdi-plus"
      size="small"
      variant="tonal"
      @click="addSphere"
    >
      {{ $t('game.classes.warlock.patron.spheresAdd') }}
    </v-btn>

    <div class="section-title">{{ $t('game.classes.warlock.patron.favorTitle') }}</div>
    <div class="favor-row">
      <button
        v-for="i in FAVOR_MAX"
        :key="`f-${i}`"
        :aria-label="`${$t('game.classes.warlock.patron.favorTitle')} ${i}`"
        :aria-pressed="i <= favor"
        class="favor-icon-btn"
        :class="{ 'favor-icon-btn--filled': i <= favor }"
        type="button"
        @click="setFavor(i)"
      >
        <v-icon :icon="i <= favor ? 'mdi-circle' : 'mdi-circle-outline'" size="20" />
      </button>
    </div>
    <p class="favor-description">{{ $t('game.classes.warlock.patron.favorDescription') }}</p>
  </div>
</template>

<script setup lang="ts">
  import type { WarlockSphere, WarlockState } from '@/types/game/character.ts'
  import { computed } from 'vue'

  const FAVOR_MAX = 6

  const props = defineProps<{
    warlock?: WarlockState
  }>()

  const emit = defineEmits<{
    (e: 'update:warlock', state: WarlockState): void
  }>()

  const patronName = computed<string>(() => props.warlock?.patronName ?? '')
  const spheres = computed<WarlockSphere[]>(() => props.warlock?.spheres ?? [])
  const favor = computed<number>(() => {
    const v = props.warlock?.favor ?? 3
    return Math.max(0, Math.min(FAVOR_MAX, Math.trunc(v)))
  })

  function commit (next: WarlockState) {
    emit('update:warlock', next)
  }

  function snapshot (): WarlockState {
    return {
      patronName: props.warlock?.patronName,
      spheres: spheres.value.slice(),
      favor: favor.value,
    }
  }

  function onPatronName (raw: string) {
    const trimmed = raw.trim()
    commit({ ...snapshot(), patronName: trimmed.length > 0 ? raw : undefined })
  }

  function addSphere () {
    const next = snapshot()
    next.spheres = next.spheres.concat({ name: '', value: 2 })
    commit(next)
  }

  function removeSphere (index: number) {
    const next = snapshot()
    next.spheres = next.spheres.filter((_, i) => i !== index)
    commit(next)
  }

  function updateSphere (index: number, patch: Partial<WarlockSphere>) {
    const next = snapshot()
    const current = next.spheres[index]
    if (!current) return
    next.spheres = next.spheres.map((s, i) => i === index ? { ...s, ...patch } : s)
    commit(next)
  }

  function parseValue (raw: string): number {
    const parsed = Number.parseInt(raw, 10)
    return Number.isFinite(parsed) ? parsed : 0
  }

  function setFavor (i: number) {
    const next = i === favor.value ? i - 1 : i
    commit({ ...snapshot(), favor: Math.max(0, Math.min(FAVOR_MAX, next)) })
  }
</script>

<style scoped>
.patron-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}

.patron-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.patron-name {
  flex: 1 1 auto;
  min-width: 0;
  border: none;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.4);
  background: transparent;
  color: rgb(var(--v-theme-on-surface));
  font-size: 1rem;
  outline: none;
  padding: 2px 4px;
}

.patron-name:focus {
  border-bottom-color: rgb(var(--v-theme-primary));
}

.patron-description,
.favor-description {
  font-size: 0.85rem;
  line-height: 1.35;
  margin-bottom: 12px;
  color: rgba(var(--v-theme-on-surface), 0.85);
}

.section-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.7;
  margin-bottom: 6px;
}

.spheres-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 6px;
}

.sphere-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.sphere-name {
  flex: 1 1 auto;
  min-width: 0;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.3);
  border-radius: 4px;
  background: transparent;
  color: rgb(var(--v-theme-on-surface));
  font-size: 0.9rem;
  outline: none;
  padding: 4px 6px;
}

.sphere-name:focus,
.sphere-value:focus {
  border-color: rgb(var(--v-theme-primary));
}

.sphere-value {
  width: 48px;
  text-align: center;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.3);
  border-radius: 4px;
  background: transparent;
  color: rgb(var(--v-theme-on-surface));
  font-size: 0.9rem;
  font-weight: 600;
  outline: none;
  padding: 4px 0;
}

.favor-row {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 8px;
}

.favor-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  color: rgba(var(--v-theme-on-surface), 0.4);
  transition: color 0.1s, background-color 0.1s;
}

.favor-icon-btn:hover {
  color: rgba(var(--v-theme-on-surface), 0.7);
  background: rgba(var(--v-theme-on-surface), 0.05);
}

.favor-icon-btn--filled {
  color: rgb(var(--v-theme-primary));
}

.favor-icon-btn--filled:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
