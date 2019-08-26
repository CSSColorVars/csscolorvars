<template>
  <!-- Hsla Colors -->
  <color-container>
    <article class="card--article">
      <color-header
        slot="header"
        :value="colorActive.value"
        :amount="colorActive.rgba.alpha"
        :updateAmount="updateAlphat"
        :minAmount=0
        :maxAmount=100
        :maxLength= "colorActive.rgba.alpha < 100 ? '4' : '100' "
        label="Alpha:"
        :invertvalue="invertvalue"
      >Transparency
      </color-header>
      <div class="nds-item" slot="jump">
        <v-slider class="opacity--slider"
          :value="colorActive.rgba.alpha"
          @input="updateAlpha"
          max=100
          min=0
          color="transparent"
          label="Hsla"
          thumb-color="#dadada"
          :track-color="colorActive.value"
          always-dirty
        ></v-slider>
      </div>
      <p class="center">{{ hslaValue }}</p>
      <p class="center text-hsl">{{ 'hsla(' + rgbValues[0] + ', ' + rgbValues[1] + '%, ' + rgbValues[2] + '%, ' + colorActive.rgba.alpha + '%);' }}</p>
    </article>
        <div class="card--valuecolor center"
          v-clipboard:copy="hslaValue"
          v-clipboard:success="updateNotification"
          v-clipboard:error="updateError"
          :style="'--hsla-color: hsla(' + rgbValues[0] + ',' + rgbValues[1] + '%, ' + rgbValues[2] + '%, ' + colorActive.rgba.alpha + '%);'"
        >
            <span class="card--textcolor" :style="'color:' + rgbInvertValue + ';'">Copy value {{ styleSheet.selectStyle }}</span>
            <v-btn
              icon ripple
              v-clipboard:copy="hslaValue"
              v-clipboard:success="updateNotification"
              v-clipboard:error="updateError"
            >
              <v-icon :color="rgbInvertValue">file_copy</v-icon>
            </v-btn>
        </div>
  </color-container>
</template>
<script>
import ColorContainer from '@/ui-components/ColorContainer.vue'
import ColorHeader from '@/ui-components/ColorHeader.vue'
import ColorMain from '@/ui-components/ColorMain.vue'
import ColorCard from '@/ui-components/ColorCard.vue'
import ColorJump from '@/ui-components/ColorJump.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NdsHsla',
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorJump
  },
  computed: {
    ...mapState(['styleSheet']),
    ...mapGetters(['colorActive', 'rgbValues', 'rgbaMax', 'invertvalue', 'rgbInvertValue']),
    hslaValue: function () {
      let hslaVal = `hsla(var(--${this.colorActive.property}-HSL), ${this.colorActive.rgba.alpha}%)`
      let styleSheet = this.styleSheet.selectStyle
      if (this.colorActive.rgba.alpha !== 100 && this.colorActive.rgba.alpha !== 0) {
        if (styleSheet === 'CSS') {
          return hslaVal
        } else if (styleSheet === 'SCSS') {
          return `#{'${hslaVal}'}`
        } else {
          return hslaVal
        }
      } else if (this.colorActive.rgba.alpha >= 100) {
        return `var(--${this.colorActive.property}-color)`
      } else if (this.colorActive.rgba.alpha <= 0) {
        return `transparent`
      }
    }
  },
  methods: {
    ...mapMutations(['updateAlpha', 'updateAlphat', 'closeNotification', 'updateNotification', 'updateError'])
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .opacity--slider{
    .v-slider__track{
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: 100%;
        background-repeat-x: no-repeat;
        background-image: url(../assets/alpha_mask.png) !important;
      }
    }
    [value="0"] + .v-slider__track__container .v-slider__track {
      left: 0 !important;
    }
    .v-slider__track__container{
      height: 35px;
      border: solid 1px #707070;
      .v-slider__track, .v-slider__track-fill{
        height: 100%;
      }
    }
    .v-slider__thumb {
      height: 55px;
      border-radius: 0;
      border: solid 1.5px #707070 !important;
      transform: translateY(-50%) scaleX(0.4) scaleY(0.7);
    }
    .v-slider--is-active{
      .v-slider__thumb {
        transform: translateY(-50%) scaleX(0.55) scaleY(0.85);
      }
    }
  }
  .card--textcolor{
    position: relative;
    width: 100%;
  }
  .card--valuecolor{
    position: relative;
    height: 300px;
    width: calc(100% - 2rem);
    margin: auto;
    margin-bottom: 1rem;
    @include from(l) {
      width: 15vw;
      height: 15vw;
      max-height: 220px;
    }
    @include mainCenter;
    @include crossCenter;
    background-image: url(../assets/alpha.png);
    background-repeat: repeat;
    border-radius: 10px;
    box-shadow: 1px 1px 4px 0px #adadad;
    overflow: hidden;
    transition: .5s transform;
    &:active{
      transform: scale(.97);
    }
    &:hover{
      cursor: pointer;
    }
    &::before{
      content: '';
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--hsla-color);
      margin-bottom: 0;
    }
    .v-card__title{
      padding: 0;
      width: 100%;
      &>div{
        width: 100%;
      }
    }
  }
  .card--article {
    width: 100%;
    @include from (l) {
      width: calc(100% - 15vw);
    }
    p{
      font-size: calc(var(--title3) / 1.1);
    }
  }
  p.text-hsl{
    font-size: calc(var(--title3) / 1.45);
    opacity: .65;
  }
</style>
