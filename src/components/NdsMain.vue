<template>
  <main class="main-main ed-container ed-item l-80 application theme--light">
    <!-- Light Colors -->
    <color-container>
      <color-header
        slot="header"
        :value="value"
        :amount="lightAmount"
        :updateAmout="updateLightAmout"
        :minAmount="minAmount"
        :maxAmount="lightMax"
      >Light colors</color-header>
      <color-main>
        <color-card v-for = "item in lighten" :key="item.color" :color="item.color">
          {{item.color}}
        </color-card>
      </color-main>
      <footer slot="footer" class="ed-item main-end">
        <div class="jump">
          <label class="label" for="">Jump: </label>
          <v-select
            :value="lightJump"
            :items="items"
            @change="updateLightJump"
            suffix="%"
            required
          ></v-select>
        </div>
      </footer>
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
    <!-- Light Colors -->
    <section class="ed-container ed-item l-1-3 cross-start">
      <div class="ed-item gradients">
        <header class="gradients__header">
          <div class="gradients__icon">
            <div class="gradients__extended" :style="'background:'+ value + ';'">
              <i class="material-icons">zoom_out_map</i>
            </div>
          </div>
          <div class="gradients__item">
            <h2 class="main-center">Rgba colors</h2>
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
      <div class="ed-item" v-for = "item in lighten" :key="item.color">
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
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NdsMain',
  data () {
    return {
      items: [
        5, 10, 15, 20
      ]
    }
  },
  components: {
    ColorContainer,
    ColorHeader,
    ColorMain,
    ColorCard
  },
  computed: {
    ...mapGetters([
      'property', 'value',
      'lighten', 'darken',
      'lightAmount', 'lightJump',
      'minAmount',
      'lightMax'
    ])
  },
  methods: {
    ...mapMutations(['updateLightAmout', 'updateLightJump'])
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .jump-fotter{
    display: flex;
    width: 130px;
    .v-text-field__prefix{
      position: absolute;
      right: 20px;
    }
    input{
      text-align: end;
      padding-right: 10px;
    }
    .label{
      padding-right: 1rem;
    }
  }
  .v-text-field{
    margin-top: 0;
    padding-top: 0;
  }
</style>
