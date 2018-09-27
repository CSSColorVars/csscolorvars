<template>
  <main class="main-main ed-container ed-item l-80 application theme--light">
      <v-tabs
        class="ed-item"
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
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <nds-lighten></nds-lighten>
      </v-tab-item>
      <v-tab-item>
        <nds-darken></nds-darken>
      </v-tab-item>
      <v-tab-item>
       RGBA
      </v-tab-item>
    </v-tabs-items>
    <!-- Light Colors -->
    <nds-lighten></nds-lighten>
    <!-- Dark Colors -->
    <nds-darken></nds-darken>
    <!-- <nds-rgba></nds-rgba> -->
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
      ]
    }
  },
  components: {
    NdsLighten,
    NdsDarken,
    NdsRgba
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .ed-item.main-main{
    padding-top: 1rem;
    padding-right: 80px;
    align-content: flex-start;
    // min-width: 600px;
    @include from (l) {
      max-height: 100vh;
    }
  }
  .v-text-field{
    margin-top: 0;
    padding-top: 0;
  }
</style>
