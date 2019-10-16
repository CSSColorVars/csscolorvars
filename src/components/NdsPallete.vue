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
          <v-list-tile class="hide-from-m" avatar @click.stop="mini = !mini">
            <v-list-tile-avatar>
              <v-icon>palette</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>CSS ColorVars</v-list-tile-title>
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
          <v-list-tile class="show-from-m" avatar>
            <v-list-tile-avatar>
              <v-icon>palette</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>CSS ColorVars</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <draggable v-model="palleteColors" v-bind="{group:{pull:true,put:true},animation: 150}">
          <v-list-tile
            class="item"
            v-for="(item, id) in palleteColors"
            :key="item.property + id"
            avatar
            @dblclick.stop="mini = !mini"
            @click="`javascript:void()`"
          >
            <v-list-tile-avatar @click="TOGGLE_COLOR(id)">
              <v-icon :style="'border: solid #FFF 1px; color:' + invertvalue + ';background-color:'+ item.value +';'" v-text="item.edit ? 'brush' : ''"></v-icon>
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
        </draggable>
        <div class="l-block"></div>
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
import draggable from 'vuedraggable'
import NdsNewcolor from '@/components/NdsNewcolor.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'NdsPallete',
  components: {
    draggable,
    NdsNewcolor
  },
  data () {
    return {
      drawer: true,
      mini: false,
      right: null,
      enabled: true,
      dragging: false
    }
  },
  created () {
    const largeBp = matchMedia('(min-width: 660px)')
    const mediaQuery = mql => {
      mql.matches
        ? this.mini = false
        : this.mini = true
    }
    largeBp.addListener(mediaQuery)
    mediaQuery(largeBp)
  },
  computed: {
    ...mapGetters(['invertvalue']),
    palleteColors: {
      get () {
        return this.$store.state.palleteColors
      },
      set (newValue) {
        this.$store.commit('UPDATE_PALLETE', newValue)
      }
    }
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
  .show-from-m {
    @include showFrom(m)
  }
  .hide-from-m {
    @include hideFrom(m)
  }
  .toolbar--top, .toolbar--end{
    width: 100%;
  }
  .toolbar--end{
    align-self: flex-end;
    margin-bottom: 5rem;
  }
  .v-avatar i{
    border-radius: solid 1px #FFF !important;
  }
</style>
