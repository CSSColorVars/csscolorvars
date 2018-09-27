<template>
  <section class="color-container ed-container ed-item l-1-3 cross-start">
    <slot name="header"></slot>
    <slot name="jump"></slot>
    <hr>
    <slot></slot>
    <hr>
  </section>
</template>
<style lang="scss">
  section.color-container{ margin-top: 1rem; }
</style>

