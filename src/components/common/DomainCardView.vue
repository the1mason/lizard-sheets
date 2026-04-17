<template>

  <game-card
      :color="selected ? 'secondaryBg' : undefined"
      :size="size ?? 'medium'"
      :class="{ 'opacity-50': dimmed }"
      :style="clickable ? 'cursor: pointer' : undefined">
    <v-col class="px-3 fill-height d-flex flex-column" align="center">
      <div class="d-flex align-center justify-space-between mb-2 ga-1 flex-shrink-0 align-self-stretch">
        <v-tooltip :text="$t('game.domains.' + card.domain)" bottom>
          <template v-slot:activator="{ props }">
            <img v-bind="props" :src="`../../src/assets/domains/${card.domain}.svg`" height="40" :alt="card.domain"/>
          </template>
        </v-tooltip>
        <v-tooltip :text="$t('game.cards.stressTooltip')" bottom>
          <template v-slot:activator="{ props }">
            <div v-bind="props">
              <span class="text-caption text-medium-emphasis">
                <b>{{ card.stress }}</b>
                <v-icon size="20" icon="mdi-lightning-bolt"/>
              </span>
            </div>
          </template>
        </v-tooltip>
      </div>
      <h3 class="ma-0 flex-shrink-0">{{ $t(`game.cards.${card.domain}.${card.id}.name`) }}</h3>
      <h4 class="ma-0 flex-shrink-0">
        {{ $t(`game.cards.kinds.${card.kind}`) }}
      </h4>
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
