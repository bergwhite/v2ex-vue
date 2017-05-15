import 'babel-polyfill'  // 兼容IE
import Vue from 'vue'
import Marked from 'marked'  // markdown to html
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 在原型链上扩展$marked方法
Vue.prototype.$marked = Marked

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
