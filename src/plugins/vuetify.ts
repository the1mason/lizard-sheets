/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
import * as colors from 'vuetify/util/colors'
import {
  VStepperVertical,
  VStepperVerticalItem,
  VStepperVerticalActions,
} from 'vuetify/labs/VStepperVertical'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VStepperVertical,
    VStepperVerticalItem,
    VStepperVerticalActions,
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: colors.green.accent3,
          secondary: colors.purple.lighten2
        },
      },
    },

  },
})
