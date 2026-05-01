<template>
  <character-sheet-layout :id="id">
    <template #class-feature="{ character, patch }">
      <warlock-patron
        :warlock="character.warlock"
        @update:warlock="(v) => patch('warlock', v)"
      />
    </template>
  </character-sheet-layout>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'
  import WarlockPatron from '@/components/characterSheet/blocks/WarlockPatron.vue'

  const route = useRoute('/characters/warlock/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
