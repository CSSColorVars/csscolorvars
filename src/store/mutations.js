import Color from 'color'

export const mutations = {
  updateProperty (state, prop) {
    if (prop !== '') {
      state.property = prop
    } else {
      state.property = 'unnamed'
    }
  },
  updateValue (state, hex) {
    state.value = hex.target.value
  },
  updateLightAmount (state, amount) {
    let value
    let valueOb
    let i
    for (i = 1; value !== '#FFFFFF'; i++) {
      value = Color(state.value).hsl()
      valueOb = value.object()
      valueOb.l = valueOb.l + (state.lighten.jump * i)
      value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
    }
    if (amount.target.value >= 0) {
      if (amount.target.value < i - 2) {
        state.lighten.amount = amount.target.value
      } else {
        state.lighten.amount = i - 2
      }
    } else {
      state.lighten.amount = state.minAmount
    }
  },
  updateLightJump (state, jump) {
    state.lighten.jump = jump
  },
  updateDarkAmount (state, amount) {
    let value
    let valueOb
    let i
    for (i = 1; value !== '#000000'; i++) {
      value = Color(state.value).hsl()
      valueOb = value.object() // Objeto para recuperar l
      valueOb.l = valueOb.l - (state.darken.jump * i)
      value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
    }
    if (amount.target.value >= 0) {
      if (amount.target.value < i - 2) {
        state.darken.amount = amount.target.value
      } else {
        amount.target.value = i - 2
        state.darken.amount = i - 2
      }
    } else {
      state.darken.amount = state.minAmount
    }
  },
  updateDarkJump (state, jump) {
    state.darken.jump = jump
  },
  updateAlphat (state, alpha) {
    if (alpha.target.value <= 1) {
      state.rgba.alpha = alpha.target.value
    } else {
      alpha.target.value = 1
      state.rgba.alpha = 1
    }
  },
  updateAlpha (state, alpha) {
    state.rgba.alpha = alpha
  }
}
