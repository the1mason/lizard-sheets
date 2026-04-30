<template>
  <character-sheet-layout :id="id">
    <template #class-feature="{ character, patch }">
      <markdown :source="$t('game.classes.brawler.trait')" />
      <brawler-combo-die
        :combo-die="character.comboDie"
        @update:combo-die="(v) => patch('comboDie', v)"
      />
    </template>
  </character-sheet-layout>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import BrawlerComboDie from '@/components/characterSheet/blocks/BrawlerComboDie.vue'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'
  import Markdown from '@/components/common/Markdown.vue'

  const route = useRoute('/characters/brawler/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
