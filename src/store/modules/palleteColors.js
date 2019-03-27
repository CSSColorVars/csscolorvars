const state = [
  {
    property: 'primary',
    propertyState: true,
    value: '#663399', // In honor with Rebecca Meyer
    valueState: true,
    minJump: 0,
    lighten: {
      jump: 10
    },
    darken: {
      jump: 10
    },
    rgba: {
      alpha: 50
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
    if (state.length > 1) {
      if (!state[payload].edit) {
        state.splice(payload, 1)
      }
    }
  }
}

export const palleteColors = {
  state,
  getters,
  mutations
}
