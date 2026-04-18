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
                alt="logo"
                 src="../assets/logo.png"
                 height="40px"/>
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
        <a href="https://t1m.in/gh" target="_blank">
          <h4>GitHub</h4>
        </a>
      </v-col>
    </v-row>
  </header>
</template>

<script setup lang="ts">
import {computed} from "vue"
import {useCharacterStore} from "@/stores/characterStore.ts"

const store = useCharacterStore()
const hasCharacters = computed<boolean>(() => store.list().length > 0)
</script>

<style scoped>

</style>
