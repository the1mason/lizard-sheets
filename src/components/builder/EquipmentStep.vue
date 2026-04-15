<template>

  <!-- Weapons -->
  <h3 class="mb-3">{{ $t('builder.equipment.weapons.title') }}</h3>
  <v-row>
    <v-col v-for="weapon in availableWeapons" :key="'s:' + weapon.name" cols="12" sm="6" md="4">
      <v-card
        :color="isWeaponKeySelected('s:' + weapon.name) ? 'secondaryBg' : undefined"
        border
        class="d-flex flex-column fill-height"
      >
        <v-card-title class="text-body-1 font-weight-bold pt-3 px-3">{{ weaponLabel(weapon.name, weapon) }}</v-card-title>
        <v-card-text class="pb-1 flex-grow-1">
          <div><span class="text-medium-emphasis">{{ $t('builder.equipment.weapons.traitLabel') }}:</span> {{ weaponLabel(weapon.trait, weapon) }}</div>
          <div><span class="text-medium-emphasis">{{ $t('builder.equipment.weapons.distanceLabel') }}:</span> {{ weaponLabel(weapon.distance, weapon) }}</div>
          <div><span class="text-medium-emphasis">{{ $t('builder.equipment.weapons.damageLabel') }}:</span> {{ weapon.damageDice }} {{ weaponLabel(weapon.damageKind, weapon) }}</div>
          <div v-if="weapon.feature"><span class="text-medium-emphasis">{{ $t('builder.equipment.weapons.featureLabel') }}:</span> {{ weaponLabel(weapon.feature, weapon) }}</div>
        </v-card-text>
        <v-card-actions class="px-3 pb-3 pt-0">
          <template v-if="weapon.weaponSlot === 'two-handed'">
            <v-btn
              :variant="primaryKey === 's:' + weapon.name && secondaryKey === 's:' + weapon.name ? 'flat' : 'outlined'"
              :color="primaryKey === 's:' + weapon.name && secondaryKey === 's:' + weapon.name ? 'primary' : undefined"
              size="small"
              @click="toggleWeapon('s:' + weapon.name, 'two-handed')"
            >{{ $t('builder.equipment.weapons.twoHandedLabel') }}</v-btn>
          </template>
          <template v-else>
            <v-btn
              v-if="weapon.weaponSlot !== 'secondary-only'"
              :variant="primaryKey === 's:' + weapon.name ? 'flat' : 'outlined'"
              :color="primaryKey === 's:' + weapon.name ? 'primary' : undefined"
              size="small"
              @click="toggleWeapon('s:' + weapon.name, 'primary')"
            >{{ $t('builder.equipment.weapons.primaryLabel') }}</v-btn>
            <v-btn
              v-if="weapon.weaponSlot !== 'primary-only'"
              :variant="secondaryKey === 's:' + weapon.name ? 'flat' : 'outlined'"
              :color="secondaryKey === 's:' + weapon.name ? 'secondary' : undefined"
              size="small"
              @click="toggleWeapon('s:' + weapon.name, 'secondary')"
            >{{ $t('builder.equipment.weapons.secondaryLabel') }}</v-btn>
          </template>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col v-for="(weapon, idx) in customWeapons" :key="'c:' + idx" cols="12" sm="6" md="4">
      <v-card
        :color="isWeaponKeySelected('c:' + idx) ? 'secondaryBg' : undefined"
        border
        class="d-flex flex-column fill-height"
      >
        <v-card-title class="text-body-1 font-weight-bold pt-3 px-3 d-flex align-center">
          <span class="flex-grow-1">{{ $t('builder.equipment.weapons.customTitle') }}</span>
          <v-btn icon="mdi-close" size="x-small" variant="text" @click="removeCustomWeapon(idx)" :aria-label="$t('builder.equipment.weapons.remove')"></v-btn>
        </v-card-title>
        <v-card-text class="pb-1 flex-grow-1">
          <v-text-field density="compact" hide-details="auto" class="mb-2"
                        :label="$t('builder.equipment.weapons.nameLabel')"
                        :model-value="weapon.name"
                        @update:model-value="updateCustomWeapon(idx, 'name', $event)"/>
          <v-text-field density="compact" hide-details="auto" class="mb-2"
                        :label="$t('builder.equipment.weapons.traitLabel')"
                        :model-value="weapon.trait"
                        @update:model-value="updateCustomWeapon(idx, 'trait', $event)"/>
          <v-text-field density="compact" hide-details="auto" class="mb-2"
                        :label="$t('builder.equipment.weapons.distanceLabel')"
                        :model-value="weapon.distance"
                        @update:model-value="updateCustomWeapon(idx, 'distance', $event)"/>
          <v-row no-gutters class="mb-2">
            <v-col cols="6" class="pr-1">
              <v-text-field density="compact" hide-details="auto"
                            :label="$t('builder.equipment.weapons.damageDiceLabel')"
                            :model-value="weapon.damageDice"
                            @update:model-value="updateCustomWeapon(idx, 'damageDice', $event)"/>
            </v-col>
            <v-col cols="6" class="pl-1">
              <v-text-field density="compact" hide-details="auto"
                            :label="$t('builder.equipment.weapons.damageKindLabel')"
                            :model-value="weapon.damageKind"
                            @update:model-value="updateCustomWeapon(idx, 'damageKind', $event)"/>
            </v-col>
          </v-row>
          <v-text-field density="compact" hide-details="auto" class="mb-2"
                        :label="$t('builder.equipment.weapons.featureNameLabel')"
                        :model-value="weapon.feature"
                        @update:model-value="updateCustomWeapon(idx, 'feature', $event)"/>
          <v-textarea density="compact" hide-details="auto" class="mb-2" rows="2" auto-grow
                      :label="$t('builder.equipment.weapons.featureDescriptionLabel')"
                      :model-value="weapon.featureDescription"
                      @update:model-value="updateCustomWeapon(idx, 'featureDescription', $event)"/>
          <v-select density="compact" hide-details="auto"
                    :label="$t('builder.equipment.weapons.slotLabel')"
                    :items="weaponSlotItems"
                    :model-value="weapon.weaponSlot"
                    @update:model-value="updateCustomWeapon(idx, 'weaponSlot', $event)"/>
        </v-card-text>
        <v-card-actions class="px-3 pb-3 pt-0">
          <template v-if="weapon.weaponSlot === 'two-handed'">
            <v-btn
              :variant="primaryKey === 'c:' + idx && secondaryKey === 'c:' + idx ? 'flat' : 'outlined'"
              :color="primaryKey === 'c:' + idx && secondaryKey === 'c:' + idx ? 'primary' : undefined"
              size="small"
              @click="toggleWeapon('c:' + idx, 'two-handed')"
            >{{ $t('builder.equipment.weapons.twoHandedLabel') }}</v-btn>
          </template>
          <template v-else>
            <v-btn
              v-if="weapon.weaponSlot !== 'secondary-only'"
              :variant="primaryKey === 'c:' + idx ? 'flat' : 'outlined'"
              :color="primaryKey === 'c:' + idx ? 'primary' : undefined"
              size="small"
              @click="toggleWeapon('c:' + idx, 'primary')"
            >{{ $t('builder.equipment.weapons.primaryLabel') }}</v-btn>
            <v-btn
              v-if="weapon.weaponSlot !== 'primary-only'"
              :variant="secondaryKey === 'c:' + idx ? 'flat' : 'outlined'"
              :color="secondaryKey === 'c:' + idx ? 'secondary' : undefined"
              size="small"
              @click="toggleWeapon('c:' + idx, 'secondary')"
            >{{ $t('builder.equipment.weapons.secondaryLabel') }}</v-btn>
          </template>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col v-if="customWeapons.length < 2" cols="12" sm="6" md="4">
      <v-card border class="d-flex align-center justify-center fill-height" style="min-height: 120px; cursor: pointer" @click="addCustomWeapon">
        <v-btn variant="text" prepend-icon="mdi-plus">{{ $t('builder.equipment.weapons.addCustom') }}</v-btn>
      </v-card>
    </v-col>
  </v-row>

  <!-- Armor -->
  <h3 class="mt-6 mb-3">{{ $t('builder.equipment.armor.title') }}</h3>
  <v-row>
    <v-col v-for="armor in availableArmors" :key="'s:' + armor.name" cols="12" sm="6" md="4">
      <v-card
        :color="isArmorKeySelected('s:' + armor.name) ? 'secondaryBg' : undefined"
        border
        class="fill-height"
        style="cursor: pointer"
        @click="toggleArmor('s:' + armor.name)"
      >
        <v-card-title class="text-body-1 font-weight-bold pt-3 px-3">{{ armorLabel(armor.name, armor) }}</v-card-title>
        <v-card-text>
          <div><span class="text-medium-emphasis">{{ $t('builder.equipment.armor.thresholdLabel') }}:</span> {{ armor.thresholdLow }} / {{ armor.thresholdHigh }}</div>
          <div><span class="text-medium-emphasis">{{ $t('builder.equipment.armor.scoreLabel') }}:</span> {{ armor.score }}</div>
          <div v-if="armor.feature"><span class="text-medium-emphasis">{{ $t('builder.equipment.armor.featureLabel') }}:</span> {{ armorLabel(armor.feature, armor) }}</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-card
        :color="isArmorKeySelected('c') ? 'secondaryBg' : undefined"
        border
        class="fill-height"
      >
        <v-card-title class="text-body-1 font-weight-bold pt-3 px-3 d-flex align-center">
          <span class="flex-grow-1">{{ $t('builder.equipment.armor.customTitle') }}</span>
          <v-btn v-if="customArmor" icon="mdi-close" size="x-small" variant="text" @click="clearCustomArmor" :aria-label="$t('builder.equipment.armor.clearCustom')"></v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field density="compact" hide-details="auto" class="mb-2"
                        :label="$t('builder.equipment.armor.nameLabel')"
                        :model-value="customArmor?.name ?? ''"
                        @update:model-value="updateCustomArmor('name', $event)"/>
          <v-row no-gutters class="mb-2">
            <v-col cols="6" class="pr-1">
              <v-text-field density="compact" hide-details="auto" type="number"
                            :label="$t('builder.equipment.armor.thresholdLowLabel')"
                            :model-value="customArmor?.thresholdLow ?? 0"
                            @update:model-value="updateCustomArmor('thresholdLow', $event)"/>
            </v-col>
            <v-col cols="6" class="pl-1">
              <v-text-field density="compact" hide-details="auto" type="number"
                            :label="$t('builder.equipment.armor.thresholdHighLabel')"
                            :model-value="customArmor?.thresholdHigh ?? 0"
                            @update:model-value="updateCustomArmor('thresholdHigh', $event)"/>
            </v-col>
          </v-row>
          <v-text-field density="compact" hide-details="auto" class="mb-2" type="number"
                        :label="$t('builder.equipment.armor.scoreLabel')"
                        :model-value="customArmor?.score ?? 0"
                        @update:model-value="updateCustomArmor('score', $event)"/>
          <v-textarea density="compact" hide-details="auto" class="mb-2" rows="2" auto-grow
                      :label="$t('builder.equipment.armor.featureLabel')"
                      :model-value="customArmor?.feature ?? ''"
                      @update:model-value="updateCustomArmor('feature', $event)"/>
          <v-btn
            :variant="isArmorKeySelected('c') ? 'flat' : 'outlined'"
            :color="isArmorKeySelected('c') ? 'primary' : undefined"
            size="small"
            :disabled="!customArmor"
            @click="toggleArmor('c')"
          >{{ $t('builder.equipment.armor.useCustom') }}</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!-- Items -->
  <h3 class="mt-6 mb-3">{{ $t('builder.equipment.items.title') }}</h3>

  <h4 class="mb-2">{{ $t('builder.equipment.items.defaultSectionTitle') }}</h4>
  <v-list density="compact" class="mb-4">
    <v-list-item v-for="item in defaultItems" :key="item.name" :title="`${item.count}x ${itemLabel(item.name, item)}`">
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
                  <div class="font-weight-medium">{{ itemLabel(item.name, item) }}</div>
                  <div class="text-medium-emphasis text-caption">x{{ item.count }}</div>
                </v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </div>
  </template>

  <h4 class="mb-3">{{ $t('builder.equipment.items.customSectionTitle') }}</h4>
  <v-list density="compact" class="mb-2">
    <v-list-item v-for="(item, idx) in customItems" :key="idx" class="px-0">
      <v-row no-gutters align="center">
        <v-col cols="8" class="pr-2">
          <v-text-field density="compact" hide-details="auto"
                        :label="$t('builder.equipment.items.nameLabel')"
                        :model-value="item.name"
                        @update:model-value="updateCustomItem(idx, 'name', $event)"/>
        </v-col>
        <v-col cols="3" class="pr-2">
          <v-text-field density="compact" hide-details="auto" type="number" min="1"
                        :label="$t('builder.equipment.items.countLabel')"
                        :model-value="item.count"
                        @update:model-value="updateCustomItem(idx, 'count', $event)"/>
        </v-col>
        <v-col cols="1" class="text-right">
          <v-btn icon="mdi-close" size="x-small" variant="text" @click="removeCustomItem(idx)" :aria-label="$t('builder.equipment.items.remove')"></v-btn>
        </v-col>
      </v-row>
    </v-list-item>
  </v-list>
  <v-btn variant="text" prepend-icon="mdi-plus" @click="addCustomItem">{{ $t('builder.equipment.items.addCustom') }}</v-btn>

  <h4 class="mt-6 mb-3">{{ $t('builder.equipment.items.textSectionTitle') }}</h4>
  <v-textarea
    :label="$t('builder.equipment.items.textLabel')"
    :model-value="inventoryText"
    @update:model-value="onInventoryTextChange"
    auto-grow
    rows="3"
    density="compact"
  />

</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import {useI18n} from "vue-i18n";
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

const { t } = useI18n()

const availableWeapons = ref<Weapon[]>([])
const availableArmors = ref<Armor[]>([])
const defaultItems = ref<InventoryItem[]>([])
const itemChoiceGroups = ref<ItemChoiceGroup[]>([])

const primaryKey = ref<string | undefined>(undefined)
const secondaryKey = ref<string | undefined>(undefined)
const armorKey = ref<string | undefined>(undefined)
const localItemChoices = ref<Record<string, string>>({})

const customWeapons = ref<Weapon[]>([])
const customArmor = ref<Armor | undefined>(undefined)
const customItems = ref<InventoryItem[]>([])
const inventoryText = ref<string>("")

const weaponSlotItems = computed(() => [
  { value: 'any', title: t('builder.equipment.weapons.slotAny') },
  { value: 'primary-only', title: t('builder.equipment.weapons.slotPrimaryOnly') },
  { value: 'secondary-only', title: t('builder.equipment.weapons.slotSecondaryOnly') },
  { value: 'two-handed', title: t('builder.equipment.weapons.slotTwoHanded') },
])

watch(() => props.state, (newState) => {
  syncFromState(newState)
}, { deep: true })

onMounted(() => {
  syncFromState(props.state)
  ensureInventory()
})

function syncFromState(state: BuilderState) {
  const classOption = state.options.classOption
  availableWeapons.value = classOption?.availableWeapons ?? []
  availableArmors.value = classOption?.availableArmors ?? []
  defaultItems.value = classOption?.defaultItems ?? []
  itemChoiceGroups.value = classOption?.itemChoiceGroups ?? []

  customWeapons.value = (state.options.customWeapons ?? []).map(w => ({ ...w }))
  customArmor.value = state.options.customArmor ? { ...state.options.customArmor } : undefined
  customItems.value = (state.options.customItems ?? []).map(i => ({ ...i }))
  inventoryText.value = state.options.inventoryText ?? state.data.inventory?.text ?? ""

  const twoHanded = state.data.weapons.find(w => w.primary && w.secondary)
  if (twoHanded) {
    const key = keyForWeapon(twoHanded)
    primaryKey.value = key
    secondaryKey.value = key
  } else {
    const prim = state.data.weapons.find(w => w.primary)
    const sec = state.data.weapons.find(w => w.secondary)
    primaryKey.value = prim ? keyForWeapon(prim) : undefined
    secondaryKey.value = sec ? keyForWeapon(sec) : undefined
  }

  if (state.data.armor) {
    armorKey.value = state.data.armor.custom ? 'c' : 's:' + state.data.armor.name
  } else {
    armorKey.value = undefined
  }

  localItemChoices.value = { ...(state.options.itemChoices ?? {}) }
}

function keyForWeapon(w: Weapon): string | undefined {
  if (w.custom) {
    const idx = customWeapons.value.findIndex(cw => cw.name === w.name && cw.feature === w.feature && cw.damageDice === w.damageDice)
    return idx >= 0 ? `c:${idx}` : undefined
  }
  return `s:${w.name}`
}

function resolveWeaponKey(key: string | undefined): Weapon | undefined {
  if (!key) return undefined
  if (key.startsWith('c:')) return customWeapons.value[parseInt(key.slice(2), 10)]
  return availableWeapons.value.find(w => w.name === key.slice(2))
}

function isWeaponKeySelected(key: string): boolean {
  return primaryKey.value === key || secondaryKey.value === key
}

function isArmorKeySelected(key: string): boolean {
  return armorKey.value === key
}

function weaponLabel(val: string | undefined, weapon: Weapon): string {
  if (!val) return ''
  return weapon.custom ? val : t(val)
}

function armorLabel(val: string | undefined, armor: Armor): string {
  if (!val) return ''
  return armor.custom ? val : t(val)
}

function itemLabel(val: string | undefined, item: InventoryItem): string {
  if (!val) return ''
  return item.custom ? val : t(val)
}

function toggleWeapon(key: string, slot: WeaponSlot | 'primary' | 'secondary') {
  if (slot === 'two-handed') {
    if (primaryKey.value === key && secondaryKey.value === key) {
      primaryKey.value = undefined
      secondaryKey.value = undefined
    } else {
      primaryKey.value = key
      secondaryKey.value = key
    }
  } else if (slot === 'primary') {
    if (primaryKey.value && primaryKey.value === secondaryKey.value) {
      secondaryKey.value = undefined
    }
    if (primaryKey.value === key) {
      primaryKey.value = undefined
    } else {
      if (secondaryKey.value === key) secondaryKey.value = undefined
      primaryKey.value = key
    }
  } else {
    if (primaryKey.value && primaryKey.value === secondaryKey.value) {
      primaryKey.value = undefined
      secondaryKey.value = undefined
    }
    if (secondaryKey.value === key) {
      secondaryKey.value = undefined
    } else {
      if (primaryKey.value === key) primaryKey.value = undefined
      secondaryKey.value = key
    }
  }
  commit()
}

function toggleArmor(key: string) {
  if (key === 'c' && !customArmor.value) return
  armorKey.value = armorKey.value === key ? undefined : key
  commit()
}

function addCustomWeapon() {
  if (customWeapons.value.length >= 2) return
  customWeapons.value.push({
    name: '',
    trait: '',
    distance: '',
    damageDice: '',
    damageKind: '',
    feature: '',
    featureDescription: '',
    weaponSlot: 'any',
    primary: false,
    secondary: false,
    left: false,
    right: false,
    custom: true,
  })
  commit()
}

function updateCustomWeapon(idx: number, field: keyof Weapon, value: unknown) {
  const w = customWeapons.value[idx]
  if (!w) return
  // @ts-expect-error narrow per field not worth modeling
  w[field] = value
  commit()
}

function removeCustomWeapon(idx: number) {
  const key = `c:${idx}`
  if (primaryKey.value === key) primaryKey.value = undefined
  if (secondaryKey.value === key) secondaryKey.value = undefined
  for (let i = idx + 1; i < customWeapons.value.length; i++) {
    const oldK = `c:${i}`
    const newK = `c:${i - 1}`
    if (primaryKey.value === oldK) primaryKey.value = newK
    if (secondaryKey.value === oldK) secondaryKey.value = newK
  }
  customWeapons.value.splice(idx, 1)
  commit()
}

function updateCustomArmor(field: keyof Armor, value: unknown) {
  if (!customArmor.value) {
    customArmor.value = {
      name: '',
      thresholdLow: 0,
      thresholdHigh: 0,
      score: 0,
      feature: '',
      custom: true,
    }
  }
  const numeric = field === 'thresholdLow' || field === 'thresholdHigh' || field === 'score'
  // @ts-expect-error narrow per field not worth modeling
  customArmor.value[field] = numeric ? (Number(value) || 0) : value
  commit()
}

function clearCustomArmor() {
  if (armorKey.value === 'c') armorKey.value = undefined
  customArmor.value = undefined
  commit()
}

function addCustomItem() {
  customItems.value.push({ name: '', count: 1, custom: true })
  commit()
}

function updateCustomItem(idx: number, field: keyof InventoryItem, value: unknown) {
  const item = customItems.value[idx]
  if (!item) return
  if (field === 'count') {
    item.count = Math.max(1, Number(value) || 1)
  } else if (field === 'name') {
    item.name = String(value ?? '')
  }
  commit()
}

function removeCustomItem(idx: number) {
  customItems.value.splice(idx, 1)
  commit()
}

function onInventoryTextChange(val: string) {
  inventoryText.value = val ?? ''
  commit()
}

function onItemChoice(groupId: string, itemName: string | undefined) {
  if (!itemName) {
    delete localItemChoices.value[groupId]
  } else {
    localItemChoices.value[groupId] = itemName
  }
  commit()
}

function ensureInventory() {
  if (!props.state.data.inventory) {
    props.state.data.inventory = { items: [], text: "" }
  }
  commit()
}

function commit() {
  if (!props.state.data.inventory) {
    props.state.data.inventory = { items: [], text: "" }
  }

  const weapons: Weapon[] = []
  if (primaryKey.value && primaryKey.value === secondaryKey.value) {
    const w = resolveWeaponKey(primaryKey.value)
    if (w) weapons.push({ ...w, primary: true, secondary: true })
  } else {
    const p = resolveWeaponKey(primaryKey.value)
    if (p) weapons.push({ ...p, primary: true, secondary: false })
    const s = resolveWeaponKey(secondaryKey.value)
    if (s) weapons.push({ ...s, primary: false, secondary: true })
  }
  props.state.data.weapons = weapons

  if (armorKey.value === 'c' && customArmor.value) {
    props.state.data.armor = { ...customArmor.value }
  } else if (armorKey.value?.startsWith('s:')) {
    const a = availableArmors.value.find(x => x.name === armorKey.value!.slice(2))
    props.state.data.armor = a ? { ...a } : undefined
  } else {
    props.state.data.armor = undefined
  }

  const items: InventoryItem[] = [...defaultItems.value]
  for (const [groupId, chosenName] of Object.entries(localItemChoices.value)) {
    const group = itemChoiceGroups.value.find(g => g.id === groupId)
    if (!group) continue
    const item = group.items.find(i => i.name === chosenName)
    if (item) items.push({ ...item })
  }
  for (const ci of customItems.value) {
    items.push({ ...ci })
  }
  props.state.data.inventory.items = items
  props.state.data.inventory.text = inventoryText.value

  props.state.options.itemChoices = { ...localItemChoices.value }
  props.state.options.customWeapons = customWeapons.value.map(w => ({ ...w }))
  props.state.options.customArmor = customArmor.value ? { ...customArmor.value } : undefined
  props.state.options.customItems = customItems.value.map(i => ({ ...i }))
  props.state.options.inventoryText = inventoryText.value

  emit("setState", props.state)
}
</script>

<style scoped>
</style>
