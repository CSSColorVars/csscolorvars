<template>
  <!-- Rgba Colors -->
  <color-container>
    <!-- {{rgba}} -->
    <color-header
      slot="header"
      :value="value"
      :amount=rgbaAmount
      :updateAmount="updateRgbaAmount"
      :minAmount="minAmount"
      :maxAmount="rgbaMax"
    >Rgba colors
    </color-header>
    <color-jump
      label="Rgba"
      slot="jump"
      :jump=rgbaJump
      :updateJump="updateRgbaJump"
      :minJump="minJump" :maxJump="rgbaMax" maxJumpForce="9"
    ></color-jump>
    <color-main>
      <color-card v-for = "item in rgba" :key="item.color" :color="item.color">
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
  name: 'NdsRgba',
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
      'rgba',
      'rgbaAmount', 'rgbaJump',
      'minAmount',
      'minJump',
      'rgbaMax'
    ])
  },
  methods: {
    ...mapMutations(['updateRgbaAmount', 'updateRgbaJump'])
  }
}
</script>
