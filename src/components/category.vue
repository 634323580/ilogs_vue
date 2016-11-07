<template>
    <div class="container">
        <Navbar></Navbar>

        <Asides></Asides>

        <Articlelist :mag='categoryDataId'></Articlelist>
    </div>
</template>
<script>
    
import Navbar from './nav'
import Asides from './aside'
import Articlelist from './articleList'
import Request from '../request.js'


export default{
 data(){
     return {
         categoryDataId:null
     }
 },
 created:function(){
    this.categoryDataId = this.$route.params.categoryId
 },
 watch:{
     '$route' (to,from){
      // console.log(to.params.categoryId)
       this.categoryDataId = to.params.categoryId
     }
 },
  components: {
    Navbar,
    Asides,
    Articlelist
  }
}


</script>


