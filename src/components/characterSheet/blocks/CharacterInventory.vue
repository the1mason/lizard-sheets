<template>
  <v-card border class="pa-3 mb-3 inventory-card">
    <div class="text-body-large mb-2">{{ $t('sheet.inventory.title') }}</div>

    <div v-if="items.length === 0" class="text-medium-emphasis text-body-2 mb-2">
      {{ $t('sheet.inventory.empty') }}
    </div>

    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="inventory-row"
    >
      <v-text-field
        class="inventory-input inventory-input--name"
        density="compact"
        hide-details
        :label="$t('sheet.inventory.nameLabel')"
        :model-value="display(item.name, item)"
        variant="outlined"
        @blur="(e: FocusEvent) => onNameBlur(idx, (e.target as HTMLInputElement).value)"
      />
      <v-text-field
        class="inventory-input inventory-input--count"
        density="compact"
        hide-details
        inputmode="numeric"
        :label="$t('sheet.inventory.countLabel')"
        :min="1"
        :model-value="item.count"
        type="number"
        variant="outlined"
        @blur="(e: FocusEvent) => onCountBlur(idx, (e.target as HTMLInputElement).value)"
      />
      <v-btn
        :aria-label="$t('sheet.inventory.remove')"
        density="comfortable"
        icon="mdi-close"
        size="small"
        variant="text"
        @click="removeItem(idx)"
      />
    </div>

    <v-btn
      class="mt-1"
      prepend-icon="mdi-plus"
      size="small"
      variant="text"
      @click="addItem"
    >
      {{ $t('sheet.inventory.addItem') }}
    </v-btn>

    <v-divider class="my-3" />

    <v-textarea
      auto-grow
      class="inventory-input"
      density="compact"
      hide-details
      :label="$t('sheet.inventory.notesLabel')"
      :model-value="text"
      rows="2"
      variant="outlined"
      @blur="(e: FocusEvent) => onTextBlur((e.target as HTMLTextAreaElement).value)"
    />
  </v-card>
</template>

<script setup lang="ts">
  import type { Character, InventoryItem } from '@/types/game/character.ts'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const props = defineProps<{
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:inventory', inventory: { items: InventoryItem[], text: string }): void
  }>()

  const { t, te } = useI18n()

  const items = computed<InventoryItem[]>(() => props.character.inventory?.items ?? [])
  const text = computed<string>(() => props.character.inventory?.text ?? '')

  function display (value: string | undefined, item: InventoryItem): string {
    if (!value) return ''
    if (item.custom) return value
    return te(value) ? t(value) : value
  }

  function commit (nextItems: InventoryItem[], nextText: string) {
    emit('update:inventory', { items: nextItems, text: nextText })
  }

  function materialize (item: InventoryItem): InventoryItem {
    if (item.custom) return item
    return {
      ...item,
      name: display(item.name, item),
      custom: true,
    }
  }

  function onNameBlur (idx: number, raw: string) {
    const next = (raw ?? '').trim()
    const item = items.value[idx]
    if (!item) return
    if (next === display(item.name, item)) return
    const updatedList = items.value.slice()
    updatedList[idx] = { ...materialize(item), name: next }
    commit(updatedList, text.value)
  }

  function onCountBlur (idx: number, raw: string) {
    const item = items.value[idx]
    if (!item) return
    const parsed = Number((raw ?? '').trim())
    const count = Number.isFinite(parsed) ? Math.max(1, Math.trunc(parsed)) : 1
    if (count === item.count) return
    const updatedList = items.value.slice()
    updatedList[idx] = { ...item, count }
    commit(updatedList, text.value)
  }

  function addItem () {
    const updatedList = items.value.slice()
    updatedList.push({ name: '', count: 1, custom: true })
    commit(updatedList, text.value)
  }

  function removeItem (idx: number) {
    const updatedList = items.value.slice()
    updatedList.splice(idx, 1)
    commit(updatedList, text.value)
  }

  function onTextBlur (raw: string) {
    const next = raw ?? ''
    if (next === text.value) return
    commit(items.value.slice(), next)
  }
</script>

<style scoped>
.inventory-card {
  display: flex;
  flex-direction: column;
}

.inventory-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.inventory-row:last-of-type {
  margin-bottom: 4px;
}

.inventory-input--name {
  flex: 1 1 auto;
  min-width: 0;
}

.inventory-input--count {
  flex: 0 0 90px;
  width: 90px;
}

.inventory-input :deep(.v-field__outline) {
  --v-field-border-opacity: 0.15;
  opacity: 0.6;
}

.inventory-input :deep(.v-field--focused .v-field__outline) {
  opacity: 1;
}

.inventory-input :deep(.v-field__input) {
  padding-block: 4px;
  min-height: 32px;
  font-size: 0.85rem;
}

.inventory-input :deep(.v-label) {
  font-size: 0.75rem;
}
</style>
