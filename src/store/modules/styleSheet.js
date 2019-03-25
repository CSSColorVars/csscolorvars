const state = {
  selectStyle: 'CSS'
}

const mutations = {
  UPDATE_STYLESHEET (state, payload) {
    if (payload === 'CSS') {
      state.selectStyle = 'CSS'
    } else if (payload === 'SCSS') {
      state.selectStyle = 'SCSS'
    } else if (payload === 'SASS') {
      state.selectStyle = 'CSS'
    } else if (payload === 'STYLUS') {
      state.selectStyle = 'CSS'
    } else if (payload === 'LESS') {
      state.selectStyle = 'CSS'
    } else {
      state.selectStyle = 'CSS'
    }
  }
}

export const styleSheet = {
  state,
  mutations
}
