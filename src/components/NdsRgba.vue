<template>
  <!-- Rgba Colors -->
  <color-container>
    <!-- {{rgba}} -->
    <color-header
      slot="header"
      :value="value"
      :amount=rgbaAmount
      :updateAmount="updateRgbaAmount"
      minAmount=0.01
      maxAmount=0.1
      step=0.01
    >Rgba colors
    </color-header>
    <color-jump
      label="Rgba"
      slot="jump"
      :jump=rgbaJump
      :updateJump="updateRgbaJump"
      :minJump="minJump" :maxJump="rgbaMax"
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
import { mapState, mapGetters, mapMutations } from 'vuex'
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
    ...mapState(['value', 'minJump']),
    ...mapState({
      rgbaminAmount: (state) => { return state.rgba.minAmount },
      rgbaminJump: (state) => { return state.rgba.minJump },
      rgbaAmount: (state) => { return state.rgba.amount },
      rgbaJump: (state) => { return state.rgba.jump }
    }),
    ...mapGetters(['rgba', 'rgbaMax'])
  },
  methods: {
    ...mapMutations(['updateRgbaAmount', 'updateRgbaJump'])
  }
}
</script>
