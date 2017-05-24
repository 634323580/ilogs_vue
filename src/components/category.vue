<template>
  <div class="category">
      <ul class="unstyled clearfix sort-nav">
          <router-link to='/home/category/all' tag='li' active-class="active"><a>全部</a></router-link>
          <!--<li v-for='item in category' v-on:click='categorys(item,item._id)'><a>{{item.name}}</a></li>-->
          <router-link v-for='item in category' :to="{name:'category',params:{categoryId:item._id }}" active-class="active" tag="li" ><a>{{item.name}}</a></router-link>
          <!--<li><a>时事热闻</a></li>
          <li><a>小说精选</a></li>
          <li><a>拍摄游记</a></li>
          <li><a>漫画手绘</a></li>
          <li><a>签约作者</a></li>
          <li><a>新上榜</a></li>
          <li><a>七日热门</a></li>
          <li><a>三十日热门</a></li>
          <li><a>日选</a></li>
          <li><a>专题精选</a></li>
          <li><a>有奖活动</a></li>
          <li><a>简书出版</a></li>
          <li><a>简书播客</a></li>-->
      </ul>
  </div>
</template>
<script>
  import Request from '../request.js'
  export default{
    data(){
      return {
        category:[]
      }
    },
    created:function(){
      Request.get(this,'category').then(res => {
        this.category = res.body.data;
      })
    }
  }
</script>
<style lang="scss">
  .sort-nav li {
    float: left;
    margin: 10px 15px 5px 0;
    a{
      padding: 5px 10px;
      border: 1px solid #d9d9d9;
      border-radius: 14px;
      box-sizing: border-box;
      font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
      font-size: 12px;
      font-weight: normal;
      line-height: 1.5;
      &:hover{
        color:#000;
      }
    }
    &.active{
      a{
        color: white;
        border-color: #e78170;
        background: #e78170;
      }
    }
}
</style>