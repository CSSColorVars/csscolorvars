<template>
  <div class="header--value nds-item">
    <v-text-field v-if="!state" :dark="dark"
      label="Value"
      :color="dark ? '#FFF' : '#393939'"
      maxlength="7"
      :placeholder="value"
      :value="value"
      @keyup="update"
      @keypress="keypressValue"
      error-messages="Enter a hexadecimal color"
      box
    >
    </v-text-field>
    <v-text-field v-else :dark="dark"
      label="Value"
      :color="dark ? '#FFF' : '#393939'"
      maxlength="7"
      :placeholder="value"
      :value="value"
      @keyup="update"
      @keypress="keypressValue"
      box
      @keyup.enter="pressEnter"
    >
    </v-text-field>
    <figure class="figure--color">
      <input :class="dark ? 'dark-input' : ''" type="color" :value="standardValue" @input="update" />
    </figure>
  </div>
</template>
<script>
import Color from 'color'
export default {
  name: 'ColorValue',
  props: {
    value: {
      required: true
    },
    update: {
      required: true
    },
    state: {
      required: true
    },
    dark: {
      default: false,
      type: Boolean
    },
    pressEnter: {
      default: function () {},
      type: Function
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
      border: solid 1px rgba(0, 0, 0, 0.39);
      border-radius: .3rem;
      cursor: pointer;
      &:hover, &:active, &:focus, &:active{
        border: solid 1px #444444;
        outline: none;
      }
      &.dark-input{
        border: solid 1px #C2C2C2;
        &:hover, &:active, &:focus, &:active{
          border: solid 1px #FFF;
        }
      }
    }
  }
</style>
