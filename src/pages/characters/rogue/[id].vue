<template>
  <character-sheet-layout :id="id">
    <template #class-feature>
      <markdown :source="$t('game.classes.rogue.trait')" />
    </template>
  </character-sheet-layout>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'
  import Markdown from '@/components/common/Markdown.vue'

  const route = useRoute('/characters/rogue/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
