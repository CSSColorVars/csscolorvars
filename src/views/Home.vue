<template>
  <div class="nds-container full">
    <nds-sidebar></nds-sidebar>
    <nds-main></nds-main>
    <nds-pallete></nds-pallete>
  </div>
</template>

<script>
import NdsMain from '@/components/NdsMain.vue'
import NdsSidebar from '@/components/NdsSidebar.vue'
import NdsPallete from '@/components/NdsPallete.vue'
export default {
  name: 'home',
  components: {
    NdsSidebar,
    NdsMain,
    NdsPallete
  }
}
</script>
