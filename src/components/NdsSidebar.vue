<template>
  <aside class="ed-item l-30 cross-center sidebar">
    <v-text-field dark
      label="COLOR #"
      outline
      color="#00CBFF"
    ></v-text-field>
  </aside>
</template>
<script>
import Color from 'color'
let val = Color('#00CBFF').hex()
export default {
  name: 'NdsSidebar',
  data () {
    return {
      val
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .sidebar{
    background: #3a3a3a;
    height: auto;
    @include from(l){
      height: 100vh;
    }
  }
</style>
