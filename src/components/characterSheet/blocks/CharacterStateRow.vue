<template>
  <v-card border class="pa-0 mb-4 state-row">
    <v-row align="stretch" dense no-gutters>
      <v-col class="state-stack" cols="6" md="2">
        <div class="state-cell">
          <div class="state-label">{{ $t('sheet.state.evasion') }}</div>
          <div v-if="editingEvasion" class="state-edit">
            <v-number-input
              ref="evasionInput"
              v-model="evasionDraft"
              control-variant="split"
              density="compact"
              hide-details
              :max="99"
              :min="0"
              reverse
              variant="solo-filled"
              @blur="commitEvasion"
              @keyup.enter="commitEvasion"
            />
          </div>
          <div
            v-else
            class="state-evasion"
            @click="startEditingEvasion"
          >
            {{ state.evasion }}
          </div>
        </div>
      </v-col>

      <v-divider class="state-divider" vertical />

      <v-col class="state-stack" cols="6" md="3">
        <div class="state-cell">
          <div class="state-label">{{ $t('sheet.state.hitPoints') }}</div>
          <div class="state-stepper">
            <v-btn
              :aria-label="$t('sheet.state.decrease')"
              density="compact"
              icon="mdi-minus"
              size="small"
              variant="text"
              @click="bumpHealth(-1)"
            />
            <span class="state-value">{{ state.health }} / {{ state.healthMax }}</span>
            <v-btn
              :aria-label="$t('sheet.state.increase')"
              density="compact"
              icon="mdi-plus"
              size="small"
              variant="text"
              @click="bumpHealth(1)"
            />
          </div>
        </div>
        <v-divider />
        <div class="state-cell">
          <div class="state-label">{{ $t('sheet.state.stress') }}</div>
          <div class="state-stepper">
            <v-btn
              :aria-label="$t('sheet.state.decrease')"
              density="compact"
              icon="mdi-minus"
              size="small"
              variant="text"
              @click="bumpStress(-1)"
            />
            <span class="state-value">{{ state.stress }} / {{ state.stressMax }}</span>
            <v-btn
              :aria-label="$t('sheet.state.increase')"
              density="compact"
              icon="mdi-plus"
              size="small"
              variant="text"
              @click="bumpStress(1)"
            />
          </div>
        </div>
      </v-col>

      <v-divider class="state-divider" vertical />

      <v-col class="state-stack" cols="6" md="3">
        <div class="state-cell">
          <div class="state-label">{{ $t('sheet.state.hope') }}</div>
          <div class="state-stepper">
            <v-btn
                :aria-label="$t('sheet.state.decrease')"
                density="compact"
                icon="mdi-minus"
                size="small"
                variant="text"
                @click="bumpHope(-1)"
            />
            <span class="state-value">{{ state.hope }} / {{ state.hopeMax }}</span>
            <v-btn
                :aria-label="$t('sheet.state.increase')"
                density="compact"
                icon="mdi-plus"
                size="small"
                variant="text"
                @click="bumpHope(1)"
            />
          </div>
        </div>
        <v-divider />
        <div class="state-cell">
          <div class="state-label">{{ $t('sheet.state.armor') }}</div>
          <div class="state-stepper">
            <v-btn
                :aria-label="$t('sheet.state.decrease')"
                density="compact"
                icon="mdi-minus"
                size="small"
                variant="text"
                @click="bumpArmor(-1)"
            />
            <span class="state-value">{{ state.armor }} / {{ state.armorMax }}</span>
            <v-btn
                :aria-label="$t('sheet.state.increase')"
                density="compact"
                icon="mdi-plus"
                size="small"
                variant="text"
                @click="bumpArmor(1)"
            />
          </div>
        </div>
      </v-col>

      <v-divider class="state-divider" vertical />

      <v-col class="state-cell" cols="12" md="4">
        <div class="state-label">{{ $t('sheet.state.thresholds') }}</div>
        <div class="thresholds-row">
          <div class="threshold-segment">
            <div class="threshold-tag">{{ $t('sheet.state.thresholdMinor') }}</div>
          </div>
          <v-number-input
              class="threshold-input"
              control-variant="hidden"
              density="compact"
              hide-details
              :min="0"
              :model-value="state.armorThresholdLow ?? 0"
              variant="outlined"
              @update:model-value="(v: number) => onThresholdUpdate('low', v)"
          />
          <div class="threshold-segment">
            <div class="threshold-tag">{{ $t('sheet.state.thresholdMajor') }}</div>
          </div>
          <v-number-input
              class="threshold-input"
              control-variant="hidden"
              density="compact"
              hide-details
              :min="0"
              :model-value="state.armorThresholdHigh ?? 0"
              variant="outlined"
              @update:model-value="(v: number) => onThresholdUpdate('high', v)"
          />
          <div class="threshold-segment">
            <div class="threshold-tag">{{ $t('sheet.state.thresholdSevere') }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-menu :close-on-content-click="false" location="bottom end">
      <template #activator="{ props: menuProps }">
        <v-btn
          v-bind="menuProps"
          :aria-label="$t('sheet.state.settingsTitle')"
          class="state-settings-btn"
          density="compact"
          icon="mdi-cog-outline"
          size="small"
          variant="text"
        />
      </template>
      <v-card class="pa-3" min-width="240">
        <div class="text-subtitle-2 mb-2">{{ $t('sheet.state.settingsTitle') }}</div>
        <v-number-input
          :model-value="state.evasion"
          control-variant="split"
          density="compact"
          hide-details
          :label="$t('sheet.state.evasionMaxLabel')"
          :min="0"
          variant="outlined"
          @update:model-value="(v: number) => updateField('evasion', v)"
        />
        <v-number-input
          class="mt-2"
          :model-value="state.armorMax"
          control-variant="split"
          density="compact"
          hide-details
          :label="$t('sheet.state.armorMaxLabel')"
          :min="0"
          variant="outlined"
          @update:model-value="(v: number) => updateMax('armorMax', v)"
        />
        <v-number-input
          class="mt-2"
          :model-value="state.healthMax"
          control-variant="split"
          density="compact"
          hide-details
          :label="$t('sheet.state.healthMaxLabel')"
          :min="0"
          variant="outlined"
          @update:model-value="(v: number) => updateMax('healthMax', v)"
        />
        <v-number-input
          class="mt-2"
          :model-value="state.stressMax"
          control-variant="split"
          density="compact"
          hide-details
          :label="$t('sheet.state.stressMaxLabel')"
          :min="0"
          variant="outlined"
          @update:model-value="(v: number) => updateMax('stressMax', v)"
        />
        <v-number-input
          class="mt-2"
          :model-value="state.hopeMax"
          control-variant="split"
          density="compact"
          hide-details
          :label="$t('sheet.state.hopeMaxLabel')"
          :min="0"
          variant="outlined"
          @update:model-value="(v: number) => updateMax('hopeMax', v)"
        />
      </v-card>
    </v-menu>
  </v-card>
</template>

<script setup lang="ts">
  import type { Character, CharacterState } from '@/types/game/character.ts'
  import { computed, nextTick, ref } from 'vue'

  const props = defineProps<{
    character: Character
  }>()

  const emit = defineEmits<{
    (e: 'update:state', state: CharacterState): void
  }>()

  const state = computed<CharacterState>(() => props.character.state)

  const editingEvasion = ref<boolean>(false)
  const evasionDraft = ref<number>(state.value.evasion)
  const evasionInput = ref<{ $el?: HTMLElement } | null>(null)

  function emitNext (patch: Partial<CharacterState>) {
    emit('update:state', { ...state.value, ...patch })
  }

  function clamp (value: number, min: number, max: number): number {
    if (Number.isNaN(value)) return min
    return Math.min(max, Math.max(min, value))
  }

  function bumpArmor (delta: number) {
    emitNext({ armor: clamp(state.value.armor + delta, 0, state.value.armorMax) })
  }

  function bumpHealth (delta: number) {
    emitNext({ health: clamp(state.value.health + delta, 0, state.value.healthMax) })
  }

  function bumpStress (delta: number) {
    emitNext({ stress: clamp(state.value.stress + delta, 0, state.value.stressMax) })
  }

  function bumpHope (delta: number) {
    emitNext({ hope: clamp(state.value.hope + delta, 0, state.value.hopeMax) })
  }

  function startEditingEvasion () {
    evasionDraft.value = state.value.evasion
    editingEvasion.value = true
    nextTick(() => {
      const el = evasionInput.value?.$el?.querySelector('input') as HTMLInputElement | null
      el?.focus()
      el?.select()
    })
  }

  function commitEvasion () {
    editingEvasion.value = false
    const next = clamp(Number(evasionDraft.value), 0, 99)
    if (next !== state.value.evasion) {
      emitNext({ evasion: next })
    }
  }

  function onThresholdUpdate (which: 'low' | 'high', value: number) {
    const next = Math.max(0, Number(value) || 0)
    if (which === 'low' && next !== (state.value.armorThresholdLow ?? 0)) {
      emitNext({ armorThresholdLow: next })
    }
    if (which === 'high' && next !== (state.value.armorThresholdHigh ?? 0)) {
      emitNext({ armorThresholdHigh: next })
    }
  }

  function updateField (field: 'evasion', value: number) {
    const next = Math.max(0, Number(value) || 0)
    if (next !== state.value[field]) {
      emitNext({ [field]: next } as Partial<CharacterState>)
    }
  }

  function updateMax (field: 'armorMax' | 'healthMax' | 'stressMax' | 'hopeMax', value: number) {
    const nextMax = Math.max(0, Number(value) || 0)
    if (nextMax === state.value[field]) return
    const currentField = ({
      armorMax: 'armor',
      healthMax: 'health',
      stressMax: 'stress',
      hopeMax: 'hope',
    } as const)[field]
    const patch: Partial<CharacterState> = { [field]: nextMax }
    if (state.value[currentField] > nextMax) {
      patch[currentField] = nextMax
    }
    emitNext(patch)
  }
</script>

<style scoped>
.state-row {
  overflow: hidden;
  position: relative;
}

.state-settings-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 1;
}

.state-stack {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.state-stack .state-cell {
  flex: 1;
}

.state-cell {
  padding: 4px 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.state-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(var(--v-theme-on-surface), 0.6);
  line-height: 1.2;
  margin-bottom: 2px;
}

.state-evasion {
  font-size: 28px;
  line-height: 1.1;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
}

.state-edit {
  width: 100%;
  min-width: 0;
}

.state-edit :deep(input) {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  padding-inline: 4px;
}

.state-stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.state-value {
  font-size: 1.05rem;
  font-weight: 600;
  min-width: 56px;
  text-align: center;
}

.state-divider {
  height: auto;
}

.thresholds-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.threshold-segment {
  font-size: 0.7rem;
  line-height: 1.1;
  color: rgba(var(--v-theme-on-surface), 0.7);
  text-align: center;
}

.threshold-tag {
  white-space: nowrap;
}

.threshold-input {
  width: 64px;
  flex: 0 0 auto;
}

@media (max-width: 959px) {
  .state-divider {
    display: none;
  }
}
</style>
