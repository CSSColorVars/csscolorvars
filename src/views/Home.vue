<template>
  <div class="nds-container full">
    <nds-sidebar></nds-sidebar>
    <nds-main></nds-main>
    <nds-pallete></nds-pallete>
    <nds-notification></nds-notification>
    <nds-getcode></nds-getcode>
    <footer class="nds-footer nds-container full">
      <div class="nds-item l-20 nds-container center">
        <!-- <div class="nds-item l-100 s-50 l-block">
          <a href="">Guide</a> .
          <a href="">API</a>
        </div> -->
        <div class="nds-item l-100 s-50 l-block">
          <!-- Place this tag where you want the button to render. -->
          <a class="github-button" href="https://github.com/CSSColorVars/csscolorvars" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </div>
      </div>
      <div class="nds-item l-80 copyright cross-end">
        <p class="cross-center">
          create by&nbsp;
          <a href="https://twitter.com/2062nandes" target="_blank"><b>Fernando Javier Averanga Aruquipa</b></a>
          &nbsp;·&nbsp;
          <a href="https://twitter.com/2062nandes?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @2062nandes</a>
        </p>
      </div>
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
      position: fixed;
      left: 0;
      bottom: 0;
    }
  }
  .center{
    text-align: center;
  }
  .copyright{
    padding-left: 1rem;
  }
</style>
