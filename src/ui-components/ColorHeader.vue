<template>
  <header class="nds-item">
    <div class="gradients__header nds-container main-center">
      <div class="gradients__icon">
        <div class="gradients__extended" :style="'background:'+ value + ';'">
          <i class="material-icons">zoom_out_map</i>
        </div>
      </div>
      <div class="gradients__item">
        <h2 class="main-center">
          <slot></slot>
        </h2>
        <div class="gradients__amount">
          <label>Amount: </label>
          <v-text-field
            color="green"
            class="mt-0"
            hide-details
            single-line
            type="number"
            :value="amount"
            @keyup="updateAmount"
            @click="updateAmount"
            :min="minAmount" :max="maxAmount"
            :step="step"
          ></v-text-field>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'ColorHeader',
  props: {
    value: {
      type: String,
      required: true
    },
    amount: {
      required: true
    },
    updateAmount: {
      type: Function,
      required: true
    },
    minAmount: {
      type: Number,
      required: true
    },
    maxAmount: {
      type: Number,
      required: true
    },
    step: {
      default: 1
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .gradients{
    &__item{
      width: 115px;
      @include from(l){
        width: 123px;
      }
    }
    &__icon{
      width: 90px;
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
        input{
          @include from(l){
            padding-left: .5rem;
          }
        }
      }
    }
    &__extended{
      cursor: pointer;
    }
  }
</style>
