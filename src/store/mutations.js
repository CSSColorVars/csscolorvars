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
    state.lighten.amount = amount.target.value
  },
  updateLightJump (state, jump) {
    state.lighten.jump = jump
  },
  updateDarkAmount (state, amount) {
    state.darken.amount = amount.target.value
  },
  updateDarkJump (state, jump) {
    state.darken.jump = jump
  },
  updateAlphat (state, alpha) {
    state.rgba.alpha = alpha.target.value
  },
  updateAlpha (state, alpha) {
    state.rgba.alpha = alpha
  }
}
