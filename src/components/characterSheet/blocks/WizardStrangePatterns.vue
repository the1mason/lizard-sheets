<template>
  <div>
    <markdown :source="$t('game.classes.wizard.trait')" />
    <div class="strange-patterns-row">
      <span class="strange-patterns-label">
        {{ $t('game.classes.wizard.strangePatterns.title') }}:
      </span>
      <input
        :aria-label="$t('game.classes.wizard.strangePatterns.label')"
        class="strange-patterns-input"
        inputmode="numeric"
        max="12"
        maxlength="2"
        min="1"
        type="text"
        :value="value ?? ''"
        @input="(e) => onInput((e.target as HTMLInputElement).value)"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import Markdown from '@/components/common/Markdown.vue'

  const props = defineProps<{
    strangePatterns?: number
  }>()

  const emit = defineEmits<{
    (e: 'update:strangePatterns', value: number | undefined): void
  }>()

  const value = computed<number | undefined>(() => props.strangePatterns)

  function onInput (raw: string) {
    const trimmed = raw.trim()
    if (trimmed.length === 0) {
      emit('update:strangePatterns', undefined)
      return
    }
    const parsed = Number.parseInt(trimmed, 10)
    if (!Number.isFinite(parsed)) return
    emit('update:strangePatterns', Math.min(12, Math.max(1, parsed)))
  }
</script>

<style scoped>
.strange-patterns-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.strange-patterns-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.7;
}

.strange-patterns-input {
  width: 56px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.3);
  border-radius: 4px;
  background: transparent;
  color: rgb(var(--v-theme-on-surface));
  outline: none;
  padding: 4px 0;
}

.strange-patterns-input:focus {
  border-color: rgb(var(--v-theme-primary));
}
</style>
