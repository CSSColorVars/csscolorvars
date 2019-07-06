<template>
  <section class="color-container nds-item cross-start main-justify full">
    <slot name="header"></slot>
    <slot name="jump"></slot>
    <slot></slot>
  </section>
</template>
<style lang="scss">
@import 'src/sass/mixins.scss';
  section.color-container{
    margin-top: 2rem;
    margin-bottom: .5rem;
    padding: .5rem;
    border-left: solid 2px #bebebe;
    border-top: solid 2px #bebebe;
    border-bottom: solid 2px #bebebe;
    border-radius: 10px;
    border-right: solid 2px #bebebe;
    @include from(l) {
      margin-top: 1rem;
    }
  }
</style>
