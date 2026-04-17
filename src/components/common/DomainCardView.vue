<template>

  <game-card
      :color="selected ? 'secondaryBg' : undefined"
      :size="size ?? 'medium'"
      :class="{ 'opacity-50': dimmed }"
      :style="clickable ? 'cursor: pointer' : undefined">
    <v-col class="px-3 fill-height d-flex flex-column" align="center">
      <div class="d-flex align-center justify-space-between mb-2 ga-1 flex-shrink-0 align-self-stretch">
        <v-col class="text-left">
          <v-tooltip :text="$t('game.domains.' + card.domain)" location="top">
            <template v-slot:activator="{ props }">
              <div style="display: flex" class="align-center ga-2">
                <img v-bind="props" :src="`../../src/assets/domains/${card.domain}.svg`" height="40" :alt="card.domain"/>
                <span class="text-headline-medium ml-1 mt-2"><b>{{ card.level }}</b></span>
              </div>
            </template>
          </v-tooltip>
        </v-col>
        <v-col class="text-right">
          <v-tooltip :text="$t('game.cards.stressTooltip')" location="top">
            <template v-slot:activator="{ props }">
              <div v-bind="props" class="mt-2 mx-1">
              <span class="text-headline-small">
                <b>{{ card.stress }}</b>
                <v-icon size="25" icon="mdi-lightning-bolt" class='ml-1 mb-1' />
              </span>
              </div>
            </template>
          </v-tooltip>
        </v-col>
      </div>
      <h3 class="ma-0 flex-shrink-0">{{ $t(`game.cards.${card.domain}.${card.id}.name`) }}</h3>
      <h4 class="ma-0 flex-shrink-0">
        <i>{{ $t(`game.cards.kinds.${card.kind}`) }}</i>
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
