<template>
  <header>
    <v-row class="py-2" justify="center" align="center">
      <v-row align="center">
        <router-link to="/">
        </router-link>
        <router-link to="/">
          <v-row
              align="center"
              color="white"
          gap="8px">
            <img
                style="
                image-rendering: -moz-crisp-edges;
                image-rendering: -webkit-optimize-contrast;
                image-rendering: pixelated;
                image-rendering: crisp-edges;
                -ms-interpolation-mode: nearest-neighbor;"
                alt="logo"
                 src="../assets/logo.png"
                 height="55px"/>
            <h3 class="ml-2">
              Lizard Sheets
            </h3>
          </v-row>
        </router-link>
      </v-row>
      <v-col align="center">
        <v-row gap="4px">
          <router-link to="/builder">
            <v-btn variant="tonal" color="secondary">
              <template #prepend>
                <v-icon icon="mdi-plus" />
              </template>
              {{ $t('navigation.builder') }}
            </v-btn>
          </router-link>
          <router-link to="/characters">
            <v-btn variant="tonal" color="gray">
              <template #prepend>
                <v-icon :icon="hasCharacters ? 'mdi-account-multiple' : 'mdi-upload'" />
              </template>
              {{ hasCharacters ? $t('navigation.characters') : $t('navigation.load') }}
            </v-btn>
          </router-link>
        </v-row>
      </v-col>
      <v-col align="end" class="mx-6">
        <v-btn-toggle
            v-model="selectedLocale"
            density="compact"
            divided
            mandatory
            variant="outlined"
            class="mr-4"
        >
          <v-btn size="small" value="en">EN</v-btn>
          <v-btn size="small" value="ru">RU</v-btn>
        </v-btn-toggle>
        <a href="https://t1m.in/gh" target="_blank">
          <h4>GitHub</h4>
        </a>
      </v-col>
    </v-row>
  </header>
</template>

<script setup lang="ts">
import {computed} from "vue"
import {useI18n} from "vue-i18n"
import {useCharacterStore} from "@/stores/characterStore.ts"
import {localeStorageKey, supportedLocales} from "@/plugins/i18n.ts"

const store = useCharacterStore()
const hasCharacters = computed<boolean>(() => store.list().length > 0)
const {locale} = useI18n({useScope: "global"})

const selectedLocale = computed({
  get: () => locale.value,
  set: (value: string) => setLocale(value)
})

function setLocale(value: string) {
  if (!supportedLocales.includes(value as typeof supportedLocales[number])) return
  locale.value = value
  localStorage.setItem(localeStorageKey, value)
  document.documentElement.lang = value
}
</script>

<style scoped>

</style>
