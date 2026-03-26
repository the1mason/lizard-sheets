import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    navigation: {
      builder: 'New',
      upload: 'Upload'
    },
    home: {
      welcome: 'Get your sheets together!'
    },
    notFound: {
      title: 'Not Found'
    },
    builder: {
      title: 'Character Builder',
      recoveryAlert: {
        text: 'Previous session recovered. If you want to create a new character, use the button below',
        clear: 'Reset Builder',
      },
      stepper: {
        previous: 'Previous',
        next: 'Next'
      },
      steps: {
        start: 'Start',
        startSubtitle: 'create your character',
        something: 'Something',
        somethingSubtitle: 'choose a class to preview steps',
        finish: 'Profit!',
        finishSubtitle: 'get your sheet',
      }
    }
  }
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
