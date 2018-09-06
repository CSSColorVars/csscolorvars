<template>
  <main class="ed-container ed-item l-70 application theme--light">
    <v-checkbox class="ed-item" :label="`Checkbox 1: ${checkbox1.toString()}`" v-model="checkbox1"></v-checkbox>
    <v-checkbox class="ed-item" :label="`Checkbox 2: ${checkbox2.toString()}`" v-model="checkbox2"></v-checkbox>
  </main>
</template>
<script>
export default {
  name: 'NdsMain',
  data () {
    return {
      checkbox1: true,
      checkbox2: false
    }
  }
}
</script>
<style lang="scss">

</style>
