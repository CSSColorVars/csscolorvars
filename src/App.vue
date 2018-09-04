<template>
  <div id="app">
    <v-app id="inspire" dark>
    <v-navigation-drawer
      fixed
      right
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app height="70px">
      <v-toolbar-title>Custom Properties Generator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
      
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <!-- <v-flex v-for="i in 6" :key="`2${i}`" xs12 sm3 lg2>
          <v-text-field
            label="Box"
            single-line
            box color="#FFF"
          ></v-text-field>
        </v-flex> -->
      </v-layout>
    </v-container>
    <nds-footer></nds-footer>
  </v-app>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NdsFooter from './components/NdsFooter.vue'

export default {
  name: 'app',
  data: () => ({
    drawer: false
  }),

  props: {
    source: String
  },
  components: {
    HelloWorld,
    NdsFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
