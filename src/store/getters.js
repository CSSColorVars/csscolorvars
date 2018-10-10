import Color from 'color'

export const getters = {
  property: (state) => { return state.property },
  value: (state) => { return state.value },
  minAmount: (state) => { return state.minAmount },
  minJump: (state) => { return state.minJump },

  lighten: (state) => {
    let value
    let invertVal
    let valueOb
    let invertValOb
    let gradients = []
    for (let i = 1; i <= state.lighten.amount; i++) {
      value = Color(state.value).hsl()
      valueOb = value.object()
      valueOb.l = valueOb.l + (state.lighten.jump * i)
      value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l })
      invertValOb = value.grayscale().negate().hsl().object()
      value = value.hex()
      if (invertValOb.l > 50) {
        invertVal = '#f1f1f1'
      } else {
        invertVal = '#1d1d1d'
      }
      if (value !== '#FFFFFF') {
        gradients[i - 1] = {
          color: value,
          invert: invertVal
        }
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
    return i - 2
  },

  darken: (state) => {
    let value
    let invertVal
    let valueOb
    let invertValOb
    let gradients = []
    for (let i = 1; i <= state.darken.amount; i++) {
      value = Color(state.value).hsl()
      valueOb = value.object()
      valueOb.l = valueOb.l - (state.darken.jump * i)
      value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l })
      invertValOb = value.grayscale().negate().hsl().object()
      value = value.hex()
      if (invertValOb.l > 50) {
        invertVal = '#f1f1f1'
      } else {
        invertVal = '#1d1d1d'
      }
      if (value !== '#000000') {
        gradients[i - 1] = {
          color: value,
          invert: invertVal
        }
      } else {
        return gradients
      }
    }
    return gradients
  },
  darkMax: (state) => {
    let value
    let valueOb
    let i
    for (i = 1; value !== '#000000'; i++) {
      value = Color(state.value).hsl()
      valueOb = value.object() // Objeto para recuperar l
      valueOb.l = valueOb.l - (state.darken.jump * i)
      value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
    }
    return i - 2
  },
  rgba: (state) => {
    let value
    let gradients = []
    let decrement = 1.00
    for (let i = 1; decrement > 0.01 * state.rgba.jump; i++) {
      decrement = (decrement - (0.01 * state.rgba.jump)).toFixed(2) // Punto de amount {0.01 , 0.1}
      value = Color(state.value).alpha(decrement).string()
      gradients[i - 1] = { color: value }
    }
    return gradients
  },
  rgbaMax: (state) => {
    return 99
  }
}
