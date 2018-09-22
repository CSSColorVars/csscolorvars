<template>
  <main class="main-main ed-container ed-item l-80 application theme--light">
    <!-- Light Colors -->
    <nds-lighten></nds-lighten>
    <!-- Dark Colors -->
    <nds-darken></nds-darken>
  </main>
</template>
<script>
import NdsLighten from '@/components/NdsLighten'
import NdsDarken from '@/components/NdsDarken'
export default {
  name: 'NdsMain',
  components: {
    NdsLighten,
    NdsDarken
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
