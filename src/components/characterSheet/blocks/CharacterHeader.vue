<template>
  <v-card border class="pa-4 mb-3">
    <v-row align="center" dense>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="name"
          base-color="primary"
          density="compact"
          hide-details
          :label="$t('sheet.header.nameLabel')"
          :placeholder="$t('sheet.header.unnamed')"
          @blur="onNameBlur"
        />
      </v-col>
      <v-col cols="8" md="4">
        <v-text-field
          v-model="pronouns"
          base-color="primary"
          density="compact"
          hide-details
          :label="$t('sheet.header.pronounsLabel')"
          @blur="onPronounsBlur"
        />
      </v-col>
      <v-col cols="4" md="2">
        <v-text-field
          v-model="level"
          base-color="primary"
          density="compact"
          hide-details
          :label="$t('sheet.header.levelLabel')"
          :max="10"
          :min="1"
          type="number"
          @blur="onLevelBlur"
        />
      </v-col>
    </v-row>

    <v-divider class="my-3" />

    <v-row align="start" dense>
      <v-col cols="12" md="3">
        <div class="text-caption text-medium-emphasis">{{ $t('sheet.header.classLabel') }}</div>
        <div class="d-flex align-center ga-2">
          <span class="text-h6">
            <template v-if="character.class">
              {{ $t(`game.classes.${character.class.id}.name`) }}
            </template>
            <template v-else>
              <span class="text-medium-emphasis">—</span>
            </template>
          </span>
          <template v-if="character.class">
            <v-tooltip bottom :text="$t('game.domains.' + character.class.domain1)">
              <template #activator="{ props }">
                <img
                  v-bind="props"
                  :alt="character.class.domain1"
                  height="20"
                  :src="`/domains/${character.class.domain1}.svg`"
                >
              </template>
            </v-tooltip>
            <v-tooltip bottom :text="$t('game.domains.' + character.class.domain2)">
              <template #activator="{ props }">
                <img
                  v-bind="props"
                  :alt="character.class.domain2"
                  height="20"
                  :src="`/domains/${character.class.domain2}.svg`"
                >
              </template>
            </v-tooltip>
          </template>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="text-caption text-medium-emphasis">{{ $t('sheet.header.subclassLabel') }}</div>
        <div class="text-h6">
          <template v-if="character.subclasses.length > 0">
            <span v-for="(sc, i) in character.subclasses" :key="sc.id">
              <template v-if="i > 0">, </template>{{ $t(`game.subclasses.${sc.id}.name`) }}
            </span>
          </template>
          <template v-else>
            <span class="text-medium-emphasis">—</span>
          </template>
        </div>
      </v-col>
      <v-col cols="6" md="3">
        <div class="text-caption text-medium-emphasis">{{ $t('sheet.header.ancestryLabel') }}</div>
        <div class="text-h6">
          <template v-if="character.ancestry">
            {{ $t(`game.ancestries.${character.ancestry.id}.name`) }}
          </template>
          <template v-else>
            <span class="text-medium-emphasis">—</span>
          </template>
        </div>
      </v-col>
      <v-col cols="6" md="3">
        <div class="text-caption text-medium-emphasis">{{ $t('sheet.header.communityLabel') }}</div>
        <div class="text-h6">
          <template v-if="character.community">
            {{ $t(`game.communities.${character.community.id}.name`) }}
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
  import type { Character, Level } from '@/types/game/character.ts'
  import { ref, watch } from 'vue'

  const props = defineProps<{
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:name', name: string | undefined): void
    (e: 'update:pronouns', pronouns: string | undefined): void
    (e: 'update:level', level: Level): void
  }>()

  const name = ref<string | undefined>(props.character.name)
  const pronouns = ref<string | undefined>(props.character.pronouns)
  const level = ref<number>(props.character.level)

  watch(() => props.character.name, next => {
    name.value = next
  })

  watch(() => props.character.pronouns, next => {
    pronouns.value = next
  })

  watch(() => props.character.level, next => {
    level.value = next
  })

  function onNameBlur () {
    const next = name.value?.trim() || undefined
    if (next !== props.character.name) {
      emit('update:name', next)
    }
  }

  function onPronounsBlur () {
    const next = pronouns.value?.trim() || undefined
    if (next !== props.character.pronouns) {
      emit('update:pronouns', next)
    }
  }

  function onLevelBlur () {
    const parsed = Math.floor(Number(level.value))
    const clamped = Number.isFinite(parsed)
      ? Math.min(10, Math.max(1, parsed))
      : props.character.level
    level.value = clamped
    if (clamped !== props.character.level) {
      emit('update:level', clamped as Level)
    }
  }
</script>

<style scoped>
</style>
