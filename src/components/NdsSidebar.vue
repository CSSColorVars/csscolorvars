<template>
  <aside class="ed-item l-30 cross-center sidebar">
    <figure
      class="ed-item l-60 m-40 s-75 figure--color l-block to-center"
      :style="'background:' + hexColor + ';'"
    >
    </figure>
    <v-text-field
      label="HEX"
      outline
      color="#FFF"
      class="ed-item l-block"
      v-model="valueHex"
      @input="hexColors"
    ></v-text-field>
    <div class="ed-item">
      <label for="">Hue <span v-text="hsl.hue + '°'"></span></label>
      <v-slider
        v-model="hsl.hue"
        color="#FFF"
        :max="359"
        :min="0"
        :step="1"
      ></v-slider>
    </div>
    <div class="ed-item">
      <label for="">Saturation <span v-text="hsl.saturation + '%'"></span></label>
      <v-slider
        v-model="hsl.saturation"
        color="#FFF"
        :max="100"
        :min="0"
        :step="1"
      ></v-slider>
    </div>
    <div class="ed-item">
      <label for="">Lightness <span v-text="hsl.lightness + '%'"></span></label>
      <v-slider
        v-model="hsl.lightness"
        color="#FFF"
        :max="100"
        :min="0"
        :step="1"
      ></v-slider>
    </div>
    <h2>{{valueHex}}</h2>
  </aside>
</template>
<script>
import Color from 'color'

export default {
  name: 'NdsSidebar',
  data () {
    return {
      hsl: {
        hue: 180,
        saturation: 50,
        lightness: 50
      },
      valueHex: ''
    }
  },
  created: function () {
    this.valueHex = Color('hsl(' + this.hsl.hue + ',' + this.hsl.saturation + '%, ' + this.hsl.lightness + '%)').hex()
  },
  computed: {
    hexColor: function () {
      return Color('hsl(' + this.hsl.hue + ',' + this.hsl.saturation + '%, ' + this.hsl.lightness + '%)').hex()
    }
  },
  methods: {
    hexColors () {
      this.valueHex = Color('hsl(' + this.hsl.hue + ',' + this.hsl.saturation + '%, ' + this.hsl.lightness + '%)').hex()
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .sidebar{
    background: #3a3a3a;
    height: auto;
    @include from(l){
      height: 100vh;
    }
  }
  .figure--color{
    height: 180px;
    border: solid 2px #FFF;
    border-radius: .5rem;
  }
</style>
