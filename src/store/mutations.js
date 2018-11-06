import Color from 'color'

export const mutations = {
  updateProperty (state, prop) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      let p = state.palleteColors[i]
      if (p.edit === true) {
        const propValidate = /^[a-zA-ZñÑ]|^[a-zA-ZñÑ][a-zA-ZñÑ_-]+$/
        if (propValidate.test(prop)) {
          p.property = prop
          p.propertyState = true
        } else {
          p.property = 'unnamed'
          p.propertyState = false
        }
      }
    }
  },
  updateValue (state, hex) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      let p = state.palleteColors[i]
      if (p.edit === true) {
        const hexValidate = /^#+([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/
        if (hexValidate.test(hex.target.value)) {
          p.value = hex.target.value
          p.valueState = true
        } else {
          p.valueState = false
        }
        if (hex.target.value === '') {
          p.valueState = true
        }
      }
    }
  },
  updateLightAmount (state, amount) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      let p = state.palleteColors[i]
      if (p.edit === true) {
        let value
        let valueOb
        let j
        for (j = 1; value !== '#FFFFFF'; j++) {
          value = Color(p.value).hsl()
          valueOb = value.object()
          valueOb.l = valueOb.l + (p.lighten.jump * j)
          value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        }
        if (amount.target.value >= 0) {
          if (amount.target.value < j - 2) {
            p.lighten.amount = amount.target.value
          } else {
            p.lighten.amount = j - 2
          }
        } else {
          p.lighten.amount = p.minAmount
        }
      }
    }
  },
  updateLightJump (state, jump) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      let p = state.palleteColors[i]
      if (p.edit === true) {
        p.lighten.jump = jump
      }
    }
  },
  updateDarkAmount (state, amount) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        let value
        let valueOb
        let i
        for (i = 1; value !== '#000000'; i++) {
          value = Color(p.value).hsl()
          valueOb = value.object() // Objeto para recuperar l
          valueOb.l = valueOb.l - (p.darken.jump * i)
          value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        }
        if (amount.target.value >= 0) {
          if (amount.target.value < i - 2) {
            p.darken.amount = amount.target.value
          } else {
            amount.target.value = i - 2
            p.darken.amount = i - 2
          }
        } else {
          p.darken.amount = p.minAmount
        }
      }
    }
  },
  updateDarkJump (state, jump) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        p.darken.jump = jump
      }
    }
  },
  updateAlphat (state, alpha) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        if (alpha.target.value <= 1) {
          p.rgba.alpha = alpha.target.value
        } else {
          alpha.target.value = 1
          p.rgba.alpha = 1
        }
      }
    }
  },
  updateAlpha (state, alpha) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        p.rgba.alpha = alpha
      }
    }
  }
}
