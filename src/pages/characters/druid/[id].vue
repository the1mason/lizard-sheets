<template>
  <character-sheet-layout :id="id" v-slot="{ character, save }">
    <character-header
      :character="character"
      @update:name="(n: string | undefined) => { character.name = n; save() }"
      @update:pronouns="(p: string | undefined) => { character.pronouns = p; save() }"
    />
    <v-row>
      <character-traits
        :character="character"
        @update:leveling-choices="(c) => { character.levelingChoices = c; save() }"
        @update:traits="(t) => { character.traits = t; save() }"
      />
    </v-row>
    <character-state-row
      :character="character"
      @update:state="(s) => { character.state = s; save() }"
    />
    <v-row dense>
      <v-col cols="12" md="5">
        <character-experiences
          :character="character"
          @update:experiences="(e) => { character.experiences = e; save() }"
        />
      </v-col>
      <v-col cols="12" md="7">
        <character-equipment
          :character="character"
          @update:armor="(a) => { character.armor = a; save() }"
          @update:weapons="(w) => { character.weapons = w; save() }"
        />
      </v-col>
    </v-row>
  </character-sheet-layout>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import CharacterEquipment from '@/components/characterSheet/blocks/CharacterEquipment.vue'
  import CharacterExperiences from '@/components/characterSheet/blocks/CharacterExperiences.vue'
  import CharacterHeader from '@/components/characterSheet/blocks/CharacterHeader.vue'
  import CharacterStateRow from '@/components/characterSheet/blocks/CharacterStateRow.vue'
  import CharacterTraits from '@/components/characterSheet/blocks/CharacterTraits.vue'
  import CharacterSheetLayout from '@/components/characterSheet/CharacterSheetLayout.vue'

  const route = useRoute('/characters/druid/[id]')
  const id = route.params.id
</script>

<style scoped>
</style>
