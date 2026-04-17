<template>

  <game-card
      :color="selected ? 'secondaryBg' : undefined"
      :size="size"
      :class="{ 'opacity-50': dimmed }"
      :style="clickable ? 'cursor: pointer' : undefined">
    <v-col class="px-3 fill-height d-flex flex-column" align="center">
      <div class="d-flex align-center justify-space-between mb-2 ga-1 flex-shrink-0 align-self-stretch">
        <v-chip size="x-small" variant="tonal">
          {{ $t(`game.cards.kinds.${card.kind}`) }}
        </v-chip>
        <v-chip size="x-small" variant="outlined" color="primary">
          {{ $t(`game.domains.${card.domain}`) }}
        </v-chip>
        <span class="text-caption text-medium-emphasis">
          {{ $t('game.cards.stressLabel', { count: card.stress }) }}
        </span>
      </div>
      <h3 class="mb-2 flex-shrink-0">{{ $t(`game.cards.${card.domain}.${card.id}.name`) }}</h3>
      <div class="overflow-y-auto flex-grow-1 align-self-stretch">
        <markdown class="text-left text-body-small" :source="$t(`game.cards.${card.domain}.${card.id}.body`)"/>
      </div>
    </v-col>
  </game-card>

</template>

<script setup lang="ts">

import GameCard from "@/components/common/GameCard.vue";
import Markdown from "@/components/common/Markdown.vue";
import type {DomainCard} from "@/types/game/character.ts";

withDefaults(
    defineProps<{
      card: DomainCard
      size?: 'small' | 'medium' | 'large'
      selected?: boolean
      dimmed?: boolean
      clickable?: boolean
    }>(),
    {
      size: 'medium',
      selected: false,
      dimmed: false,
      clickable: false
    }
)

</script>

<style scoped>

</style>
