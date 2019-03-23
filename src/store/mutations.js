// import {  } from './util/functions'

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
          p.lighten.jump = 0
          p.darken.jump = 0
          p.rgba.alpha = 50
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
  updateLightJump (state, jump) {
    for (let i = 0; i < state.palleteColors.length; i++) {
      let p = state.palleteColors[i]
      if (p.edit === true) {
        p.lighten.jump = jump
      }
    }
  },
  updateLightJumpt (state, lighten) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        if (lighten.target.value <= 100) {
          p.lighten.jump = lighten.target.value
        } else {
          lighten.target.value = 100
          p.lighten.jump = 100
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
  updateDarkJumpt (state, darken) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        if (darken.target.value <= 100) {
          p.darken.jump = darken.target.value
        } else {
          darken.target.value = 100
          p.darken.jump = 100
        }
      }
    }
  },
  updateAlphat (state, alpha) {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        if (alpha.target.value <= 100) {
          p.rgba.alpha = alpha.target.value
        } else {
          alpha.target.value = 100
          p.rgba.alpha = 100
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
