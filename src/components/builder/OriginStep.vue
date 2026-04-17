<template>
  <h2 class="ma-0 mb-3">{{ $t('builder.origin.ancestry') }}</h2>
  <v-item-group mandatory v-model="ancestry" @update:model-value="onChooseAncestry()">
    <v-row gap="8">
      <template v-for="anc in ancestries">
        <v-item v-slot="{isSelected, toggle}" :value="anc">
          <game-card :color="isSelected ? 'secondaryBg' : undefined" size="medium" @click="toggle">
            <v-col class="px-3 fill-height d-flex flex-column" align="center">
              <h4 class="flex-shrink-0">{{ $t(`game.ancestries.${anc.id}.name`) }}</h4>
              <div class="overflow-y-auto flex-grow-1 align-self-stretch">
                <markdown class="text-left" :source="$t(`game.ancestries.${anc.id}.description`)"/>
              </div>
            </v-col>
          </game-card>
        </v-item>
      </template>
    </v-row>
  </v-item-group>

  <h2 class="mb-3">{{ $t('builder.origin.community') }}</h2>
  <v-item-group mandatory v-model="community" @update:model-value="onChooseCommunity()">
    <v-row gap="8">
      <template v-for="com in communities">
        <v-item v-slot="{isSelected, toggle}" :value="com">
          <game-card :color="isSelected ? 'secondaryBg' : undefined" size="medium" @click="toggle">
            <v-col class="px-3 fill-height d-flex flex-column" align="center">
              <h4 class="flex-shrink-0">{{ $t(`game.communities.${com.id}.name`) }}</h4>
              <div class="overflow-y-auto flex-grow-1 align-self-stretch">
                <markdown class="text-left" :source="$t(`game.communities.${com.id}.description`)"/>
              </div>
            </v-col>
          </game-card>
        </v-item>
      </template>
    </v-row>
  </v-item-group>

</template>

<script setup lang="ts">
import type {BuilderState} from "@/stores/builderStore.ts"
import {onMounted, ref, watch} from "vue"
import GameCard from "@/components/common/GameCard.vue"
import Markdown from "@/components/common/Markdown.vue"
import type {AncestryCard, CommunityCard} from "@/types/game/character.ts"
import gameProvider from "@/libs/game/gameProvider.ts"

const emit = defineEmits<{
  (e: "setState", state: BuilderState): void
  (e0: "markDone"): void
}>()

const props = withDefaults(
    defineProps<{
      state: BuilderState
      currentStep: number
    }>(),
    {}
)

watch(() => props.state, (newState) => {
  community.value = newState.data.community
  ancestry.value = newState.data.ancestry

}, { deep: true })

onMounted(() => {
  community.value = props.state.data.community
  ancestry.value = props.state.data.ancestry
})

const ancestry = ref<AncestryCard | undefined>()
const community = ref<CommunityCard | undefined>()
const ancestries = gameProvider.getAncestries()
const communities = gameProvider.getCommunities()

function onChooseAncestry() {
  if(!ancestry.value!) {
    return
  }

  const currentState = props.state
  currentState.data.ancestry = ancestry.value
  save(currentState)
}

function onChooseCommunity() {
  if(!community.value!) {
    return
  }

  const currentState = props.state
  currentState.data.community = community.value
  save(currentState)
}

function save(newState: BuilderState): void {
  emit("setState", newState)
  console.log(newState)
  if(newState.data.ancestry! && newState.data.community) {
    emit("markDone")
  }
}

</script>

<style scoped>

</style>