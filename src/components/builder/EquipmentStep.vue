<template>

  <!-- Weapons -->
  <h3 class="mb-3">{{ $t('builder.equipment.weapons.title') }}</h3>
  <v-row>
    <v-col v-for="weapon in availableWeapons" :key="weapon.name" cols="12" sm="6" md="4">
      <v-card
        :color="isWeaponSelected(weapon.name) ? 'secondaryBg' : undefined"
        border
        class="d-flex flex-column fill-height"
      >
        <v-card-title class="text-body-1 font-weight-bold pt-3 px-3">{{ $t(weapon.name) }}</v-card-title>
        <v-card-text class="pb-1 flex-grow-1">
          <div><span class="text-medium-emphasis">{{ $t('builder.equipment.weapons.traitLabel') }}:</span> {{ $t(weapon.trait) }}</div>
          <div><span class="text-medium-emphasis">{{ $t('builder.equipment.weapons.distanceLabel') }}:</span> {{ $t(weapon.distance) }}</div>
          <div><span class="text-medium-emphasis">{{ $t('builder.equipment.weapons.damageLabel') }}:</span> {{ weapon.damageDice }} {{ $t(weapon.damageKind) }}</div>
          <div v-if="weapon.feature"><span class="text-medium-emphasis">{{ $t('builder.equipment.weapons.featureLabel') }}:</span> {{ $t(weapon.feature) }}</div>
        </v-card-text>
        <v-card-actions class="px-3 pb-3 pt-0">
          <!-- Two-handed: single button occupying both slots -->
          <template v-if="weapon.weaponSlot === 'two-handed'">
            <v-btn
              :variant="primaryWeapon === weapon.name ? 'flat' : 'outlined'"
              :color="primaryWeapon === weapon.name ? 'primary' : undefined"
              size="small"
              @click="toggleWeapon(weapon.name, 'two-handed')"
            >{{ $t('builder.equipment.weapons.twoHandedLabel') }}</v-btn>
          </template>
          <template v-else>
            <!-- Primary button: shown for 'any' and 'primary-only' -->
            <v-btn
              v-if="weapon.weaponSlot !== 'secondary-only'"
              :variant="primaryWeapon === weapon.name ? 'flat' : 'outlined'"
              :color="primaryWeapon === weapon.name ? 'primary' : undefined"
              size="small"
              @click="toggleWeapon(weapon.name, 'primary')"
            >{{ $t('builder.equipment.weapons.primaryLabel') }}</v-btn>
            <!-- Secondary button: shown for 'any' and 'secondary-only' -->
            <v-btn
              v-if="weapon.weaponSlot !== 'primary-only'"
              :variant="secondaryWeapon === weapon.name ? 'flat' : 'outlined'"
              :color="secondaryWeapon === weapon.name ? 'secondary' : undefined"
              size="small"
              @click="toggleWeapon(weapon.name, 'secondary')"
            >{{ $t('builder.equipment.weapons.secondaryLabel') }}</v-btn>
          </template>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <!-- Armor -->
  <h3 class="mt-6 mb-3">{{ $t('builder.equipment.armor.title') }}</h3>
  <v-item-group v-model="selectedArmorName" @update:model-value="onArmorChange">
    <v-row>
      <v-col v-for="armor in availableArmors" :key="armor.name" cols="12" sm="6" md="4">
        <v-item v-slot="{ isSelected, toggle }" :value="armor.name">
          <v-card
            :color="isSelected ? 'secondaryBg' : undefined"
            border
            class="fill-height"
            style="cursor: pointer"
            @click="toggle"
          >
            <v-card-title class="text-body-1 font-weight-bold pt-3 px-3">{{ $t(armor.name) }}</v-card-title>
            <v-card-text>
              <div><span class="text-medium-emphasis">{{ $t('builder.equipment.armor.thresholdLabel') }}:</span> {{ armor.thresholdLow }} / {{ armor.thresholdHigh }}</div>
              <div><span class="text-medium-emphasis">{{ $t('builder.equipment.armor.scoreLabel') }}:</span> {{ armor.score }}</div>
              <div v-if="armor.feature"><span class="text-medium-emphasis">{{ $t('builder.equipment.armor.featureLabel') }}:</span> {{ $t(armor.feature) }}</div>
            </v-card-text>
          </v-card>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>

  <!-- Items -->
  <h3 class="mt-6 mb-3">{{ $t('builder.equipment.items.title') }}</h3>

  <h4 class="mb-2">{{ $t('builder.equipment.items.defaultSectionTitle') }}</h4>
  <v-list density="compact" class="mb-4">
    <v-list-item v-for="item in defaultItems" :key="item.name" :title="`${item.count}x ${$t(item.name)}`">
      <template #prepend>
        <v-icon size="small" class="mr-2">mdi-package-variant</v-icon>
      </template>
    </v-list-item>
  </v-list>

  <template v-if="itemChoiceGroups.length > 0">
    <h4 class="mb-3">{{ $t('builder.equipment.items.choiceSectionTitle') }}</h4>
    <div v-for="group in itemChoiceGroups" :key="group.id" class="mb-5">
      <p class="mb-2 text-body-2">{{ $t(group.label) }}</p>
      <v-item-group
        :model-value="localItemChoices[group.id]"
        @update:model-value="(val) => onItemChoice(group.id, val as string | undefined)"
      >
        <v-row>
          <v-col v-for="item in group.items" :key="item.name" cols="auto">
            <v-item v-slot="{ isSelected, toggle }" :value="item.name">
              <v-card
                :color="isSelected ? 'secondaryBg' : undefined"
                border
                min-width="140"
                style="cursor: pointer"
                @click="toggle"
              >
                <v-card-text class="text-center pa-3">
                  <div class="font-weight-medium">{{ $t(item.name) }}</div>
                  <div class="text-medium-emphasis text-caption">x{{ item.count }}</div>
                </v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </div>
  </template>


</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import type {BuilderState} from "@/stores/builderStore.ts";
import type {Armor, InventoryItem, ItemChoiceGroup, Weapon, WeaponSlot} from "@/types/game/character.ts";

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

const availableWeapons = ref<Weapon[]>([])
const availableArmors = ref<Armor[]>([])
const defaultItems = ref<InventoryItem[]>([])
const itemChoiceGroups = ref<ItemChoiceGroup[]>([])

const primaryWeapon = ref<string | undefined>(undefined)
const secondaryWeapon = ref<string | undefined>(undefined)
const selectedArmorName = ref<string | undefined>(undefined)
const localItemChoices = ref<Record<string, string>>({})

watch(() => props.state, (newState) => {
  syncFromState(newState)
}, { deep: true })

onMounted(() => {
  syncFromState(props.state)
  ensureDefaultItems()
})



function syncFromState(state: BuilderState) {
  const classOption = props.state.options.classOption
  availableWeapons.value = classOption?.availableWeapons ?? []
  availableArmors.value = classOption?.availableArmors ?? []
  defaultItems.value = classOption?.defaultItems ?? []
  itemChoiceGroups.value = classOption?.itemChoiceGroups ?? []

  // A two-handed weapon is stored with both primary and secondary flags true
  const twoHanded = state.data.weapons.find(w => w.primary && w.secondary)
  if (twoHanded) {
    primaryWeapon.value = twoHanded.name
    secondaryWeapon.value = twoHanded.name
  } else {
    primaryWeapon.value = state.data.weapons.find(w => w.primary)?.name
    secondaryWeapon.value = state.data.weapons.find(w => w.secondary)?.name
  }
  selectedArmorName.value = state.data.armor?.name
  localItemChoices.value = { ...(state.options.itemChoices ?? {}) }
}

function isWeaponSelected(name: string): boolean {
  return primaryWeapon.value === name || secondaryWeapon.value === name
}

function toggleWeapon(name: string, slot: WeaponSlot | 'primary' | 'secondary') {
  if (slot === 'two-handed') {
    if (primaryWeapon.value === name) {
      primaryWeapon.value = undefined
      secondaryWeapon.value = undefined
    } else {
      // Clears both slots and takes them
      primaryWeapon.value = name
      secondaryWeapon.value = name
    }
  } else if (slot === 'primary') {
    // If a two-handed weapon is active, deselecting it clears secondary too
    if (primaryWeapon.value && primaryWeapon.value === secondaryWeapon.value) {
      secondaryWeapon.value = undefined
    }
    if (primaryWeapon.value === name) {
      primaryWeapon.value = undefined
    } else {
      if (secondaryWeapon.value === name) secondaryWeapon.value = undefined
      primaryWeapon.value = name
    }
  } else {
    // If a two-handed weapon is active, selecting a secondary clears both first
    if (primaryWeapon.value && primaryWeapon.value === secondaryWeapon.value) {
      primaryWeapon.value = undefined
      secondaryWeapon.value = undefined
    }
    if (secondaryWeapon.value === name) {
      secondaryWeapon.value = undefined
    } else {
      if (primaryWeapon.value === name) primaryWeapon.value = undefined
      secondaryWeapon.value = name
    }
  }
  syncWeaponsToState()
  emit("setState", props.state)
}

function syncWeaponsToState() {
  const weapons: Weapon[] = []
  if (primaryWeapon.value && primaryWeapon.value === secondaryWeapon.value) {
    // Two-handed: single entry with both flags set
    const w = availableWeapons.value.find(w => w.name === primaryWeapon.value)
    if (w) weapons.push({ ...w, primary: true, secondary: true })
  } else {
    if (primaryWeapon.value) {
      const w = availableWeapons.value.find(w => w.name === primaryWeapon.value)
      if (w) weapons.push({ ...w, primary: true, secondary: false })
    }
    if (secondaryWeapon.value) {
      const w = availableWeapons.value.find(w => w.name === secondaryWeapon.value)
      if (w) weapons.push({ ...w, primary: false, secondary: true })
    }
  }
  props.state.data.weapons = weapons
}

function onArmorChange(name: string | undefined) {
  if (!name) {
    props.state.data.armor = undefined
  } else {
    const armor = availableArmors.value.find(a => a.name === name)
    props.state.data.armor = armor
  }
  emit("setState", props.state)
}

function onItemChoice(groupId: string, itemName: string | undefined) {
  if (!itemName) {
    delete localItemChoices.value[groupId]
  } else {
    localItemChoices.value[groupId] = itemName
  }
  props.state.options.itemChoices = { ...localItemChoices.value }
  syncInventoryToState()
  emit("setState", props.state)
}

function ensureDefaultItems() {
  if (!props.state.data.inventory) {
    props.state.data.inventory = { items: [], text: [] }
  }
  syncInventoryToState()
  emit("setState", props.state)
}

function syncInventoryToState() {
  if (!props.state.data.inventory) {
    props.state.data.inventory = { items: [], text: [] }
  }

  const items: InventoryItem[] = [...defaultItems.value]

  for (const [groupId, chosenName] of Object.entries(localItemChoices.value)) {
    const group = itemChoiceGroups.value.find(g => g.id === groupId)
    if (!group) continue
    const item = group.items.find(i => i.name === chosenName)
    if (item) items.push({ ...item })
  }

  props.state.data.inventory.items = items
}

</script>

<style scoped>
</style>
