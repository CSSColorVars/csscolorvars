<template>
  <header>
    <ul>
      <li v-for = "item in customcolors" :key="item.property">
        <a href="">
          <span v-text="item.property"></span>
        </a>
      </li>
    </ul>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['customcolors'])
}
</script>
