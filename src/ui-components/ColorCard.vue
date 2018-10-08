<template>
  <div class="nds-item">
    <v-card class="card--color" :color="color">
      <v-card-title>
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
<style lang="scss">
  @import 'src/sass/mixins.scss';
 .card--color{
    height: 10srem;
    border: solid 1px;
    margin-bottom: .5rem;
  }
  .v-card__title{
    padding: .5rem .8rem;
  }
  .v-list__tile__content {
    flex: 1 1 0;
  }
  .v-list__tile__action {
    min-width: 30px;
  }
</style>
