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
        <div class="nds-item to-center">
          <nds-lighten />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="nds-item to-center">
          <nds-darken />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="nds-item to-center">
          <nds-hsla />
        </div>
      </v-tab-item>
    </v-tabs-items>
    </template>
    <template v-else >
      <!-- Light Colors -->
      <nds-lighten />
      <!-- Dark Colors -->
      <nds-darken />
      <nds-hsla />
    </template>
    <nds-related-colors />
    <!-- <div class="nds-item l-45">
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
import NdsHsla from '@/components/NdsHsla'
import NdsRelatedColors from '@/components/NdsRelatedColors'
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
    NdsHsla,
    NdsRelatedColors
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
    padding-right: 80px;
    @include from (m) {
      padding-right: 300px;
    }
    @include from (l) {
      max-height: 100vh;
      padding-right: calc(var(--aside-width) + 1rem);
      padding-left: 1rem;
      padding-top: 1rem;
      height: calc(100vh - 3.5rem);
      overflow: auto;
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
    @include from(l){
      grid-template-columns: repeat(3, 1fr);
    }
    grid-gap: 1rem;
  }
  .span-col-2{grid-column: span 2 / auto;}
  .v-window__container{
    width: 100%;
  }
</style>
