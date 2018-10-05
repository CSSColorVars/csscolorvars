<template>
  <header class="ed-container ed-item l-20 header-sidebar application theme--dark">
    <div class="header--logo ed-item l-100 m-50 s-30">

    </div>
    <form class="header--form ed-container ed-item l-100 m-50 s-70">
      <div class="header--property ed-item">
        <v-text-field dark
          label="Property:"
          color="#FFF"
          placeholder="#000000"
          :value="property"
          @keyup=""
          box
          suffix="-color"
        >
        </v-text-field>
      </div>
      <div class="header--value ed-item">
        <v-text-field dark
          label="Value"
          color="#FFF"
          maxlength="7"
          placeholder=""
          :value="value"
          @keyup="updateValue"
          box
        >
        </v-text-field>
        <figure class="figure--color">
          <input type="color" :value="value" @input="updateValue" />
        </figure>
      </div>
      <div class="header--color ed-item">
        <input type="color" :value="value" @input="updateValue" />
      </div>
    </form>
  </header>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NdsSidebar',
  computed: {
    ...mapGetters(['property', 'value'])
  },
  methods: {
    ...mapMutations(['updateValue'])
  }
}
</script>

<style lang="scss">
  @import 'src/sass/mixins.scss';
  :root{
    --height-figure: 12.8vw;
  }
  .ed-item.header-sidebar{
    height: auto;
    padding-right: 80px;
    @include from(l){
      height: 100vh;
      overflow: auto;
      padding-right: 0;
      @include crossCenter
    }
  }
  .header--value{
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
  .header--color{

    input[type="color"]{
      display: none;
      @include from(l){
        --maxwh-color: 300px;
        --wh-color: calc(20vw - 4rem);
        display: block;
        width: var(--wh-color);
        height: var(--wh-color);
        max-width: var(--maxwh-color);
        max-height: var(--maxwh-color);
        margin-left: auto;
        margin-right: auto;
        padding: 0 1.5px;
        border: solid 1px #C2C2C2;
        border-radius: .3rem;
        cursor: pointer;
        &:hover, &:active, &:focus, &:active{
          border: solid 1.5px #FFF;
          outline: none;
        }
      }
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
  .header--form{
    margin-top: 1rem;
  }
</style>
