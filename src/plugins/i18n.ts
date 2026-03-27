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
        startSubtitle: 'name, class, etc.',
        something: 'Something',
        somethingSubtitle: 'choose a class to preview steps',
        finish: 'Profit!',
        finishSubtitle: 'get your sheet',
      },
      start: {
        title: 'The foundation of your character',
        nameLabel: 'Name',
        pronounsLabel: 'Pronouns',
        classLabel: 'Class',
        subclassLabel: 'Subclass',
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
