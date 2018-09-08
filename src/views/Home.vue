<template>
  <div class="ed-container full">
    <aside class="ed-container ed-item l-20 cross-center sidebar application theme--dark">
      <figure class="figure--color ed-item l-75 m-40 s-75 l-block to-center">
        <input type="color" v-model="colorHex"/>
      </figure>
      <div class="ed-item l-80 to-center">
        <v-text-field dark
          label="text"
          outline
          color="#FFF"
          maxlength="7"
          placeholder="#000000"
          v-model="colorHex"
        >
        </v-text-field>
      </div>
      <div class="ed-item l-80 to-center">
        <h2>{{colorHex}}</h2>
      </div>
    </aside>
    <nds-main :hex="colorHex"></nds-main>
  </div>
</template>

<script>
import NdsMain from '@/components/NdsMain.vue'
export default {
  name: 'home',
  data () {
    return {
      colorHex: '#FF0FFF'
    }
  },
  components: {
    NdsMain
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  :root{
    --height-figure: 12.8vw;
  }
  aside{
    display: block;
  }
  .sidebar{
    height: auto;
    @include from(l){
      height: 100vh;
      overflow: auto;
    }
  }
  .figure--color{
    height: var(--height-figure);
    input{
      width: 100%;
      height: 180px;
      @include from(l){
        width: 12.8vw;
        height: var(--height-figure);
      }
      border: solid #C2C2C2;
      border-radius: .3rem;
      cursor: pointer;
      &:hover, &:active, :focus, :active{
        border: solid #FFF;
        outline: none;
      }
    }
  }
  .input--color{
    input{
      width: 58px;
      min-height: 56px;
      border: solid #C2C2C2;
      border-radius: .3rem;
      cursor: pointer;
      &:hover, &:active, :focus, :active{
        border: solid #FFF;
        outline: none;
      }
    }
  }
  .input--color, .figure--color {
    input{
      border: solid #C2C2C2;
      border-radius: .3rem;
      cursor: pointer;
      &:hover, &:active, :focus, :active{
        border: solid #FFF;
        outline: none;
      }
    }
  }
</style>
