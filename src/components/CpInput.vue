<template>
  <div class="mierda">
    <div class="control-group" style="opacity: 1; transform: translateY(0px);">
        <input v-model="nv.numero" type="text" name="num_items" min="1" autofocus="">
        <label class="sidebar__label" for="number_items"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Número de items</font></font></label>
    </div>
    <h3>{{ nv.numero }}</h3>
  </div>
</template>
<script>
import Color from 'color'
export default {
  name: 'CpInput',
  data () {
    return {
      nv: {
        numero: ''
      }
    }
  },
  subscriptions: {
  },
  mounted: function () {
    this.nv.numero = Color('#a14fb9').darken(.08).hex() //de 20 en 20 => darken($color,4) = darken(.08).hex()
  }
}
</script>
<style lang="scss">
  $color: #a14fb9;
  :root{
    --color: #{$color};
    --color-dark-10: #{darken($color,1)};
    --color-dark-20: #{darken($color,2)};
    --color-dark-30: #{darken($color,3)};
    --color-dark-40: #{darken($color,4)};
  } 
  .mierda {
    background: var(--color-dark-10);
  }
</style>

