<template>
    <h1>{{ $t('builder.traits.title')}}</h1>
  <v-row>
    <trait trait-name="agility" :trait-value="traits?.agility ?? 0" :default-trait-value="defaultTraits?.agility ?? 0"
           @setValue="(newValue) => updateState('agility', newValue)"/>

    <trait trait-name="strength" :trait-value="traits?.strength ?? 0" :default-trait-value="defaultTraits?.strength ?? 0"
           @setValue="(newValue) => updateState('strength', newValue)"/>

    <trait trait-name="finesse" :trait-value="traits?.finesse ?? 0" :default-trait-value="defaultTraits?.finesse ?? 0"
           @setValue="(newValue) => updateState('finesse', newValue)"/>

    <trait trait-name="instinct" :trait-value="traits?.instinct ?? 0" :default-trait-value="defaultTraits?.instinct ?? 0"
           @setValue="(newValue) => updateState('instinct', newValue)"/>

    <trait trait-name="presence" :trait-value="traits?.presence ?? 0" :default-trait-value="defaultTraits?.presence ?? 0"
           @setValue="(newValue) => updateState('presence', newValue)"/>

    <trait trait-name="knowledge" :trait-value="traits?.knowledge ?? 0" :default-trait-value="defaultTraits?.knowledge ?? 0"
           @setValue="(newValue) => updateState('knowledge', newValue)"/>
  </v-row>
  <template v-if="state.options.traitsChosen">
    <v-checkbox class="pt-8" disabled :model-value="true" color="red" :error="true">
      <template #label>{{ $t('builder.traits.gmConsent') }}</template>
    </v-checkbox>
  </template>
</template>

<script setup lang="ts">

import {onMounted, ref, watch} from "vue";
import type {CharacterTraits} from "@/types/game/characterTraits.ts";
import type {BuilderState} from "@/stores/builderStore.ts";
import Trait from "@/components/builder/blocks/Trait.vue";

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

watch(() => props.state, (newState) => {
  defaultTraits.value = props.state.options.classOption?.defaultTraits
  if(props.state.options.traitsChosen) {
    traits.value = props.state.data.traits
  }
  else {
    traits.value = props.state.options.classOption?.defaultTraits
  }
}, { deep: true })

onMounted(() => {
  defaultTraits.value =  Object.assign({}, props.state.options.classOption?.defaultTraits)
  if(props.state.options.traitsChosen) {
    traits.value = props.state.data.traits
  }
  else {
    traits.value = props.state.options.classOption?.defaultTraits
  }
})

function updateState(key: keyof CharacterTraits, newValue: number): void {
  console.log("newValue", key, newValue)
  const newState = props.state;
  if(newState.options.traitsChosen !== true) {
    const currentValue = traits.value!
    newState.data.traits.agility = currentValue.agility
    newState.data.traits.finesse = currentValue.finesse
    newState.data.traits.instinct = currentValue.instinct
    newState.data.traits.knowledge = currentValue.knowledge
    newState.data.traits.presence = currentValue.presence
    newState.data.traits.strength = currentValue.strength
    newState.options.traitsChosen = true
  }

  newState.data.traits[key] = newValue
  emit("setState", newState)
}

</script>

<style scoped>

</style>