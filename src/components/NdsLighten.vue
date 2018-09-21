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
      slot="jump"
      :jump=lightJump
      :updateJump="updateLightJump"
      :minJump="minJump" :maxJump="maxJump"
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
    ...mapGetters([
      'property', 'value',
      'lighten',
      'lightAmount', 'lightJump',
      'minAmount',
      'minJump', 'maxJump',
      'lightMax'
    ])
  },
  methods: {
    ...mapMutations(['updateLightAmount', 'updateLightJump'])
  }
}
</script>
