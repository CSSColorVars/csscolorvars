<template>
  <footer class="ed-item main-end">
    <div class="jump-footer">
      <v-subheader class="pl-0">
        <slot></slot>
      </v-subheader>
      <v-slider
        :value="jump"
        :min="minJump"
        @input="updateJump"
        :thumb-color="lightMax < 1 ? 'red' : 'blue'"
        thumb-label="always"
      ></v-slider>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters(['lightMax'])
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
