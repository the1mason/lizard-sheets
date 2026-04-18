<template>
  <v-card border class="pa-4 mb-4">
    <v-row align="center">
      <v-col cols="12" md="6">
        <v-text-field
            density="compact"
            base-color="primary"
            :label="$t('sheet.header.nameLabel')"
            :placeholder="$t('sheet.header.unnamed')"
            v-model="name"
            @blur="onNameBlur"
        />
      </v-col>
      <v-col cols="6" md="3">
        <div class="text-caption text-medium-emphasis">{{ $t('sheet.header.levelLabel') }}</div>
        <div class="text-h6">{{ character.level }}</div>
      </v-col>
      <v-col cols="6" md="3">
        <div class="text-caption text-medium-emphasis">{{ $t('sheet.header.subclassLabel') }}</div>
        <div class="text-h6">
          <template v-if="character.subclasses.length">
            <span v-for="(sc, i) in character.subclasses" :key="sc.id">
              <template v-if="i > 0">, </template>{{ $t(`game.subclasses.${sc.id}.name`) }}
            </span>
          </template>
          <template v-else>
            <span class="text-medium-emphasis">—</span>
          </template>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import {ref, watch} from "vue"
import type {Character} from "@/types/game/character.ts"

const props = defineProps<{
  character: Character
}>()

const emit = defineEmits<{
  (e: "update:name", name: string | undefined): void
}>()

const name = ref<string | undefined>(props.character.name)

watch(() => props.character.name, (next) => {
  name.value = next
})

function onNameBlur() {
  const next = name.value?.trim() || undefined
  if (next !== props.character.name) {
    emit("update:name", next)
  }
}
</script>

<style scoped>
</style>
