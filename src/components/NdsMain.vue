<template>
  <main class="main-main ed-container ed-item l-80 application theme--light">
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
            <h2 class="main-center">Light colors</h2>
            <div class="gradients__amount">
              <label>Amount: </label>
              <v-text-field
                class="mt-0"
                hide-details
                single-line
                type="number"
                :value="lightAmount"
                @click="updateLightAmout"
                :min="minAmount" max="100000"
              ></v-text-field>
            </div>
          </div>
        </header>
      </div>
      <hr>
      <main class="ed-container l-block">
        <div class="ed-item" v-for = "item in lighten" :key="item.color">
          <v-card class="card--color" :color="item.color">
            <v-card-title primary-title>
              {{item.color}}
            </v-card-title>
          </v-card>
        </div>
      </main>
      <hr>
      <footer class="ed-item main-end">
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
    </section>
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
  computed: {
    ...mapGetters([
      'property', 'value',
      'lighten', 'darken',
      'lightAmount', 'lightJump',
      'minAmount'
    ])
  },
  methods: {
    ...mapMutations(['updateLightAmout', 'updateLightJump'])
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .main-main{
    padding-top: 1rem;
    align-content: flex-start;
    max-height: 100vh;
  }
  .card--color{
    height: 10srem;
    border: solid 1px;
    margin-bottom: .5rem;
  }
  .gradients{
    &__header{
      display: flex;
      align-items: center;
      @include edItem(50,30,80,70);
      margin-left: auto;
      margin-right: auto;
      padding-bottom: .8rem;
    }
    &__item{
      flex: 3;
      padding-left: 1rem;
    }
    &__icon{
      flex: 1;
      @include mainCenter;
      div{
        width: 60px;
        height: 55px;
        border-radius: 10px;
        border: solid 1px #333333;
        i{
          font-size: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          height: 100%;
        }
      }
    }
    &__amount{
      display: flex;
      label{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 1rem;
      }
      .v-text-field{
        flex: 1;
      }
    }
    &__extended{
      cursor: pointer;
    }
  }
  .jump{
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
