<template>
  <div id="app">
    <v-app id="inspire">
      <div class="ed-container full">
        <nds-sidebar></nds-sidebar>
        <nds-main></nds-main>
      </div>
      <nds-footer></nds-footer>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CpInput from './components/CpInput.vue'
import NdsSidebar from './components/NdsSidebar.vue'
import NdsMain from './components/NdsMain.vue'
import NdsFooter from './components/NdsFooter.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    CpInput,
    NdsSidebar,
    NdsMain,
    NdsFooter
  }
}
</script>
