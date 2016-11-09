<template>
  <div class="left-aside">
    <div class="cover-img" v-bind:style="{backgroundImage:imgUrl}"></div>
    <div class="bottom-block">
      <h1>简书</h1>
      <h3>交流故事，沟通想法</h3>
      <p>一个基于内容分享的社区</p>
      <a class="btn btn btn-large btn-success"><i class="iconfont">&#xe691;</i>提笔写篇文章</a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgArr:[
      'http://upload.jianshu.io/daily_images/images/R94qYyxsSyYsX5xz6h7q.jpg',
      'http://upload.jianshu.io/daily_images/images/UevpbWNMJXzWoxcZLhmZ.jpg',
      'http://upload.jianshu.io/daily_images/images/rMHywSacwCqU1ioxg6JF.jpg'
      ],
      imgUrl:''
    }
  },
  created:function(){
   this.imgUrl = 'url('+this.imgArr[Math.floor(Math.random()*this.imgArr.length)]+')';
  }
}
</script>

<style lang='scss'>
.left-aside{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 170px;
    width: 25%;
    z-index: 1;
  .cover-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
  }
  .bottom-block{
    position: absolute;
    bottom: 0;
    padding: 30px;
    color: white;
    font-family:'宋体';
    h1{
          font-size: 38.5px;
    }
    h3{
          font-size: 24.5px;
    }
    h1,h3{
        line-height:40px;
        text-shadow: -1px 0 0 rgba(0,0,0,0.75);
        margin:10px 0;
    }
  .btn-success{
    margin-top:10px;
    i{
      margin-right:5px;
    }
  }
  }
}
</style>
