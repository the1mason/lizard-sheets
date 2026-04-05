<template>
    <v-col align="center">
      <v-card color="lighten" class="pa-3">
        <h2>{{ props.traitName }}</h2>
        <h1><template v-if="traitValue > 0">+</template>{{ traitValue }}</h1>
      <v-number-input @update:modelValue="(newVal) => setValue(newVal)" variant="solo-filled" reverse density="compact" :min="-10" :max="10" v-model="traitValue" class="trait-input" control-variant="split">
      </v-number-input>
      <p align="center">{{ $t("builder.traits.suggested") + " "}}<a href="#" target="_self" @click="setDefault"><u>{{ defaultTraitValue }}</u></a></p>
      </v-card>
    </v-col>
</template>

<script setup lang="ts">
import type {BuilderState} from "@/stores/builderStore.ts";
import {onMounted, ref, watch} from "vue";

const emit = defineEmits<{
  (e: "setValue", newValue: number): void
}>()

const traitValue = ref<number>(0)
const defaultTraitValue = ref<number>(0)

const props = defineProps<{
  traitName: string
  traitValue: number
  defaultTraitValue: number
}>()

watch(() => props.traitValue, (newState) => {
  traitValue.value = newState
})
watch(() => props.defaultTraitValue, (newState) => {
  defaultTraitValue.value = newState
})

function setDefault() {
  emit("setValue", defaultTraitValue.value)
}

function setValue(newVal: number) {
  emit("setValue", newVal)
}

</script>