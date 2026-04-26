<template>
  <v-card border class="pa-3 mb-3 gold-card">
    <div class="text-body-large mb-2">{{ $t('sheet.gold.title') }}</div>

    <div class="gold-row">
      <button
        v-for="i in HANDFUL_COUNT"
        :key="`h-${i}`"
        :aria-label="`${$t('sheet.gold.handfuls')} ${i}`"
        :aria-pressed="isSet(handfulBit(i - 1))"
        class="gold-icon-btn"
        :class="{ 'gold-icon-btn--filled': isSet(handfulBit(i - 1)) }"
        type="button"
        @click="toggle(handfulBit(i - 1))"
      >
        <v-icon :icon="isSet(handfulBit(i - 1)) ? 'mdi-hand-coin' : 'mdi-hand-coin-outline'" size="22" />
      </button>

      <div class="gold-divider" />

      <button
        v-for="i in BAG_COUNT"
        :key="`b-${i}`"
        :aria-label="`${$t('sheet.gold.bags')} ${i}`"
        :aria-pressed="isSet(bagBit(i - 1))"
        class="gold-icon-btn"
        :class="{ 'gold-icon-btn--filled': isSet(bagBit(i - 1)) }"
        type="button"
        @click="toggle(bagBit(i - 1))"
      >
        <v-icon :icon="isSet(bagBit(i - 1)) ? 'mdi-sack' : 'mdi-sack-outline'" size="26" />
      </button>

      <div class="gold-divider" />

      <button
        :aria-label="$t('sheet.gold.chest')"
        :aria-pressed="isSet(CHEST_BIT)"
        class="gold-icon-btn"
        :class="{ 'gold-icon-btn--filled': isSet(CHEST_BIT) }"
        type="button"
        @click="toggle(CHEST_BIT)"
      >
        <v-icon :icon="isSet(CHEST_BIT) ? 'mdi-treasure-chest' : 'mdi-treasure-chest-outline'" size="32" />
      </button>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import type { Character, CharacterState } from '@/types/game/character.ts'
  import { computed } from 'vue'

  const HANDFUL_COUNT = 9
  const BAG_COUNT = 9
  const CHEST_BIT = 18

  const props = defineProps<{
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:state', state: CharacterState): void
  }>()

  const money = computed<number>(() => props.character.state.money ?? 0)

  function handfulBit (i: number): number {
    return i
  }

  function bagBit (i: number): number {
    return 9 + i
  }

  function isSet (bit: number): boolean {
    return (money.value & (1 << bit)) !== 0
  }

  function toggle (bit: number) {
    const next = money.value ^ (1 << bit)
    emit('update:state', { ...props.character.state, money: next })
  }
</script>

<style scoped>
.gold-card {
  display: flex;
  flex-direction: column;
}

.gold-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}

.gold-icon-btn {
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

.gold-icon-btn:hover {
  color: rgba(var(--v-theme-on-surface), 0.7);
  background: rgba(var(--v-theme-on-surface), 0.05);
}

.gold-icon-btn--filled {
  color: rgb(var(--v-theme-warning));
}

.gold-icon-btn--filled:hover {
  color: rgb(var(--v-theme-warning));
}

.gold-divider {
  width: 1px;
  height: 24px;
  background: rgba(var(--v-theme-on-surface), 0.15);
  margin: 0 6px;
}
</style>
