<template>
  <header class="nds-item">
    <div class="gradients__header nds-container main-center">
      <div class="gradients__icon">
        <div class="gradients__extended" :style="'background:'+ value + '; color:' + invertvalue + ';'">
          <i class="material-icons">zoom_out_map</i>
        </div>
      </div>
      <div class="gradients__item">
        <h2 class="main-center">
          <slot></slot>
        </h2>
        <div class="gradients__amount">
          <label v-text="label"></label>
          <v-text-field
            color="green"
            class="mt-0"
            hide-details
            single-line
            box
            type="number"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            :value="amount < maxAmount ? amount : maxAmount"
            :maxLength = maxLength
            @keypress="keypressNumber"
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
    invertvalue: {
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
    maxLength: {
      require: true
    },
    step: {
      default: 1
    },
    label: {
      type: String,
      default: 'Amount:'
    }
  },
  methods: {
    keypressNumber: function (evt) {
      if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 && evt.which > 57) {
        evt.preventDefault()
      }
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .gradients{
    &__item{
      width: 165px;
      @include from(l){
        width: 140px;
      }
    }
    &__icon{
      width: 55px;
      margin-right: 1rem;
      div{
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
        padding-right: .5rem;
      }
      .v-text-field{
        flex: 1;
        .v-input__slot{
          padding: 0;
          min-height: 0;
          height: 2rem;
        }
        input{
          margin-top: 0;
          text-align: center;
        }
      }
    }
    &__extended{
      cursor: pointer;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    opacity: 1;
  }
</style>
