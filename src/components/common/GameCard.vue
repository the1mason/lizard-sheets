<template>
  <v-card border :class="['game-card', props.size]" color="lighten" v-bind:$attrs>
    <slot></slot>
  </v-card>
</template>

<script setup lang="ts">

const props = withDefaults(
    defineProps<{
      size: 'small' | 'medium' | 'large'
    }>(),
    {
      size: 'small'
    }
);
</script>

<style lang="scss" scoped>

.game-card {
  border: solid 1px var(--);
}

.game-card.small {
  width: 180px;
  height: 240px;
}

.game-card.medium {
  width: 240px;
  height: 360px;
}

.game-card.large {
  width: 360px;
  height: 480px;
}

</style>