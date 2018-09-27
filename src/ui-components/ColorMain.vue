<template>
  <main class="main-gradients ed-container l-block">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: 'ColorMain'
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .main-gradients{
    @include from (l) { max-height: calc(100vh - 250px); }
    overflow: auto;
  }
</style>
