import Color from 'color'

export const gradientColors = (p, gradient = 'lighten') => {
  let value
  let invertVal
  let valueOb
  let invertValOb
  let gradients = []
  let pg
  let hashColor
  if (gradient === 'darken') {
    pg = p.darken
    hashColor = '#000000'
  } else {
    pg = p.lighten
    hashColor = '#FFFFFF'
  }
  for (let i = 1; i <= pg.amount; i++) {
    value = Color(p.value).hsl()
    valueOb = value.object()
    if (gradient === 'darken') {
      valueOb.l = valueOb.l - (pg.jump * i)
    } else {
      valueOb.l = valueOb.l + (pg.jump * i)
    }
    value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l })
    invertValOb = value.grayscale().negate().hsl().object()
    value = value.hex()
    if (invertValOb.l > 50) {
      invertVal = '#f1f1f1'
    } else {
      invertVal = '#1d1d1d'
    }
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
