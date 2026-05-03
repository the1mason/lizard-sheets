<template>
  <domain-card-view
    v-if="entry.kind === 'domain'"
    :card="entry.card"
    :size="size"
  />
  <game-card v-else :size="size">
    <v-col align="center" class="px-3 fill-height d-flex flex-column" style="min-height: 0;">
      <h3 class="mx-4 mt-2 flex-shrink-0 text-center">{{ title }}</h3>
      <h4 v-if="subtitle" class="ma-0 flex-shrink-0">
        <i>{{ subtitle }}</i>
      </h4>
      <div class="overflow-y-auto flex-grow-1 align-self-stretch mt-1">
        <markdown class="text-left text-body-small px-2" :source="body" />
      </div>
    </v-col>
  </game-card>
</template>

<script setup lang="ts">
  import type { CardSize, SheetCardEntry } from './cardVaultTypes.ts'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import DomainCardView from '@/components/common/DomainCardView.vue'
  import GameCard from '@/components/common/GameCard.vue'
  import Markdown from '@/components/common/Markdown.vue'

  const props = withDefaults(
    defineProps<{
      entry: SheetCardEntry
      size?: CardSize
    }>(),
    { size: 'medium' },
  )

  const { t } = useI18n()
  const subclassTierKeys = {
    1: 'foundation',
    2: 'specialization',
    3: 'mastery',
  } as const

  function subclassTierKey (tier: keyof typeof subclassTierKeys): string {
    return subclassTierKeys[tier]
  }

  const title = computed(() => {
    switch (props.entry.kind) {
      case 'subclass': {
        return t(`game.subclasses.${props.entry.subclass.id}.name`)
      }
      case 'ancestry': {
        return t(`game.ancestries.${props.entry.ancestry.id}.name`)
      }
      case 'community': {
        return t(`game.communities.${props.entry.community.id}.name`)
      }
      default: {
        return ''
      }
    }
  })

  const subtitle = computed(() => {
    if (props.entry.kind === 'subclass') {
      return t(`game.subclasses.levels.${props.entry.tier}`)
    }
    if (props.entry.kind === 'ancestry') {
      return t('sheet.vault.kinds.ancestry')
    }
    if (props.entry.kind === 'community') {
      return t('sheet.vault.kinds.community')
    }
    return ''
  })

  const body = computed(() => {
    switch (props.entry.kind) {
      case 'subclass': {
        const tierKey = subclassTierKey(props.entry.tier)
        return t(`game.subclasses.${props.entry.subclass.id}.${tierKey}`)
      }
      case 'ancestry': {
        return t(`game.ancestries.${props.entry.ancestry.id}.description`)
      }
      case 'community': {
        return t(`game.communities.${props.entry.community.id}.description`)
      }
      default: {
        return ''
      }
    }
  })
</script>

<style scoped>
</style>
