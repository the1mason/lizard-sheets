<template>
  <div v-html="renderedMarkdown"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const props = defineProps<{
  source: string
  //@ts-ignore i know what i'm doing (probably)
  options?: MarkdownIt.Options
}>()

const md = new MarkdownIt(props.options || {
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
})

const renderedMarkdown = computed(() => {
  if (!props.source) return ''
  return md.render(props.source)
})
</script>

<style scoped>

:deep(a) {
  text-decoration: underline;
}

:deep(a:hover) {
  text-decoration: underline;
}
</style>