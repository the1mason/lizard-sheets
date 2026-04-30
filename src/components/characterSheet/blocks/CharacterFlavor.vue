<template>
  <v-card border class="pa-3 mb-3">
    <div class="text-body-large mb-3">{{ $t('sheet.flavor.title') }}</div>

    <v-card border class="pa-3 mb-3">
      <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('sheet.flavor.notes') }}</div>
      <v-textarea
        auto-grow
        class="flavor-input"
        density="compact"
        hide-details="auto"
        :model-value="character.notes ?? ''"
        :placeholder="$t('sheet.flavor.notesPlaceholder')"
        rows="3"
        @update:model-value="updateNotes"
      />
    </v-card>

    <template v-if="!flavorQuestions">
      <v-alert type="info" variant="tonal">
        {{ $t('sheet.flavor.unavailable') }}
      </v-alert>
    </template>

    <template v-else>
      <v-card v-if="flavorQuestions.ties.length > 0" border class="pa-3 mb-3">
        <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('sheet.flavor.ties') }}</div>
        <div
          v-for="(qKey, idx) in flavorQuestions.ties"
          :key="`tie-${idx}`"
          class="mb-3"
        >
          <div class="text-body-2 font-weight-medium mb-1">{{ $t(qKey) }}</div>
          <v-textarea
            auto-grow
            class="flavor-input"
            density="compact"
            hide-details="auto"
            :model-value="character.ties?.[idx] ?? ''"
            :placeholder="$t('sheet.flavor.answerPlaceholder')"
            rows="2"
            @update:model-value="(v: string) => updateArray('ties', idx, v)"
          />
        </div>
      </v-card>

      <v-card v-if="flavorQuestions.description.length > 0" border class="pa-3 mb-3">
        <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('sheet.flavor.descriptionSection') }}</div>
        <div
          v-for="(qKey, idx) in flavorQuestions.description"
          :key="`desc-${idx}`"
          class="mb-3"
        >
          <div class="text-body-2 font-weight-medium mb-1">{{ $t(qKey) }}</div>
          <v-textarea
            auto-grow
            class="flavor-input"
            density="compact"
            hide-details="auto"
            :model-value="character.backgroundQuestions?.[idx] ?? ''"
            :placeholder="$t('sheet.flavor.answerPlaceholder')"
            rows="2"
            @update:model-value="(v: string) => updateArray('backgroundQuestions', idx, v)"
          />
        </div>
      </v-card>

      <v-card v-if="flavorQuestions.spellcastingSource" border class="pa-3 mb-3">
        <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('sheet.flavor.spellcastingSource') }}</div>
        <div class="text-body-2 font-weight-medium mb-1">{{ $t(flavorQuestions.spellcastingSource) }}</div>
        <v-textarea
          auto-grow
          class="flavor-input"
          density="compact"
          hide-details="auto"
          :model-value="character.spellcastingSource ?? ''"
          :placeholder="$t('sheet.flavor.answerPlaceholder')"
          rows="2"
          @update:model-value="updateSpellcastingSource"
        />
      </v-card>

      <v-card v-if="flavorQuestions.appearance.length > 0" border class="pa-3 mb-3">
        <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('sheet.flavor.appearance') }}</div>
        <p v-if="flavorQuestions.appearanceHint" class="text-body-2 text-medium-emphasis mb-3">
          {{ $t(flavorQuestions.appearanceHint) }}
        </p>
        <div
          v-for="(qKey, idx) in flavorQuestions.appearance"
          :key="`app-${idx}`"
          class="mb-3"
        >
          <div class="text-body-2 font-weight-medium mb-1">{{ $t(qKey) }}</div>
          <v-textarea
            auto-grow
            class="flavor-input"
            density="compact"
            hide-details="auto"
            :model-value="character.appearance?.[idx] ?? ''"
            :placeholder="$t('sheet.flavor.answerPlaceholder')"
            rows="2"
            @update:model-value="(v: string) => updateArray('appearance', idx, v)"
          />
        </div>
      </v-card>
    </template>
  </v-card>
</template>

<script setup lang="ts">
  import type { Character } from '@/types/game/character.ts'
  import type { FlavorQuestions } from '@/types/game/classOption.ts'
  import { computed } from 'vue'
  import gameProvider from '@/libs/game/gameProvider.ts'

  const props = defineProps<{
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:ties' | 'update:backgroundQuestions' | 'update:appearance', value: string[]): void
    (e: 'update:spellcastingSource' | 'update:notes', value: string | undefined): void
  }>()

  const flavorQuestions = computed<FlavorQuestions | undefined>(() =>
    props.character.class
      ? gameProvider.getClassOptions(props.character.class.id).flavorQuestions
      : undefined,
  )

  type ArrayKey = 'ties' | 'backgroundQuestions' | 'appearance'

  function updateArray (key: ArrayKey, idx: number, value: string) {
    const current = [...(props.character[key] ?? [])]
    current[idx] = value ?? ''
    emit(`update:${key}`, current)
  }

  function updateSpellcastingSource (value: string) {
    const trimmed = (value ?? '').trim()
    emit('update:spellcastingSource', trimmed.length > 0 ? value : undefined)
  }

  function updateNotes (value: string) {
    const trimmed = (value ?? '').trim()
    emit('update:notes', trimmed.length > 0 ? value : undefined)
  }
</script>

<style scoped>
  .flavor-input :deep(.v-field__input) {
    font-size: 0.875rem;
    min-height: 32px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
</style>
