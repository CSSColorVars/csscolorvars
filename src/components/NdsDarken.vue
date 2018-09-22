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
      <color-card v-for = "item in darken" :key="item.color" :color="item.color">
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
  name: 'NdsDarken',
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
      'darken',
      'darkAmount', 'darkJump',
      'minAmount',
      'minJump',
      'darkMax'
    ])
  },
  methods: {
    ...mapMutations(['updateDarkAmount', 'updateDarkJump'])
  }
}
</script>
