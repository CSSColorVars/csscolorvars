export const mutations = {
  updateProperty (state, prop) {
    if (prop !== '') {
      state.property = prop
    } else {
      state.property = 'default'
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
  updateRgbaAmount (state, amount) {
    state.rgba.amount = amount.target.value
  },
  updateRgbaJump (state, jump) {
    state.rgba.jump = jump
  }
}
