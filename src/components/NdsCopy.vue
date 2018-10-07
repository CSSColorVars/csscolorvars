<template>
  <v-snackbar
    v-model="snackbar"
    bottom="bottom"
    left="left"
    multi-line="multi-line"
    :timeout= "timeout"
  >
    COPIADO
    <v-btn
      color="pink"
      flat
      @click="snackbar = false"
    >
      CLOSE
    </v-btn>
  </v-snackbar>
</template>
<script>
export default {
  name: 'NdsCopy'
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  button, button:hover {
    background: none;
  }
</style>