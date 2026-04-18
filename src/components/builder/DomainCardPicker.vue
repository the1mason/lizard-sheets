<template>

  <v-row gap="8" justify="center">
    <template v-for="card in cards" :key="card.id">
      <domain-card-view
          :card="card"
          :size="size"
          :selected="isSelected(card)"
          :dimmed="!isSelected(card) && maxReached"
          clickable
          @click="onClick(card)"/>
    </template>
  </v-row>

</template>

<script setup lang="ts">

import {computed} from "vue";
import DomainCardView from "@/components/common/DomainCardView.vue";
import gameProvider from "@/libs/game/gameProvider.ts";
import type {DomainCard, Level} from "@/types/game/character.ts";
import type {Domain} from "@/types/game/domain.ts";
import arcanaProvider from "@/libs/game/domains/arcanaProvider.ts";
import bladeProvider from "@/libs/game/domains/bladeProvider.ts";
import boneProvider from "@/libs/game/domains/boneProvider.ts";
import codexProvider from "@/libs/game/domains/codexProvider.ts";
import dreadProvider from "@/libs/game/domains/dreadProvider.ts";
import graceProvider from "@/libs/game/domains/graceProvider.ts";
import midnightProvider from "@/libs/game/domains/midnightProvider.ts";
import sageProvider from "@/libs/game/domains/sageProvider.ts";
import splendorProvider from "@/libs/game/domains/splendorProvider.ts";
import valorProvider from "@/libs/game/domains/valorProvider.ts";

const props = withDefaults(
    defineProps<{
      domains: Domain[]
      level: Level
      selectedIds: string[]
      maxReached: boolean
      size?: 'small' | 'medium' | 'large'
    }>(),
    {
      selectedIds: () => [],
      maxReached: false,
      size: 'medium'
    }
)

const emit = defineEmits<{
  (e: "toggle", card: DomainCard): void
}>()

const cards = computed<DomainCard[]>(() =>
    props.domains.flatMap(d => gameProvider.getDomainCards(d, props.level))
)

function isSelected(card: DomainCard): boolean {
  return props.selectedIds.includes(card.id)
}

function onClick(card: DomainCard) {
  if (!isSelected(card) && props.maxReached) {
    return
  }
  emit("toggle", card)
}

</script>

<style scoped>

</style>
