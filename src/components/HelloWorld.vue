<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import { Observable } from 'rxjs'
let $numbers = Observable.create((observer) => {
  let number = 0
  setInterval(() => {
    number++
    observer.next(number)
  }, 1000)
})
export default {
  name: 'HelloWorld',
  subscriptions: {
    msg: $numbers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
