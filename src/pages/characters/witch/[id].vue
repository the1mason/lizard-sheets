<template>
  <character-sheet-layout :id="id" />
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'

  const route = useRoute('/characters/witch/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
