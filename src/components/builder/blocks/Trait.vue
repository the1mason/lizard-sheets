<template>
  <v-col align="center">
    <v-card color="lighten" class="pa-3">
      <v-card-title>
        <b>{{ $t(`game.traits.${props.traitName}.title`) }}</b>
      </v-card-title>
      <div style="font-size: 64px">
        <template v-if="traitValue > 0">+</template>
        {{ traitValue }}
      </div>
      <v-number-input hide-details
                      @update:modelValue="(newVal) => setValue(newVal)"
                      variant="solo-filled"
                      reverse
                      density="compact"
                      :min="-10" :max="10"
                      v-model="traitValue"
                      class="trait-input"
                      control-variant="split">
      </v-number-input>
      <p align="center">{{ $t("builder.traits.suggested") + " " }}<a href="#" target="_self"
                                                                     @click="setDefault"><u>{{ defaultTraitValue }}</u></a>
      </p>
      <i v-html="$t(`game.traits.${props.traitName}.usedFor`)" />
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

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