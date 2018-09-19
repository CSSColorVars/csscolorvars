<template>
  <div class="ed-item">
    <v-card class="card--color" :color="color">
      <v-card-title primary-title>
        <slot></slot>
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'ColorCard',
  props: {
    color: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'src/sass/mixins.scss';
 .card--color{
    height: 10srem;
    border: solid 1px;
    margin-bottom: .5rem;
  }
</style>
