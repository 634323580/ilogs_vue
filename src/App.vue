<template>
  <div id="app" v-bind:class='{readerNightMode : nightday,readerFont : fontType}' @click='eventSw()'>
    <router-view class="ui-view app-ui-view" keep-alive></router-view>
    <Loading v-if="loading.show"></Loading>
  </div>
</template>

<script>
import Bus from './bus.js';
import Store from './Store.js';
import Loading from './components/loading'

export default {
  name: 'app',
  data(){
    return {
      nightday:Store.storeGet('nightday'),
      fontType:Store.storeGet('fontType'),
      loading:{
        show:true
      }
    }
  },
  created:function(){
    console.log('11');
    Bus.$on('event:nightday',text =>{
      this.nightday = text;
      Store.storeSet('nightday',text);
    })
    Bus.$on('event:fontFamily',text =>{
      this.fontType = text;
      Store.storeSet('fontType',text);
    })

    Bus.$on('loading',text =>{
      this.loading.show = text;
    })

  },
  beforeUpdate:function(){
    // this.loading.show = true
    // console.log(1234556)
  },
  methods:{
    eventSw:function(){
      Bus.$emit('event:nightdaySw', false);
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang='scss'>
*{
  margin:0;
  padding:0;
}
li{
  list-style:none;
}
a{
  text-decoration: none;
  color:#555;
}
.clearfix::after{
  content:'';
  display:table;
  clear:both;
}
@font-face {
  font-family: 'iconfont';  /* project id："173634" */
  src: url('//at.alicdn.com/t/font_km8d3uknyh2awcdi.eot');
  src: url('//at.alicdn.com/t/font_km8d3uknyh2awcdi.eot') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_km8d3uknyh2awcdi.woff') format('woff'),
  url('//at.alicdn.com/t/font_km8d3uknyh2awcdi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_km8d3uknyh2awcdi.svg#iconfont') format('svg');
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  font: 14px/1.4286 arial;
  font-size: 14px;
  line-height: 20px;
  color: #555555;
  position: absolute;
  width:100%;
  min-height:100%;
  &.readerFont{
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    .bottom-block{
      font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    }
  }
}

#app.readerNightMode{
  background:#3f3f3f;
  .markdown-body{color:#999999;}
  .markdown-body{
    pre{
    }
  }
  .markdown-body{
    hr{background:#2f2f2f;}
    h1,h2,h3,h4,h5{border-color:#2f2f2f;}
  }
  .author-info{border-color:#2f2f2f;}
}
#app.readerNightMode a, #app.readerNightMode .btn, #app.readerNightMode .time{
      color: #b1b1b1;
}
#app.readerNightMode .btn{
  background-color: #2f2f2f;
}
#app.readerNightMode a:hover{
  color: #fff;
}
.btn {
    border-radius: 4px;
    box-shadow: none;
    color: #555555;
    border-color: whitesmoke;
    background: whitesmoke;
    border-color: #d5d5d5;
    text-shadow: none;
    cursor:pointer;
    display:inline-block;
}
.btn-large {
    padding: 11px 19px;
    font-size: 17.5px;
}
.btn-success {
    color: white;
    background: #49be38;
}
.btn-success:hover, .btn-success:focus {
    color: white;
    border-color: #6bd95b;
    background-color: #6bd95b;
}
p {
    margin: 0 0 10px;
}
.app-ui-view{
  height:100%;
}
.blue-link {
    color: #4094c7;
}
.blue-link:hover {
    color: #075b8d;
}
a:hover, a:focus {
    color: black;
}




</style>
