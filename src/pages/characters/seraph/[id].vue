<template>
  <character-sheet-layout :id="id">
    <template #class-feature="{ character, patch }">
      <seraph-prayer-dice
        :prayer-dice="character.prayerDice"
        @update:prayer-dice="(v) => patch('prayerDice', v)"
      />
    </template>
  </character-sheet-layout>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'
  import SeraphPrayerDice from '@/components/characterSheet/blocks/SeraphPrayerDice.vue'

  const route = useRoute('/characters/seraph/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
