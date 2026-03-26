<template>
  <v-app>
    <nav-menu />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
import NavMenu from '@/components/NavMenu.vue'
</script>
