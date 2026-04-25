<template>
  <character-sheet-layout :id="id" v-slot="{ character, save }">
    <character-header
      :character="character"
      @update:name="(n: string | undefined) => { character.name = n; save() }"
      @update:pronouns="(p: string | undefined) => { character.pronouns = p; save() }"
    />
    <character-state-row
      :character="character"
      @update:state="(s) => { character.state = s; save() }"
    />
    <v-row>
      <character-traits
        :character="character"
        @update:leveling-choices="(c) => { character.levelingChoices = c; save() }"
        @update:traits="(t) => { character.traits = t; save() }"
      />
    </v-row>
  </character-sheet-layout>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import CharacterHeader from '@/components/characterSheet/blocks/CharacterHeader.vue'
  import CharacterStateRow from '@/components/characterSheet/blocks/CharacterStateRow.vue'
  import CharacterTraits from '@/components/characterSheet/blocks/CharacterTraits.vue'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'

  const route = useRoute('/characters/warlock/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
