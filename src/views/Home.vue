<template>
  <div class="ed-container full">
    <nds-sidebar></nds-sidebar>
    <nds-main></nds-main>
  </div>
</template>

<script>
import NdsMain from '@/components/NdsMain.vue'
import NdsSidebar from '@/components/NdsSidebar.vue'
export default {
  name: 'home',
  components: {
    NdsSidebar,
    NdsMain
  }
}
</script>
