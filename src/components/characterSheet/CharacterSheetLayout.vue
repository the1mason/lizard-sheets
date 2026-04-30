<template>
  <v-container>
    <template v-if="loading">
      <v-card class="pa-3" flat loading />
    </template>
    <template v-else-if="!character">
      <v-card class="pa-6">
        <v-alert type="error" variant="tonal">
          {{ $t('sheet.notFound.title') }}
        </v-alert>
        <v-row class="mt-3" justify="center">
          <router-link to="/">
            <v-btn color="primary" variant="tonal">{{ $t('sheet.notFound.home') }}</v-btn>
          </router-link>
        </v-row>
      </v-card>
    </template>
    <template v-else>
      <character-header
        :character="character"
        @update:level="(v) => patch('level', v)"
        @update:name="(v) => patch('name', v)"
        @update:pronouns="(v) => patch('pronouns', v)"
      />
      <character-traits
        :character="character"
        @update:leveling-choices="(v) => patch('levelingChoices', v)"
        @update:traits="(v) => patch('traits', v)"
      />
      <character-state-row
        :character="character"
        @update:state="(v) => patch('state', v)"
      />
      <v-row dense>
        <v-col cols="12" md="5">
          <character-experiences
            :character="character"
            @update:experiences="(v) => patch('experiences', v)"
          />
          <v-card border class="pa-3 mb-3">
            <div>{{ $t('sheet.classFeature') }}</div>
            <slot :character="character" name="class-feature" :patch="patch" :save="save" />
          </v-card>
          <character-flavor
            :character="character"
            @update:appearance="(v) => patch('appearance', v)"
            @update:background-questions="(v) => patch('backgroundQuestions', v)"
            @update:notes="(v) => patch('notes', v)"
            @update:spellcasting-source="(v) => patch('spellcastingSource', v)"
            @update:ties="(v) => patch('ties', v)"
          />
        </v-col>
        <v-col cols="12" md="7">
          <character-equipment
            :character="character"
            @update:armor="(v) => patch('armor', v)"
            @update:proficiency="(v) => patch('proficiency', v)"
            @update:weapons="(v) => patch('weapons', v)"
          />
          <character-gold
            :character="character"
            @update:state="(v) => patch('state', v)"
          />
          <character-inventory
            :character="character"
            @update:inventory="(v) => patch('inventory', v)"
          />
        </v-col>
      </v-row>
      <character-card-vault
        :character="character"
        @update:domain-cards="(v) => patch('domainCards', v)"
        @update:domain-cards-stored="(v) => patch('domainCardsStored', v)"
        @update:subclasses="(v) => patch('subclasses', v)"
      />
      <dice-roller :character="character" />
    </template>
  </v-container>
</template>

<script setup lang="ts">
  import type { Character } from '@/types/game/character.ts'
  import { onMounted, ref } from 'vue'
  import CharacterCardVault from '@/components/characterSheet/blocks/CharacterCardVault.vue'
  import CharacterEquipment from '@/components/characterSheet/blocks/CharacterEquipment.vue'
  import CharacterExperiences from '@/components/characterSheet/blocks/CharacterExperiences.vue'
  import CharacterFlavor from '@/components/characterSheet/blocks/CharacterFlavor.vue'
  import CharacterGold from '@/components/characterSheet/blocks/CharacterGold.vue'
  import CharacterHeader from '@/components/characterSheet/blocks/CharacterHeader.vue'
  import CharacterInventory from '@/components/characterSheet/blocks/CharacterInventory.vue'
  import CharacterStateRow from '@/components/characterSheet/blocks/CharacterStateRow.vue'
  import CharacterTraits from '@/components/characterSheet/blocks/CharacterTraits.vue'
  import DiceRoller from '@/components/characterSheet/blocks/DiceRoller.vue'
  import { useCharacterStore } from '@/stores/characterStore.ts'

  const props = defineProps<{
    id: string
  }>()

  const store = useCharacterStore()
  const character = ref<Character | undefined>(undefined)
  const loading = ref<boolean>(true)

  onMounted(() => {
    character.value = store.get(props.id)
    loading.value = false
  })

  function save () {
    if (!character.value) return
    store.update(character.value.id, character.value)
  }

  function patch<K extends keyof Character> (key: K, value: Character[K]) {
    if (!character.value) return
    character.value[key] = value
    save()
  }
</script>

<style scoped>
</style>
