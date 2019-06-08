// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './vuex/store'
// import {userToken} from "./vuex/mutations";
import axios from 'axios'


import qs from 'qs' // 引入qs


Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.HOST = '/api' // 此处可根据个人习惯设置 此处的‘api’ 跟index.js中的‘api’一致，则所有的请求只需要使用this.HOST即可

// const store1 = {
//   state: {
//     token: sessionStorage.getItem('userToken') || '',
//   },
// }

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
//     if (sessionStorage.getItem('userName')) {// 判断是否登录
//       next()
//     } else {// 没登录则跳转到登录界面
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next()
//   }
// });

//添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if(config.method === 'post') { // post请求时，处理数据
      config.data = qs.stringify( {
          ...config.data //后台数据接收这块需要以表单形式提交数据，而axios中post默认的提交是json数据,所以这里选用qs模块来处理数据，也有其他处理方式，但个人觉得这个方式最简单好用
      })
  } 
  return config;
}, function (error) {
  loadinginstace.close()
  return Promise.reject(error);
})
//添加响应拦截器
axios.interceptors.response.use(function(response){
  return response;
},function(error){
 return Promise.reject(error);
});

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           // 这里写清除token的代码
//           sessionStorage.setItem("userToken",null);
//           sessionStorage.setItem("userName",null);
//           console.log(router.currentRoute.fullPath)
//           router.replace({
//             path: '/login',
//             query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
//           })
//       }
//     }
//     return Promise.reject(error.response)
//   });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>',
  beforeCreate(){
  Vue.prototype.bus = this
  }
})
