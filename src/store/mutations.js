export const mutations = {
  updateValue (state, hex) {
    state.value = hex.target.value
  },
  updateLightAmount (state, amount) {
    state.lighten.amount = amount.target.value
  },
  updateLightJump (state, jump) {
    state.lighten.jump = jump
  }
}
