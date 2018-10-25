<template>
<div class="header--property nds-item">
  <v-text-field dark
    v-if="property !== 'unnamed'"
    label="Property:"
    color="#FFF"
    :value="property"
    @input="update"
    @keypress="keypressProperty"
    :error-messages="!state ? 'Enter a letter in the first character' : ''"
    box
    suffix="-color"
  >
  </v-text-field>
  <v-text-field dark
    v-else
    label="Property:"
    color="#FFF"
    placeholder="unnamed"
    value=""
    @input="update"
    @keypress="keypressProperty"
    :error-messages="!state ? 'Enter a letter in the first character' : ''"
    box
    suffix="-color"
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
    }
  },
  methods: {
    keypressProperty: function (e) {
      if (e.which !== 95 && e.which !== 45 && e.which !== 241 && e.which !== 16 && e.which !== 8 && e.which !== 0 && (e.which < 48 || e.which > 90) && (e.which < 97 || e.which > 121)) {
        e.preventDefault()
      }
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
</style>
