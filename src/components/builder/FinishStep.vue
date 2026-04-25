<template>
  <h3 class="mb-3">{{ $t('builder.finish.title') }}</h3>
  <p class="text-body-2 text-medium-emphasis mb-4">{{ $t('builder.finish.description') }}</p>

  <v-card border class="pa-3 mb-4">
    <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.finish.identity') }}</div>
    <div>
      <b>{{ $t('builder.finish.nameLabel') }}:</b>
      {{ char.name && char.name.trim().length > 0 ? char.name : $t('builder.finish.unnamed') }}
    </div>
    <div v-if="char.pronouns">
      <b>{{ $t('builder.finish.pronounsLabel') }}:</b> {{ char.pronouns }}
    </div>
  </v-card>

  <v-card v-if="char.ancestry || char.community" border class="pa-3 mb-4">
    <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.finish.origin') }}</div>
    <div v-if="char.ancestry">
      <b>{{ $t('builder.finish.ancestryLabel') }}:</b>
      {{ $t(`game.ancestries.${char.ancestry.id}.name`) }}
    </div>
    <div v-if="char.community">
      <b>{{ $t('builder.finish.communityLabel') }}:</b>
      {{ $t(`game.communities.${char.community.id}.name`) }}
    </div>
  </v-card>

  <v-card v-if="char.class" border class="pa-3 mb-4">
    <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.finish.classSection') }}</div>
    <div>
      <b>{{ $t('builder.finish.classLabel') }}:</b>
      {{ $t(`game.classes.${char.class.id}.name`) }}
    </div>
    <div v-if="char.subclasses.length">
      <b>{{ $t('builder.finish.subclassLabel') }}:</b>
      <span v-for="(sc, i) in char.subclasses" :key="sc.id">
        <template v-if="i > 0">, </template>{{ $t(`game.subclasses.${sc.id}.name`) }}
      </span>
    </div>
  </v-card>

  <v-card v-if="hasInventory" border class="pa-3 mb-4">
    <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.finish.inventory') }}</div>
    <div v-if="char.weapons.length" class="mb-2">
      <b>{{ $t('builder.finish.weaponsLabel') }}:</b>
      <ul class="ms-4">
        <li v-for="(w, i) in char.weapons" :key="`w-${i}`">{{ w.custom ? w.name : $t(w.name) }}</li>
      </ul>
    </div>
    <div v-if="char.armor" class="mb-2">
      <b>{{ $t('builder.finish.armorLabel') }}:</b> {{ char.armor.name }}
    </div>
    <div v-if="(char.inventory?.items.length ?? 0) > 0" class="mb-2">
      <b>{{ $t('builder.finish.itemsLabel') }}:</b>
      <ul class="ms-4">
        <li v-for="(it, i) in char.inventory!.items" :key="`i-${i}`">
          {{ it.name }}<template v-if="it.count > 1"> ×{{ it.count }}</template>
        </li>
      </ul>
    </div>
    <div v-if="char.inventory?.text">
      <b>{{ $t('builder.finish.inventoryNotesLabel') }}:</b> {{ char.inventory.text }}
    </div>
  </v-card>

  <v-card v-if="char.domainCards.length" border class="pa-3 mb-4">
    <div class="text-subtitle-1 font-weight-bold mb-2">{{ $t('builder.finish.cards') }}</div>
    <ul class="ms-4">
      <li v-for="card in char.domainCards" :key="card.id">
        {{ $t(`game.cards.${card.domain}.${card.id}.name`) }}
      </li>
    </ul>
  </v-card>

  <v-alert v-if="saved" type="success" variant="tonal" class="mb-3">
    {{ $t('builder.finish.savedBanner') }}
  </v-alert>

  <v-row>
    <v-col cols="12" md="6">
      <v-btn block variant="tonal" @click="downloadAction">
        <template #prepend>
          <v-icon icon="mdi-download"/>
        </template>
        {{ $t('builder.finish.download') }}
      </v-btn>
    </v-col>
    <v-col cols="12" md="6">
      <v-btn block color="primary" @click="goToListAction">
        <template #prepend>
          <v-icon icon="mdi-format-list-bulleted"/>
        </template>
        {{ $t('builder.finish.goToList') }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {computed, ref} from "vue"
import {useRouter} from "vue-router"
import type {Character} from "@/types/game/character.ts"
import {type BuilderState, useBuilderStore} from "@/stores/builderStore.ts"
import {useCharacterStore} from "@/stores/characterStore.ts"

const props = defineProps<{
  state: BuilderState
  currentStep: number
}>()

const characterStore = useCharacterStore()
const builderStore = useBuilderStore()
const router = useRouter()

const saved = ref<boolean>(false)
const snapshot = ref<Character>(clone(props.state.data))

const char = computed<Character>(() => saved.value ? snapshot.value : props.state.data)

const hasInventory = computed<boolean>(() =>
    char.value.weapons.length > 0
    || !!char.value.armor
    || (char.value.inventory?.items.length ?? 0) > 0
    || !!char.value.inventory?.text
)

function ensureSaved() {
  if (saved.value) return
  const character = clone(props.state.data)
  snapshot.value = character
  characterStore.create(character)
  saved.value = true
  builderStore.clearStorage()
}

function downloadAction() {
  ensureSaved()
  downloadJson(snapshot.value)
}

function goToListAction() {
  ensureSaved()
  router.push(`/characters/${snapshot.value.class!.id}/${snapshot.value.id}`)
}

function downloadJson(character: Character) {
  const blob = new Blob([JSON.stringify(character, null, 2)], {type: "application/json"})
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  const baseName = character.name && character.name.trim().length > 0
      ? character.name.trim().replace(/\s+/g, "-").toLowerCase()
      : "character"
  anchor.href = url
  anchor.download = `${baseName}-${character.id}.json`
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  URL.revokeObjectURL(url)
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}
</script>

<style scoped>
</style>
