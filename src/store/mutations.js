export const mutations = {
  updateProperty (state, prop) {
    const propValidate = /^[a-zA-ZñÑ]|^[a-zA-ZñÑ][a-zA-ZñÑ_-]+$/
    let cont = 0
    let p
    let propActive
    for (let i = 0; i < state.palleteColors.length; i++) {
      p = state.palleteColors[i]
      if (p.edit === true) {
        console.log('prop:' + prop)
        console.log('state:' + p.property)
        if (prop !== '' && propValidate.test(prop) && p.property !== prop) {
          p.property = prop
          propActive = i
          p.propertyState = true
        } else if (prop === '') {
          p.property = ''
          p.propertyState = false
          state.errorMesagge = 'Please enter the name of the property'
        } else if (!propValidate.test(prop)) {
          p.propertyState = false
          state.errorMesagge = 'Enter a letter in the first character'
        }
      }
      if (p.property === prop && propActive !== i) {
        cont = cont + 1
      }
    }
    if (cont < 1) {
      for (let i = 0; i < state.palleteColors.length; i++) {
        p = state.palleteColors[i]
        p.propertyState = true
      }
    } else {
      p = state.palleteColors[propActive]
      p.propertyState = false
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
