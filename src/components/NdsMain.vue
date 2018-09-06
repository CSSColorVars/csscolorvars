<template>
  <main class="ed-container ed-item l-70 application theme--light">
    <h2>{{hex}} jajaj <br></h2>
    <h3>{{rgb}} sdasds</h3>
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
      exa: this.rgb
    }
  },
  props: ['hex'],
  computed: {
    rgb: function () {
      const el = []
      for (let i = 0; i < 50; i = i + 2) {
        el[i] = Color(this.hex).darken(0.1 * i).hex() // Se debe crear objetos para ciclos
        el[i + 1] = Color(this.hex).lighten(0.1 * (i + 1)).hex() // Se debe crear objetos para ciclos
      }
      return el
    }
  }
}
</script>
<style lang="scss">

</style>
