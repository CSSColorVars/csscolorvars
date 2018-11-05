<template>
  <v-dialog v-model="dialog" max-width="300px">
    <v-list-tile class="v-list__tile--link" avatar slot="activator">
      <v-list-tile-avatar
        avatar
        outline
        fab>
        <v-btn outline small fab>
          <v-icon>add</v-icon>
        </v-btn>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>add new color</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-card>
      <v-card-title>
        <span class="headline">Create new color</span>
      </v-card-title>
      <v-card-text>
        <form class="header--form nds-container">
        <color-property
          :property="ndsColor.property"
          :update="updateProperty"
          state="true"
        ></color-property>
        <color-value
          :value="ndsColor.value"
          :update="updateValue"
          state="true"
        ></color-value>
      </form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="ndsColor.propertyState ? (ADD_COLOR(ndsColor), dialog = false, ndsColor.property = '', ndsColor.propertyState = false) : ''">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import ColorProperty from '@/ui-components/ColorProperty.vue'
import ColorValue from '@/ui-components/ColorValue.vue'
export default {
  name: 'NdsNewcolor',
  data () {
    return {
      dialog: false,
      ndsColor: {
        edit: false,
        property: '',
        propertyState: false,
        value: '#1671b9',
        valueState: true,
        minAmount: 0,
        minJump: 1,
        lighten: {
          amount: 10,
          jump: 5
        },
        darken: {
          amount: 10,
          jump: 5
        },
        rgba: {
          alpha: 0.5,
          max: 1,
          step: 0.01
        }
      }
    }
  },
  components: {
    ColorProperty,
    ColorValue
  },
  computed: {
    ...mapState(['palleteColors'])
  },
  methods: {
    ...mapMutations(['ADD_COLOR']),
    updateProperty (prop) {
      const propValidate = /^[a-zA-ZñÑ]|^[a-zA-ZñÑ][a-zA-ZñÑ_-]+$/
      for (let i = 0; i < this.palleteColors.length; i++) {
        // bug corregir
        if (propValidate.test(prop) && this.palleteColors[i].property !== prop) {
          this.ndsColor.property = prop
          this.ndsColor.propertyState = true
        } else {
          this.ndsColor.propertyState = false
        }
      }
    },
    updateValue (hex) {
      const hexValidate = /^#+([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/
      if (hexValidate.test(hex.target.value)) {
        this.ndsColor.value = hex.target.value
        this.ndsColor.valueState = true
      } else {
        this.ndsColor.valueState = false
      }
      if (hex.target.value === '') {
        this.ndsColor.valueState = true
      }
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .v-dialog__container{
    width: 100%;
  }
</style>
