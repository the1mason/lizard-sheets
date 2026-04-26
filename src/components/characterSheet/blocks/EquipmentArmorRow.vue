<template>
  <div class="armor-row">
    <div class="armor-row__head">
      <v-icon class="me-1" icon="mdi-shield-half-full" size="small" />
      <span class="text-subtitle-1 font-weight-medium">{{ slotLabel }}</span>
    </div>

    <v-row class="armor-row__grid" dense no-gutters>
      <v-col cols="12">
        <v-text-field
          class="armor-input armor-input--name"
          density="compact"
          hide-details
          :label="$t('sheet.equipment.nameLabel')"
          :model-value="display(armor?.name)"
          variant="outlined"
          @blur="(e: FocusEvent) => onTextBlur('name', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          class="armor-input"
          density="compact"
          hide-details
          inputmode="numeric"
          :label="$t('sheet.equipment.scoreLabel')"
          :model-value="armor?.score ?? ''"
          variant="outlined"
          @blur="(e: FocusEvent) => onNumberBlur('score', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          class="armor-input"
          density="compact"
          hide-details
          inputmode="numeric"
          :label="$t('sheet.equipment.thresholdLowLabel')"
          :model-value="armor?.thresholdLow ?? ''"
          variant="outlined"
          @blur="(e: FocusEvent) => onNumberBlur('thresholdLow', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="4">
        <v-text-field
          class="armor-input"
          density="compact"
          hide-details
          inputmode="numeric"
          :label="$t('sheet.equipment.thresholdHighLabel')"
          :model-value="armor?.thresholdHigh ?? ''"
          variant="outlined"
          @blur="(e: FocusEvent) => onNumberBlur('thresholdHigh', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="12">
        <v-textarea
          auto-grow
          class="armor-input"
          density="compact"
          hide-details
          :label="$t('sheet.equipment.featureLabel')"
          :model-value="display(armor?.feature)"
          rows="1"
          variant="outlined"
          @blur="(e: FocusEvent) => onTextBlur('feature', (e.target as HTMLTextAreaElement).value)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
  import type { Armor } from '@/types/game/character.ts'
  import { useI18n } from 'vue-i18n'

  const props = defineProps<{
    slotLabel: string
    armor: Armor | undefined
  }>()

  const emit = defineEmits<{
    (e: 'update:armor', armor: Armor): void
  }>()

  const { t, te } = useI18n()

  function display (value: string | undefined): string {
    if (!value) return ''
    if (props.armor?.custom) return value
    return te(value) ? t(value) : value
  }

  type TextField = 'name' | 'feature'
  type NumberField = 'score' | 'thresholdLow' | 'thresholdHigh'

  function emptyArmor (): Armor {
    return {
      name: '',
      thresholdLow: 0,
      thresholdHigh: 0,
      score: 0,
      feature: '',
      custom: true,
    }
  }

  function materialize (a: Armor): Armor {
    if (a.custom) return a
    return {
      ...a,
      name: display(a.name),
      feature: display(a.feature),
      custom: true,
    }
  }

  function onTextBlur (field: TextField, raw: string) {
    const next = (raw ?? '').trim()
    const current = props.armor ? display(props.armor[field]) : ''
    if (next === current) return
    if (!props.armor) {
      if (!next) return
      emit('update:armor', { ...emptyArmor(), [field]: next })
      return
    }
    const base = materialize(props.armor)
    emit('update:armor', { ...base, [field]: next })
  }

  function onNumberBlur (field: NumberField, raw: string) {
    const trimmed = (raw ?? '').trim()
    if (!props.armor && trimmed === '') return
    const parsed = Number(trimmed)
    const next = Number.isFinite(parsed) ? Math.max(0, Math.trunc(parsed)) : 0
    if (props.armor && next === props.armor[field]) return
    if (!props.armor) {
      emit('update:armor', { ...emptyArmor(), [field]: next })
      return
    }
    const base = materialize(props.armor)
    emit('update:armor', { ...base, [field]: next })
  }
</script>

<style scoped>
.armor-row__head {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 6px;
}

.armor-row__grid {
  margin-inline: -4px;
}

.armor-row__grid > .v-col {
  padding-inline: 4px;
  padding-block: 2px;
}

.armor-input :deep(.v-field__outline) {
  --v-field-border-opacity: 0.15;
  opacity: 0.6;
}

.armor-input :deep(.v-field--focused .v-field__outline) {
  opacity: 1;
}

.armor-input :deep(.v-field__input) {
  padding-block: 4px;
  min-height: 32px;
  font-size: 0.85rem;
}

.armor-input :deep(.v-label) {
  font-size: 0.75rem;
}

.armor-input--name :deep(.v-field__input) {
  font-size: 0.95rem;
  font-weight: 600;
}
</style>
