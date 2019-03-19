import Color from 'color'

/*
 *  Local Functions
 */
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
  if (invertValOb.l > 35) {
    invertVal = '#f1f1f1'
  } else {
    invertVal = '#3e3e3e'
  }
  return invertVal
}
const hslValue = (jump, gradient, p) => {
  let value = Color(p.value).hsl()
  let valueOb = value.object()
  if (gradient === 'darken') {
    valueOb.l = valueOb.l - jump
  } else {
    valueOb.l = valueOb.l + jump
  }
  value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l })
  return value
}

/*
 *  Getters Functions
 */
export const gradientColors = (p, gradient = 'lighten') => {
  let value
  let invertVal
  let invertValOb
  let gradients = []
  let sg = gradientActive(gradient, p).selectGradient
  let hashColor = gradientActive(gradient, p).hashColor
  for (let i = 1; i <= sg.amount; i++) {
    let jump = sg.jump * i
    value = hslValue(jump, gradient, p)
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
export const invertVal = (p) => {
  let value
  let invertVal
  let invertValOb
  value = Color(p.value).hsl()
  invertValOb = value.grayscale().negate().hsl().object()
  value = value.hex()
  if (invertValOb.l > 35) {
    invertVal = '#f1f1f1'
  } else {
    invertVal = '#3e3e3e'
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
  if (p.rgba.alpha > 35) {
    invertVal = valInvert(invertVal, invertValOb)
  } else {
    invertVal = '#3e3e3e'
  }
  return invertVal
}
export const lightenInvertVal = (p) => {
  let value
  let invertVal
  let invertValOb
  value = Color(p.value).hsl()
  invertValOb = value.grayscale().negate().hsl().object()
  value = value.hex()
  if (invertValOb.l - p.lighten.jump > 35) {
    invertVal = '#f1f1f1'
  } else {
    invertVal = '#3e3e3e'
  }
  return invertVal
}
export const darkenInvertVal = (p) => {
  let value
  let invertVal
  let invertValOb
  value = Color(p.value).hsl()
  invertValOb = value.grayscale().negate().hsl().object()
  value = value.hex()
  if (invertValOb.l + p.darken.jump > 35) {
    invertVal = '#f1f1f1'
  } else {
    invertVal = '#3e3e3e'
  }
  return invertVal
}
export const rbgObject = (p) => {
  let values
  values = Color(p.value).object()
  return values
}

export const hslObject = (p) => {
  let values
  values = Color(p.value).hsl().round().array()
  return values
}
/*
 *  Mutations Functions
 */
