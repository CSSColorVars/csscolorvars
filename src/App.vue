<template>
  <div id="app">
    <v-app id="inspire">
      <router-view/>
    </v-app>
    <div class="credits">
      <router-link to="/">Restart</router-link> |
      <router-link to="/credits">credits</router-link>
    </div>
  </div>
</template>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .credits{
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
</style>
