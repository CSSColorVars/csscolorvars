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
    class="main-start"
  >
    <div class="toolbar--top">
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
          @click=""
        >
          <v-list-tile-avatar @click="TOGGLE_COLOR(id)">
            <v-icon :style="'color:' + invertvalue + ';background-color:'+ item.value +';'" v-text="item.edit ? 'brush' : ''"></v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content @click="TOGGLE_COLOR(id)">
            <v-list-tile-title>--{{ item.property }}-color</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action @click="DELETE_COLOR(id)">
            <v-btn v-if="!item.edit" icon ripple>
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
    </div>
    <!-- <div class="toolbar--end l-block">
        <v-divider></v-divider>
      <v-list class="pt-0" dense>
        <v-list-tile
          avatar
          @dblclick.stop="mini = !mini"
        >
          <v-list-tile-avatar>
            <v-btn fab small>
              <v-icon>settings</v-icon>
            </v-btn>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
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
  .toolbar--top, .toolbar--end{
    width: 100%;
  }
  .toolbar--end{
    align-self: flex-end;
    margin-bottom: 5rem;
  }
</style>
