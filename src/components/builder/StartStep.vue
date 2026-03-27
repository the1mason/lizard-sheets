<template>
  <h3 class="ma-0 mb-3">{{ $t('builder.start.title') }}</h3>

  <v-row>
    <v-col>
      <v-text-field :label="$t('builder.start.nameLabel')" base-color="primary" @blur="save" v-model="name"/>
    </v-col>
    <v-col>
      <v-text-field :label="$t('builder.start.pronounsLabel')" v-model="pronouns" @blur="save" />
    </v-col>
  </v-row>

  <v-btn @click="unlockNext">Unlock Next</v-btn>
</template>

<script setup lang="ts">
import type {BuilderState} from "@/stores/builderStore.ts";
import {nextTick, onMounted, ref, watch} from "vue";

const emit = defineEmits<{
  (e: "setState", state: BuilderState): void;
}>();

const props = withDefaults(
    defineProps<{
      state: BuilderState;
      currentStep: number
    }>(),
    {}
);

watch(() => props.state, (newState) => {
  name.value = newState.data.name;
  pronouns.value = newState.data.pronouns;
});

const name = ref<string | undefined>(props.state.data.name);
const pronouns = ref<string | undefined>(props.state.data.pronouns);

onMounted(() => {
  console.log(props.state.data)
  name.value = props.state.data.name;
  pronouns.value = props.state.data.pronouns;
})

function save() {
  const current = props.state
  current.data.name = name.value
  current.data.pronouns = pronouns.value
  emit("setState", current)
}

function unlockNext() {
  if (props.state.currentStep != 'start')
    return;
  const unlocked = props.state;
  unlocked.steps[props.currentStep].isDone = true;
  unlocked.steps[props.currentStep + 1].isUnlocked = true;
  emit('setState', unlocked);
}

</script>

<style scoped>

</style>