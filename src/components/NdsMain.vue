<template>
  <main class="main-main ed-container ed-item l-80 application theme--light">
    <!-- Light Colors -->
    <nds-lighten></nds-lighten>
    <!-- Dark Colors -->
  </main>
</template>
<script>
import NdsLighten from '@/components/NdsLighten'
export default {
  name: 'NdsMain',
  components: {
    NdsLighten
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
