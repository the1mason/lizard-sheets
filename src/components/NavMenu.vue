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
          <router-link to="/load">
            <v-btn variant="tonal" color="gray">
              <template #prepend>
                <v-icon icon="mdi-upload" />
              </template>
              {{ $t('navigation.upload') }}
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

</script>

<style scoped>

</style>
