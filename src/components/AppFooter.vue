<template>
  <v-footer class="app-footer">
    <div class="footer-col text-left">
    </div>
    <div class="footer-col text-center">
    </div>
    <div class="footer-col text-right">
      <a href="https://github.com/the1mason/lizard-sheets" target="_blank">
        {{ $t('footer.github') }}
      </a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">

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
