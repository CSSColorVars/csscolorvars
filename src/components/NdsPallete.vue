<template>
  <v-navigation-drawer
    :mini-variant="mini"
    @dblclick="mini = !mini"
    v-model="drawer"
    hide-overlay
    stateless
    dark
    right
    touchless
    fixed
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar @click.stop="mini = !mini">
          <v-list-tile-avatar>
            <v-icon>palette</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Colours pallette</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile
        v-for="(item, id) in palleteColors"
        :key="item.property"
        avatar
        @dblclick.stop="mini = !mini"
        @click="TOGGLE_COLOR(id)"
      >
        <v-list-tile-avatar>
          <v-icon :style="'color:' + invertvalue + ';background-color:'+ item.value +';'" v-text="item.edit ? 'brush' : ''"></v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>--{{ item.property }}-color</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action @click="DELETE_COLOR(id)">
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">delete</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-divider></v-divider>
          <nds-newcolor></nds-newcolor>
        </v-list>
      </v-toolbar>
    </v-list>
    <!-- <div>
      <v-btn @click="clearPallete" fab dark>
        <v-icon>refresh</v-icon>
      </v-btn>
    </div> -->
  </v-navigation-drawer>
</template>
<script>
import NdsNewcolor from '@/components/NdsNewcolor.vue'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'NdsPallete',
  components: {
    NdsNewcolor
  },
  data () {
    return {
      drawer: true,
      mini: true,
      right: null
    }
  },
  computed: {
    ...mapState(['palleteColors']),
    ...mapGetters(['invertvalue'])
  },
  methods: {
    ...mapMutations(['ADD_COLOR', 'DELETE_COLOR', 'TOGGLE_COLOR']),
    clearPallete () {
      localStorage.clear()
      location.reload()
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
</style>
