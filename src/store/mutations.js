import Color from 'color'

export const mutations = {
  updateProperty (state, prop) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      if (state.palleteColors[i].edit === true) {
        const propValidate = /^[a-zA-ZñÑ]|^[a-zA-ZñÑ][a-zA-ZñÑ_-]+$/
        if (propValidate.test(prop)) {
          state.palleteColors[i].property = prop
          state.palleteColors[i].propertyState = true
        } else {
          state.palleteColors[i].property = 'unnamed'
          state.palleteColors[i].propertyState = false
        }
      }
    }
  },
  updateValue (state, hex) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      if (state.palleteColors[i].edit === true) {
        const hexValidate = /^#+([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/
        if (hexValidate.test(hex.target.value)) {
          state.palleteColors[i].value = hex.target.value
          state.palleteColors[i].valueState = true
        } else {
          state.palleteColors[i].valueState = false
        }
        if (hex.target.value === '') {
          state.palleteColors[i].valueState = true
        }
      }
    }
  },
  updateLightAmount (state, amount) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      if (state.palleteColors[i].edit === true) {
        let value
        let valueOb
        let j
        for (j = 1; value !== '#FFFFFF'; j++) {
          value = Color(state.palleteColors[i].value).hsl()
          valueOb = value.object()
          valueOb.l = valueOb.l + (state.palleteColors[i].lighten.jump * j)
          value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        }
        if (amount.target.value >= 0) {
          if (amount.target.value < j - 2) {
            state.palleteColors[i].lighten.amount = amount.target.value
          } else {
            state.palleteColors[i].lighten.amount = j - 2
          }
        } else {
          state.palleteColors[i].lighten.amount = state.palleteColors[i].minAmount
        }
      }
    }
  },
  updateLightJump (state, jump) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      if (state.palleteColors[i].edit === true) {
        state.palleteColors[i].lighten.jump = jump
      }
    }
  },
  updateDarkAmount (state, amount) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        let value
        let valueOb
        let i
        for (i = 1; value !== '#000000'; i++) {
          value = Color(state.palleteColors[s].value).hsl()
          valueOb = value.object() // Objeto para recuperar l
          valueOb.l = valueOb.l - (state.palleteColors[s].darken.jump * i)
          value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        }
        if (amount.target.value >= 0) {
          if (amount.target.value < i - 2) {
            state.palleteColors[s].darken.amount = amount.target.value
          } else {
            amount.target.value = i - 2
            state.palleteColors[s].darken.amount = i - 2
          }
        } else {
          state.palleteColors[s].darken.amount = state.palleteColors[s].minAmount
        }
      }
    }
  },
  updateDarkJump (state, jump) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        state.palleteColors[s].darken.jump = jump
      }
    }
  },
  updateAlphat (state, alpha) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        if (alpha.target.value <= 1) {
          state.palleteColors[s].rgba.alpha = alpha.target.value
        } else {
          alpha.target.value = 1
          state.palleteColors[s].rgba.alpha = 1
        }
      }
    }
  },
  updateAlpha (state, alpha) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        state.palleteColors[s].rgba.alpha = alpha
      }
    }
  }
}
