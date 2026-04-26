<template>
  <div class="weapon-row" :class="{ 'weapon-row--disabled': disabled }">
    <div class="weapon-row__head">
      <v-icon v-if="icon" class="me-1" :icon="icon" size="small" />
      <span class="text-subtitle-1 font-weight-medium">{{ slotLabel }}</span>
      <v-spacer />
      <v-select
        class="weapon-row__slot-select weapon-input"
        density="compact"
        :disabled="disabled"
        hide-details
        :items="weaponSlotItems"
        :label="$t('sheet.equipment.slotLabel')"
        :model-value="weapon?.weaponSlot ?? 'any'"
        variant="outlined"
        @update:model-value="onSlotChange"
      />
    </div>

    <v-row class="weapon-row__grid" dense no-gutters>
      <v-col cols="12">
        <v-text-field
          class="weapon-input weapon-input--name"
          density="compact"
          :disabled="disabled"
          hide-details
          :label="$t('sheet.equipment.nameLabel')"
          :model-value="display(weapon?.name)"
          variant="outlined"
          @blur="(e: FocusEvent) => onFieldBlur('name', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="6" sm="3">
        <v-text-field
          class="weapon-input"
          density="compact"
          :disabled="disabled"
          hide-details
          :label="$t('sheet.equipment.traitLabel')"
          :model-value="display(weapon?.trait)"
          variant="outlined"
          @blur="(e: FocusEvent) => onFieldBlur('trait', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="6" sm="3">
        <v-text-field
          class="weapon-input"
          density="compact"
          :disabled="disabled"
          hide-details
          :label="$t('sheet.equipment.distanceLabel')"
          :model-value="display(weapon?.distance)"
          variant="outlined"
          @blur="(e: FocusEvent) => onFieldBlur('distance', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="6" sm="3">
        <v-text-field
          class="weapon-input"
          density="compact"
          :disabled="disabled"
          hide-details
          :label="$t('sheet.equipment.damageDiceLabel')"
          :model-value="weapon?.damageDice ?? ''"
          variant="outlined"
          @blur="(e: FocusEvent) => onFieldBlur('damageDice', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="6" sm="3">
        <v-text-field
          class="weapon-input"
          density="compact"
          :disabled="disabled"
          hide-details
          :label="$t('sheet.equipment.damageKindLabel')"
          :model-value="display(weapon?.damageKind)"
          variant="outlined"
          @blur="(e: FocusEvent) => onFieldBlur('damageKind', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          class="weapon-input"
          density="compact"
          :disabled="disabled"
          hide-details
          :label="$t('sheet.equipment.featureNameLabel')"
          :model-value="display(weapon?.feature)"
          variant="outlined"
          @blur="(e: FocusEvent) => onFieldBlur('feature', (e.target as HTMLInputElement).value)"
        />
      </v-col>
      <v-col cols="12" sm="8">
        <v-textarea
          auto-grow
          class="weapon-input"
          density="compact"
          :disabled="disabled"
          hide-details
          :label="$t('sheet.equipment.featureDescriptionLabel')"
          :model-value="display(weapon?.featureDescription)"
          rows="1"
          variant="outlined"
          @blur="(e: FocusEvent) => onFieldBlur('featureDescription', (e.target as HTMLTextAreaElement).value)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
  import type { Weapon, WeaponSlot } from '@/types/game/character.ts'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const props = defineProps<{
    slotLabel: string
    icon?: string
    weapon: Weapon | undefined
    disabled?: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:weapon', weapon: Weapon): void
  }>()

  const { t, te } = useI18n()

  const weaponSlotItems = computed(() => [
    { value: 'any', title: t('sheet.equipment.slotAny') },
    { value: 'primary-only', title: t('sheet.equipment.slotPrimaryOnly') },
    { value: 'secondary-only', title: t('sheet.equipment.slotSecondaryOnly') },
    { value: 'two-handed', title: t('sheet.equipment.slotTwoHanded') },
  ])

  function display (value: string | undefined): string {
    if (!value) return ''
    if (props.weapon?.custom) return value
    return te(value) ? t(value) : value
  }

  type EditableField = 'name' | 'trait' | 'distance' | 'damageDice' | 'damageKind' | 'feature' | 'featureDescription'

  function emptyWeapon (): Weapon {
    return {
      name: '',
      trait: '',
      distance: '',
      damageDice: '',
      damageKind: '',
      feature: '',
      featureDescription: undefined,
      weaponSlot: 'any',
      primary: false,
      secondary: false,
      left: false,
      right: false,
      custom: true,
    }
  }

  function materializeBase (): Weapon {
    if (!props.weapon) return emptyWeapon()
    if (props.weapon.custom) return props.weapon
    return {
      ...props.weapon,
      name: display(props.weapon.name),
      trait: display(props.weapon.trait),
      distance: display(props.weapon.distance),
      damageDice: props.weapon.damageDice,
      damageKind: display(props.weapon.damageKind),
      feature: display(props.weapon.feature),
      featureDescription: display(props.weapon.featureDescription),
      custom: true,
    }
  }

  function onFieldBlur (field: EditableField, raw: string) {
    const next = (raw ?? '').trim()
    const currentValue = props.weapon
      ? (field === 'damageDice' ? props.weapon.damageDice ?? '' : display(props.weapon[field]))
      : ''
    if (next === currentValue) return
    if (!props.weapon && !next) return
    const base = materializeBase()
    const updated: Weapon = { ...base, [field]: next || (field === 'featureDescription' ? undefined : '') }
    emit('update:weapon', updated)
  }

  function onSlotChange (value: WeaponSlot) {
    const current = props.weapon?.weaponSlot ?? 'any'
    if (value === current) return
    const base = materializeBase()
    emit('update:weapon', { ...base, weaponSlot: value })
  }
</script>

<style scoped>
.weapon-row {
  transition: opacity 150ms ease;
}

.weapon-row--disabled {
  opacity: 0.55;
}

.weapon-row__head {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 6px;
}

.weapon-row__slot-select {
  flex: 0 0 auto;
  max-width: 160px;
}

.weapon-row__grid {
  margin-inline: -4px;
}

.weapon-row__grid > .v-col {
  padding-inline: 4px;
  padding-block: 2px;
}

.weapon-input :deep(.v-field__outline) {
  --v-field-border-opacity: 0.15;
  opacity: 0.6;
}

.weapon-input :deep(.v-field--focused .v-field__outline) {
  opacity: 1;
}

.weapon-input :deep(.v-field__input) {
  padding-block: 4px;
  min-height: 32px;
  font-size: 0.85rem;
}

.weapon-input :deep(.v-label) {
  font-size: 0.75rem;
}

.weapon-input--name :deep(.v-field__input) {
  font-size: 0.95rem;
  font-weight: 600;
}
</style>
