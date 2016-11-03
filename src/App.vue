<template>
  <div id="app" v-bind:class='{readerNightMode : nightday}'>
    <router-view class="ui-view" keep-alive></router-view>
  </div>
</template>

<script>
import Bus from './bus.js';
export default {
  data(){
    return {
      nightday:false
    }
  },
  created:function(){
    Bus.$on('event:nightday',text =>{
      this.nightday = text;
    })
  },
  name: 'app',
  components: {

  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
a{
  text-decoration: none;
}
@font-face {
  font-family: 'iconfont';  /* project id："173634" */
  src: url('//at.alicdn.com/t/font_tywg8wcaco758kt9.eot');
  src: url('//at.alicdn.com/t/font_tywg8wcaco758kt9.eot') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_tywg8wcaco758kt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_tywg8wcaco758kt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_tywg8wcaco758kt9.svg#iconfont') format('svg');
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
  font: 14px/1.4286 arial,"Microsoft Yahei";
  font-size: 14px;
  line-height: 20px;
  color: #555555;
}
#app.readerNightMode a, #app.readerNightMode .btn{
      color: #b1b1b1;
}
#app.readerNightMode a:hover{
  color: #fff;
}
</style>
