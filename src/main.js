import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(Antd);


// main.js文件
// import axios from 'axios'
// // 配置请求的跟路径
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/users'
// axios.interceptors.request.use(config => {
//   // console.log(config)
//   config.headers.Authorization = localStorage.token
//   // 在最后必须 return config
//   return config
// })
// Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
