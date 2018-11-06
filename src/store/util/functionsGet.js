import Color from 'color'

const gradientActive = (gradient, p) => {
  let selectGradient
  let hashColor
  if (gradient === 'darken') {
    selectGradient = p.darken
    hashColor = '#000000'
  } else {
    selectGradient = p.lighten
    hashColor = '#FFFFFF'
  }
  return { selectGradient, hashColor }
}
const valInvert = (invertVal, invertValOb) => {
  if (invertValOb.l > 50) {
    invertVal = '#f1f1f1'
  } else {
    invertVal = '#1d1d1d'
  }
  return invertVal
}
export const gradientColors = (p, gradient = 'lighten') => {
  let value
  let invertVal
  let valueOb
  let invertValOb
  let gradients = []
  let sg = gradientActive(gradient, p).selectGradient
  let hashColor = gradientActive(gradient, p).hashColor
  for (let i = 1; i <= sg.amount; i++) {
    value = Color(p.value).hsl()
    valueOb = value.object()
    if (gradient === 'darken') {
      valueOb.l = valueOb.l - (sg.jump * i)
    } else {
      valueOb.l = valueOb.l + (sg.jump * i)
    }
    value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l })
    invertValOb = value.grayscale().negate().hsl().object()
    value = value.hex()
    invertVal = valInvert(invertVal, invertValOb)
    if (value !== hashColor) {
      gradients[i - 1] = {
        color: value,
        invert: invertVal
      }
    } else {
      return gradients
    }
  }
  return gradients
}
export const gradientMax = (p, gradient = 'lighten') => {
  let value
  let valueOb
  let i
  let sg = gradientActive(gradient, p).selectGradient
  let hashColor = gradientActive(gradient, p).hashColor
  for (i = 1; value !== hashColor; i++) {
    value = Color(p.value).hsl()
    valueOb = value.object()
    if (gradient === 'darken') {
      valueOb.l = valueOb.l - (sg.jump * i)
    } else {
      valueOb.l = valueOb.l + (sg.jump * i)
    }
    value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l })
    value = value.hex()
  }
  return i - 2
}
export const invertVal = (p) => {
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
export const rgbaInvertVal = (p) => {
  let value
  let invertVal
  let invertValOb
  value = Color(p.value).hsl()
  invertValOb = value.grayscale().negate().hsl().object()
  value = value.hex()
  if (p.rgba.alpha > 0.5) {
    invertVal = valInvert(invertVal, invertValOb)
  } else {
    invertVal = '#1d1d1d'
  }
  return invertVal
}
export const rbgObject = (p) => {
  let values
  values = Color(p.value).object()
  return values
}
