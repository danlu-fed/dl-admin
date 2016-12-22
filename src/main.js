import Vue from 'vue'
import http from 'vue-resource'
import Router from 'vue-router'
import routerMap from "./router.js";
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router)
Vue.use(http)
Vue.use(ElementUI)

// Create the router instance and pass the `routes` option
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: routerMap
})

// Create and mount the root instance.
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
