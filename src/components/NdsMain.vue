<template>
  <main v-if="mainTab" class="main-main nds-container nds-item l-80 application theme--light">
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
    <a href="https://twitter.com/2062nandes?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @2062nandes</a>
  </main>
  <main v-else class="main-main nds-container nds-item l-80 application theme--light">
    <!-- Light Colors -->
    <nds-lighten></nds-lighten>
    <!-- Dark Colors -->
    <nds-darken></nds-darken>
    <nds-rgba></nds-rgba>
    <div class="cross-center">
      <a href="https://twitter.com/2062nandes?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @2062nandes</a>
    </div>
  </main>
</template>
<script>
import NdsLighten from '@/components/NdsLighten'
import NdsDarken from '@/components/NdsDarken'
import NdsRgba from '@/components/NdsRgba'
export default {
  name: 'NdsMain',
  data () {
    return {
      tab: null,
      items: [
        'Lighten', 'Darken', 'Rgba'
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
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .nds-item.main-main{
    padding-right: 80px;
    align-content: flex-start;
    // min-width: 600px;
    @include from (l) {
      max-height: 100vh;
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
</style>
