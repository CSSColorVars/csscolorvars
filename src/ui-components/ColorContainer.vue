<template>
  <section class="color-container nds-container nds-item l-1-3 cross-start">
    <slot name="header"></slot>
    <slot name="jump"></slot>
    <hr>
    <slot></slot>
  </section>
</template>
<style lang="scss">
@import 'src/sass/mixins.scss';
  section.color-container{
    margin-top: 2rem;
    &:nth-child(1) {
      border-left: solid 2px #bebebe;
      border-top: solid 2px #bebebe;
      border-bottom: solid 2px #bebebe;
      border-radius: 10px;
      border-right: solid 2px #bebebe;
      @include from(l) {
        border-radius: 10px 0 0 10px;
      }
    }
    &:nth-child(2){
      border-top: solid 2px #bebebe;
      border-bottom: solid 2px #bebebe;
      border-right: solid 2px #bebebe;
    }
    &:nth-child(3){
      border-right: solid 2px #bebebe;
      border-top: solid 2px #bebebe;
      border-bottom: solid 2px #bebebe;
      border-radius: 0 10px 10px 0;
    }
  }
</style>
