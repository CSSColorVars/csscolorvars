<template>
  <!-- Light Colors -->
  <color-container>
    <color-header
      slot="header"
      :value="value"
      :amount=lightAmount
      :updateAmount="updateLightAmount"
      :minAmount="minAmount"
      :maxAmount="lightMax"
    >Light colors
    </color-header>
    <color-jump
      label="Lighten"
      slot="jump"
      :jump=lightJump
      :updateJump="updateLightJump"
      :minJump="minJump" :maxJump="lightMax"
    ></color-jump>
    <color-main>
      <color-card v-for = "item in lighten" :key="item.color" :color="item.color">
        {{item.color}}
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
  name: 'NdsLighten',
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorJump
  },
  computed: {
    ...mapState(['value', 'minAmount', 'minJump']),
    ...mapState({
      lightAmount: (state) => state.lighten.amount,
      lightJump: (state) => state.lighten.jump
    }),
    ...mapGetters(['property', 'lighten', 'lightMax'])
  },
  methods: {
    ...mapMutations(['updateLightAmount', 'updateLightJump'])
  }
}
</script>
