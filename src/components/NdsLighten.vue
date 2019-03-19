<template>
  <!-- Light Colors -->
  <color-container>
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
    >Light color
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
    <color-main>
      <div class="nds-item l-block">
        <p v-if="colorActive.lighten.jump > 0" class="center">hsl(var(--{{ colorActive.property }}-HS), {{ lightenL }}%)</p>
        <p v-else-if="colorActive.lighten.jump == 0" class="center">var(--{{ colorActive.property }}-color)</p>
        <div class="card--valuecolor center"
          color=""
          v-clipboard:copy="lightenValue"
          v-clipboard:success="updateNotification"
          v-clipboard:error="updateError"
          :style="`--rgba-color: hsl(${hslValues[0]},${hslValues[1]}%,${lightenL}%)`"
        >
            <span class="card--textcolor" :style="`color:${lightenInvertValue};`">Copy value</span>
            <v-btn
              icon ripple
              v-clipboard:copy="lightenValue"
              v-clipboard:success="updateNotification"
              v-clipboard:error="updateError"
            >
              <v-icon :color="`${lightenInvertValue}`">file_copy</v-icon>
            </v-btn>
        </div>
      </div>
      <hr>
        <h2>Static values:</h2>
      <div class="nds-item nds-container main-center">
        <div class="nds-item s-1-3 center"><b>H</b></div>
        <div class="nds-item s-1-3 center"><b>S</b></div>
        <div class="nds-item s-1-3 center"><b>L</b></div>
        <div class="nds-item s-1-3 center">{{ hslValues[0] }}</div>
        <div class="nds-item s-1-3 center">{{ hslValues[1] }}%</div>
        <div class="nds-item s-1-3 center">
          <span v-if="lightenL >= 0">{{ lightenL }}%</span>
          <span v-else>0%</span>
        </div>
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
  name: 'NdsLighten',
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorJump
  },
  computed: {
    ...mapGetters(['colorActive', 'lighten', 'invertvalue', 'hslValues', 'lightenInvertValue']),
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
      if (this.colorActive.lighten.jump > 0) {
        return lightValue
      } else {
        return `var(--${this.colorActive.property}-color)`
      }
    }
  },
  methods: {
    ...mapMutations(['updateLightJumpt', 'updateLightJump', 'updateNotification', 'updateError'])
  }
}
</script>
