<template>
  <v-container>
    <v-card>
    <v-row justify="center">
      <v-col align="center" class="my-15">
        <img src="../assets/logo.png" alt="logo" height="150px"
             style="
                image-rendering: -moz-crisp-edges;
                image-rendering: -webkit-optimize-contrast;
                image-rendering: pixelated;
                image-rendering: crisp-edges;
                -ms-interpolation-mode: nearest-neighbor;" />
        <h1>{{ $t('home.welcome') }}</h1>
      </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
</script>
