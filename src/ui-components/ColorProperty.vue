<template>
<div class="header--property nds-item">
  <v-text-field :dark="dark"
    v-if="property !== 'unnamed'"
    label="Property:"
    :color="!state ? '#ffc107' : (dark ? '#FFF' : '#393939')"
    :value="property"
    @input="update"
    @keypress="keypressProperty"
    :error-messages="!state ? errorMesagge : ''"
    box
    suffix="-color"
    @keyup.enter="pressEnter"
  >
  </v-text-field>
  <v-text-field :dark="dark"
    v-else
    label="Property:"
    :color="!state ? '#ffc107' : (dark ? '#FFF' : '#393939')"
    placeholder="unnamed"
    value=""
    @input="update"
    @keypress="keypressProperty"
    :error-messages="!state ? errorMesagge : ''"
    box
    suffix="-color"
    @keyup.enter="pressEnter"
  >
  </v-text-field>
</div>
</template>
<script>
export default {
  name: 'ColorProperty',
  props: {
    property: {
      type: String,
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
    },
    errorMesagge: {
      default: 'Enter a letter in the first character'
    }
  },
  methods: {
    keypressProperty: function (e) {
      if (e.which !== 95 && e.which !== 45 && e.which !== 241 && e.which !== 16 && e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 90) && (e.which < 97 || e.which > 122)) {
        e.preventDefault()
      }
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
</style>
