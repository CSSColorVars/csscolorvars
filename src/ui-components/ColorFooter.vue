<template>
  <footer class="ed-item main-end">
    <div class="jump-footer">
      <label class="label" for="">Jump: </label>
        <v-text-field
          class="mt-0"
          hide-details
          single-line
          suffix="%"
          type="number"
          :value="jump"
          @keyup="updateJump"
          @click="updateJump"
          :min="minJump" :max="maxJump"
        ></v-text-field>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'ColorFooter',
  props: {
    jump: {
      require: true
    },
    updateJump: {
      type: Function,
      require: true
    },
    minJump: {
      type: Number,
      required: true
    },
    maxJump: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  // .jump-fotter{
  //   display: flex;
  //   width: 130px;
  //   .v-text-field__prefix{
  //     position: absolute;
  //     right: 20px;
  //   }
  //   input{
  //     text-align: end;
  //     padding-right: 10px;
  //   }
  //   .label{
  //     padding-right: 1rem;
  //   }
  // }
</style>
