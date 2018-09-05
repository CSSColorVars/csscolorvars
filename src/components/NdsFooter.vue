<template>
  <footer class="ed-container full main-center">
    &copy;{{year}} — <strong> Fernando Averanga Aruquipa</strong>
  </footer>
</template>
<script>
let year = new Date().getFullYear()
export default {
  data () {
    return {
      year
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'src/sass/mixins.scss';
  footer{
    position: fixed;
    bottom: 0;
    text-align: center;
  }
</style>
