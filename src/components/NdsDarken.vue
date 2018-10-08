<template>
  <!-- Dark Colors -->
  <color-container>
    <color-header
      slot="header"
      :value="value"
      :amount=darkAmount
      :updateAmount="updateDarkAmount"
      :minAmount="minAmount"
      :maxAmount="darkMax"
    >Dark colors
    </color-header>
    <color-jump
      label="Darken"
      slot="jump"
      :jump=darkJump
      :updateJump="updateDarkJump"
      :minJump="minJump" :maxJump="darkMax"
    ></color-jump>
    <color-main>
      <color-card v-for = "(item, index) in darken" :key="item.color" :color="item.color">
        <v-list-tile-content>
          <v-list-tile-title class="t4" :style="'color: ' + item.invert + ';opacity:.9;'">var(--{{property}}-dark-{{index + 1}})</v-list-tile-title>
          <v-list-tile-sub-title :style="'color: ' + item.invert + ';opacity:.9;'">{{item.color}}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon ripple>
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
import { mapState, mapGetters, mapMutations } from 'vuex'
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
    ...mapState(['property', 'value', 'minAmount', 'minJump']),
    ...mapState({
      darkAmount: (state) => state.darken.amount,
      darkJump: (state) => state.darken.jump
    }),
    ...mapGetters(['darken', 'darkMax'])
  },
  methods: {
    ...mapMutations(['updateDarkAmount', 'updateDarkJump'])
  }
}
</script>
