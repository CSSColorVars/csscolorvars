<template>
  <div class="nds-container full">
    <nds-sidebar></nds-sidebar>
    <nds-main></nds-main>
    <nds-pallete></nds-pallete>
    <nds-notification></nds-notification>
    <nds-getcode></nds-getcode>
    <nds-footer></nds-footer>
  </div>
</template>

<script>
import NdsMain from '@/components/NdsMain.vue'
import NdsSidebar from '@/components/NdsSidebar.vue'
import NdsPallete from '@/components/NdsPallete.vue'
import NdsGetcode from '@/components/NdsGetcode.vue'
import NdsNotification from '@/components/NdsNotification.vue'
import NdsFooter from '@/components/NdsFooter.vue'
export default {
  name: 'home',
  components: {
    NdsSidebar,
    NdsMain,
    NdsPallete,
    NdsGetcode,
    NdsNotification,
    NdsFooter
  }
}
</script>
