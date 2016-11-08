<template>
    <div class="categotyContent">
        <Articlelist v-for='item in items' :mag='item'></Articlelist>
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
                items:[]
            }
        },
        created:function(){
            Bus.$on('search',text => {
                if(Boolean(text)){
                    Request.get(this,'post',{
                        category:this.$route.params.categoryId,
                        title:text
                    }).then(res => {
                        this.items = res.body.data;
                    })
                }else{
                    this.requestList();
                }

            })
        },
        mounted:function(){
            // console.log(this.$route.params.categoryId)
            this.requestList();
            // console.log(this.$route.params.categoryId)
        },
        methods:{
            requestList:function(){
                Request.get(this,'post',{
                    category:this.$route.params.categoryId
                }).then(res => {
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