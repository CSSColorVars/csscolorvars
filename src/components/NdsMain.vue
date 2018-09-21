<template>
  <main class="main-main ed-container ed-item l-80 application theme--light">
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
      <color-main>
        <color-card v-for = "item in lighten" :key="item.color" :color="item.color">
          {{item.color}}
        </color-card>
      </color-main>
      <color-footer
        slot="footer"
        :jump=lightJump
        :updateJump="updateLightJump"
        :minJump="minJump" :maxJump="maxJump"
      ></color-footer>
    </color-container>
    <!-- Dark Colors -->
    <section class="ed-container ed-item l-1-3 cross-start">
      <div class="ed-item gradients">
        <header class="gradients__header">
          <div class="gradients__icon">
            <div class="gradients__extended" :style="'background:'+ value + ';'">
              <i class="material-icons">zoom_out_map</i>
            </div>
          </div>
          <div class="gradients__item">
            <h2 class="main-center">Dark colors</h2>
            <div class="gradients__amount">
              <label>Amount: </label>
              <v-text-field
                class="mt-0"
                hide-details
                single-line
                type="number"
              ></v-text-field>
            </div>
          </div>
        </header>
      </div>
      <hr>
      <div class="ed-item" v-for = "item in darken" :key="item.color">
        <v-card class="card--color" :color="item.color">
          <v-card-title primary-title>
            {{item.color}}
          </v-card-title>
        </v-card>
      </div>
    </section>
  </main>
</template>
<script>
import ColorContainer from '@/ui-components/ColorContainer.vue'
import ColorHeader from '@/ui-components/ColorHeader.vue'
import ColorMain from '@/ui-components/ColorMain.vue'
import ColorCard from '@/ui-components/ColorCard.vue'
import ColorFooter from '@/ui-components/ColorFooter.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NdsMain',
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard,
    ColorFooter
  },
  computed: {
    ...mapGetters([
      'property', 'value',
      'lighten', 'darken',
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
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .v-text-field{
    margin-top: 0;
    padding-top: 0;
  }
</style>
