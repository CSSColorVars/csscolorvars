import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { state } from './state'
import { mutations } from './mutations'
import { getters } from './getters'
import { palleteColors } from './modules/palleteColors'
import { notifyCopy } from './modules/notifyCopy'
import { styleSheet } from './modules/styleSheet'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    palleteColors,
    notifyCopy,
    styleSheet
  },
  plugins: [createPersistedState({
    key: 'color-store',
    paths: [
      'palleteColors',
      'styleSheet',
      'errorMesagge'
    ]
  })]
})
