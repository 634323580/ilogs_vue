// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import myRouter from './routers'
import Bus from './bus.js'
Vue.use(Resource);
// 设置默认请求地址
Vue.http.options.root = 'http://104.238.140.37:9000';
Vue.use(VueRouter)
let intercept = 0;
Vue.http.interceptors.push((request, next) => {
  intercept++
  Bus.$emit('loading',true);
  // modify request ...
    // console.log(intercept)

  // stop and return response
  next(response => {
    response.sb = '111'
    intercept--
    // console.log(response)
    if(intercept == 0){
        Bus.$emit('loading',false);
      }
  })
});


const router = new VueRouter({
	//abstract:true,
	//地址栏不会有变化
	//以下设置需要服务端设置
	scrollBehavior: function (to, from, savedPosition) {
  return savedPosition || { x: 0, y: 0 }
  },
	// linkActiveClass:'nav-active' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: myRouter,
  render: h => h(App)
})
