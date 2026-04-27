<template>
  <div class="vault-filters">
    <v-text-field
      base-color="primary"
      clearable
      density="compact"
      hide-details
      :model-value="textFilter"
      :placeholder="$t('sheet.vault.filters.text')"
      prepend-inner-icon="mdi-magnify"
      @update:model-value="(v) => emit('update:textFilter', v ?? '')"
    />

    <div v-if="availableKinds.length > 1" class="vault-filter-row">
      <span class="vault-filter-label">{{ $t('sheet.vault.filters.kind') }}</span>
      <v-chip-group
        column
        :model-value="kindFilter"
        multiple
        @update:model-value="(v) => emit('update:kindFilter', v as CardKind[])"
      >
        <v-chip
          v-for="k in availableKinds"
          :key="k"
          filter
          size="small"
          :value="k"
        >
          {{ $t(`sheet.vault.kinds.${k}`) }}
        </v-chip>
      </v-chip-group>
    </div>

    <div v-if="availableDomains.length > 1" class="vault-filter-row">
      <span class="vault-filter-label">{{ $t('sheet.vault.filters.domain') }}</span>
      <v-chip-group
        column
        :model-value="domainFilter"
        multiple
        @update:model-value="(v) => emit('update:domainFilter', v as Domain[])"
      >
        <v-chip
          v-for="d in availableDomains"
          :key="d"
          filter
          size="small"
          :value="d"
        >
          {{ $t(`game.domains.${d}`) }}
        </v-chip>
      </v-chip-group>
    </div>

    <div v-if="availableLevels.length > 1" class="vault-filter-row">
      <span class="vault-filter-label">{{ $t('sheet.vault.filters.level') }}</span>
      <v-chip-group
        column
        :model-value="levelFilter"
        multiple
        @update:model-value="(v) => emit('update:levelFilter', v as Level[])"
      >
        <v-chip
          v-for="l in availableLevels"
          :key="l"
          filter
          size="small"
          :value="l"
        >
          {{ l }}
        </v-chip>
      </v-chip-group>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { CardKind } from './cardVaultTypes.ts'
  import type { Level } from '@/types/game/character.ts'
  import type { Domain } from '@/types/game/domain.ts'

  defineProps<{
    textFilter: string
    kindFilter: CardKind[]
    domainFilter: Domain[]
    levelFilter: Level[]
    availableKinds: CardKind[]
    availableDomains: Domain[]
    availableLevels: Level[]
  }>()

  const emit = defineEmits<{
    (e: 'update:textFilter', value: string): void
    (e: 'update:kindFilter', value: CardKind[]): void
    (e: 'update:domainFilter', value: Domain[]): void
    (e: 'update:levelFilter', value: Level[]): void
  }>()
</script>

<style scoped lang="scss">
  .vault-filters {
    padding: 8px 16px 12px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .vault-filter-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .vault-filter-label {
    font-size: 0.75rem;
    color: rgba(var(--v-theme-on-surface), 0.7);
    min-width: 56px;
  }
</style>
