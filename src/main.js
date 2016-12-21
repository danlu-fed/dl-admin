import Vue from 'vue'
import http from 'vue-resource'
import Router from 'vue-router'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// Vue.use(Router)
// Vue.use(http)
Vue.use(ElementUI)


new Vue({
  el: '#app',
  render: h => h(App)
})