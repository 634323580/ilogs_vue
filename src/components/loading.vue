<template>
    <div class="loading">
        
    </div>
</template>
<script>
    export default{
        loading:{
            show:false
        }
    }
</script>
<style lang='scss'>
    @keyframes load{
        form{
            transform:rotate(0);
        }
        to{
            transform:rotate(365deg);
        }
    }
    .loading{
        width: 30px;
        height:30px;
        border-radius:50%;
        border-width:3px;
        border-color:#ececec;
        border-left-color:transparent;
        border-style:solid;
        position:fixed;
        left:50%;
        top:50%;
        /*transform:translate(-50%,-50%);*/
        margin-top: -15px;
        margin-left: -15px;
        animation:load 1s linear infinite ;
    }
</style>