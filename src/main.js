import './plugins/vuetify'
import './plugins/ed-grid'
import 'prismjs/themes/prism-okaidia.css'
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store/store'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(VueClipboard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
