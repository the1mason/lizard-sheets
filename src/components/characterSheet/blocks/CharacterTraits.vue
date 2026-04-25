<template>
  <v-col class="pa-1" cols="12">
    <v-card class="pa-2" color="lighten">
      <v-row dense no-gutters>
        <character-trait
          v-for="name in traitOrder"
          :key="name"
          :checked="isChecked(name)"
          cols="2"
          :trait-name="name"
          :trait-value="character.traits?.[name] ?? 0"
          @set-checked="(c: boolean) => onSetChecked(name, c)"
          @set-value="(v: number) => onSetValue(name, v)"
        />
      </v-row>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
  import type { Character } from '@/types/game/character.ts'
  import type { CharacterTraits as CharacterTraitsType } from '@/types/game/characterTraits.ts'
  import CharacterTrait from '@/components/characterSheet/blocks/CharacterTrait.vue'

  const traitOrder: (keyof CharacterTraitsType)[] = [
    'agility', 'strength', 'finesse', 'instinct', 'presence', 'knowledge',
  ]

  const props = defineProps<{
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:traits', traits: CharacterTraitsType): void
    (e: 'update:levelingChoices', choices: Record<string, string>): void
  }>()

  function currentChoices (): Record<string, string> {
    const raw = props.character.levelingChoices
    if (!raw || Array.isArray(raw)) return {}
    return { ...raw }
  }

  function isChecked (name: keyof CharacterTraitsType): boolean {
    const choices = currentChoices()
    return choices[`trait-checked-${name}`] === 'true'
  }

  function onSetValue (name: keyof CharacterTraitsType, value: number) {
    const next: CharacterTraitsType = {
      agility: props.character.traits?.agility ?? 0,
      strength: props.character.traits?.strength ?? 0,
      finesse: props.character.traits?.finesse ?? 0,
      instinct: props.character.traits?.instinct ?? 0,
      presence: props.character.traits?.presence ?? 0,
      knowledge: props.character.traits?.knowledge ?? 0,
      [name]: value,
    }
    emit('update:traits', next)
  }

  function onSetChecked (name: keyof CharacterTraitsType, checked: boolean) {
    const next = currentChoices()
    const key = `trait-checked-${name}`
    if (checked) {
      next[key] = 'true'
    } else {
      delete next[key]
    }
    emit('update:levelingChoices', next)
  }
</script>

<style scoped>
</style>
