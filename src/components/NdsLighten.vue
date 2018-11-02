<template>
  <!-- Light Colors -->
  <color-container>
    <color-header
      slot="header"
      :value="colorActive.value"
      :amount=colorActive.lighten.lightAmount
      :updateAmount="updateLightAmount"
      :minAmount="colorActive.minAmount"
      :maxAmount="lightMax"
      :maxLength= lightMax.toString().length
      :invertvalue="invertvalue"
    >Light colors
    </color-header>
    <color-jump
      label="Lighten"
      slot="jump"
      :jump=colorActive.lighten.lightJump
      :updateJump="updateLightJump"
      :minJump="colorActive.minJump" :maxJump="lightMax"
    ></color-jump>
    <color-main>
      <color-card v-for = "(item, index) in lighten" :key="item.color" :color="item.color">
        <v-list-tile-content>
          <v-list-tile-title class="t4" :style="'color: ' + item.invert + ';'">var(--{{colorActive.property}}-ligh-{{index + 1}})</v-list-tile-title>
          <v-list-tile-sub-title :style="'color: ' + item.invert + ';'">{{item.color}}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn
            icon ripple
            v-clipboard:copy="`var(--${colorActive.property}-ligh-${index + 1})`"
            v-clipboard:success="updateNotification"
            v-clipboard:error="updateError"
          >
            <v-icon :color="item.invert">file_copy</v-icon>
          </v-btn>
        </v-list-tile-action>
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
    ...mapGetters(['colorActive', 'lighten', 'lightMax', 'invertvalue'])
  },
  methods: {
    ...mapMutations(['updateLightAmount', 'updateLightJump', 'updateNotification', 'updateError'])
  }
}
</script>
