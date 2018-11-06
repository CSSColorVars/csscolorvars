<template>
  <!-- Dark Colors -->
  <color-container>
    <color-header
      slot="header"
      :value="colorActive.value"
      :amount="colorActive.darken.amount"
      :updateAmount="updateDarkAmount"
      :minAmount="colorActive.minAmount"
      :maxAmount="darkMax"
      :maxLength= darkMax.toString().length
      :invertvalue="invertvalue"
    >Dark colors
    </color-header>
    <color-jump
      label="Darken"
      slot="jump"
      :jump="colorActive.darken.jump"
      :updateJump="updateDarkJump"
      :minJump="colorActive.minJump" :maxJump="darkMax"
    ></color-jump>
    <color-main>
      <color-card v-for = "(item, index) in darken" :key="item.color" :color="item.color">
        <v-list-tile-content>
          <v-list-tile-title class="t4" :style="'color: ' + item.invert + ';opacity:.9;'">var(--{{colorActive.property}}-dark-{{index + 1}})</v-list-tile-title>
          <v-list-tile-sub-title :style="'color: ' + item.invert + ';opacity:.9;'">{{item.color}}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn
            icon ripple
            v-clipboard:copy="`var(--${colorActive.property}-dark-${index + 1})`"
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
  name: 'NdsDarken',
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorJump
  },
  computed: {
    ...mapGetters(['colorActive', 'darken', 'darkMax', 'invertvalue'])
  },
  methods: {
    ...mapMutations(['updateDarkAmount', 'updateDarkJump', 'closeNotification', 'updateNotification', 'updateError'])
  }
}
</script>
