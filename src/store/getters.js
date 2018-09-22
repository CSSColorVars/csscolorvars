import Color from 'color'

export const getters = {
  property: (state) => {
    return state.property
  },
  value: (state) => {
    return state.value
  },
  minAmount: (state) => {
    return state.minAmount
  },
  minJump: (state) => {
    return state.minJump
  },
  maxJump: (state) => {
    return state.maxJump
  },
  lightAmount: (state) => {
    return state.lighten.amount
  },
  lightJump: (state) => {
    return state.lighten.jump
  },
  lighten: (state) => {
    let value
    let valueOb
    let gradients = []
    if (state.lighten.amount <= 0) { state.lighten.amount = 0 }
    for (let i = 1; i <= state.lighten.amount; i++) {
      value = Color(state.value).hsl()
      valueOb = value.object()
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
    let value
    let valueOb
    let i
    for (i = 1; value !== '#FFFFFF'; i++) {
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
}
