<template>
  <div class="vault-section">
    <div
      class="vault-section-header"
      :class="{ 'text-error': overEquipped && section === 'equipped' }"
    >
      <span class="text-subtitle-1">
        {{ section === 'equipped' ? $t('sheet.vault.equipped') : $t('sheet.vault.stored') }}
      </span>
      <span
        v-if="section === 'equipped'"
        class="text-caption ml-2"
        :class="overEquipped ? 'text-error' : 'text-medium-emphasis'"
      >
        {{ equippedCount }} / 5
      </span>
      <v-btn
        v-if="section === 'stored'"
        class="ml-2"
        density="compact"
        prepend-icon="mdi-plus"
        size="small"
        variant="tonal"
        @click="emit('open-picker')"
      >
        {{ $t('sheet.vault.add') }}
      </v-btn>
    </div>
    <div
      class="vault-section-drop"
      :class="{
        'drop-active': dragOver,
        'over-limit': overEquipped && section === 'equipped',
      }"
      @dragleave="onDragLeave"
      @dragover="onDragOver"
      @drop="onDrop"
    >
      <template v-if="entries.length > 0">
        <div
          v-for="(entry, idx) in entries"
          :key="entryKey(entry, idx)"
          class="vault-card-wrap"
          :draggable="entry.kind === 'domain'"
          @dragend="onCardDragEnd"
          @dragstart="onCardDragStart(entry, $event)"
        >
          <sheet-card-view :entry="entry" :size="cardSize" />
          <v-btn
            v-if="entry.kind === 'domain'"
            :aria-label="section === 'equipped' ? $t('sheet.vault.moveToStored') : $t('sheet.vault.moveToEquipped')"
            class="vault-card-move"
            color="grey"
            density="compact"
            :icon="section === 'equipped' ? 'mdi-arrow-down' : 'mdi-arrow-up'"
            size="x-small"
            variant="tonal"
            @click.stop="onMoveClick(entry)"
          />
          <v-btn
            v-if="entry.kind === 'subclass' && entry.tier === entry.subclass.level && entry.tier < 3"
            :aria-label="$t('sheet.vault.upgrade')"
            class="vault-card-upgrade"
            color="primary"
            density="compact"
            icon="mdi-chevron-double-up"
            size="x-small"
            variant="tonal"
            @click.stop="onUpgradeClick(entry)"
          />
          <v-btn
            v-if="entry.kind === 'subclass' && entry.tier === entry.subclass.level && entry.tier > 1"
            :aria-label="$t('sheet.vault.downgrade')"
            class="vault-card-downgrade"
            color="grey"
            density="compact"
            icon="mdi-chevron-double-down"
            size="x-small"
            variant="tonal"
            @click.stop="onDowngradeClick(entry)"
          />
        </div>
      </template>
      <div v-else class="vault-section-empty text-medium-emphasis">
        {{ $t('sheet.vault.empty') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { CardSize, SheetCardEntry } from './cardVaultTypes.ts'
  import SheetCardView from './SheetCardView.vue'

  const props = withDefaults(
    defineProps<{
      section: 'equipped' | 'stored'
      entries: SheetCardEntry[]
      cardSize: CardSize
      dragOver?: boolean
      overEquipped?: boolean
      equippedCount?: number
    }>(),
    {
      dragOver: false,
      overEquipped: false,
      equippedCount: 0,
    },
  )

  const emit = defineEmits<{
    (e: 'dragstart-card', payload: { id: string, from: 'equipped' | 'stored' }): void
    (e: 'dragend-card' | 'dragleave-section' | 'drop-section' | 'open-picker'): void
    (e: 'dragover-section', ev: DragEvent): void
    (e: 'move-card', payload: { id: string, from: 'equipped' | 'stored', to: 'equipped' | 'stored' }): void
    (e: 'upgrade-subclass' | 'downgrade-subclass', id: string): void
  }>()

  function entryKey (e: SheetCardEntry, idx: number): string {
    switch (e.kind) {
      case 'domain': { return `d:${e.section}:${e.card.id}`
      }
      case 'subclass': { return `s:${e.subclass.id}:${e.tier}`
      }
      case 'ancestry': { return `a:${e.ancestry.id}`
      }
      case 'community': { return `c:${e.community.id}:${idx}`
      }
    }
  }

  function onCardDragStart (entry: SheetCardEntry, ev: DragEvent) {
    if (entry.kind !== 'domain') return
    ev.dataTransfer?.setData('text/plain', entry.card.id)
    if (ev.dataTransfer) ev.dataTransfer.effectAllowed = 'move'
    emit('dragstart-card', { id: entry.card.id, from: props.section })
  }

  function onCardDragEnd () {
    emit('dragend-card')
  }

  function onDragOver (ev: DragEvent) {
    emit('dragover-section', ev)
  }

  function onDragLeave () {
    emit('dragleave-section')
  }

  function onDrop () {
    emit('drop-section')
  }

  function onMoveClick (entry: SheetCardEntry) {
    if (entry.kind !== 'domain') return
    emit('move-card', {
      id: entry.card.id,
      from: props.section,
      to: props.section === 'equipped' ? 'stored' : 'equipped',
    })
  }

  function onUpgradeClick (entry: SheetCardEntry) {
    if (entry.kind !== 'subclass') return
    emit('upgrade-subclass', entry.subclass.id)
  }

  function onDowngradeClick (entry: SheetCardEntry) {
    if (entry.kind !== 'subclass') return
    emit('downgrade-subclass', entry.subclass.id)
  }
</script>

<style scoped lang="scss">
  .vault-section + .vault-section {
    margin-top: 16px;
  }

  .vault-section-header {
    display: flex;
    align-items: baseline;
    margin-bottom: 8px;
  }

  .vault-section-drop {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    min-height: 80px;
    padding: 8px;
    border-radius: 8px;
    border: 2px dashed transparent;
    transition: background-color 120ms ease-out, border-color 120ms ease-out;
  }

  .vault-section-drop.drop-active {
    border-color: rgba(var(--v-theme-primary), 0.6);
    background: rgba(var(--v-theme-primary), 0.06);
  }

  .vault-section-drop.over-limit {
    border-color: rgb(var(--v-theme-error));
    background: rgba(var(--v-theme-error), 0.08);
  }

  .vault-section-empty {
    padding: 16px;
    width: 100%;
    text-align: center;
  }

  .vault-card-wrap {
    position: relative;
  }

  .vault-card-wrap[draggable="true"] {
    cursor: grab;
  }

  .vault-card-wrap[draggable="true"]:active {
    cursor: grabbing;
  }

  .vault-card-move {
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    opacity: 0.85;
  }

  .vault-card-upgrade {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
    opacity: 0.9;
  }

  .vault-card-downgrade {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 1;
    opacity: 0.9;
  }
</style>
