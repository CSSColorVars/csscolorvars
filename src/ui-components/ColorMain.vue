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
  .main-main{
    padding-top: 1rem;
    align-content: flex-start;
    min-width: 600px;
    max-height: 100vh;
  }
  .main-gradients{
    max-height: calc(100vh - 250px);
    overflow: auto;
  }
</style>
