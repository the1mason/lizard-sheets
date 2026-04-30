<template>
  <div>
    <v-radio-group
      :model-value="value"
      class="combo-die-group"
      color="primary"
      density="compact"
      hide-details
      inline
      :label="$t('game.classes.brawler.comboDie.title')"
      @update:model-value="(v) => emit('update:comboDie', v as ComboDie)"
    >
      <v-radio
        v-for="die in dice"
        :key="die"
        :label="die"
        :value="die"
      />
    </v-radio-group>
  </div>
</template>

<script setup lang="ts">
  import type { ComboDie } from '@/types/game/character.ts'
  import { computed } from 'vue'

  const dice: ComboDie[] = ['d4', 'd6', 'd8', 'd10', 'd12']

  const props = defineProps<{
    comboDie?: ComboDie
  }>()

  const emit = defineEmits<{
    (e: 'update:comboDie', die: ComboDie): void
  }>()

  const value = computed<ComboDie>(() => props.comboDie ?? 'd4')
</script>

<style scoped>
.combo-die-group :deep(.v-label) {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.7;
}
</style>
