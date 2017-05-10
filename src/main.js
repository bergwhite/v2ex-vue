import Vue from 'vue'
import Marked from 'marked'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$marked = Marked

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

