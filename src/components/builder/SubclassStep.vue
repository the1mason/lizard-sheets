<template>

  <h3 class="ma-0 mb-3">{{ $t('builder.subclass.title') }}</h3>

  <v-item-group mandatory v-model="subclass" @update:model-value="onChooseSubclass()">
    <v-row gap="8">
      <template v-for="subclass in subclasses">
        <v-item v-slot="{isSelected, toggle}" :value="subclass">
          <game-card :color="isSelected ? 'secondaryBg' : undefined" size="large" @click="toggle">
            <v-col class="px-3" align="center">
              <h2>{{ $t(`game.subclasses.${subclass}.name`) }}</h2>
              <p class="font-weight-thin text-body-medium">{{ $t(`game.subclasses.${subclass}.description`) }}</p>
            </v-col>
          </game-card>
        </v-item>
      </template>
    </v-row>
  </v-item-group>

</template>

<script setup lang="ts">

import type {BuilderState} from "@/stores/builderStore.ts";
import {onMounted, ref, watch} from "vue";
import GameCard from "@/components/common/GameCard.vue";

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
  if(newState.data.subclasses.length > 0){
    subclass.value = newState.data.subclasses[0].id
  }
  else {
    subclass.value = undefined;
  }
  subclasses.value = [...newState.options.subclasses]
}, { deep: true })

onMounted(() => {
  subclasses.value = props.state.options.subclasses
  if(props.state.data.subclasses.length > 0)
  {
    subclass.value = props.state.data.subclasses[0].id
  }
})

const subclass = ref<string | undefined>()
const subclasses = ref<string[]>([])

function onChooseSubclass() {
  if(!subclass.value!) {
    return;
  }

  const currentState = props.state;
  currentState.data.subclasses = [{
    id: subclass.value,
    class: currentState.data.class!.id,
    level: 1
  }]

  emit("setState", currentState);
  emit("markDone")
}

</script>

<style scoped>

</style>