import Color from 'color'
import { gradientColors } from './util/functions'

export const getters = {
  invertvalue: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        let value
        let invertVal
        let invertValOb
        value = Color(p.value).hsl()
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
        let value
        let valueOb
        let i
        for (i = 1; value !== '#FFFFFF'; i++) {
          value = Color(p.value).hsl()
          valueOb = value.object() // Objeto para recuperar l
          valueOb.l = valueOb.l + (p.lighten.jump * i)
          value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        }
        return i - 2
      }
    }
  },
  darkMax: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        let value
        let valueOb
        let i
        for (i = 1; value !== '#000000'; i++) {
          value = Color(p.value).hsl()
          valueOb = value.object() // Objeto para recuperar l
          valueOb.l = valueOb.l - (p.darken.jump * i)
          value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        }
        return i - 2
      }
    }
  },
  rgbValues: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        let values
        values = Color(p.value).object()
        return values
      }
    }
  },
  rgbInvertValue: (state) => {
    for (let s = 0; s < state.palleteColors.length; s++) {
      let p = state.palleteColors[s]
      if (p.edit === true) {
        let value
        let invertVal
        let invertValOb
        value = Color(p.value).hsl()
        invertValOb = value.grayscale().negate().hsl().object()
        value = value.hex()
        if (p.rgba.alpha > 0.5) {
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
