<template>
  <character-sheet-layout :id="id">
    <template #class-feature="{ character, patch }">
      <wizard-strange-patterns
        :strange-patterns="character.strangePatterns"
        @update:strange-patterns="(v) => patch('strangePatterns', v)"
      />
    </template>
  </character-sheet-layout>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'
  import WizardStrangePatterns from '@/components/characterSheet/blocks/WizardStrangePatterns.vue'

  const route = useRoute('/characters/wizard/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
