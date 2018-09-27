import './plugins/vuetify'
import './plugins/ed-grid'
import '@babel/polyfill'
import Vue from 'vue'
import VueRx from 'vue-rx'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueRx)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
