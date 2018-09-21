<template>
  <div class="ed-item main-end">
    <v-slider
        :value="jump"
        :min="minJump"
        @input="updateJump"
        :thumb-color="lightMax < 1 ? 'red' : 'green'"
        thumb-label="always"
        label="Lighten"
        always-dirty
    ></v-slider>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ColorJump',
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
    }
  },
  computed: {
    ...mapGetters(['lightMax'])
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
</style>
