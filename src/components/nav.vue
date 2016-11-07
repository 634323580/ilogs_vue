<template>
  <div class="navbar">
    <div class="dropdown">
            <router-link to="/home"><i class="iconfont">&#xe622;</i>首页</router-link>
            <router-link to="/articlecon"><i class="iconfont">&#xe634;</i>专题</router-link>
        </ul>
    </div>
    <div class="nav-user">
        <a @click="render($event)"><i class="iconfont">&#xe74b;</i>显示模式</a>
        <a><i class="iconfont">&#xe607;</i>登录</a>
    </div>
<div id="view-mode-modal" class="read-modal" v-show='display' @click='eventpreventDefault($event)'>
    <div class="btn-group change-background dayNight">
          <span @click='dayAndnight(true,false,false)' class="day" v-bind:class='{active : day_sw}'><i class="iconfont">&#xe690;</i></span>
          <span  @click='dayAndnight(false,true,true)' class="night" v-bind:class='{active : night_sw}'><i class="iconfont">&#xe6cf;</i></span>
    </div>
    <div class="btn-group change-background">
          <span @click='font(true,false,false)' v-bind:class='{active :arial }'>宋体</span>
          <span @click='font(false,true,true)' v-bind:class='{active :blackbody }' >黑体</span>
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
import Store from '../Store.js';
export default{
    props: ['message'],
    data(){
        return {
            display:false,
            day_sw:Store.storeGet('day_sw'),
            night_sw:Store.storeGet('night_sw'),
            arial:Store.storeGet('arial'),
            blackbody:Store.storeGet('blackbody')
        }
    },
    created:function(){
        Bus.$on('event:nightdaySw',text =>{
            this.display = text;
        })
    },
    methods:{
        render:function(e){
            e.stopPropagation();
            this.display = !this.display;
        },
        dayAndnight:function(day,night,nightday){
            this.day_sw = day;
            this.night_sw = night;
            Bus.$emit('event:nightday', nightday);
            Store.storeSet('day_sw',day);
            Store.storeSet('night_sw',night);
        },
        font:function(font_arial,font_blackbody,font_tpye){
            this.arial = font_arial;
            this.blackbody = font_blackbody;
            Store.storeSet('arial',font_arial);
            Store.storeSet('blackbody',font_blackbody);
            Bus.$emit('event:fontFamily',font_tpye);
        },
        eventpreventDefault:function(e){
            e.stopPropagation();
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
        z-index:2;
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
#app{
    .dropdown a{
        &.router-link-active{
            text-shadow: 0 1px 0 #de533a;
            background-color: #e78170;
            color: white;
            text-shadow: 0 1px 0 #de533a;
        }
        &:hover{
            text-shadow: 0 1px 0 #de533a;
            background:#f49484;
            color: white;
        }
        &:active{
            text-shadow: 0 0 0 #de533a;
            background:#b34129;
            color: white;
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
