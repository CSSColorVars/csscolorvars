<template>
  <main class="main-main ed-container ed-item l-80 application theme--light">
    <!-- Light Colors -->
    <section class="ed-container ed-item l-1-3 cross-start">
      <div class="ed-item">

      </div>
      <div class="ed-item" v-for = "item in lighten" :key="item.color">
        <v-card class="card--color" :color="item.color">
          <v-card-title primary-title>
            {{item.color}}
          </v-card-title>
        </v-card>
      </div>
    </section>
    <!-- Dark Colors -->
    <section class="ed-container ed-item l-1-3 cross-start">
      <div class="ed-item" v-for = "item in darken" :key="item.color">
        <v-card class="card--color" :color="item.color">
          <v-card-title primary-title>
            {{item.color}}
          </v-card-title>
        </v-card>
      </div>
    </section>
    <!-- Light Colors -->
    <section class="ed-container ed-item l-1-3 cross-start">
      <div class="ed-item" v-for = "item in lighten" :key="item.color">
        <v-card class="card--color" :color="item.color">
          <v-card-title primary-title>
            {{item.color}}
          </v-card-title>
        </v-card>
      </div>
    </section>
  </main>
</template>
<script>
import Color from 'color'
export default {
  name: 'NdsMain',
  computed: {
    hex () {
      return this.$store.state.value
    },
    lighten: function () {
      let gradients = []
      let value = '#FF0FFF'
      let valueOb = {}
      for (let i = 1; i <= 20; i = i + 1) {
        value = Color(this.$store.state.value).hsl()
        valueOb = value.object() // Objeto para recuperar l de 30 en 30
        valueOb.l = valueOb.l + (6 * i)
        value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        if (value !== '#FFFFFF') {
          gradients[i - 1] = {
            color: value
          }
        }
      }
      return gradients
    },
    darken: function () {
      let gradients = []
      let value = '#FF0FFF'
      let valueOb = {}
      for (let i = 1; i <= 20; i = i + 1) {
        value = Color(this.$store.state.value).hsl()
        valueOb = value.object() // Objeto para recuperar l de 30 en 30
        valueOb.l = valueOb.l - (6 * i)
        value = Color({ h: valueOb.h, s: valueOb.s, l: valueOb.l }).hex()
        if (value !== '#000000') {
          gradients[i - 1] = {
            color: value
          }
        }
      }
      return gradients
    }
  }
}
</script>
<style lang="scss">
  .main-main{
    padding-top: 1rem;
    align-content: flex-start;
    max-height: 100vh;
  }
  .card--color{
    height: 10srem;
    border: solid 1px;
    margin-bottom: .5rem;
  }
</style>
