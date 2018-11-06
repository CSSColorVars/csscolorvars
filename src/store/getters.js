import { gradientColors, gradientMax, invertVal, rgbaInvertVal, rbgObject } from './util/functionsGet'

export const getters = {
  invertvalue: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return invertVal(p)
      }
    }
  },
  lighten: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return gradientColors(p)
      }
    }
  },
  darken: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return gradientColors(p, 'darken')
      }
    }
  },
  lightMax: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return gradientMax(p)
      }
    }
  },
  darkMax: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return gradientMax(p, 'darken')
      }
    }
  },
  rgbValues: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return rbgObject(p)
      }
    }
  },
  rgbInvertValue: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return rgbaInvertVal(p)
      }
    }
  }
}
