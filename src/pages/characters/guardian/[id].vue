<template>
  <character-sheet-layout :id="id">
    <template #class-feature="{ character, patch }">
      <guardian-unstoppable
        :level="character.level"
        :unstoppable="character.unstoppable"
        @update:unstoppable="(v) => patch('unstoppable', v)"
      />
    </template>
  </character-sheet-layout>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import GuardianUnstoppable from '@/components/characterSheet/blocks/GuardianUnstoppable.vue'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'

  const route = useRoute('/characters/guardian/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
