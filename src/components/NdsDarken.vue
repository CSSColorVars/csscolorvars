<template>
  <!-- Dark Colors -->
  <color-container>
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
    >Dark color
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
    <color-main>
      <div class="nds-item l-block">
        <p v-if="colorActive.darken.jump > 0" class="center">hsl(var(--{{ colorActive.property }}-HS), {{ darkenL }}%)</p>
        <p v-else-if="colorActive.darken.jump == 0" class="center">var(--{{ colorActive.property }}-color)</p>
        <div class="card--valuecolor center"
          color=""
          v-clipboard:copy="darkValue"
          v-clipboard:success="updateNotification"
          v-clipboard:error="updateError"
          :style="`--rgba-color: hsl(${hslValues[0]},${hslValues[1]}%,${darkenL}%)`"
        >
            <span class="card--textcolor" :style="`color:${darkenInvertValue};`">Copy value</span>
            <v-btn
              icon ripple
              v-clipboard:copy="darkValue"
              v-clipboard:success="updateNotification"
              v-clipboard:error="updateError"
            >
              <v-icon :color="`${darkenInvertValue}`">file_copy</v-icon>
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
          <span v-if="darkenL >= 0">{{ darkenL }}%</span>
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
  name: 'NdsDarken',
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorJump
  },
  computed: {
    ...mapGetters(['colorActive', 'darken', 'invertvalue', 'hslValues', 'darkenInvertValue']),
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
      if (this.colorActive.darken.jump > 0) {
        return darkValue
      } else {
        return `var(--${this.colorActive.property}-color)`
      }
    }
  },
  methods: {
    ...mapMutations(['updateDarkJumpt', 'updateDarkJump', 'closeNotification', 'updateNotification', 'updateError'])
  }
}
</script>
