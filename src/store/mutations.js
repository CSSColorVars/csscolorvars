import { setAmount } from './util/functions'

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
        setAmount(p, amount)
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
        setAmount(p, amount, 'darken')
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
