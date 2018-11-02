const state = [
  {
    property: 'primary',
    propertyState: true,
    value: '#1671b9',
    valueState: true,
    minAmount: 0,
    minJump: 1,
    lighten: {
      amount: 10,
      jump: 5
    },
    darken: {
      amount: 10,
      jump: 5
    },
    rgba: {
      alpha: 0.5,
      max: 1,
      step: 0.01
    },
    edit: true
  }
]

const getters = {
  colorActive: (state) => {
    for (let i = 0; i < state.length; i++) {
      if (state[i].edit === true) {
        return state[i]
      }
    }
  }
}

const mutations = {
  ADD_COLOR (state, payload) {
    state.push({
      edit: payload.edit,
      property: payload.property,
      propertyState: payload.propertyState,
      value: payload.value,
      valueState: payload.valueState,
      minAmount: payload.minAmount,
      minJump: payload.minJump,
      lighten: payload.lighten,
      darken: payload.darken,
      rgba: payload.rgba
    })
  },
  TOGGLE_COLOR (state, payload) {
    for (let i = 0; i < state.length; i++) {
      state[i].edit = false
    }
    state[payload].edit = true
  },
  DELETE_COLOR (state, payload) {
    for (let i = 0; i < state.length; i++) {
      if (state[i].edit !== true) {
        if (state.length > 1) {
          state.splice(payload, 1)
        }
      }
    }
  }
}

export const palleteColors = {
  state,
  getters,
  mutations
}
