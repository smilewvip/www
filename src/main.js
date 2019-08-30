// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/*import router from './router'*/
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from "axios";
import VueRouter from 'vue-router'
import {routerMode} from './config/env'
import routeConfig from './router-config'
import defines  from './config/global'
import './element-variables.scss'

Vue.use(Element)

Vue.prototype.$http = axios;
Vue.prototype.defines  = defines;

/*axios配置 */
// var instance = axios.create({
//   baseURL: 'http://localhost:8080/api/',
//   timeout: 5000
// });

/*Vue.config.productionTip = false*/

//加载路由中间件
Vue.use(VueRouter)
//定义路由
const router = new VueRouter({
      routes: routeConfig,
      mode: routerMode,
      strict: process.env.NODE_ENV !== 'production',
})

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  render: h => h(App)
})