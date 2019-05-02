<template>
  <main class="main-main nds-container nds-item l-80 full application theme--light">
    <template v-if="mainTab">
    <v-tabs
      class="nds-item"
      slot="extension"
      v-model="tab"
      dark
      grow
      fixed-tabs
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item"
      >{{ item }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="nds-container">
      <v-tab-item>
        <div class="nds-item m-70 to-center">
          <nds-lighten></nds-lighten>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="nds-item m-70 to-center">
          <nds-darken></nds-darken>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="nds-item m-70 to-center">
          <nds-rgba></nds-rgba>
        </div>
      </v-tab-item>
    </v-tabs-items>
    </template>
    <template v-else >
    <!-- Light Colors -->
    <nds-lighten></nds-lighten>
    <!-- Dark Colors -->
    <nds-darken></nds-darken>
    <nds-rgba></nds-rgba>
    </template>
    <div class="border-block nds-item nds-container full">
      <h3>Related colors</h3>
      <div class="grid nds-item">
        <div class="span-col-2">
          <div class="grid-releated">
            <div
              v-for="x in 10"
              :style="`--shadeColor: hsl(${hslValues[0]},${hslValues[1]}%, ${105 - (x * 10) }%)`"
              :key="x"
              v-clipboard:copy="`hsl(var(--${colorActive.property}-HS), ${105 - (x * 10) }%)`"
              v-clipboard:success="updateNotification"
              v-clipboard:error="updateError"
            ></div>
          </div>
        </div>
        <div class="grid-releated2">
          <div
            v-for="x in 5"
            :style="`--hsla-color: hsl(${hslValues[0]},${hslValues[1]}%, ${hslValues[2]}%, ${(x * 18)}%)`"
            :key="x"
            v-clipboard:copy="`hsla(var(--${colorActive.property}-HSL), ${(x * 18)}%)`"
            v-clipboard:success="updateNotification"
            v-clipboard:error="updateError"
          ></div>
        </div>
      </div>
    </div>
    <!-- <div class="nds-item l-55">
      <v-alert v-model="alert"
        color="success"
        icon="check_circle"
        outline=""
        dismissible
      >
      CSSColorVars helps you create your colors with CSS variables and use dynamic functions to apply lightness, darkness and transparency in the color variable.
      </v-alert>
    </div>
    <div class="nds-item l-45">
      <v-alert v-model="alert"
        color="error"
        icon="warning"
        outline=""
        dismissible
      >
        No longer depend on CSS preprocessors to create color variables, <b>use dynamic CSS variables with CSSColorVars</b>.</v-alert>
    </div> -->
  </main>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import NdsLighten from '@/components/NdsLighten'
import NdsDarken from '@/components/NdsDarken'
import NdsRgba from '@/components/NdsRgba'
export default {
  name: 'NdsMain',
  data () {
    return {
      alert: true,
      tab: null,
      items: [
        'Lighten', 'Darken', 'Hsla'
      ],
      mainTab: null
    }
  },
  components: {
    NdsLighten,
    NdsDarken,
    NdsRgba
  },
  created () {
    const largeBp = matchMedia('(min-width: 1024px)')
    const mediaQuery = mql => {
      mql.matches
        ? this.mainTab = false
        : this.mainTab = true
    }
    largeBp.addListener(mediaQuery)
    mediaQuery(largeBp)
  },
  computed: {
    ...mapGetters(['colorActive', 'hslValues'])
  },
  methods: {
    ...mapMutations(['updateNotification', 'updateError'])
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .nds-item.main-main{
    align-content: flex-start;
    // min-width: 600px;
    padding-right: 80px;
    @include from (l) {
      max-height: 100vh;
      padding-right: calc(80px + 1rem);
      padding-left: 1rem;
      padding-top: 1.5rem;
    }
  }
  .v-tabs.nds-item{
    padding-left: 0;
    padding-right: 0;
  }
  .v-text-field{
    margin-top: 0;
    padding-top: 0;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: repeat(1,1fr);
    @include from(l){
      grid-template-columns: repeat(3, 1fr);
    }
    grid-gap: 1rem;
  }
  .span-col-2{grid-column: span 2 / auto;}
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
  .v-window__container{
    width: 100%;
  }
</style>
