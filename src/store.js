import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    property: 'primary',
    value: '#1671b9',
    customcolors: [
      {
        property: 'primary',
        value: '#1671b9',
        active: true
      },
      {
        property: 'secondary',
        value: '#1671b9',
        active: false
      },
      {
        property: 'tertiary',
        value: '#1671b9',
        active: false
      },
      {
        property: 'accent',
        value: '#1671b9',
        active: false
      }
    ]
  },
  mutations: {
    updateValue (state, hex) {
      state.value = hex
    }
  },
  actions: {

  }
})
