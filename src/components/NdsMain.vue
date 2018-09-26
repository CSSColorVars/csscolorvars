<template>
  <main class="main-main ed-container ed-item l-80 application theme--light">
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
  components: {
    NdsLighten,
    NdsDarken,
    NdsRgba
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .v-text-field{
    margin-top: 0;
    padding-top: 0;
  }
</style>
