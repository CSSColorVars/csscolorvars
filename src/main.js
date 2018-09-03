import Vue from 'vue'
import App from './App.vue'
import VueRx from 'vue-rx'

Vue.config.productionTip = false
Vue.use(VueRx)

new Vue({
  render: h => h(App)
}).$mount('#app')
