<template>
  <v-dialog
    fullscreen
    :model-value="modelValue"
    scrollable
    transition="dialog-bottom-transition"
    @update:model-value="(v) => emit('update:modelValue', v)"
  >
    <v-card class="add-cards-modal pa-0">
      <div class="add-cards-header">
        <span class="text-h6">{{ $t('sheet.vault.pickerTitle') }}</span>
        <span class="text-caption text-medium-emphasis ml-2">
          {{ ownedCount }} {{ $t('sheet.vault.selected') }}
        </span>
        <v-spacer />
        <v-btn
          :aria-label="$t('sheet.vault.close')"
          icon="mdi-close"
          size="small"
          variant="text"
          @click="emit('update:modelValue', false)"
        />
      </div>

      <div class="add-cards-filters">
        <v-text-field
          base-color="primary"
          clearable
          density="compact"
          hide-details
          :model-value="textFilter"
          :placeholder="$t('sheet.vault.filters.text')"
          prepend-inner-icon="mdi-magnify"
          @update:model-value="(v) => textFilter = v ?? ''"
        />
        <div class="add-cards-filter-row">
          <span class="add-cards-filter-label">{{ $t('sheet.vault.filters.domain') }}</span>
          <v-chip-group
            v-model="domainFilter"
            column
            multiple
          >
            <v-chip
              v-for="d in allDomains"
              :key="d"
              filter
              size="small"
              :value="d"
            >
              {{ $t(`game.domains.${d}`) }}
            </v-chip>
          </v-chip-group>
        </div>
        <div class="add-cards-filter-row">
          <span class="add-cards-filter-label">{{ $t('sheet.vault.filters.level') }}</span>
          <v-chip-group
            v-model="levelFilter"
            column
            multiple
          >
            <v-chip
              v-for="l in allLevels"
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

      <div class="add-cards-content">
        <div v-if="filteredCards.length === 0" class="add-cards-empty text-medium-emphasis">
          {{ $t('sheet.vault.empty') }}
        </div>
        <div v-else class="add-cards-grid">
          <div
            v-for="card in filteredCards"
            :key="`${card.domain}:${card.id}`"
            class="add-cards-cell"
            @click="emit('toggle-card', card)"
          >
            <domain-card-view
              :card="card"
              clickable
              :selected="ownedIds.has(card.id)"
              size="medium"
            />
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import type { Character, DomainCard, Level } from '@/types/game/character.ts'
  import type { Domain } from '@/types/game/domain.ts'
  import { computed, ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import DomainCardView from '@/components/common/DomainCardView.vue'
  import gameProvider from '@/libs/game/gameProvider.ts'

  const { t } = useI18n()

  const props = defineProps<{
    modelValue: boolean
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'toggle-card', card: DomainCard): void
  }>()

  const allDomains: Domain[] = [
    'arcana', 'blade', 'bone', 'codex', 'dread',
    'grace', 'midnight', 'sage', 'splendor', 'valor',
  ]
  const allLevels: Level[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const defaultDomains = computed<Domain[]>(() => props.character.domains ?? [])

  const defaultLevels = computed<Level[]>(() => {
    const max = props.character.level ?? 1
    const out: Level[] = []
    for (let i = 1; i <= max; i++) out.push(i as Level)
    return out
  })

  const textFilter = ref('')
  const domainFilter = ref<Domain[]>([])
  const levelFilter = ref<Level[]>([])

  watch(
    () => props.modelValue,
    v => {
      if (!v) return
      textFilter.value = ''
      domainFilter.value = [...defaultDomains.value]
      levelFilter.value = [...defaultLevels.value]
    },
    { immediate: true },
  )

  const allCards = computed<DomainCard[]>(() => {
    const out: DomainCard[] = []
    for (const d of allDomains) {
      for (const l of allLevels) {
        out.push(...gameProvider.getDomainCards(d, l))
      }
    }
    return out
  })

  const ownedIds = computed<Set<string>>(() => {
    const s = new Set<string>()
    for (const c of props.character.domainCards ?? []) s.add(c.id)
    for (const c of props.character.domainCardsStored ?? []) s.add(c.id)
    return s
  })

  const ownedCount = computed(() => ownedIds.value.size)

  const filteredCards = computed<DomainCard[]>(() => {
    const q = textFilter.value.trim().toLowerCase()
    return allCards.value.filter(c => {
      if (domainFilter.value.length > 0 && !domainFilter.value.includes(c.domain)) return false
      if (levelFilter.value.length > 0 && !levelFilter.value.includes(c.level)) return false
      if (!q) return true
      const hay = [
        t(`game.cards.${c.domain}.${c.id}.name`),
        t(`game.cards.${c.domain}.${c.id}.body`),
        t(`game.domains.${c.domain}`),
        t(`game.cards.kinds.${c.kind}`),
      ].join(' ').toLowerCase()
      return hay.includes(q)
    })
  })
</script>

<style scoped lang="scss">
  .add-cards-modal {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .add-cards-header {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    flex-shrink: 0;
  }

  .add-cards-filters {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-shrink: 0;
  }

  .add-cards-filter-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .add-cards-filter-label {
    font-size: 0.75rem;
    color: rgba(var(--v-theme-on-surface), 0.7);
    min-width: 56px;
  }

  .add-cards-content {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 16px;
  }

  .add-cards-empty {
    padding: 32px;
    text-align: center;
  }

  .add-cards-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-start;
  }

  .add-cards-cell {
    cursor: pointer;
  }
</style>
