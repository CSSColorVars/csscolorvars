import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/ed-grid'
import VueRx from 'vue-rx'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRx)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
