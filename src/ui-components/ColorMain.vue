<template>
  <main class="main-gradients nds-container l-block">
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
    overflow: auto;
    @include from (l){
      max-height: calc(100vh - 220px);
    }
  }
  .main-gradients::-webkit-scrollbar-track{
    box-shadow: inset 0 0 6px #393939;
    background-color: #393939;
  }
  .main-gradients::-webkit-scrollbar{
    width: 10px;
    background-color: #F5F5F5;
  }
  .main-gradients::-webkit-scrollbar-thumb{
    border-radius: 20px;
    border: solid 3px #393939;
    background: #d1d1d1;
    &:hover {
      background: #F5F5F5;
    }
  }
</style>
