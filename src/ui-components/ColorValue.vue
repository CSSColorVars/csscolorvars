<template>
  <div class="header--value nds-item">
    <v-text-field dark
      label="Value"
      color="#FFF"
      maxlength="7"
      :placeholder="value"
      :value="value"
      @keyup="update"
      @keypress="keypressValue"
      :error-messages="!state ? 'Enter a hexadecimal color' : ''"
      box
    >
    </v-text-field>
    <figure class="figure--color">
      <input type="color" :value="standardValue" @input="update" />
    </figure>
  </div>
</template>
<script>
import Color from 'color'
export default {
  name: 'ColorValue',
  props: {
    value: {
      type: String,
      required: true
    },
    update: {
      required: true
    },
    state: {
      required: true
    }
  },
  computed: {
    standardValue: function () {
      return Color(this.value).hex()
    }
  },
  methods: {
    keypressValue: function (e) {
      if (e.which !== 35 && e.which !== 16 && e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 70) && (e.which < 97 || e.which > 102)) {
        e.preventDefault()
      }
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .header--value{
    position:relative;
    input[type="color"]{
      position: absolute;
      top: .5rem;
      right: 1.5rem;
      width: 3rem;
      height: 3rem;
      border: solid 1px #C2C2C2;
      border-radius: .3rem;
      cursor: pointer;
      &:hover, &:active, &:focus, &:active{
        border: solid 1px #FFF;
        outline: none;
      }
    }
  }
</style>
