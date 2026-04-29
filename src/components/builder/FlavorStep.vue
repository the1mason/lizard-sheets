<template>
  <h3 class="mb-3">{{ $t('builder.flavor.title') }}</h3>
  <p class="text-body-2 text-medium-emphasis mb-4">{{ $t('builder.flavor.description') }}</p>

  <template v-if="!flavorQuestions">
    <v-alert type="info" variant="tonal" class="mb-4">
      {{ $t('builder.flavor.unavailable') }}
    </v-alert>
  </template>

  <template v-else>
    <!-- Ties -->
    <v-card v-if="flavorQuestions.ties.length" border class="pa-3 mb-4">
      <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.flavor.ties') }}</div>
      <v-textarea v-for="(qKey, idx) in flavorQuestions.ties" :key="`tie-${idx}`"
                  density="compact" hide-details="auto" rows="2" auto-grow class="mb-3"
                  :label="$t(qKey)"
                  :placeholder="$t('builder.flavor.answerPlaceholder')"
                  :model-value="ties[idx] ?? ''"
                  @update:model-value="updateAnswer('ties', idx, $event)"/>
    </v-card>

    <!-- Description / background -->
    <v-card v-if="flavorQuestions.description.length" border class="pa-3 mb-4">
      <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.flavor.descriptionSection') }}</div>
      <v-textarea v-for="(qKey, idx) in flavorQuestions.description" :key="`desc-${idx}`"
                  density="compact" hide-details="auto" rows="2" auto-grow class="mb-3"
                  :label="$t(qKey)"
                  :placeholder="$t('builder.flavor.answerPlaceholder')"
                  :model-value="backgroundQuestions[idx] ?? ''"
                  @update:model-value="updateAnswer('backgroundQuestions', idx, $event)"/>
    </v-card>

    <!-- Spellcasting source -->
    <v-card v-if="flavorQuestions.spellcastingSource" border class="pa-3 mb-4">
      <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.flavor.spellcastingSource') }}</div>
      <v-textarea density="compact" hide-details="auto" rows="2" auto-grow
                  :label="$t(flavorQuestions.spellcastingSource)"
                  :placeholder="$t('builder.flavor.answerPlaceholder')"
                  :model-value="spellcastingSource"
                  @update:model-value="updateSpellcastingSource($event)"/>
    </v-card>

    <!-- Appearance -->
    <v-card v-if="flavorQuestions.appearance.length" border class="pa-3 mb-4">
      <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.flavor.appearance') }}</div>
      <p v-if="flavorQuestions.appearanceHint" class="text-body-2 text-medium-emphasis mb-3">
        {{ $t(flavorQuestions.appearanceHint) }}
      </p>
      <v-textarea v-for="(qKey, idx) in flavorQuestions.appearance" :key="`app-${idx}`"
                  density="compact" hide-details="auto" rows="2" auto-grow class="mb-3"
                  :label="$t(qKey)"
                  :placeholder="$t('builder.flavor.answerPlaceholder')"
                  :model-value="appearance[idx] ?? ''"
                  @update:model-value="updateAnswer('appearance', idx, $event)"/>
    </v-card>
  </template>

  <!-- Notes / freeform description -->
  <v-card border class="pa-3 mb-4">
    <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.flavor.notes') }}</div>
    <v-textarea density="compact" hide-details="auto" rows="4" auto-grow
                :label="$t('builder.flavor.notesLabel')"
                :placeholder="$t('builder.flavor.notesPlaceholder')"
                :model-value="notes"
                @update:model-value="updateNotes($event)"/>
  </v-card>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue"
import type {BuilderState} from "@/stores/builderStore.ts"
import type {FlavorQuestions} from "@/types/game/classOption.ts"

const emit = defineEmits<{
  (e: "setState", state: BuilderState): void
  (e: "markDone"): void
}>()

const props = withDefaults(
    defineProps<{
      state: BuilderState
      currentStep: number
    }>(),
    {}
)

const ties = ref<string[]>([])
const backgroundQuestions = ref<string[]>([])
const appearance = ref<string[]>([])
const spellcastingSource = ref<string>("")
const notes = ref<string>("")

const flavorQuestions = computed<FlavorQuestions | undefined>(() =>
    props.state.options.classOption?.flavorQuestions
)

watch(() => props.state, (newState) => {
  syncFromState(newState)
}, {deep: true})

onMounted(() => {
  syncFromState(props.state)
})

function syncFromState(state: BuilderState) {
  ties.value = [...(state.data.ties ?? [])]
  backgroundQuestions.value = [...(state.data.backgroundQuestions ?? [])]
  appearance.value = [...(state.data.appearance ?? [])]
  spellcastingSource.value = state.data.spellcastingSource ?? ""
  notes.value = state.data.notes ?? ""
}

type AnswerKey = "ties" | "backgroundQuestions" | "appearance"

function updateAnswer(key: AnswerKey, idx: number, value: string) {
  const target = key === "ties" ? ties : key === "backgroundQuestions" ? backgroundQuestions : appearance
  const next = [...target.value]
  next[idx] = value ?? ""
  target.value = next
  commit()
}

function updateSpellcastingSource(value: string) {
  spellcastingSource.value = value ?? ""
  commit()
}

function updateNotes(value: string) {
  notes.value = value ?? ""
  commit()
}

function commit() {
  const next = props.state
  next.data.ties = [...ties.value]
  next.data.backgroundQuestions = [...backgroundQuestions.value]
  next.data.appearance = [...appearance.value]
  next.data.spellcastingSource = spellcastingSource.value.trim().length > 0
      ? spellcastingSource.value
      : undefined
  next.data.notes = notes.value.trim().length > 0 ? notes.value : undefined
  emit("setState", next)
}
</script>

<style scoped>
</style>
