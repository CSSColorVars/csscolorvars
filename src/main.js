import './plugins/vuetify'
import './plugins/nandes-kit'
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store/store'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(VueClipboard)

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
