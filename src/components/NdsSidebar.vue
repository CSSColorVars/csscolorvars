<template>
  <header class="nds-container nds-item l-20 header-sidebar application theme--dark">
    <div class="nds-item l-85 m-30 s-60 cross-end l-block">
      <img :src="require('../assets/cssColorVars.png')" alt="CSS Color Vars">
    </div>
    <div class="nds-item l-65 m-25 s-55 cross-end">
      <v-select
        dark
        v-model="select"
        @change="UPDATE_STYLESHEET(select)"
        :items="items"
        label="Style sheet:"
      ></v-select>
    </div>
    <div class="header nds-container nds-item l-100 m-70 s-100">
      <div class="header--color nds-item l-100 m-50 s-35">
        <input type="color" :value="standardValue" @input="updateValue" />
      </div>
      <form class="header--form nds-container">
        <color-property
          dark
          :property="colorActive.property"
          :update="updateProperty"
          :state="colorActive.propertyState"
          :errorMesagge = "errorMesagge"
        ></color-property>
        <color-value
          dark
          :value="colorActive.value"
          :update="updateValue"
          :state="colorActive.valueState"
        ></color-value>
      </form>
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import Color from 'color'
import ColorProperty from '@/ui-components/ColorProperty.vue'
import ColorValue from '@/ui-components/ColorValue.vue'
export default {
  name: 'NdsSidebar',
  data () {
    return {
      select: 'CSS',
      items: [
        'CSS',
        'SCSS'
        // 'SASS',
        // 'STYLUS',
        // 'LESS'
      ]
    }
  },
  mounted: function () {
    this.select = this.styleSheet.selectStyle
  },
  components: {
    ColorProperty,
    ColorValue
  },
  computed: {
    ...mapState(['errorMesagge', 'styleSheet']),
    ...mapGetters(['colorActive']),
    standardValue: function () {
      return Color(this.colorActive.value).hex()
    }
  },
  methods: {
    ...mapMutations(['UPDATE_STYLESHEET', 'updateProperty', 'updateValue'])
  }
}
</script>

<style lang="scss">
  @import 'src/sass/mixins.scss';
  .nds-item.header-sidebar{
    padding-right: 80px;
    @include mainCenter;
    @include from(l){
      height: 100vh;
      overflow: auto;
      padding-right: 0;
      @include crossCenter
    }
  }
  .header{
    max-width: 450px;
    @include mainCenter;
    &--color{
      @include mainCenter;
      @include crossCenter;
      input[type="color"]{
        --minwh-color: 75px;
        --maxwh-color: 140px;
        --wh-color: 25vw;
        width: var(--wh-color);
        height: var(--wh-color);
        min-width: var(--minwh-color);
        min-height: var(--minwh-color);
        max-width: var(--maxwh-color);
        max-height: var(--maxwh-color);
        padding: 0 1.5px;
        border: solid 1px #C2C2C2;
        border-radius: .3rem;
        cursor: pointer;
        &:hover, &:active, &:focus, &:active{
          border: solid 1.5px #FFF;
          outline: none;
        }
        @include from(m){
          --wh-color: 140px;
        }
        @include from(l){
          --maxwh-color: 300px;
          --wh-color: calc(20vw - 6rem);
        }
      }
    }
    &--form{
      margin-top: 1rem;
      max-width: 180px;
    }
  }
  .v-text-field__suffix {
    padding-left: 4px;
    white-space: nowrap;
    padding-top: 14px;
    font-weight: 300;
    font-size: 1.3rem;
  }
</style>
