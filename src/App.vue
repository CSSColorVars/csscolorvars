<template>
  <div id="app">
    <v-app id="inspire">
      <NdsLayout></NdsLayout>
      <nds-footer></nds-footer>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CpInput from './components/CpInput.vue'
import NdsLayout from './components/NdsLayout.vue'
import NdsFooter from './components/NdsFooter.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    CpInput,
    NdsLayout,
    NdsFooter
  }
}
</script>
