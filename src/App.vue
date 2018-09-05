<template>
  <div id="app">
    <v-app id="inspire">
      <div class="ed-container full">
        <aside class="ed-item l-30 cross-center sidebar">
          <v-text-field dark
              label="Outline"
              outline
            ></v-text-field>
        </aside>
        <div class="ed-item l-70">
          PRueba
        </div>
      </div>
      <!-- <nds-footer></nds-footer> -->
    </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NdsFooter from './components/NdsFooter.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NdsFooter
  }
}
</script>
<style lang="scss">
  @import 'src/plugins/mixins.scss';
  .sidebar{
    background: #3a3a3a;
    height: 200px;
    @include from(l){
      height: 100vh;
    }
  }
</style>