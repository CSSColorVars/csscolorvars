<template>
  <div class="border-block nds-item nds-container full">
    <h3>Related colors</h3>
    <div class="grid nds-item">
      <!-- Luminosity Colors -->
      <div class="span-col-2">
        <div class="grid-releated">
          <div
            v-for="x in 10"
            :style="`--shadeColor: hsl(${hslValues[0]},${hslValues[1]}%, ${105 - (x * 10) }%)`"
            :key="x"
            v-clipboard:copy="`${fixSyntax[0]}hsl(var(--${colorActive.property}-HS), ${105 - (x * 10) }%)${fixSyntax[1]}`"
            v-clipboard:success="updateNotification"
            v-clipboard:error="updateError"
          ></div>
        </div>
      </div>
      <!-- Transparency Colors -->
      <div class="grid-releated2">
        <div
          v-for="x in 5"
          :style="`--hsla-color: hsl(${hslValues[0]},${hslValues[1]}%, ${hslValues[2]}%, ${(x * 18)}%)`"
          :key="x"
          v-clipboard:copy="`${fixSyntax[0]}hsla(var(--${colorActive.property}-HSL), ${(x * 18)}%)${fixSyntax[1]}`"
          v-clipboard:success="updateNotification"
          v-clipboard:error="updateError"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NdsReleatedColors',
  computed: {
    ...mapState(['styleSheet']),
    ...mapGetters(['colorActive', 'hslValues']),
    fixSyntax: function () {
      switch (this.styleSheet.selectStyle) {
        case 'CSS':
          return ['', '']
        case 'SCSS':
          return [`#{'`, `'}`]
        default:
          return ['', '']
      }
    }
  },
  methods: {
    ...mapMutations(['updateNotification', 'updateError'])
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .grid-releated {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    @include from(l){
      grid-template-columns: repeat(10, 1fr);
    }
    > div {
      border: solid 1px #bebebe;
      background: var(--shadeColor, #fafafa);
      height: 3.2rem;
      cursor: pointer;
      &:hover{
        box-shadow: 0px 0px 4px 1px #bebebe;
      }
    }
  }
  .grid-releated2 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    @include to(l) {
      grid-column: span 2 / auto;
      height: 3rem;
    }
    > div {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAG0lEQVR42mM4c+bMf2SMDhjooABdAF0DHRQAAJ4P6+G77p9NAAAAAElFTkSuQmCC);
      background-repeat: repeat;
      position: relative;
      &::before{
        content: '';
        background: var(--hsla-color);
        width: 100%;
        height: 100%;
        margin-bottom: 0;
        display: block;
        position: absolute;
      }
      cursor: pointer;
      &:hover{
        box-shadow: 0px 0px 4px 1px #bebebe;
      }
    }
  }
  .border-block{
    width: 100%;
    position: relative;
    border: solid 2px #bebebe;
    border-radius: 10px;
    padding-top: 1.2rem;
    padding-bottom: 1rem;
    margin: 1.5rem 1rem 1rem;
    @include from(l){
      margin: 1.5rem 0 1.5rem;
    }
    > h3 {
      position: absolute;
      top: -1rem;
      left: 1rem;
      background: #fafafa;
      padding: 0 .5rem;
    }
  }
</style>
