<template>
  <!-- Rgba Colors -->
  <color-container>
    <color-header
      slot="header"
      :value="value"
      :amount="alpha"
      :updateAmount="updateAlphat"
      :minAmount="minAmount"
      :maxAmount="max"
      :maxLength= "alpha < 1 ? '4' : '1' "
      label="Alpha:"
      :step="step"
      :invertvalue="invertvalue"
    >Rgba colors
    </color-header>
    <div class="nds-item" slot="jump">
      <v-slider class="opacity--slider"
        :value="alpha"
        @input="updateAlpha"
        max=1
        min=0
        step="0.01"
        color="transparent"
        label="Rbga"
        thumb-color="#dadada"
        :track-color="value"
        always-dirty
      ></v-slider>
    </div>
    <color-main>
      --rgb-{{property}}
      <color-card>
        {{rgbValues.r}}, {{rgbValues.g}}, {{rgbValues.b}}
      </color-card>
      <color-card class="card--rgba"
        :color="'rgba(' + rgbValues.r + ',' + rgbValues.g + ',' + rgbValues.b + ',' + alpha + ')'"
      >
        <div :style="'background: rgba(' + rgbValues.r + ',' + rgbValues.g + ',' + rgbValues.b + ',' + alpha + ')'">
          <v-list-tile-content>
            <v-list-tile-title class="t4" :style="'color:' + rgbInvertValue + ';'">rgba(var(--rgb-{{property}}), {{alpha}})</v-list-tile-title>
            <v-list-tile-sub-title :style="'color:' + rgbInvertValue + ';'">rgba({{rgbValues.r}}, {{rgbValues.g}}, {{rgbValues.b}}, {{alpha}})</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-btn
            icon ripple
            v-clipboard:copy="`rgba(var(--rgb-${property}), ${alpha})`"
            v-clipboard:success="updateNotification"
            v-clipboard:error="updateError"
          >
            <v-icon :color="rgbInvertValue">file_copy</v-icon>
          </v-btn>
        </div>
      </color-card>
    </color-main>
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
  name: 'NdsRgba',
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorJump
  },
  computed: {
    ...mapState(['property', 'value', 'minAmount']),
    ...mapState({
      alpha: (state) => { return state.rgba.alpha },
      max: (state) => { return state.rgba.max },
      step: (state) => { return state.rgba.step }
    }),
    ...mapGetters(['rgbValues', 'rgbaMax', 'invertvalue', 'rgbInvertValue'])
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
  .card--rgba{
    &>.card--color{
      min-width: 200px;
      background-image: url(../assets/alpha.png);
      background-size: 11px;
      background-repeat: repeat;
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
