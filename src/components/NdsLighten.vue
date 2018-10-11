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
      <color-card v-for = "(item, index) in lighten" :key="item.color" :color="item.color">
        <v-list-tile-content>
          <v-list-tile-title class="t4" :style="'color: ' + item.invert + ';'">var(--{{property}}-ligh-{{index + 1}})</v-list-tile-title>
          <v-list-tile-sub-title :style="'color: ' + item.invert + ';'">{{item.color}}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn
            icon ripple
            v-clipboard:copy="`var(--${property}-ligh-${index + 1})`"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            <v-icon :color="item.invert">file_copy</v-icon>
          </v-btn>
        </v-list-tile-action>
      </color-card>
    </color-main>
        <v-snackbar :value="notify" bottom="bottom" left="left" multi-line="multi-line" :timeout= "timeout">
          {{text}}
          <v-btn color="pink" flat @click="closeNotification()">CLOSE</v-btn>
        </v-snackbar>
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
  data () {
    return {
      text: 'Sin texto'
    }
  },
  computed: {
    ...mapState(['property', 'value', 'minAmount', 'minJump', 'timeout']),
    ...mapState({
      lightAmount: (state) => state.lighten.amount,
      lightJump: (state) => state.lighten.jump,
      notify: state => state.notifyCopy.notify
    }),
    ...mapGetters(['lighten', 'lightMax'])
  },
  methods: {
    ...mapMutations(['updateLightAmount', 'updateLightJump', 'closeNotification']),
    onCopy: function (e) {
      this.text = 'You just copied: ' + e.text
      this.$store.commit('updateNotification')
    },
    onError: function (e) {
      this.text = 'Failed to copy texts'
    }
  }
}
</script>
