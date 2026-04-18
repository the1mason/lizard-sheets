<template>
  <character-sheet-layout :id="id" v-slot="{ character, save }">
    <character-header
        :character="character"
        @update:name="(n: string | undefined) => { character.name = n; save() }"
    />
  </character-sheet-layout>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router"
import CharacterHeader from "@/components/characterSheet/blocks/CharacterHeader.vue"
import CharacterSheetLayout from "@/components/characterSheet/CharacterSheetLayout.vue"

const route = useRoute("/characters/wizard/[id]")
const id = route.params.id
</script>

<style scoped>
</style>
