const state = {
  notify: false, // notification copy
  timeout: 3000
}

const mutations = {
  updateNotification (state) {
    if (state.timeout === 0) {
      state.notify = false
    } else {
      if (state.notify === true) {
        state.notify = false
        setTimeout(function () { state.notify = true }, 300)
      } else {
        state.notify = true
      }
    }
  },
  closeNotification (state) {
    state.notify = false
  }
}

export const notifyCopy = {
  state,
  mutations
}
