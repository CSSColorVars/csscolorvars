import Color from 'color'
import { mapState, mapGetters, mapMutations } from 'vuex'
import ColorContainer from '@/ui-components/ColorContainer.vue'
import ColorHeader from '@/ui-components/ColorHeader.vue'
import ColorMain from '@/ui-components/ColorMain.vue'
import ColorCard from '@/ui-components/ColorCard.vue'
import ColorJump from '@/ui-components/ColorJump.vue'

export const mixinComponents = {
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorJump
  }
}
export const mixinLight = {
  computed: {
    ...mapState(['styleSheet']),
    ...mapGetters(['colorActive', 'lighten', 'invertvalue', 'hslValues', 'lightenInvertValue']),
    hexLightColor: function () {
      let hexVal = Color(`hsl(${this.hslValues[0]}, ${this.hslValues[1]}%, ${this.lightenL}%)`)
      return hexVal.hex()
    }
  },
  methods: {
    ...mapMutations(['updateLightJumpt', 'updateLightJump', 'updateNotification', 'updateError'])
  }
}
export const mixinDark = {
  computed: {
    ...mapState(['styleSheet']),
    ...mapGetters(['colorActive', 'darken', 'invertvalue', 'hslValues', 'darkenInvertValue']),
    hexDarkColor: function () {
      let hexVal = Color(`hsl(${this.hslValues[0]}, ${this.hslValues[1]}%, ${this.darkenL}%)`)
      return hexVal.hex()
    }
  },
  methods: {
    ...mapMutations(['updateDarkJumpt', 'updateDarkJump', 'closeNotification', 'updateNotification', 'updateError'])
  }
}
