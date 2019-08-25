<template>
  <!-- Light Colors -->
  <color-container>
    <article class="card--article">
      <color-header
        slot="header"
        label="Lighten"
        :value="colorActive.value"
        :amount="colorActive.lighten.jump"
        :updateAmount="updateLightJumpt"
        :minAmount=0
        :maxAmount=100
        :maxLength=100
        :invertvalue="invertvalue"
      >Lightness
      </color-header>
      <color-jump
        label="Lighten"
        slot="jump"
        :jump="colorActive.lighten.jump"
        :updateJump="updateLightJump"
        :minJump=0
        :color="lightenL < 100 ? 'green':'red'"
        :maxJumpForce=100
      ></color-jump>
      <p class="center">{{ lightenValue }}</p>
      <p class="center text-hsl">{{ `hsl(${hslValues[0]}, ${hslValues[1]}%, ${lightenL}%)` }}</p>
      <p class="center text-hsl">{{ hexLightColor }}</p>
    </article>
        <div class="card--valuecolor center"
          color=""
          v-clipboard:copy="lightenValue"
          v-clipboard:success="updateNotification"
          v-clipboard:error="updateError"
          :style="`--hsla-color: hsl(${hslValues[0]},${hslValues[1]}%,${lightenL}%)`"
        >
            <span class="card--textcolor" :style="`color:${lightenInvertValue};`">Copy value {{ styleSheet.selectStyle }}</span>
            <v-btn
              icon ripple
              v-clipboard:copy="lightenValue"
              v-clipboard:success="updateNotification"
              v-clipboard:error="updateError"
            >
              <v-icon :color="`${lightenInvertValue}`">file_copy</v-icon>
            </v-btn>
        </div>
  </color-container>
</template>
<script>
import { mixinLight, mixinComponents } from '@/mixins/mixinLightDark'
export default {
  name: 'NdsLighten',
  mixins: [mixinLight, mixinComponents],
  computed: {
    lightenL: function () {
      let lightenL = this.hslValues[2] + this.colorActive.lighten.jump
      if (lightenL < 100) {
        return lightenL
      } else {
        return 100
      }
    },
    lightenValue: function () {
      let lightValue = `hsl(var(--${this.colorActive.property}-HS), ${this.lightenL}%)`
      let styleSheet = this.styleSheet.selectStyle
      if (this.colorActive.lighten.jump > 0) {
        if (styleSheet === 'CSS') {
          return lightValue
        } else if (styleSheet === 'SCSS') {
          return `#{'${lightValue}'}`
        } else {
          return lightValue
        }
      } else {
        return `var(--${this.colorActive.property}-color)`
      }
    }
  }
}
</script>
