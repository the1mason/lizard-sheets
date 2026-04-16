<template>

  <h3 class="ma-0 mb-3">{{ $t('builder.cards.title') }}</h3>
  <p class="text-body-2 text-medium-emphasis mb-4">
    {{ $t('builder.cards.description', { selected: selected.length, max: MAX_SELECTION }) }}
  </p>

  <domain-card-picker
      :domains="classDomains"
      :level="1"
      :selected-ids="selectedIds"
      :max-reached="selected.length >= MAX_SELECTION"
      @toggle="onToggle"/>

</template>

<script setup lang="ts">

import {computed, onMounted, ref, watch} from "vue";
import type {BuilderState} from "@/stores/builderStore.ts";
import type {DomainCard} from "@/types/game/character.ts";
import type {Domain} from "@/types/game/domain.ts";
import DomainCardPicker from "@/components/builder/DomainCardPicker.vue";

const MAX_SELECTION = 2

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

const selected = ref<DomainCard[]>([])

const classDomains = computed<Domain[]>(() => {
  const characterClass = props.state.data.class
  if (!characterClass) return []
  return [characterClass.domain1, characterClass.domain2]
})

const selectedIds = computed<string[]>(() => selected.value.map(c => c.id))

watch(() => props.state, (newState) => {
  syncFromState(newState)
}, {deep: true})

onMounted(() => {
  syncFromState(props.state)
})

function syncFromState(state: BuilderState) {
  const validDomains = new Set<Domain>()
  if (state.data.class) {
    validDomains.add(state.data.class.domain1)
    validDomains.add(state.data.class.domain2)
  }
  const filtered = (state.data.domainCards ?? []).filter(c => validDomains.has(c.domain))
  selected.value = filtered.slice(0, MAX_SELECTION)
}

function onToggle(card: DomainCard) {
  const idx = selected.value.findIndex(c => c.id === card.id)
  if (idx >= 0) {
    selected.value.splice(idx, 1)
  } else {
    if (selected.value.length >= MAX_SELECTION) return
    selected.value.push(card)
  }
  commit()
}

function commit() {
  const nextState = props.state
  nextState.data.domainCards = [...selected.value]
  emit("setState", nextState)
  if (selected.value.length === MAX_SELECTION) {
    emit("markDone")
  }
}

</script>

<style scoped>

</style>
