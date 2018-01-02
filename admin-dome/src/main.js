// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import App from './App'
import axios from "axios"

import router from './router'
import stores from './store'
import Loading from "./components/Loading"
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);

import './mock' // 该项目所有请求使用mockjs模拟

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Loading)




// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  stores.dispatch("LOADING_SHOW")
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  stores.dispatch("LOADING_HIDE")
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:stores,
  router,
  template: '<App/>',
  components: {
    App
  }
})
