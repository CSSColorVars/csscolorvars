<template>
  <div class="ed-container full">
    <nds-sidebar></nds-sidebar>
    <nds-main></nds-main>
    <nds-colorsbar></nds-colorsbar>
  </div>
</template>

<script>
import NdsMain from '@/components/NdsMain.vue'
import NdsSidebar from '@/components/NdsSidebar.vue'
import NdsColorsbar from '@/components/NdsColorsbar.vue'
export default {
  name: 'home',
  components: {
    NdsSidebar,
    NdsMain,
    NdsColorsbar
  }
}
</script>
