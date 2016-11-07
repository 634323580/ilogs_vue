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
import ArticleContent from './components/articleContent.vue'
import Category from './components/category.vue'
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
       component: Home,
       children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: Error404
        },
       ]
    },
    {
      path: '/articlecon/:articleId',
      name:'listcon',
      component:ArticleContent
    },
    {
      path: '/category/:categoryId',
      name:'category',
      component:Category
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

