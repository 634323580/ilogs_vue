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
import home from './components/home.vue'
import error404 from './components/404.vue'
import article from './components/ArticleContent.vue'
var router = new VueRouter({
  routes: [
    {
       path: '/',
       name:'index',
       component: home 
    },
    {
       path: '/home',
       name:'home',
       component: home 
    },
    {
      path: '/article',
      component:article
    },
    {
       path: '/*', 
       component: error404 
    },
    {
      path: '/',
      redirect: '/home'
    }
    
  ]
})

export default router;

