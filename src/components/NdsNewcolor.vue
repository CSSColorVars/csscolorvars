<template>
  <v-dialog persistent v-model="dialog" max-width="300px">
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
          :state="ndsColor.propertyState"
          :errorMesagge = "errorMesagge"
          :pressEnter="saveButton"
        ></color-property>
        <color-value
          :value="ndsColor.value"
          :update="updateValue"
          :state="ndsColor.valueState"
          :pressEnter="saveButton"
        ></color-value>
      </form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" flat
          @click.native="closeButton">Cancel</v-btn>
        <v-btn color="blue darken-1" flat
          @click="saveButton">Save</v-btn>
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
        propertyState: true,
        value: '#663399', // In honor with Rebecca Meyer
        valueState: true,
        lighten: { jump: 0 },
        darken: { jump: 0 },
        rgba: { alpha: 50 }
      },
      errorMesagge: ''
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
    enterProp: function () {
      console.log('carajo')
    },
    updateProperty: function (prop) {
      const propValidate = /^[a-zA-ZñÑ]|^[a-zA-ZñÑ][a-zA-ZñÑ_-]+$/
      for (let i = 0; i < this.palleteColors.length; i++) {
        if (prop !== '' && propValidate.test(prop) && this.palleteColors[i].property !== prop) {
          this.ndsColor.property = prop
          this.ndsColor.propertyState = true
        } else if (this.palleteColors[i].property === prop) {
          this.ndsColor.propertyState = false
          this.errorMesagge = 'Duplicate property, type another name'
          i = this.palleteColors.length
        } else {
          this.ndsColor.propertyState = false
          this.errorMesagge = 'Enter a letter in the first character'
        }
      }
    },
    updateValue: function (hex) {
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
    },
    saveButton: function () {
      if (this.ndsColor.value !== '' && this.ndsColor.property !== '' && this.ndsColor.propertyState && this.ndsColor.valueState) {
        this.ADD_COLOR(this.ndsColor)
        this.dialog = false
        this.ndsColor.property = ''
        this.ndsColor.value = '#663399' // In honor with Rebecca Meyer
        this.ndsColor.propertyState = true
        this.ndsColor.valueState = true
      } else if (this.ndsColor.property === '') {
        this.ndsColor.propertyState = true
        setTimeout(this.stateProp, 150)
      } else if (this.ndsColor.value === '' || !this.ndsColor.valueState) {
        this.ndsColor.valueState = false
      }
    },
    stateProp: function () {
      this.ndsColor.propertyState = false
      this.errorMesagge = 'Please enter the name of the property'
    },
    closeButton: function () {
      this.dialog = false
      this.ndsColor.property = ''
      this.ndsColor.propertyState = true
      this.ndsColor.valueState = true
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
