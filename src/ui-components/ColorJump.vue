<template>
  <div class="nds-item">
    <v-slider
        :value="jump"
        :min="minJump"
        :max="maxJumpForce"
        @input="updateJump"
        :thumb-color="color"
        thumb-label="always"
        thumb-size="30"
        :label="label"
        always-dirty
        :color="color"
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
    color: {
      type: String
    },
    maxJumpForce: {
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .v-input--slider .v-input__control .v-messages {
    display: none;
  }
  .v-slider__thumb {
    width: 30px;
    height: 30px;
    left: -15px;
  }
  .v-slider{
    height: 70px;
  }
  .v-slider input {
    height: 100%;
  }
  .v-input input {
    max-height: 70px;
  }
  .v-slider__thumb-label {
    bottom: -3px;
  }
  .v-input__slot {
    margin-bottom: 0;
  }
  .v-slider {
    .v-slider__track__container, .v-slider__track, .v-slider__track-fill {
      height: 4px;
    }
  }
</style>
