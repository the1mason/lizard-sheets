<template>
  <v-container>
    <v-card>
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
      <v-stepper :model-value="builderState.currentStep">
        <v-stepper-header>
          <v-stepper-item value=start
                          :title="$t('builder.steps.start')"
                          :subtitle="$t('builder.steps.startSubtitle')"
                          editable
                          :complete="builderState.currentStep !== 'start'"
                          @click="() => switchStep('start')">
          </v-stepper-item>
          <template v-if="builderState.steps.length > 0" v-for="(step, index) in builderState.steps"
                    :key="step.value">
            <v-divider :variant="
            index == 0 ? 'solid' :
             builderState.steps[index-1].isDone ? 'solid' : 'dashed'"/>
            <v-stepper-item :value=step.value
                            icon="mdi-circle"
                            :title="$t('builder.steps.{value}', { value: step.value })"
                            :subtitle="$t('builder.steps.{value}Subtitle', { value: step.value })"
                            :editable="step.isDone || step.isUnlocked || builderState.currentStep === step.value"
                            :click="() => switchStep(step.value)"
                            :error="step.hasError"
                            :complete="step.isDone"
            />
            <v-divider :variant="
             step.isDone ? 'solid' : 'dashed'"/>
          </template>
          <template v-else>
            <v-divider variant="dashed"/>
            <v-stepper-item value="something"
                            icon="mdi-help"
                            :title="$t('builder.steps.something')"
                            :subtitle="$t('builder.steps.somethingSubtitle')"/>
            <v-divider variant="dashed"/>
          </template>
          <v-stepper-item value=finish
                          icon="mdi-check"
                          :title="$t('builder.steps.finish')"
                          :subtitle="$t('builder.steps.finishSubtitle')"
                          :editable="canFinish"
                          @click="() => switchStep('finish')">
          </v-stepper-item>
        </v-stepper-header>
        <v-stepper-window>
          <v-stepper-window-item value="start">
            <h1>a</h1>
          </v-stepper-window-item>
          <v-stepper-window-item value="finish">
            <h1>b</h1>
          </v-stepper-window-item>
        </v-stepper-window>
        <v-stepper-actions
        >
          <template #prev>
            <v-btn color="gray" :disabled="!canBackward" @click="stepBackward">{{
                $t('builder.stepper.previous')
              }}
            </v-btn>
          </template>
          <template #next>
            <v-btn color="primary" :disabled="!canForward" @click="stepForward">{{ $t('builder.stepper.next') }}</v-btn>
          </template>
        </v-stepper-actions>
      </v-stepper>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">

import {computed, onMounted, ref} from "vue";
import {type BuilderState, useBuilderStore} from "@/stores/builderStore.ts";


const canForward = ref<boolean>(true);
const canBackward = ref<boolean>(false);
const canFinish = ref<boolean>(false);
const fromPrevious = ref<boolean>(false);

const store = useBuilderStore()
const builderState = ref<BuilderState>(store.get())

const dynamicStepPosition = ref<number>(0);


function stepForward() {
  builderState.value.currentStep = 'finish';
  builderState.value.isBlank = false;
  store.set(builderState.value);
}

function stepBackward() {
}

function switchStep(step: string) {
  builderState.value.currentStep = step;
  store.set(builderState.value);
}

function reset() {
  builderState.value = store.reset();
  fromPrevious.value = false;
}

onMounted(async () => {
  await store.init();
  builderState.value = store.get();

  if(builderState.value.isBlank){
    return;
  }

  if(builderState.value.currentStep === 'finish') {
    fromPrevious.value = true;
    return;
  }

  const stepNumber = builderState.value.steps.findIndex(step => step.value === builderState.value.currentStep);
  if (stepNumber === -1) {
    builderState.value = store.reset();
  }
  fromPrevious.value = true;
})

</script>

<style scoped>

</style>