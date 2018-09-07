<template>
  <main class="ed-container ed-item l-70 application theme--light">
    <h2>{{hex}} jajaj <br></h2>
    <v-card class="ed-item" :color="hex">
      <v-card-title primary-title>
        SELECIONADO: {{hex}}
      </v-card-title>
    </v-card>
    <v-card class="ed-item card--color" v-for = "item in lighten" :key="item.color" :color="item.color">
      <v-card-title primary-title>
        {{item.color}}
      </v-card-title>
    </v-card>
    <h3>{{darken}} sdasds</h3>
    <v-card class="ed-item" v-for = "item in darken" :key="item.color" :color="item.color">
      <v-card-title primary-title>
        {{item.color}}
      </v-card-title>
    </v-card>
    <v-checkbox class="ed-item" :label="`Checkbox 1: ${checkbox1.toString()}`" v-model="checkbox1"></v-checkbox>
    <v-checkbox class="ed-item" :label="`Checkbox 2: ${checkbox2.toString()}`" v-model="checkbox2"></v-checkbox>
  </main>
</template>
<script>
import Color from 'color'
export default {
  name: 'NdsMain',
  data () {
    return {
      checkbox1: true,
      checkbox2: false,
      exa: this.darken
    }
  },
  props: ['hex'],
  computed: {
    lighten: function () {
      let gradients = []
      let value = '#FF0FFF'
      let valueOb = {}
      // let aux = value
      console.log('COLORES HLS')
      for (let i = 1; i <= 5; i = i + 1) {
        value = Color(this.hex).hsl()
        valueOb = value.object() // Objeto para recuperar l de 30 en 30
        valueOb.l = valueOb.l + (6 * i)
        console.log(valueOb.l)
        value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        if (value !== '#FFFFFF') {
          gradients[i - 1] = {
            color: value
          }
        }
        // aux = value
      }
      return gradients
    },
    darken: function () {
      let gradients = []
      let value = '#FF0FFF'
      // let aux = value
      for (let i = 0; i < 5; i = i + 1) {
        value = Color(this.hex).hsl().lighten(0.3 * i)
        console.log(value.string())
        value = value.hex()
        if (value !== '#000000') {
          gradients[i] = {
            color: value
          }
        }
        // aux = value
        // console.log(aux)
        return gradients
      }
    }
  }
}
</script>
<style lang="scss">
  .card--color{
    border: solid 1px;
    margin-bottom: .5rem;
  }
</style>
