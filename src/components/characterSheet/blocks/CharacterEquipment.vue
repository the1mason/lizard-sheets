<template>
  <v-card border class="pa-3 mb-3 equipment-card">
    <div class="proficiency-row">
      <span class="text-subtitle-1 font-weight-medium me-2">{{ $t('sheet.equipment.proficiency') }}</span>
      <button
        v-for="i in PROFICIENCY_MAX"
        :key="`p-${i}`"
        :aria-label="`${$t('sheet.equipment.proficiency')} ${i}`"
        :aria-pressed="i <= proficiency"
        class="proficiency-icon-btn"
        :class="{ 'proficiency-icon-btn--filled': i <= proficiency }"
        type="button"
        @click="setProficiency(i)"
      >
        <v-icon :icon="i <= proficiency ? 'mdi-circle' : 'mdi-circle-outline'" size="20" />
      </button>
    </div>

    <v-divider class="my-3" />

    <equipment-weapon-row
      :icon="primaryHandIcon"
      :slot-label="$t('sheet.equipment.primary')"
      :weapon="primaryWeapon"
      @update:weapon="(w: Weapon) => onWeaponUpdate('primary', w)"
    />
    <v-divider class="my-3" />
    <equipment-weapon-row
      :disabled="isTwoHanded"
      :icon="secondaryHandIcon"
      :slot-label="$t('sheet.equipment.secondary')"
      :weapon="secondaryWeapon"
      @update:weapon="(w: Weapon) => onWeaponUpdate('secondary', w)"
    />

    <v-divider class="my-3" />

    <equipment-armor-row
      :armor="character.armor"
      :slot-label="$t('sheet.equipment.armor')"
      @update:armor="(a: Armor) => emit('update:armor', a)"
    />
  </v-card>
</template>

<script setup lang="ts">
  import type { Armor, Character, Weapon } from '@/types/game/character.ts'
  import { computed } from 'vue'
  import EquipmentArmorRow from '@/components/characterSheet/blocks/EquipmentArmorRow.vue'
  import EquipmentWeaponRow from '@/components/characterSheet/blocks/EquipmentWeaponRow.vue'

  const PROFICIENCY_MAX = 6

  const props = defineProps<{
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:weapons', weapons: Weapon[]): void
    (e: 'update:armor', armor: Armor | undefined): void
    (e: 'update:proficiency', proficiency: number): void
  }>()

  const proficiency = computed<number>(() => {
    const p = props.character.proficiency ?? 1
    return Math.max(1, Math.min(PROFICIENCY_MAX, Math.trunc(p)))
  })

  function setProficiency (value: number) {
    const next = Math.max(1, Math.min(PROFICIENCY_MAX, Math.trunc(value)))
    if (next === proficiency.value) return
    emit('update:proficiency', next)
  }

  const primaryWeaponIndex = computed<number>(() =>
    props.character.weapons.findIndex(w => w.primary),
  )
  const secondaryWeaponIndex = computed<number>(() =>
    props.character.weapons.findIndex(w => w.secondary && !w.primary),
  )

  const primaryWeapon = computed<Weapon | undefined>(() =>
    primaryWeaponIndex.value >= 0 ? props.character.weapons[primaryWeaponIndex.value] : undefined,
  )
  const secondaryWeapon = computed<Weapon | undefined>(() =>
    secondaryWeaponIndex.value >= 0 ? props.character.weapons[secondaryWeaponIndex.value] : undefined,
  )

  const isTwoHanded = computed<boolean>(() =>
    !!primaryWeapon.value && primaryWeapon.value.weaponSlot === 'two-handed',
  )

  const primaryHandIcon = computed<string | undefined>(() => handIcon(primaryWeapon.value))
  const secondaryHandIcon = computed<string | undefined>(() => handIcon(secondaryWeapon.value))

  function handIcon (w: Weapon | undefined): string | undefined {
    if (!w) return undefined
    if (w.weaponSlot === 'two-handed') return 'mdi-hands'
    if (w.left && w.right) return 'mdi-hands'
    if (w.left) return 'mdi-hand-back-left'
    if (w.right) return 'mdi-hand-back-right'
    return undefined
  }

  function onWeaponUpdate (slotKind: 'primary' | 'secondary', next: Weapon) {
    const list = props.character.weapons.slice()
    const pIdx = primaryWeaponIndex.value
    const sIdx = secondaryWeaponIndex.value
    const targetIndex = slotKind === 'primary' ? pIdx : sIdx
    const claimsBoth = slotKind === 'primary' && next.weaponSlot === 'two-handed'
    const tagged: Weapon = {
      ...next,
      primary: slotKind === 'primary',
      secondary: slotKind === 'primary' ? claimsBoth : true,
    }
    if (claimsBoth && sIdx >= 0 && sIdx !== targetIndex) {
      list[sIdx] = { ...list[sIdx], secondary: false }
    }
    if (targetIndex >= 0) {
      list[targetIndex] = tagged
    } else {
      list.push(tagged)
    }
    emit('update:weapons', list)
  }
</script>

<style scoped>
.equipment-card {
  display: flex;
  flex-direction: column;
}

.proficiency-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2px;
}

.proficiency-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  color: rgba(var(--v-theme-on-surface), 0.4);
  transition: color 0.1s, background-color 0.1s;
}

.proficiency-icon-btn:hover {
  color: rgba(var(--v-theme-on-surface), 0.7);
  background: rgba(var(--v-theme-on-surface), 0.05);
}

.proficiency-icon-btn--filled {
  color: rgb(var(--v-theme-primary));
}

.proficiency-icon-btn--filled:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
