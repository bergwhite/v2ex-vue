import 'babel-polyfill'
import Vue from 'vue'
import Marked from 'marked'  // markdown to html
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$marked = Marked

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
