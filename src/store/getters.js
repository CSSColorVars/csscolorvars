import Color from 'color'
import { gradientColors } from './util/functions'

export const getters = {
  invertvalue: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        let value
        let invertVal
        let invertValOb
        value = Color(state.palleteColors[s].value).hsl()
        invertValOb = value.grayscale().negate().hsl().object()
        value = value.hex()
        if (invertValOb.l > 50) {
          invertVal = '#f1f1f1'
        } else {
          invertVal = '#1d1d1d'
        }
        return invertVal
      }
    }
  },
  lighten: (state, mutations) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        return gradientColors(p)
      }
    }
  },
  lightMax: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        let value
        let valueOb
        let i
        for (i = 1; value !== '#FFFFFF'; i++) {
          value = Color(state.palleteColors[s].value).hsl()
          valueOb = value.object() // Objeto para recuperar l
          valueOb.l = valueOb.l + (state.palleteColors[s].lighten.jump * i)
          value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        }
        return i - 2
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
  darkMax: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        let value
        let valueOb
        let i
        for (i = 1; value !== '#000000'; i++) {
          value = Color(state.palleteColors[s].value).hsl()
          valueOb = value.object() // Objeto para recuperar l
          valueOb.l = valueOb.l - (state.palleteColors[s].darken.jump * i)
          value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        }
        return i - 2
      }
    }
  },
  rgbValues: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        let values
        values = Color(state.palleteColors[s].value).object()
        return values
      }
    }
  },
  rgbInvertValue: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      if (state.palleteColors[s].edit === true) {
        let value
        let invertVal
        let invertValOb
        value = Color(state.palleteColors[s].value).hsl()
        invertValOb = value.grayscale().negate().hsl().object()
        value = value.hex()
        if (state.palleteColors[s].rgba.alpha > 0.5) {
          if (invertValOb.l > 50) {
            invertVal = '#f1f1f1'
          } else {
            invertVal = '#1d1d1d'
          }
        } else {
          invertVal = '#1d1d1d'
        }
        return invertVal
      }
    }
  }
}
