<template>
  <!-- Rgba Colors -->
  <color-container>
    <color-header
      slot="header"
      :value="colorActive.value"
      :amount="colorActive.rgba.alpha"
      :updateAmount="updateAlphat"
      :minAmount="colorActive.minAmount*100"
      :maxAmount="colorActive.rgba.max"
      :maxLength= "colorActive.rgba.alpha*100 < 100 ? '4' : '100' "
      label="Alpha:"
      :step="colorActive.rgba.step"
      :invertvalue="invertvalue"
    >Rgba color
    </color-header>
    <div class="nds-item" slot="jump">
      <v-slider class="opacity--slider"
        :value="colorActive.rgba.alpha"
        @input="updateAlpha"
        max=100
        min=0
        color="transparent"
        label="Rbga"
        thumb-color="#dadada"
        :track-color="colorActive.value"
        always-dirty
      ></v-slider>
    </div>
    <color-main>
      <div class="nds-item l-block">
        <p class="center">rgba(var(--{{ colorActive.property }}-RGB), {{ colorActive.rgba.alpha/100 }})</p>
        <div class="card--valuecolor center"
          :color="'rgba(' + rgbValues.r + ',' + rgbValues.g + ',' + rgbValues.b + ',' + colorActive.rgba.alpha + ')'"
          v-clipboard:copy="`rgba(var(--rgb-${colorActive.property}), ${colorActive.rgba.alpha/100})`"
          v-clipboard:success="updateNotification"
          v-clipboard:error="updateError"
          :style="'--rgba-color: rgba(' + rgbValues.r + ',' + rgbValues.g + ',' + rgbValues.b + ',' + colorActive.rgba.alpha/100 + ');'"
        >
            <span class="card--textcolor" :style="'color:' + rgbInvertValue + ';'">Copy value</span>
            <v-btn
              icon ripple
              v-clipboard:copy="`rgba(var(--rgb-${colorActive.property}), ${colorActive.rgba.alpha/100})`"
              v-clipboard:success="updateNotification"
              v-clipboard:error="updateError"
            >
              <v-icon :color="rgbInvertValue">file_copy</v-icon>
            </v-btn>
        </div>
      </div>
      <hr>
        <h2>Static values:</h2>
      <div class="nds-item nds-container main-center">
        <div class="nds-item s-25 center"><b>R</b></div>
        <div class="nds-item s-25 center"><b>G</b></div>
        <div class="nds-item s-25 center"><b>B</b></div>
        <div class="nds-item s-25 center"><b>A</b></div>
        <div class="nds-item s-25 center">{{ rgbValues.r }}</div>
        <div class="nds-item s-25 center">{{ rgbValues.g }}</div>
        <div class="nds-item s-25 center">{{ rgbValues.b }}</div>
        <div class="nds-item s-25 center">{{ colorActive.rgba.alpha/100 }}</div>
      </div>
    </color-main>
  </color-container>
</template>
<script>
import ColorContainer from '@/ui-components/ColorContainer.vue'
import ColorHeader from '@/ui-components/ColorHeader.vue'
import ColorMain from '@/ui-components/ColorMain.vue'
import ColorCard from '@/ui-components/ColorCard.vue'
import ColorJump from '@/ui-components/ColorJump.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NdsRgba',
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorJump
  },
  computed: {
    ...mapGetters(['colorActive', 'rgbValues', 'rgbaMax', 'invertvalue', 'rgbInvertValue'])
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
  }
  .card--valuecolor{
    position: relative;
    height: 300px;
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
    &::before{
      content: '';
      display: flex;
      position: absolute;
      width: 100%;
      height: 300px;
      background: var(--rgba-color);
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
</style>
