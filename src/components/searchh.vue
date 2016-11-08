<template>
    <div class="page-title">
        <ul class="clearfix">
            <router-link to="/home" active-class="active" tag="li"><a>发现</a></router-link>
            <router-link to="/home/profile" active-class="active" tag="li"><a>2015精选发现</a></router-link>
            <li class="search">
              <input type="text" placeholder="搜索" v-model='searchVal' @keyup.enter="search">
              <i class="iconfont">&#xe62b;</i>
            </li>
        </ul>
      </div>
</template>
<script>
    import Bus from '../bus.js';
    export default{
        data(){
            return {
                searchVal:''
            }
        },
        methods:{
            search:function(){
                Bus.$emit('search',this.searchVal);
            }
        }
    }
</script>
<style lang="scss">
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
</style>