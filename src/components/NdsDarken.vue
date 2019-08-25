<template>
  <!-- Dark Colors -->
  <color-container>
    <article class="card--article">
      <color-header
        slot="header"
        label="Darken"
        :value="colorActive.value"
        :amount="colorActive.darken.jump"
        :updateAmount="updateDarkJumpt"
        :minAmount=0
        :maxAmount=100
        :maxLength=100
        :invertvalue="invertvalue"
      >Darkness
      </color-header>
      <color-jump
        label="Darken"
        slot="jump"
        :jump="colorActive.darken.jump"
        :updateJump="updateDarkJump"
        :minJump=0
        :color="darkenL > 0 ? 'green':'red'"
        :maxJumpForce=100
      ></color-jump>
      <p class="center">{{ darkValue }}</p>
      <p class="center text-hsl">{{ `hsl(${hslValues[0]}, ${hslValues[1]}%, ${darkenL}%)` }}</p>
      <p class="center text-hsl">{{ hexDarkColor }}</p>
    </article>
        <div class="card--valuecolor center"
          color=""
          v-clipboard:copy="darkValue"
          v-clipboard:success="updateNotification"
          v-clipboard:error="updateError"
          :style="`--hsla-color: hsl(${hslValues[0]},${hslValues[1]}%,${darkenL}%)`"
        >
            <span class="card--textcolor" :style="`color:${darkenInvertValue};`">Copy value {{ styleSheet.selectStyle }}</span>
            <v-btn
              icon ripple
              v-clipboard:copy="darkValue"
              v-clipboard:success="updateNotification"
              v-clipboard:error="updateError"
            >
              <v-icon :color="`${darkenInvertValue}`">file_copy</v-icon>
            </v-btn>
        </div>
  </color-container>
</template>
<script>
import { mixinDark, mixinComponents } from '@/mixins/mixinLightDark'
export default {
  name: 'NdsDarken',
  mixins: [mixinDark, mixinComponents],
  computed: {
    darkenL: function () {
      let darkenL = this.hslValues[2] - this.colorActive.darken.jump
      if (darkenL > 0) {
        return darkenL
      } else {
        return 0
      }
    },
    darkValue: function () {
      let darkValue = `hsl(var(--${this.colorActive.property}-HS), ${this.darkenL}%)`
      let styleSheet = this.styleSheet.selectStyle
      if (this.colorActive.darken.jump > 0) {
        if (styleSheet === 'CSS') {
          return darkValue
        } else if (styleSheet === 'SCSS') {
          return `#{'${darkValue}'}`
        } else {
          return darkValue
        }
      } else {
        return `var(--${this.colorActive.property}-color)`
      }
    }
  }
}
</script>
