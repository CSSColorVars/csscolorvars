const state = {
  message: '',
  notify: false,
  timeout: 4000
}

const mutations = {
  closeNotification (state) {
    state.notify = false
  },
  updateNotification (state, copy) {
    state.message = 'You just copied: ' + copy.text
    if (state.notify === true) {
      state.notify = false
      setTimeout(function () { state.notify = true }, 300)
    } else {
      state.notify = true
    }
  },
  updateError (state) {
    state.message = 'Failed to copy'
  }
}

export const notifyCopy = {
  state,
  mutations
}
