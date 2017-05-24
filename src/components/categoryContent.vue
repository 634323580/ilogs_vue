<template>
    <div class="categotyContent">
        <ul v-if="items.length">
            <Articlelist v-for='item in items' :mag='item'></Articlelist>
        </ul>
        <div v-else style="margin-top:8px;">当前分类没有笔记</div>
    </div>
</template>

<script>
    import Request from '../request.js'
    import Bus from '../bus.js';
    import Navbar from './nav'
    import Asides from './aside'
    import Articlelist from './articleList'
    import Search from './searchh'
    import Category from './category'
    export default{
        data(){
            return {
                items:[],
                searchVal:null,
                str:''
            }
        },
        created:function(){
            Bus.$on('search',text => {
                if(this.str === text) return;
                this.searchVal = text;
                this.str = text;
                this.requestList();
                

            })
        },
        mounted:function(){
            // console.log(this.$route.params.categoryId)
            this.requestList();
            // console.log(this.$route.params.categoryId)
        },
        methods:{
            requestList:function(obj = {category:this.$route.params.categoryId,title:this.searchVal}){
                    if (obj.title == null || obj.title == ''){delete obj.title};
                    Request.get(this,'post',obj).then(res => {
                        this.items = res.body.data;
                    })
            }
        },
        watch:{
            '$route'(){
                this.requestList();
            }
        },
        components:{
            Navbar,
            Asides,
            Articlelist,
            Search,
            Category
        }
    }
</script>

<style lang='scss'>
    
</style>