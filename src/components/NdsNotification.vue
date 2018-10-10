<template>
  <v-snackbar :value="notify" bottom="bottom" left="left" multi-line="multi-line" :timeout= "timeout">
    {{text}}
    <v-btn color="pink" flat @click="closeNotification()">CLOSE</v-btn>
  </v-snackbar>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NdsCopy',
  data () {
    return {
      text: 'Sin texto'
    }
  },
  computed: {
    ...mapState(['notify', 'timeout'])
  },
  methods: {
    ...mapMutations(['closeNotification']),
    onCopy: function (e) {
      this.text = 'You just copied: ' + e.text
      this.$store.commit('updateNotification')
    },
    onError: function (e) {
      this.text = 'Failed to copy texts'
    }
  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
</style>