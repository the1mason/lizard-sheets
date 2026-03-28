<template>
  <h3 class="ma-0 mb-3">{{ $t('builder.start.basics') }}</h3>

  <v-row>
    <v-col>
      <v-text-field density="compact" :label="$t('builder.start.nameLabel')" base-color="primary" @blur="save"
                    v-model="name"/>
    </v-col>
    <v-col>
      <v-text-field density="compact" :label="$t('builder.start.pronounsLabel')" base-color="primary" v-model="pronouns"
                    @blur="save"/>
    </v-col>
  </v-row>

  <v-divider class="mb-5"></v-divider>

  <h3 class="ma-0 mb-3">{{ $t('builder.start.class') }}</h3>
  <v-item-group v-model="characterClass" @update:model-value="onChooseClass()">
  <v-row gap="8">
      <template v-for="characterClass in classes">
        <v-item v-slot="{isSelected, toggle}" :value="characterClass">
          <game-card :color="isSelected ? 'secondaryBg' : undefined" size="small" @click="toggle">
            <v-col class="px-3" align="center">
              <h4>{{ $t(`game.classes.${characterClass.id}.name`) }}</h4>
              <v-row justify="center">
                <v-tooltip :text="$t('game.domains.' + characterClass.domain1)" bottom>
                  <template v-slot:activator="{ props }">
                    <img v-bind="props" :src="`../../src/assets/domains/${characterClass.domain1}.svg`" height="20" :alt="characterClass.domain1" />
                  </template>
                </v-tooltip>
                <v-tooltip :text="$t('game.domains.' + characterClass.domain2)" bottom>
                  <template v-slot:activator="{ props }">
                    <img v-bind="props" :src="`../../src/assets/domains/${characterClass.domain2}.svg`" height="20" :alt="characterClass.domain2" />
                  </template>
                </v-tooltip>
              </v-row>
              <p class="font-weight-thin text-body-medium">{{ $t(`game.classes.${characterClass.id}.description`) }}</p>
            </v-col>
          </game-card>
        </v-item>
      </template>
  </v-row>
  </v-item-group>

</template>

<script setup lang="ts">
import type {BuilderState} from "@/stores/builderStore.ts"
import { onMounted, ref, watch} from "vue"
import GameCard from "@/components/common/GameCard.vue"
import gameProvider from "@/libs/game/gameProvider.ts"
import type {CharacterClass} from "@/types/game/characterClass.ts"

const classes = gameProvider.getCharacterClasses()

const emit = defineEmits<{
  (e: "setState", state: BuilderState): void
}>()

const props = withDefaults(
    defineProps<{
      state: BuilderState
      currentStep: number
    }>(),
    {}
)

watch(() => props.state, (newState) => {
  name.value = newState.data.name
  pronouns.value = newState.data.pronouns
  characterClass.value = newState.data.class
})

const name = ref<string | undefined>()
const pronouns = ref<string | undefined>()
const characterClass = ref<CharacterClass | undefined>()

onMounted(() => {
  console.log(props.state.data)
  name.value = props.state.data.name
  pronouns.value = props.state.data.pronouns
  characterClass.value = props.state.data.class
})

function save() {
  const current = props.state
  current.data.name = name.value
  current.data.pronouns = pronouns.value
  emit("setState", current)
}

function onChooseClass() {
  const current = props.state
  const selectedClass = characterClass.value

  // invalidate old data

  current.data.domains = []
  current.data.subclass = []
  current.data.domainCards = []

  if(selectedClass === undefined) {
    save()
    return
  }

  // set new data
  current.data.class = characterClass.value
  current.data.domains = [ selectedClass.domain1, selectedClass.domain2 ]

  save()
}


</script>

<style scoped>

</style>