<template>
  <div id="app">
    <v-app id="inspire">
      <router-view/>
    </v-app>
  </div>
</template>
<script>
export default {
  data () {
    return {
      snackbar: true,
      timeout: 6000
    }
  }
}
</script>

<style lang="scss">
  @import 'src/sass/mixins.scss';
  .credits{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  /*
  * This file use declarations, functions and mixins from
  * config/_typography.scss
  */
  :root {
    overflow  : auto;
    --title1  : #{fontSize(title1)};
    --title2  : #{fontSize(title2)};
    --title3  : #{fontSize(title3)};
    --normal  : #{fontSize(normal)};
    --small   : #{fontSize(small)};
    --smaller : #{fontSize(smaller)};
    @include to(l) {
      --title1  : #{fontSize(title2)};
      --title2  : #{fontSize(title3)};
      --title3  : #{fontSize(normal)};
    }
  }

  body {
    font-family : $body-font;
    font-size   : var(--normal);
    font-weight : 400;
    line-height : 1.6;
    color       : var(--text-color);
  }

  h1, h2, h3, h4, h5, h6,
  .t1, .t2, .t3, .t4 {
    font-family    : $heading-font;
    font-weight    : 700;
    letter-spacing : -0.01em;
    line-height    :  1.3;
  }

  // classes for font-family
  .body-font { font-family : $body-font }
  .heading-font { font-family : $heading-font }

  // Set font sizes
  h1, .t1         { font-size : var(--title1); }
  h2, .t2         { font-size : var(--title2); }
  h3, .t3         { font-size : var(--title3); }
  h4, .t4         { font-size : var(--normal); }
  h5, .small      { font-size : var(--small); }
  h6, .smaller    { font-size : var(--smaller); }
  // l-block
  .l-block{
    margin-bottom: .5rem;
  }
  //spacer
  hr{
    width: 100%;
    border: solid 1px $borderColor;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: .5rem;
  }
</style>
