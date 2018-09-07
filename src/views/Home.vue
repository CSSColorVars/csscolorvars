<template>
  <NdsLayout></NdsLayout>
</template>

<script>
// @ is an alias to /src
import NdsLayout from '@/components/NdsLayout.vue'
export default {
  name: 'home',
  components: {
    NdsLayout
  },
  props: {
    name: {
      default: 'nds'
    }
  }
}
</script>
