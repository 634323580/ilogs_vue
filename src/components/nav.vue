<template>
  <div class="navbar">
      <p style="font-size:20px;">{{message}}通信</p>
    <div class="dropdown">
            <router-link to="/home"><i class="iconfont">&#xe622;</i>首页</router-link>
            <router-link to="/article"><i class="iconfont">&#xe634;</i>专题</router-link>
        </ul>
    </div>
    <div class="nav-user">
        <a @click="render()"><i class="iconfont">&#xe74b;</i>显示模式</a>
        <a><i class="iconfont">&#xe607;</i>登录</a>
    </div>
<div id="view-mode-modal" class="read-modal" v-show='display'>
    <div class="btn-group change-background dayNight">
          <span @click='day()' class="day" v-bind:class='{active : day_sw}'><i class="iconfont">&#xe690;</i></span>
          <span  @click='night()' class="night" v-bind:class='{active : night_sw}'><i class="iconfont">&#xe6cf;</i></span>
    </div>
    <div class="btn-group change-background">
          <span class="active">宋体</span>
          <span>黑体</span>
    </div>
    <div class="btn-group change-background">
          <span class="active">简体</span>
          <span>繁体</span>
    </div>
  </div>
  </div>
    
</template>

<script>
import Bus from '../bus.js';

export default{
    props: ['message'],
    data(){
        return {
            display:false,
            day_sw:true,
            night_sw:false
        }
    },
    methods:{
        render:function(){
            this.display = !this.display;
        },
        day:function(){
            this.day_sw = true;
            this.night_sw = false;
            Bus.$emit('event:nightday', false);
        },
        night:function(){
            this.day_sw = false;
            this.night_sw = true;
            Bus.$emit('event:nightday', true);
        }
    }
}
</script>

<style lang="scss">
    .navbar{
        position:fixed;
        left: 0;
        top: 0;
        height: 100%;
        background: #2a2a2a;
        width:170px;
        a{
            padding: 10px;
            display: block;
            color:#999999;
            line-height: 25px;
            i{
                display:inline-block;
                margin-right:10px;
            }
        }
    }
    .dropdown a{
        text-shadow: 0 1px 0 black;
    }
#app.readerNightMode{
        a{
        &.router-link-active{
            text-shadow: 0 1px 0 #de533a;
            background-color: #e78170;
            color: white;
            text-shadow: 0 1px 0 #de533a;
        }
    }
}

    .nav-user{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding-bottom: 5px;
        a{
            cursor:pointer;
        }
        a:hover{
            color: white;
        }
    }
    #view-mode-modal{
        left: 180px;
        bottom: 36px;
        width: 175px;
        padding: 10px 10px 0;
        background: #eeeeee;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border: 1px solid #d9d9d9;
        font-size: 14px;
        font-weight: normal;
        line-height: 20px;
        position: fixed;
    }
    .read-modal::before {
        position: absolute;
        top: 77px;
        left: -7px;
        content: '';
        display: inline-block;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 7px solid #d9d9d9;
    }
    .read-modal .btn-group {
        margin: 0 0 10px 0;
    }
    .btn-group {
        position: relative;
        font-size: 0;
        vertical-align: middle;
        white-space: nowrap;
        overflow:hidden;
        span{
            font-size:14px;
            display:inline-block;
            width:50%;
            text-align:center;
            padding: 10px 0;
            color: #555555;
            background-color: #f6f6f6;
            border: 1px solid #d4d4d4;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.4),0 1px 0 rgba(255,255,255,0.4);
            box-sizing:border-box;
            cursor:pointer;
            &:first-of-type{
                border-right:none;
                border-radius:5px 0 0 5px;
            }
            &:last-of-type{
                border-radius:0 5px 5px 0;
            }
            &.active{
                background: #e9e9e9;
                box-shadow: inset 0 1px 1px rgba(0,0,0,0.03),0 1px 0 rgba(255,255,255,0.4);
            }
            &.night.active{
                background:#2a2a2a;
                color:#fff;
            }
            i{
                font-size:20px;
            }
        }
    }
</style>
