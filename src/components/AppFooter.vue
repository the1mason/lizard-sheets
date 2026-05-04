<template>
  <v-footer class="app-footer">
    <div class="footer-col text-left">
      <span class="text-medium-emphasis">Lizard Sheets</span>
    </div>
    <div class="footer-col text-center">
    </div>
    <div class="footer-col text-right">
      <v-btn-toggle
          v-model="selectedLocale"
          density="compact"
          divided
          mandatory
          variant="outlined"
      >
        <v-btn size="small" value="en">EN</v-btn>
        <v-btn size="small" value="ru">RU</v-btn>
      </v-btn-toggle>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { localeStorageKey, supportedLocales } from "@/plugins/i18n.ts"

const { locale } = useI18n({ useScope: "global" })

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
.app-footer {
  padding-inline: 24px;
  flex: 0 0 auto;
  min-height: 56px;
  display: flex;
  align-items: center;
}
.footer-col {
  flex: 1 1 0;
}
</style>
