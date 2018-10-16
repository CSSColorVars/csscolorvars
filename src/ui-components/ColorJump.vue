<template>
  <div class="nds-item">
    <v-slider
        :value="jump"
        :min="minJump"
        :max="maxJumpForce"
        @input="updateJump"
        :thumb-color="maxJump < 1 ? 'red' : 'green'"
        thumb-label="always"
        thumb-size="24"
        :label="label"
        always-dirty
        :color="maxJump < 1 ? 'red' : 'green'"
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
    },
    maxJumpForce: {
      type: String
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .v-slider__thumb {
    width: 15px;
    height: 15px;
    left: -7.3px;
  }
  .v-slider__thumb-label {
    bottom: -6px;
  }
</style>
