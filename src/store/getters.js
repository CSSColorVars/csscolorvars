import { gradientColors, invertVal, rgbaInvertVal, hslObject, lightenInvertVal, darkenInvertVal } from './util/functions'

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
  rgbValues: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return hslObject(p)
      }
    }
  },
  hslValues: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return hslObject(p)
      }
    }
  },
  lightenInvertValue: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return lightenInvertVal(p)
      }
    }
  },
  darkenInvertValue: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return darkenInvertVal(p)
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
