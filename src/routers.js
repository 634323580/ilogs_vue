// module.exports = function(router){
    // //路由表
    // router.map({
    //     //默认
    //     '/':{
    //         name:'index',
    //         component: require('./components/Hello.vue')

    //     },
    //     'home':{
    //         name:'home',
    //         component: function(reslove){
    //           return require(['./components/Hello.vue'],reslove);
    //         }

    //     },
    //     '*': {
    //         name:'404error',
    //        component:{
    //         template: '<p>乱输你麻痹</p>',
    //       }
    //     },

    // });


    // //默认List主页
    // router.redirect({
    //     '/':"/home" 
    // });
    


// };
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import Error404 from './components/404.vue'
import Article from './components/articleList.vue'
var router = new VueRouter({
  routes: [
    {
       path: '/',
       name:'index',
       component: Home 
    },
    {
       path: '/home',
       name:'home',
       component: Home 
    },
    {
      path: '/article',
      component:Article
    },
    {
       path: '/*', 
       component: Error404 
    },
    {
      path: '/',
      redirect: '/home'
    }
    
  ]
})

export default router;

