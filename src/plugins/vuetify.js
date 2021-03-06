import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  // VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VTooltip,
  VCard,
  VTextField,
  VSlider,
  VCheckbox,
  VSelect,
  VMenu,
  VTabs,
  VSnackbar,
  VDialog,
  VDivider,
  VSpeedDial,
  VAlert,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    // VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VTooltip,
    VCard,
    VTextField,
    VSlider,
    VCheckbox,
    VSelect,
    VMenu,
    VTabs,
    VSnackbar,
    VDialog,
    VDivider,
    VSpeedDial,
    VAlert,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
