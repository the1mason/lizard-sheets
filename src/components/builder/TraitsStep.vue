<template>
    <h1>{{ $t('builder.traits.title')}}</h1>
  <v-row>
    <trait :trait-name="$t('game.traits.agility')" :trait-value="traits?.agility ?? 0" :default-trait-value="defaultTraits?.agility ?? 0"
           @setValue="(newValue) => updateState('agility', newValue)"/>

    <trait :trait-name="$t('game.traits.strength')" :trait-value="traits?.strength ?? 0" :default-trait-value="defaultTraits?.strength ?? 0"
           @setValue="(newValue) => updateState('strength', newValue)"/>

    <trait :trait-name="$t('game.traits.finesse')" :trait-value="traits?.finesse ?? 0" :default-trait-value="defaultTraits?.finesse ?? 0"
           @setValue="(newValue) => updateState('finesse', newValue)"/>

    <trait :trait-name="$t('game.traits.instinct')" :trait-value="traits?.instinct ?? 0" :default-trait-value="defaultTraits?.instinct ?? 0"
           @setValue="(newValue) => updateState('instinct', newValue)"/>

    <trait :trait-name="$t('game.traits.presence')" :trait-value="traits?.presence ?? 0" :default-trait-value="defaultTraits?.presence ?? 0"
           @setValue="(newValue) => updateState('presence', newValue)"/>

    <trait :trait-name="$t('game.traits.knowledge')" :trait-value="traits?.knowledge ?? 0" :default-trait-value="defaultTraits?.knowledge ?? 0"
           @setValue="(newValue) => updateState('knowledge', newValue)"/>
  </v-row>
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
  traits.value = props.state.data.traits
}, { deep: true })

onMounted(() => {
  defaultTraits.value =  Object.assign({}, props.state.options.classOption?.defaultTraits)
  traits.value = props.state.data.traits
})

function updateState(key: keyof CharacterTraits, newValue: number): void {
  console.log("newValue", key, newValue)
  const newState = props.state;
  newState.data.traits[key] = newValue
  emit("setState", newState)
}

</script>

<style scoped>

</style>