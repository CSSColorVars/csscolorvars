<template>
  <div class="nds-container full">
    <nds-sidebar></nds-sidebar>
    <nds-main></nds-main>
    <nds-pallete></nds-pallete>
    <nds-notification></nds-notification>
    <nds-getcode></nds-getcode>
    <footer class="nds-footer">
      <a href="https://twitter.com/2062nandes?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @2062nandes</a>
    </footer>
  </div>
</template>

<script>
import NdsMain from '@/components/NdsMain.vue'
import NdsSidebar from '@/components/NdsSidebar.vue'
import NdsPallete from '@/components/NdsPallete.vue'
import NdsGetcode from '@/components/NdsGetcode.vue'
import NdsNotification from '@/components/NdsNotification.vue'
export default {
  name: 'home',
  components: {
    NdsSidebar,
    NdsMain,
    NdsPallete,
    NdsGetcode,
    NdsNotification
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .nds-footer {
    bottom: 1rem;;
    @include from(l){
      width: 20%;
      position: fixed;
      left: 0;
      text-align: center;
    }
  }
</style>
