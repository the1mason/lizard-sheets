<template>

  <game-card
      :color="selected ? 'secondaryBg' : undefined"
      :size="size ?? 'medium'"
      :class="{ 'opacity-50': dimmed }"
      :style="clickable ? 'cursor: pointer' : undefined">
    <v-tooltip :text="$t('game.domains.' + card.domain)" location="right">
      <template v-slot:activator="{ props }">
        <div v-bind="props" class="domain-chevron">
          <img :src="`/domains/${card.domain}.svg`" height="27" :alt="card.domain"/>
          <span class="text-title-large mt-1"><b>{{ card.level }}</b></span>
        </div>
      </template>
    </v-tooltip>
    <v-col class="px-3 fill-height d-flex flex-column" align="center" style="min-height: 0;">
      <div class="d-flex align-center justify-end mb-2 flex-shrink-0 align-self-stretch">
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
      </div>
      <h3 class="mx-4 flex-shrink-0">{{ $t(`game.cards.${card.domain}.${card.id}.name`) }}</h3>
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
.domain-chevron {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 80px;
  padding: 6px 4px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff10;
  clip-path: path("M 6 0 L 34 0 Q 40 0 40 6 L 40 58 Q 40 62 37 64 L 22 78 Q 20 80 18 78 L 3 64 Q 0 62 0 58 L 0 6 Q 0 0 6 0 Z");
}
</style>
