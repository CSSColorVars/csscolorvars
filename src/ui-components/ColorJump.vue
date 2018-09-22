<template>
  <div class="ed-item main-end">
    <v-slider
        :value="jump"
        :min="minJump"
        @input="updateJump"
        :thumb-color="maxJump < 1 ? 'red' : 'green'"
        thumb-label="always"
        :label="label"
        always-dirty
    ></v-slider>
  </div>
</template>
<script>
export default {
  name: 'ColorJump',
  props: {
    label: {
      type: String,
      required: true
    },
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
      required: true
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
</style>
