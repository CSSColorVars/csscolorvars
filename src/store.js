import Vue from 'vue'
import Vuex from 'vuex'
import Color from 'color'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    property: 'primary',
    value: '#1671b9',
    minAmount: 0,
    lighten: {
      amount: 10,
      jump: 5
    },
    darken: {
      amount: 10,
      jump: 10
    },
    rgba: {
      amount: 5,
      jump: 10
    },
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
  getters: {
    property: (state) => {
      return state.property
    },
    value: (state) => {
      return state.value
    },
    minAmount: (state) => {
      return state.minAmount
    },
    lightAmount: (state) => {
      return state.lighten.amount
    },
    lightJump: (state) => {
      return state.lighten.jump
    },
    lighten: (state) => {
      let gradients = []
      let value = '#FF0FFF'
      let valueOb = {}
      if (state.lighten.amount <= 0) {
        state.lighten.amount = 0
      }
      for (let i = 0; i <= state.lighten.amount; i = i + 1) {
        value = Color(state.value).hsl()
        valueOb = value.object() // Objeto para recuperar l
        valueOb.l = valueOb.l + (state.lighten.jump * i)
        value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        if (value !== '#FFFFFF') {
          gradients[i - 1] = { color: value }
        } else {
          return gradients
        }
      }
      return gradients
    },
    lightMax: (state) => {
      let value = '#FF0FFF'
      let valueOb = {}
      let i = 0
      for (i = 0; value !== '#FFFFFF'; i = i + 1) {
        value = Color(state.value).hsl()
        valueOb = value.object() // Objeto para recuperar l
        valueOb.l = valueOb.l + (state.lighten.jump * i)
        value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
      }
      return i - 2 // Shame callback, arreglar
    },
    darken: (state) => {
      let gradients = []
      let value = '#FF0FFF'
      let valueOb = {}
      for (let i = 0; i <= state.darken.amount; i = i + 1) {
        value = Color(state.value).hsl()
        valueOb = value.object() // Objeto para recuperar l
        valueOb.l = valueOb.l - (state.darken.jump * i)
        value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        if (value !== '#000000') {
          gradients[i - 1] = {
            color: value
          }
        }
      }
      return gradients
    }
  },
  mutations: {
    updateValue (state, hex) {
      state.value = hex.target.value
    },
    updateLightAmout (state, amount) {
      state.lighten.amount = amount.target.value
    },
    updateLightJump (state, jump) {
      console.log(jump)
      state.lighten.jump = jump
    }
  },
  actions: {

  }
})
