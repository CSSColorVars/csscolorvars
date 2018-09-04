<template>
  <v-footer
      height="auto" fixed
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <!-- <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          flat
          round
        >
          {{ link }}
        </v-btn> -->
        <v-flex
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;{{year}} — <strong>Fernando Averanga Aruquipa</strong>
        </v-flex>
      </v-layout>
    </v-footer>
</template>
<script>
let year = new Date().getFullYear()
export default {
  data () {
    return {
      year,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    }
  }
}
</script>

