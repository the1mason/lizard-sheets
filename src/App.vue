<template>
  <v-app>
    <nav-menu />
    <v-main>
      <router-view />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script lang="ts" setup>
  //
import NavMenu from '@/components/NavMenu.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
