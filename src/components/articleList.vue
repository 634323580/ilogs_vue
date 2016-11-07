<template>
  <div class="articleList">
      <div class="page-title">
        <ul class="clearfix">
            <router-link to="/home" active-class="active" tag="li"><a>发现</a></router-link>
            <router-link to="/home/profile" active-class="active" tag="li"><a>2015精选发现</a></router-link>
            <li class="search">
              <input type="text" placeholder="搜索" v-model="searchVal" @keyup.enter="search">
              <i class="iconfont">&#xe62b;</i>
            </li>
        </ul>
      </div>
      <div id="list-container">
        <ul class="unstyled clearfix sort-nav">
            <router-link to='/home' tag='li' active-class="active"><a>全部</a></router-link>
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
            <router-view class="ui-view app-ui-view" keep-alive></router-view>

        <ul class="article-list thumbnails">
          <li v-for='item in items'>
            <a class="wrap-img"><img v-bind:src="item.author.avatar"></a> 
            <p class="list-top"><a class="blue-link">{{item.author.name}}</a><em>·</em><span class="time">{{item.create_at}}</span></p>
            <h4 class="title">
              {{item.id}}
            <router-link :to="{name:'listcon', params: { articleId: item._id }}" active-class="active">{{item.title}}{{item.dataActive}}</router-link>
              </h4>
            <div class="list-footer">
              <a>阅读 3148</a>
              <a>· 评论 34</a>
              <span> · 喜欢 370</span>
              <span> · 打赏 4</span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import Request from '../request.js'
export default {
  props:['mag'],
  data(){
    return {
      items:[],
      category:[],
      searchVal:'',
      objs:{
        'sb':1
      }
    }
  },
  created:function(){
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

    if(this.$route.params.categoryId === undefined){
      Request.get(this,'post',{}).then(res => {
            this.items = res.body.data;
            console.log( res.body.data)
      })
    }else{
      Request.get(this,'post',{
        category:this.$route.params.categoryId
      }).then(res => {
            this.items = res.body.data;
      })
    }


    Request.get(this,'category').then(res => {
      this.category = res.body.data;
    })


  },
  methods:{
    search:function(){
      // alert(this.searchVal)
      if(this.searchVal === ''){
        Request.get(this,'post',{limit:10}).then(res => {
              this.items = res.body.data;
        })
      }else{
        Request.get(this,'post',{title:this.searchVal,limit:10}).then(res => {
              this.items = res.body.data;
        })
      }

    },
    categorys:function(someObject ,id){
      Request.get(this,'post',{
        'category':id
      }).then(res => {
          this.items = res.body.data;
      })
    }
  },
    watch: {
      'mag':function(){
        //console.log(oldval)
        Request.get(this,'post',{
          category:this.mag
        }).then(res => {
              this.items = res.body.data;
        })
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
    .page-title{
      position:fixed;
      width:calc(100% - 50% - 20px);
      li{
        float:left;
        &.search{
          float:right;
          margin-top: 10px;
          width:183px;
          height:30px;
          position:relative;
          input{
            width:100%;
            height:100%;
            background-color: transparent;
            border: 1px solid #cccccc;
            box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
            transition: border linear 0.2s, box-shadow linear 0.2s;
            border-radius:15px;
            outline: none;
            box-sizing:border-box;
            padding:0 25px 0 10px;
            font-size:14px;
            &:focus{
              border-color:#12b7f5;
            }

          }
          i{
            position:absolute;
            right: 10px;
            top: 6px;
            font-size: 12px;
            color:#999999;
          }
        }
        &.active{
          margin-bottom: -2px;
          border-bottom: 2px solid #555555;
          a{color:#555555;}
        }
      }
    }
    .page-title{
      padding-left: 20px;
      border-bottom: 2px solid #d9d9d9;
      background:#fff;
      z-index:2;
      a{
        color:#999;
        display:inline-block;
        padding:15px;
        transition:.5s ease;
        &:hover{
          background:#eeeeee;
        }
      }
    }
  }
#list-container{
    padding-top:65px;
    padding-left:32px;
}
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
.article-list{
  padding-top:36px;
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
  &>li{
    position: relative;
    width: 100%;
    padding-right: 2px;
    padding-bottom: 17px;
    margin: 0 0 17px;
    border-bottom: 1px dashed #d9d9d9;
    box-sizing: border-box;
    word-wrap: break-word;
    overflow:hidden;
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

    .article-list{
      &>li{
        border-color:#2f2f2f;
      }
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
