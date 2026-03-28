<template>
  <v-container>
    <v-card class="pa-3">
      <v-card-title>
        <b>{{ $t('builder.title') }}</b></v-card-title>
      <v-alert v-if="fromPrevious"
               closable
               variant="tonal"
               class="ma-3"
               color="secondary"
      >
        {{ $t('builder.recoveryAlert.text') }}<br>
        <v-btn variant="outlined" size="small" class="mt-2" color="secondary" @click="reset">{{ $t('builder.recoveryAlert.clear') }}</v-btn>
      </v-alert>
      <template v-if="builderState!">
        <v-stepper elevation="4" :model-value="builderState.currentStep">
          <v-stepper-header>
            <template v-if="builderState.steps.length > 0" v-for="(step, index) in builderState.steps"
                      :key="step.value">
              <v-divider v-if="index != 0" thickness="3" :variant="
            index == 0 ? 'solid' :
             builderState.steps[index-1].isDone ? 'solid' : 'dashed'"/>
              <v-stepper-item :value=step.value
                              :title="$t(`builder.steps.${step.value}.title`)"
                              :subtitle="$t(`builder.steps.${step.value}.subtitle`, '')"
                              :editable="step.isDone || step.isUnlocked || builderState.currentStep === step.value"
                              :icon="step.icon ?? 'mdi-circle'"
                              @click="() => switchStep(index)"
                              :error="step.hasError"
                              :complete="step.isDone"
                              :color="builderState.currentStep == step.value ? 'secondary' : undefined"
              />
              <v-divider v-if="(index - 1) === builderState.steps.length" thickness="3" :variant="
             step.isDone ? 'solid' : 'dashed'"/>
            </template>
          </v-stepper-header>
          <v-stepper-window class="ma-0 pt-3 px-6 pb-6">
            <v-stepper-window-item value="start">
              <start-step :state="builderState" :current-step="stepIndex" @setState="setState" />
            </v-stepper-window-item>
            <v-stepper-window-item value="something">
            </v-stepper-window-item>
          </v-stepper-window>
          <v-stepper-actions
          >
            <template #prev>
              <v-btn color="gray" :disabled="stepIndex === 0" @click="stepBackward">{{
                  $t('builder.stepper.previous')
                }}
              </v-btn>
            </template>
            <template #next>
              <v-btn color="primary" :disabled="stepIndex === (builderState.steps.length - 1) || !builderState.steps[stepIndex].isDone" @click="stepForward">{{ $t('builder.stepper.next') }}</v-btn>
            </template>
          </v-stepper-actions>
        </v-stepper>
      </template>
      <template v-else>
        <v-card class="pa-3" loading flat></v-card>
      </template>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">

import {computed, onMounted, ref} from "vue";
import {type BuilderState, useBuilderStore} from "@/stores/builderStore.ts";
import StartStep from "@/components/builder/StartStep.vue";


const fromPrevious = ref<boolean>(false);

const store = useBuilderStore()
const builderState = ref<BuilderState | undefined>(undefined)

const stepIndex = ref<number>(0);

onMounted(async () => {
  await store.init();
  const state = store.get()
  builderState.value = state;

  if(builderState.value.isBlank){
    return;
  }

  const stepNumber = state.steps.findIndex(step => step.value === state.currentStep);
  if (stepNumber === -1) {
    builderState.value = store.reset();
  }
  stepIndex.value = stepNumber;
  fromPrevious.value = true;
})


function stepForward() {
  stepIndex.value += 1;
  switchStep(stepIndex.value)
}

function stepBackward() {
  stepIndex.value -= 1;
  switchStep(stepIndex.value)
}

function switchStep(newIndex: number) {
  if(!builderState.value)
    return;
  stepIndex.value = newIndex;
  builderState.value.currentStep = builderState.value.steps[newIndex].value;
  store.set(builderState.value);
}

function reset() {
  builderState.value = store.reset();
  stepIndex.value = 0;
  fromPrevious.value = false;
}

function setState(state: BuilderState) {
  if(!builderState.value)
    return;
  builderState.value.currentStep = state.currentStep;
  builderState.value.isBlank = false;
  store.set(builderState.value);
  console.log("not blank now")
}

</script>

<style scoped>

</style>