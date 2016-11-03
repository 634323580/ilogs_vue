<template>
  <div id="app" v-bind:class='{readerNightMode : nightday}' @click='eventSw()'>
    <router-view class="ui-view" keep-alive></router-view>
  </div>
</template>

<script>
import Bus from './bus.js';
export default {
  name: 'app',
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
  methods:{
    eventSw:function(){
      Bus.$emit('event:nightdaySw', false);
    }
  },
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
  src: url('//at.alicdn.com/t/font_7izi48esdsll3di.eot');
  src: url('//at.alicdn.com/t/font_7izi48esdsll3di.eot') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_7izi48esdsll3di.woff') format('woff'),
  url('//at.alicdn.com/t/font_7izi48esdsll3di.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_7izi48esdsll3di.svg#iconfont') format('svg');
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
  position: absolute;
  width:100%;
  height:100%;
}
#app.readerNightMode{
  background:#3f3f3f;

}
#app.readerNightMode a, #app.readerNightMode .btn{
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
</style>
