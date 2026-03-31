<template>
  <v-row>
    <h1>the default traits are {{ `${traits?.agility} ${traits?.strength} ${traits?.finesse} ${traits?.instinct} ${traits?.presence} ${traits?.knowledge}` }}</h1>
    <div>

    </div>
  </v-row>
</template>

<script setup lang="ts">

import {onMounted, ref, watch} from "vue";
import type {CharacterTraits} from "@/types/game/characterTraits.ts";
import type {BuilderState} from "@/stores/builderStore.ts";

const traits = ref<CharacterTraits | undefined>(undefined)
const defaultTraits = ref<CharacterTraits | undefined>(undefined)

const emit = defineEmits<{
  (e: "setState", state: BuilderState): void
  (e0: "markDone"): void
}>()

const props = withDefaults(
    defineProps<{
      state: BuilderState
      currentStep: number
    }>(),
    {}
)

watch(() => props.state.options.classOption?.defaultTraits, (newState) => {
  traits.value = Object.assign({}, newState)
  defaultTraits.value = newState
}, { deep: true })

onMounted(() => {
  defaultTraits.value =  Object.assign({}, props.state.options.classOption?.defaultTraits)
  traits.value = props.state.options.classOption?.defaultTraits
})

</script>

<style scoped>

</style>