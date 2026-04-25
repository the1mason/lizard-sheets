<template>
  <v-col align="center" class="pa-1 trait-cell">
    <v-checkbox-btn
      class="trait-checkbox"
      density="compact"
      hide-details
      :model-value="checked"
      @update:model-value="(v: boolean | null) => emit('set-checked', !!v)"
    />
    <div class="trait-name">
      <b>{{ $t(`game.traits.${props.traitName}.title`) }}</b>
    </div>
    <div v-if="!editing" class="trait-value" @click="startEditing">
      <template v-if="traitValue > 0">+</template>{{ traitValue }}
    </div>
    <v-number-input
      v-else
      ref="inputRef"
      v-model="traitValue"
      class="trait-input"
      control-variant="split"
      density="compact"
      hide-details
      :max="10"
      :min="-10"
      reverse
      variant="solo-filled"
      @blur="stopEditing"
      @update:model-value="(newVal: number) => setValue(newVal)"
    />
    <i class="trait-used-for" v-html="$t(`game.traits.${props.traitName}.usedFor`)" />
  </v-col>
</template>

<script setup lang="ts">
  import { nextTick, ref, watch } from 'vue'

  const emit = defineEmits<{
    (e: 'set-value', newValue: number): void
    (e: 'set-checked', checked: boolean): void
  }>()

  const props = defineProps<{
    traitName: string
    traitValue: number
    checked: boolean
  }>()

  const traitValue = ref<number>(props.traitValue)
  const editing = ref<boolean>(false)
  const inputRef = ref<{ $el?: HTMLElement } | null>(null)

  watch(() => props.traitValue, next => {
    traitValue.value = next
  })

  function startEditing () {
    editing.value = true
    nextTick(() => {
      const el = inputRef.value?.$el?.querySelector('input') as HTMLInputElement | null
      el?.focus()
    })
  }

  function stopEditing () {
    editing.value = false
  }

  function setValue (newVal: number) {
    emit('set-value', newVal)
  }
</script>

<style scoped>
.trait-cell {
  text-align: center;
}

.trait-checkbox {
  display: inline-flex;
  justify-content: center;
}

.trait-name {
  font-size: 0.85rem;
  line-height: 1.1;
}

.trait-value {
  font-size: 28px;
  line-height: 1.1;
  cursor: pointer;
  user-select: none;
}

.trait-used-for {
  font-size: 0.75rem;
  line-height: 1.15;
  display: block;
}
</style>
