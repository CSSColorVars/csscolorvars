<template>
  <header class="nds-container nds-item l-20 header-sidebar application theme--dark">
    <div class="header nds-container nds-item">
      <div class="header--color nds-item l-100 m-50 s-35">
        <input type="color" :value="value" @input="updateValue" />
      </div>
      <form class="header--form nds-container nds-item l-100 m-50 s-65">
        <div class="header--property nds-item">
          <v-text-field dark
            v-if="property !== 'unnamed'"
            label="Property:"
            color="#FFF"
            placeholder="unnamed"
            :value="property"
            @input="updateProperty"
            box
            suffix="-color"
          >
          </v-text-field>
          <v-text-field dark
            v-else
            label="Property:"
            color="#FFF"
            placeholder="unnamed"
            value=""
            @input="updateProperty"
            box
            suffix="-color"
          >
          </v-text-field>
        </div>
        <div class="header--value nds-item">
          <v-text-field dark
            label="Value"
            color="#FFF"
            maxlength="7"
            placeholder="#000000"
            :value="value"
            @keyup="updateValue"
            box
          >
          </v-text-field>
          <figure class="figure--color">
            <input type="color" :value="value" @input="updateValue" />
          </figure>
        </div>
      </form>
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'NdsSidebar',
  computed: {
    ...mapState(['property', 'value'])
  },
  methods: {
    ...mapMutations(['updateProperty', 'updateValue'])
  }
}
</script>

<style lang="scss">
  @import 'src/sass/mixins.scss';
  .nds-item.header-sidebar{
    padding-right: 80px;
    @include mainCenter;
    @include from(l){
      height: 100vh;
      overflow: auto;
      padding-right: 0;
      @include crossCenter
    }
  }
  .header{
    max-width: 450px;
    @include mainCenter;
    &--value{
      position:relative;
      input[type="color"]{
        position: absolute;
        top: .5rem;
        right: 1.5rem;
        width: 3rem;
        height: 3rem;
        border: solid 1px #C2C2C2;
        border-radius: .3rem;
        cursor: pointer;
        &:hover, &:active, &:focus, &:active{
          border: solid 1px #FFF;
          outline: none;
        }
      }
    }
    &--color{
      @include mainCenter;
      @include crossCenter;
      input[type="color"]{
        --minwh-color: 75px;
        --maxwh-color: 140px;
        --wh-color: 25vw;
        width: var(--wh-color);
        height: var(--wh-color);
        min-width: var(--minwh-color);
        min-height: var(--minwh-color);
        max-width: var(--maxwh-color);
        max-height: var(--maxwh-color);
        padding: 0 1.5px;
        border: solid 1px #C2C2C2;
        border-radius: .3rem;
        cursor: pointer;
        &:hover, &:active, &:focus, &:active{
          border: solid 1.5px #FFF;
          outline: none;
        }
        @include from(m){
          --wh-color: 140px;
        }
        @include from(l){
          --maxwh-color: 300px;
          --wh-color: calc(20vw - 6rem);
        }
      }
    }
    &--form{
      margin-top: 1rem;
      max-width: 180px;
    }
  }

  // SCOPED
  .v-text-field__suffix {
    padding-left: 4px;
    white-space: nowrap;
    padding-top: 14px;
    font-weight: 300;
    font-size: 1.3rem;
  }
</style>
