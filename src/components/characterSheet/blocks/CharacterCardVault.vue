<template>
  <!-- desktop: pull-handle on right edge, panel slides flush right -->
  <template v-if="!mobile">
    <button
      v-show="!open"
      :aria-label="$t('sheet.vault.open')"
      class="card-vault-handle"
      type="button"
      @click="openPanel"
    >
      <span class="card-vault-handle__label">{{ $t('sheet.vault.title') }}</span>
    </button>
    <transition name="vault-fade">
      <div
        v-if="open"
        class="card-vault-backdrop"
        @click="close"
      />
    </transition>
    <div
      ref="panelRef"
      class="card-vault-panel"
      :class="{ open }"
      tabindex="-1"
      @keydown.esc="close"
    >
      <div class="card-vault-inner">
        <div class="card-vault-header">
          <div class="d-flex align-baseline">
            <span class="text-h6">{{ $t('sheet.vault.title') }}</span>
            <span
              class="text-caption ml-2"
              :class="overEquipped ? 'text-error' : 'text-medium-emphasis'"
            >
              {{ equippedDomainCount }} / 5
            </span>
          </div>
          <div class="d-flex align-center ga-2">
            <v-btn-toggle
              density="compact"
              divided
              mandatory
              :model-value="cardSize"
              variant="outlined"
              @update:model-value="(v) => v && setCardSize(v as CardSize)"
            >
              <v-btn size="x-small" value="small">S</v-btn>
              <v-btn size="x-small" value="medium">M</v-btn>
              <v-btn size="x-small" value="large">L</v-btn>
            </v-btn-toggle>
            <v-btn
              :aria-label="$t('sheet.vault.close')"
              icon="mdi-close"
              size="small"
              variant="text"
              @click.stop="close"
            />
          </div>
        </div>

        <button class="vault-filters-toggle" type="button" @click.stop="filtersOpen = !filtersOpen">
          <v-icon :icon="filtersOpen ? 'mdi-chevron-down' : 'mdi-chevron-right'" size="small" />
          <span>{{ $t('sheet.vault.filters.title') }}</span>
          <span v-if="activeFilterCount > 0" class="text-caption text-primary ml-1">
            ({{ activeFilterCount }})
          </span>
        </button>
        <v-expand-transition>
          <vault-filters
            v-show="filtersOpen"
            v-model:domain-filter="domainFilter"
            v-model:kind-filter="kindFilter"
            v-model:level-filter="levelFilter"
            v-model:text-filter="textFilter"
            :available-domains="availableDomains"
            :available-kinds="availableKinds"
            :available-levels="availableLevels"
          />
        </v-expand-transition>

        <div class="card-vault-content">
          <vault-section
            :card-size="cardSize"
            :drag-over="dragOver === 'equipped'"
            :entries="filteredEquipped"
            :equipped-count="equippedDomainCount"
            :over-equipped="overEquipped"
            section="equipped"
            @dragend-card="onDragEnd"
            @dragleave-section="onDragLeaveSection('equipped')"
            @dragover-section="(ev) => onDragOverSection('equipped', ev)"
            @dragstart-card="onDragStart"
            @drop-section="onDrop('equipped')"
            @move-card="onMoveCard"
            @downgrade-subclass="onDowngradeSubclass"
            @upgrade-subclass="onUpgradeSubclass"
          />
          <vault-section
            :card-size="cardSize"
            :drag-over="dragOver === 'stored'"
            :entries="filteredStored"
            section="stored"
            @dragend-card="onDragEnd"
            @dragleave-section="onDragLeaveSection('stored')"
            @dragover-section="(ev) => onDragOverSection('stored', ev)"
            @dragstart-card="onDragStart"
            @drop-section="onDrop('stored')"
            @move-card="onMoveCard"
            @open-picker="pickerOpen = true"
          />
        </div>
      </div>
    </div>
  </template>

  <!-- mobile: floating handle + bottom sheet -->
  <template v-else>
    <v-btn
      :aria-label="$t('sheet.vault.open')"
      class="card-vault-mobile-handle"
      color="primary"
      icon="mdi-cards"
      size="large"
      @click="open = true"
    />
    <v-bottom-sheet v-model="open" inset>
      <v-card class="card-vault-mobile-card pa-0" max-height="92vh">
        <div class="card-vault-header">
          <div class="d-flex align-baseline">
            <span class="text-h6">{{ $t('sheet.vault.title') }}</span>
            <span
              class="text-caption ml-2"
              :class="overEquipped ? 'text-error' : 'text-medium-emphasis'"
            >
              {{ equippedDomainCount }} / 5
            </span>
          </div>
          <div class="d-flex align-center ga-2">
            <v-btn-toggle
              density="compact"
              divided
              mandatory
              :model-value="cardSize"
              variant="outlined"
              @update:model-value="(v) => v && setCardSize(v as CardSize)"
            >
              <v-btn size="x-small" value="small">S</v-btn>
              <v-btn size="x-small" value="medium">M</v-btn>
              <v-btn size="x-small" value="large">L</v-btn>
            </v-btn-toggle>
            <v-btn
              :aria-label="$t('sheet.vault.close')"
              icon="mdi-close"
              size="small"
              variant="text"
              @click="close"
            />
          </div>
        </div>
        <button class="vault-filters-toggle" type="button" @click="filtersOpen = !filtersOpen">
          <v-icon :icon="filtersOpen ? 'mdi-chevron-down' : 'mdi-chevron-right'" size="small" />
          <span>{{ $t('sheet.vault.filters.title') }}</span>
          <span v-if="activeFilterCount > 0" class="text-caption text-primary ml-1">
            ({{ activeFilterCount }})
          </span>
        </button>
        <v-expand-transition>
          <vault-filters
            v-show="filtersOpen"
            v-model:domain-filter="domainFilter"
            v-model:kind-filter="kindFilter"
            v-model:level-filter="levelFilter"
            v-model:text-filter="textFilter"
            :available-domains="availableDomains"
            :available-kinds="availableKinds"
            :available-levels="availableLevels"
          />
        </v-expand-transition>
        <div class="card-vault-content card-vault-content--mobile">
          <vault-section
            :card-size="cardSize"
            :entries="filteredEquipped"
            :equipped-count="equippedDomainCount"
            :over-equipped="overEquipped"
            section="equipped"
            @move-card="onMoveCard"
            @downgrade-subclass="onDowngradeSubclass"
            @upgrade-subclass="onUpgradeSubclass"
          />
          <vault-section
            :card-size="cardSize"
            :entries="filteredStored"
            section="stored"
            @move-card="onMoveCard"
            @open-picker="pickerOpen = true"
          />
        </div>
      </v-card>
    </v-bottom-sheet>
  </template>

  <add-domain-cards-modal
    v-model="pickerOpen"
    :character="character"
    @toggle-card="onTogglePickerCard"
  />
</template>

<script setup lang="ts">
  import type { CardKind, CardSize, SheetCardEntry } from './cardVaultTypes.ts'
  import type { Character, DomainCard, Level, Subclass } from '@/types/game/character.ts'
  import type { Domain } from '@/types/game/domain.ts'
  import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useDisplay } from 'vuetify'
  import AddDomainCardsModal from './AddDomainCardsModal.vue'
  import VaultFilters from './VaultFilters.vue'
  import VaultSection from './VaultSection.vue'

  const props = withDefaults(
    defineProps<{
      character: Character
      cardSize?: CardSize
    }>(),
    {},
  )

  const emit = defineEmits<{
    (e: 'update:domainCards' | 'update:domainCardsStored', value: DomainCard[]): void
    (e: 'update:subclasses', value: Subclass[]): void
  }>()

  const { t } = useI18n()
  const { mobile } = useDisplay()

  const subclassTierKeys = {
    1: 'foundation',
    2: 'specialization',
    3: 'mastery',
  } as const

  const STORAGE_KEY_FILTERS_OPEN = 'lizard-sheets:vault.filtersOpen'
  const STORAGE_KEY_CARD_SIZE = 'lizard-sheets:vault.cardSize'

  function readStored<T> (key: string, fallback: T, parse: (raw: string) => T): T {
    try {
      const raw = localStorage.getItem(key)
      if (raw === null) return fallback
      return parse(raw)
    } catch {
      return fallback
    }
  }

  function writeStored (key: string, value: string) {
    try {
      localStorage.setItem(key, value)
    } catch {
      /* ignore */
    }
  }

  const open = ref(false)
  const pickerOpen = ref(false)
  const panelRef = ref<HTMLElement | null>(null)

  const filtersOpen = ref<boolean>(
    readStored(STORAGE_KEY_FILTERS_OPEN, false, raw => raw === 'true'),
  )

  const textFilter = ref('')
  const kindFilter = ref<CardKind[]>([])
  const domainFilter = ref<Domain[]>([])
  const levelFilter = ref<Level[]>([])

  const dragging = ref<{ id: string, from: 'equipped' | 'stored' } | null>(null)
  const dragOver = ref<'equipped' | 'stored' | null>(null)

  const cardSizeStored = ref<CardSize | null>(
    readStored<CardSize | null>(STORAGE_KEY_CARD_SIZE, null, raw => {
      return raw === 'small' || raw === 'medium' || raw === 'large' ? raw : null
    }),
  )

  const cardSize = computed<CardSize>(() =>
    cardSizeStored.value ?? props.cardSize ?? (mobile.value ? 'small' : 'medium'),
  )

  function setCardSize (v: CardSize) {
    cardSizeStored.value = v
    writeStored(STORAGE_KEY_CARD_SIZE, v)
  }

  watch(filtersOpen, v => writeStored(STORAGE_KEY_FILTERS_OPEN, String(v)))

  const allEntries = computed<SheetCardEntry[]>(() => [
    ...equippedEntries.value,
    ...storedEntries.value,
  ])

  const availableKinds = computed<CardKind[]>(() => {
    const seen = new Set<CardKind>()
    for (const e of allEntries.value) seen.add(e.kind)
    const order: CardKind[] = ['domain', 'subclass', 'ancestry', 'community']
    return order.filter(k => seen.has(k))
  })

  const availableDomains = computed<Domain[]>(() => {
    const seen = new Set<Domain>()
    for (const e of allEntries.value) {
      if (e.kind === 'domain') seen.add(e.card.domain)
    }
    const order: Domain[] = [
      'arcana', 'blade', 'bone', 'codex', 'dread',
      'grace', 'midnight', 'sage', 'splendor', 'valor',
    ]
    return order.filter(d => seen.has(d))
  })

  const availableLevels = computed<Level[]>(() => {
    const seen = new Set<Level>()
    for (const e of allEntries.value) {
      if (e.kind === 'domain') seen.add(e.card.level)
    }
    return ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as Level[]).filter(l => seen.has(l))
  })

  const activeFilterCount = computed(() => {
    let n = 0
    if (textFilter.value.trim()) n++
    if (kindFilter.value.length > 0) n++
    if (domainFilter.value.length > 0) n++
    if (levelFilter.value.length > 0) n++
    return n
  })

  const equippedEntries = computed<SheetCardEntry[]>(() => {
    const out: SheetCardEntry[] = []
    for (const sc of props.character.subclasses) {
      const max = Math.max(1, sc.level)
      for (let tier = 1; tier <= max; tier++) {
        out.push({ kind: 'subclass', subclass: sc, tier: tier as 1 | 2 | 3 })
      }
    }
    if (props.character.ancestry) {
      out.push({ kind: 'ancestry', ancestry: props.character.ancestry })
    }
    if (props.character.community) {
      out.push({ kind: 'community', community: props.character.community })
    }
    for (const c of props.character.domainCards ?? []) {
      out.push({ kind: 'domain', card: c, section: 'equipped' })
    }
    return out
  })

  const storedEntries = computed<SheetCardEntry[]>(() =>
    (props.character.domainCardsStored ?? []).map(c => ({
      kind: 'domain' as const,
      card: c,
      section: 'stored' as const,
    })),
  )

  const equippedDomainCount = computed(() => (props.character.domainCards ?? []).length)
  const overEquipped = computed(() => equippedDomainCount.value > 5)

  function subclassTierKey (tier: keyof typeof subclassTierKeys): string {
    return subclassTierKeys[tier]
  }

  function entryText (e: SheetCardEntry): string {
    switch (e.kind) {
      case 'domain': {
        return [
          t(`game.cards.${e.card.domain}.${e.card.id}.name`),
          t(`game.cards.${e.card.domain}.${e.card.id}.body`),
          t(`game.cards.kinds.${e.card.kind}`),
          t(`game.domains.${e.card.domain}`),
        ].join(' ')
      }
      case 'subclass': {
        const tierKey = subclassTierKey(e.tier)
        return [
          t(`game.subclasses.${e.subclass.id}.name`),
          t(`game.subclasses.${e.subclass.id}.${tierKey}`),
          t(`game.subclasses.levels.${e.tier}`),
        ].join(' ')
      }
      case 'ancestry': {
        return [
          t(`game.ancestries.${e.ancestry.id}.name`),
          t(`game.ancestries.${e.ancestry.id}.description`),
        ].join(' ')
      }
      case 'community': {
        return [
          t(`game.communities.${e.community.id}.name`),
          t(`game.communities.${e.community.id}.description`),
        ].join(' ')
      }
    }
  }

  function entryMatches (e: SheetCardEntry): boolean {
    if (kindFilter.value.length > 0 && !kindFilter.value.includes(e.kind)) {
      return false
    }
    if (domainFilter.value.length > 0 && e.kind === 'domain' && !domainFilter.value.includes(e.card.domain)) return false
    if (levelFilter.value.length > 0 && e.kind === 'domain' && !levelFilter.value.includes(e.card.level)) return false
    const q = textFilter.value?.trim().toLowerCase() ?? ''
    if (q && !entryText(e).toLowerCase().includes(q)) return false
    return true
  }

  const filteredEquipped = computed(() => equippedEntries.value.filter(e => entryMatches(e)))
  const filteredStored = computed(() => storedEntries.value.filter(e => entryMatches(e)))

  function close () {
    open.value = false
    dragging.value = null
    dragOver.value = null
  }

  function openPanel () {
    open.value = true
    void focusPanel()
  }

  async function focusPanel () {
    await Promise.resolve()
    panelRef.value?.focus()
  }

  function onDragStart (payload: { id: string, from: 'equipped' | 'stored' }) {
    dragging.value = payload
  }

  function onDragEnd () {
    dragOver.value = null
  }

  function onDragOverSection (target: 'equipped' | 'stored', ev: DragEvent) {
    if (!dragging.value) return
    if (dragging.value.from === target) return
    ev.preventDefault()
    if (ev.dataTransfer) ev.dataTransfer.dropEffect = 'move'
    dragOver.value = target
  }

  function onDragLeaveSection (target: 'equipped' | 'stored') {
    if (dragOver.value === target) dragOver.value = null
  }

  function onDrop (target: 'equipped' | 'stored') {
    const d = dragging.value
    dragging.value = null
    dragOver.value = null
    if (!d || d.from === target) return
    moveCard(d.id, d.from, target)
  }

  function onMoveCard (payload: { id: string, from: 'equipped' | 'stored', to: 'equipped' | 'stored' }) {
    if (payload.from === payload.to) return
    moveCard(payload.id, payload.from, payload.to)
  }

  function onTogglePickerCard (card: DomainCard) {
    const equipped = [...(props.character.domainCards ?? [])]
    const stored = [...(props.character.domainCardsStored ?? [])]
    const eIdx = equipped.findIndex(c => c.id === card.id)
    if (eIdx !== -1) {
      equipped.splice(eIdx, 1)
      emit('update:domainCards', equipped)
      return
    }
    const sIdx = stored.findIndex(c => c.id === card.id)
    if (sIdx !== -1) {
      stored.splice(sIdx, 1)
      emit('update:domainCardsStored', stored)
      return
    }
    stored.push(card)
    emit('update:domainCardsStored', stored)
  }

  function onUpgradeSubclass (id: string) {
    const next = props.character.subclasses.map(sc =>
      sc.id === id && sc.level < 3
        ? { ...sc, level: (sc.level + 1) as 1 | 2 | 3 }
        : sc,
    )
    emit('update:subclasses', next)
  }

  function onDowngradeSubclass (id: string) {
    const next = props.character.subclasses.map(sc =>
      sc.id === id && sc.level > 1
        ? { ...sc, level: (sc.level - 1) as 1 | 2 | 3 }
        : sc,
    )
    emit('update:subclasses', next)
  }

  function moveCard (id: string, from: 'equipped' | 'stored', _to: 'equipped' | 'stored') {
    const equipped = [...(props.character.domainCards ?? [])]
    const stored = [...(props.character.domainCardsStored ?? [])]
    if (from === 'equipped') {
      const idx = equipped.findIndex(c => c.id === id)
      if (idx === -1) return
      const [card] = equipped.splice(idx, 1)
      stored.push(card)
    } else {
      const idx = stored.findIndex(c => c.id === id)
      if (idx === -1) return
      const [card] = stored.splice(idx, 1)
      equipped.push(card)
    }
    emit('update:domainCards', equipped)
    emit('update:domainCardsStored', stored)
  }

  function onDocClick (ev: MouseEvent) {
    if (!open.value) return
    if (mobile.value) return
    const panel = panelRef.value
    if (!panel) return
    if (panel.contains(ev.target as Node)) return
    close()
  }

  function onDocKey (ev: KeyboardEvent) {
    if (ev.key === 'Escape' && open.value) close()
  }

  onMounted(() => {
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onDocKey)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', onDocClick)
    document.removeEventListener('keydown', onDocKey)
  })

  watch(open, v => {
    if (!v) {
      dragging.value = null
      dragOver.value = null
    }
  })
</script>

<style scoped lang="scss">
  .card-vault-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 1005;
  }

  .card-vault-panel {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(95vw, 1350px);
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-on-surface));
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    transform: translateX(100%);
    transition: transform 200ms ease-out, box-shadow 200ms ease-out;
    z-index: 1006;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.25);
    outline: none;
  }

  .card-vault-panel.open {
    transform: translateX(0);
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.45);
  }

  .card-vault-handle {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 1006;
    padding: 16px 6px;
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-on-surface));
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-left: none;
    border-radius: 0 8px 8px 0;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    writing-mode: vertical-rl;
    transform: translateY(-50%) rotate(180deg);
    transition: background-color 150ms ease-out;
  }

  .card-vault-handle:hover {
    background: rgba(var(--v-theme-on-surface), 0.06);
  }

  .card-vault-handle__label {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .card-vault-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .card-vault-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    flex-shrink: 0;
  }

  .card-vault-content {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 12px 16px 24px;
  }

  .vault-filters-toggle {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 16px;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(var(--v-theme-on-surface), 0.85);
    font-size: 0.85rem;
    cursor: pointer;
    text-align: left;
  }

  .vault-filters-toggle:hover {
    background: rgba(var(--v-theme-on-surface), 0.04);
  }

  .card-vault-content--mobile {
    max-height: 60vh;
  }

  .card-vault-mobile-handle {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 1005;
  }

  .vault-fade-enter-active,
  .vault-fade-leave-active {
    transition: opacity 180ms ease-out;
  }
  .vault-fade-enter-from,
  .vault-fade-leave-to {
    opacity: 0;
  }
</style>
