<template>
  <v-container>
    <v-row align="center" class="mb-3">
      <v-col>
        <h2>{{ $t('characters.title') }}</h2>
      </v-col>
      <v-col cols="auto">
        <input
            ref="fileInput"
            type="file"
            accept="application/json"
            style="display:none"
            @change="onFilePicked"
        />
        <v-btn color="secondary" variant="tonal" @click="triggerImport">
          <template #prepend>
            <v-icon icon="mdi-upload"/>
          </template>
          {{ $t('characters.import.button') }}
        </v-btn>
      </v-col>
    </v-row>

    <v-card v-if="characters.length === 0" class="pa-6" border>
      <v-row justify="center">
        <v-col align="center">
          <v-icon icon="mdi-account-off-outline" size="64" class="mb-3 text-medium-emphasis"/>
          <p class="text-body-1 mb-4">{{ $t('characters.empty.text') }}</p>
          <router-link to="/builder">
            <v-btn color="primary">
              <template #prepend>
                <v-icon icon="mdi-plus"/>
              </template>
              {{ $t('characters.empty.create') }}
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-card>

    <v-card v-else border>
      <v-list>
        <template v-for="(c, i) in characters" :key="c.id">
          <v-divider v-if="i > 0"/>
          <v-list-item>
            <template #prepend>
              <v-avatar color="surface-variant" size="40">
                <v-icon :icon="classIcon(c.className)"/>
              </v-avatar>
            </template>
            <v-list-item-title>
              {{ c.name && c.name.trim().length > 0 ? c.name : $t('characters.unnamed') }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <span v-if="c.className">{{ $t(`game.classes.${c.className}.name`) }}</span>
              <template v-if="c.subclassId">
                · {{ $t(`game.subclasses.${c.subclassId}.name`) }}
              </template>
              · {{ $t('characters.table.level') }} {{ c.level }}
            </v-list-item-subtitle>
            <template #append>
              <v-btn
                  variant="text"
                  color="primary"
                  :disabled="!c.className"
                  @click="openCharacter(c)"
              >
                <template #prepend>
                  <v-icon icon="mdi-open-in-app"/>
                </template>
                {{ $t('characters.actions.open') }}
              </v-btn>
              <v-btn variant="text" @click="cloneCharacter(c.id)">
                <template #prepend>
                  <v-icon icon="mdi-content-copy"/>
                </template>
                {{ $t('characters.actions.clone') }}
              </v-btn>
              <v-btn variant="text" color="error" @click="askDelete(c)">
                <template #prepend>
                  <v-icon icon="mdi-delete-outline"/>
                </template>
                {{ $t('characters.actions.delete') }}
              </v-btn>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-card>

    <v-dialog v-model="deleteDialog" max-width="460">
      <v-card>
        <v-card-title>{{ $t('characters.confirmDelete.title') }}</v-card-title>
        <v-card-text>
          {{ $t('characters.confirmDelete.body', { name: deleteTargetName }) }}
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn variant="text" @click="deleteDialog = false">
            {{ $t('characters.confirmDelete.cancel') }}
          </v-btn>
          <v-btn color="error" variant="tonal" @click="confirmDelete">
            {{ $t('characters.confirmDelete.confirm') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="4000">
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue"
import {useRouter} from "vue-router"
import {useCharacterStore, type CharacterShort} from "@/stores/characterStore.ts"
import type {Character} from "@/types/game/character.ts"
import type {ClassName} from "@/types/game/className.ts"
import {useI18n} from "vue-i18n"

const store = useCharacterStore()
const router = useRouter()
const {t} = useI18n()

const characters = computed<CharacterShort[]>(() => store.list())

const fileInput = ref<HTMLInputElement | null>(null)

const deleteDialog = ref(false)
const deleteTargetId = ref<string | undefined>(undefined)
const deleteTargetName = ref<string>("")

const snackbar = reactive({
  show: false,
  text: "",
  color: "success" as "success" | "error"
})

function openCharacter(c: CharacterShort) {
  if (!c.className) return
  router.push(`/characters/${c.className}/${c.id}`)
}

function cloneCharacter(id: string) {
  const source = store.get(id)
  if (!source) return
  const copy: Character = JSON.parse(JSON.stringify(source))
  copy.id = crypto.randomUUID()
  const baseName = source.name && source.name.trim().length > 0
      ? source.name.trim()
      : t('characters.unnamed')
  copy.name = `${baseName}${t('characters.clonedSuffix')}`
  store.create(copy)
  notify("success", t('characters.cloneSuccess', {name: copy.name}))
}

function askDelete(c: CharacterShort) {
  deleteTargetId.value = c.id
  deleteTargetName.value = c.name && c.name.trim().length > 0
      ? c.name
      : t('characters.unnamed')
  deleteDialog.value = true
}

function confirmDelete() {
  if (deleteTargetId.value) {
    store.delete(deleteTargetId.value)
  }
  deleteDialog.value = false
  deleteTargetId.value = undefined
}

function triggerImport() {
  fileInput.value?.click()
}

async function onFilePicked(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ""
  if (!file) return
  try {
    const raw = await file.text()
    const parsed = JSON.parse(raw) as unknown
    const character = sanitizeImported(parsed)
    if (!character) {
      notify("error", t('characters.import.errorInvalid'))
      return
    }
    if (store.has(character.id)) {
      character.id = crypto.randomUUID()
    }
    store.create(character)
    notify("success", t('characters.import.success'))
  } catch {
    notify("error", t('characters.import.errorParse'))
  }
}

function sanitizeImported(value: unknown): Character | undefined {
  if (!value || typeof value !== "object") return undefined
  const v = value as Record<string, unknown>
  if (typeof v.id !== "string" || v.id.length === 0) return undefined
  if (typeof v.version !== "number") return undefined
  if (typeof v.level !== "number") return undefined
  if (!Array.isArray(v.subclasses)) return undefined
  if (!Array.isArray(v.domains)) return undefined
  if (!Array.isArray(v.weapons)) return undefined
  if (!Array.isArray(v.domainCards)) return undefined
  if (!v.traits || typeof v.traits !== "object") return undefined
  if (!v.state || typeof v.state !== "object") return undefined
  return value as Character
}

function notify(color: "success" | "error", text: string) {
  snackbar.color = color
  snackbar.text = text
  snackbar.show = true
}

function classIcon(className: ClassName | undefined): string {
  if (!className) return "mdi-account-question"
  return "mdi-account"
}
</script>

<style scoped>
</style>
