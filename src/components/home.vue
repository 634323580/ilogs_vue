<template>
  <div class="home">
    
    <Navbar message="hello!"></Navbar>

    <Asides></Asides>

    <!-- <Articlelist></Articlelist> -->
    <div class="articleList">
    <!-- 搜索 -->
      <Search ref='searchComponent'></Search>
      <div id="list-container">
          <Category></Category>
        <ul class="article-list thumbnails">
            <router-view class="ui-view app-ui-view" keep-alive></router-view>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
import Request from '../request.js'
import Navbar from './nav'
import Asides from './aside'
import Articlelist from './articleList'
import Search from './searchh'
import Category from './category'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:{}
    }
  },
  created:function(){
  },
  mounted:function(){

  },
  methods:{
    incrementTotal:function(){
      // console.log('父组件')
    }
  },
  components: {
    Navbar,
    Asides,
    Articlelist,
    Search,
    Category
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
h1, h2 {
  font-weight: normal;
  font-size:30px;
}

ul {
  list-style-type: none;
  padding: 0;
}




.home{
  .article-list{
  padding-top:36px;

}
}
</style>
