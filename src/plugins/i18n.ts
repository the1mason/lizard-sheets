import { createI18n } from 'vue-i18n'
import { en } from '@/i18n/en.ts'

const messages = {
  en: en
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
