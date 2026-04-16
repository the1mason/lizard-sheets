<template>
  <h3 class="mb-3">{{ $t('builder.experience.title') }}</h3>
  <p class="text-body-2 text-medium-emphasis mb-4">{{ $t('builder.experience.description') }}</p>

  <v-row>
    <v-col v-for="(slot, idx) in slots" :key="idx" cols="12" md="6">
      <v-card border class="pa-3">
        <div class="text-subtitle-2 mb-2">{{ $t('builder.experience.slotLabel', { index: idx + 1 }) }}</div>
        <v-text-field density="compact" hide-details="auto" class="mb-2"
                      :label="$t('builder.experience.nameLabel')"
                      :placeholder="$t('builder.experience.namePlaceholder')"
                      :model-value="slot.name"
                      @update:model-value="updateName(idx, $event)"/>
        <v-number-input density="compact" hide-details="auto" type="number" :min=0
                      :label="$t('builder.experience.bonusLabel')"
                      :model-value="slot.score"
                      @update:model-value="updateScore(idx, $event)"/>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import type {BuilderState} from "@/stores/builderStore.ts";

const SLOT_COUNT = 2
const DEFAULT_BONUS = 2

type Slot = { name: string; score: number }

const slots = ref<Slot[]>(makeEmptySlots())

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

watch(() => props.state, (newState) => {
  syncFromState(newState)
}, { deep: true })

onMounted(() => {
  syncFromState(props.state)
})

function makeEmptySlots(): Slot[] {
  return Array.from({ length: SLOT_COUNT }, () => ({ name: "", score: DEFAULT_BONUS }))
}

function syncFromState(state: BuilderState) {
  const existing = state.data.experiences ?? []
  const next = makeEmptySlots()
  for (let i = 0; i < SLOT_COUNT; i++) {
    if (existing[i]) {
      next[i] = { name: existing[i].name, score: existing[i].score }
    }
  }
  slots.value = next
}

function updateName(idx: number, value: string) {
  slots.value[idx].name = value ?? ""
  commit()
}

function updateScore(idx: number, value: unknown) {
  const n = Math.max(0, Math.floor(Number(value)))
  slots.value[idx].score = Number.isFinite(n) ? n : DEFAULT_BONUS
  commit()
}

function commit() {
  props.state.data.experiences = slots.value
      .filter(s => s.name.trim().length > 0)
      .map(s => ({ name: s.name.trim(), score: s.score }))
  emit("setState", props.state)
}
</script>

<style scoped>
</style>
