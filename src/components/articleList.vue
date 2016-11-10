<template>
      <li v-if='mag.author' class='list-itme'>
        <a class="wrap-img"><img v-bind:src="mag.author.avatar"></a> 
        <p class="list-top"><a class="blue-link">{{mag.author.name}}</a><em>·</em><span class="time">{{mag.create_at}}</span></p>
        <h4 class="title">
          {{mag.id}}
        <router-link :to="{name:'listcon', params: { articleId: mag._id }}" active-class="active">{{mag.title}}{{mag.dataActive}}</router-link>
          </h4>
        <div class="list-footer">
          <a>阅读 3148</a>
          <a>· 评论 34</a>
          <span> · 喜欢 370</span>
          <span> · 打赏 4</span>
        </div>
      </li>
</template>

<script>
import Request from '../request.js'
import Moment from 'moment'
import Bus from '../bus.js'
export default {
  props:['mag'],
  data(){
    return {
      items:[],
    }
  },
  mounted:function(){
    // this.$http.get('post',{
    //   params:{
    //     limit:10
    //   }
    // }).then(response => {

    //   this.$nextTick(function () {
    //       // 保证 this.$el 已经插入文档
    //       let res = response;
    //       console.log(res.body.data)
    //       this.items = res.body.data;
    //     })
    // },response => {

    // })

    // if(this.$route.params.categoryId === undefined){
    //   Request.get(this,'post',{}).then(res => {
    //         this.items = res.body.data;
    //   })
    // }else{
    //   Request.get(this,'post',{
    //     category:this.$route.params.categoryId
    //   }).then(res => {
    //         this.items = res.body.data;
    //   })
    // }


    // Request.get(this,'category').then(res => {
    //   this.category = res.body.data;
    // })
    // this.$nextTick(function(){
    //   console.log(this.mag)

    // })
    // let re = /\//g;
    //this.mag.create_at = new Date(this.mag.create_at).toLocaleString().replace(re, '.')
    // let times = Moment(Date.parse(new Date(this.mag.create_at)) / 1000, "YYYYMMDD").fromNow()
    let time = new Date(this.mag.create_at)
    console.log(this.mag.create_at)
    this.mag.create_at = Moment((new Date(this.mag.create_at))).fromNow('MMMM Do YYYY, h:mm:ss a') + '前'
    // this.mag.create_at = Moment([time.getFullYear(), time.getMonth()+1, time.getDate()]).fromNow()


  },
  // mounted:function(){
  //   // Bus.$on('loading', text => {
  //   //   console.log(text)
  //   // })
  // },
  methods:{

  },
  watch:{
    mag:function(){
      let time = new Date(this.mag.create_at)
      this.mag.create_at = Moment((new Date(this.mag.create_at))).fromNow('MMMM Do YYYY, h:mm:ss a') + '前'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  .articleList{
    margin-left: 25.0%;
    height:100%;
    padding-left:170px;
    width:50%;
  }
#list-container{
    padding-top:65px;
    padding-left:32px;
}

  li.list-itme{
    position: relative;
    width: 100%;
    padding-right: 2px;
    padding-bottom: 17px;
    margin: 0 0 17px;
    border-bottom: 1px dashed #d9d9d9;
    box-sizing: border-box;
    word-wrap: break-word;
    overflow:hidden;
      .list-top {
    margin: 8px 0;
    font-size: 13px;
    .time {
    margin-left: 3px;
    color: #717171;
    }
  }
   .title {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
  }
   .list-footer {
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 20px;
      a,span{
          color: #999999;
          &:hover{
            color: #717171;
          }
      }
  }
    .wrap-img{
    float: right;
    width: 100px;
    height: 100px;
      img{
        width: 100%;
        height: 100px;
        width: auto\9;
        border-radius: 4px;
        border: 1px solid #eeeeee;
        box-sizing: border-box;
      }
    }
  }

  #app.readerNightMode{
    .page-title{
      border-bottom: 2px solid #2f2f2f;
      background:#3f3f3f;
      a{
        &:hover{
          background:#262626;
          color: #b1b1b1;
        }
      }
      input{
        background:#555555;
        border-color:#2f2f2f;
        color:#999999;
      }
    }
    .sort-nav li {
    float: left;
    margin: 10px 15px 5px 0;
    a{
      border: 1px solid #2f2f2f;
      background:#2f2f2f;
      color:#b1b1b1;
      &:hover{
        color:#fff;
      }
    }
    &.active{
      a{
        color: white;
        border-color: #000;
        background: #000;
        }
      }
    }
     .list-itme{
        border-color:#2f2f2f;
        .wrap-img img{
          border-color:#2f2f2f;
        }
      }
  }
 #app.readerFont{
  .title{
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  }
 }
</style>
