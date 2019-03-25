<template>
  <v-snackbar :value="notify" bottom="bottom" multi-line="multi-line" :timeout= "timeout">
    {{message}}
    <v-btn color="pink" flat @click="closeNotification()">CLOSE</v-btn>
  </v-snackbar>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'NdsNotification',
  computed: {
    ...mapState({
      notify: (state) => state.notifyCopy.notify,
      message: (state) => state.notifyCopy.message,
      timeout: (state) => state.notifyCopy.timeout
    })
  },
  methods: {
    ...mapMutations(['closeNotification'])
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
</style>
