<template>
  <v-container>
    <template v-if="loading">
      <v-card class="pa-3" loading flat></v-card>
    </template>
    <template v-else-if="!character">
      <v-card class="pa-6">
        <v-alert type="error" variant="tonal">
          {{ $t('sheet.notFound.title') }}
        </v-alert>
        <v-row class="mt-3" justify="center">
          <router-link to="/">
            <v-btn variant="tonal" color="primary">{{ $t('sheet.notFound.home') }}</v-btn>
          </router-link>
        </v-row>
      </v-card>
    </template>
    <template v-else>
      <slot :character="character" :save="save"/>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import type {Character} from "@/types/game/character.ts"
import {useCharacterStore} from "@/stores/characterStore.ts"

const props = defineProps<{
  id: string
}>()

const store = useCharacterStore()
const character = ref<Character | undefined>(undefined)
const loading = ref<boolean>(true)

onMounted(() => {
  character.value = store.get(props.id)
  loading.value = false
})

function save() {
  if (!character.value) return
  store.update(character.value.id, character.value)
}
</script>

<style scoped>
</style>
