import { createI18n } from 'vue-i18n'
import { en } from '@/i18n/en.ts'
import { ru } from '@/i18n/ru.ts'

const messages = {
  en: en,
  ru: ru,
}

const localeStorageKey = 'lizard-sheets:locale'
const supportedLocales = ['en', 'ru'] as const
type SupportedLocale = typeof supportedLocales[number]

function isSupportedLocale (locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale)
}

function getInitialLocale (): SupportedLocale {
  if (typeof window === 'undefined') return 'en'

  const storedLocale = window.localStorage.getItem(localeStorageKey)
  if (storedLocale && isSupportedLocale(storedLocale)) return storedLocale

  const browserLocale = window.navigator.language.split('-')[0]
  return isSupportedLocale(browserLocale) ? browserLocale : 'en'
}

const initialLocale = getInitialLocale()

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLocale
}

export { localeStorageKey, supportedLocales }

export default createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
})
