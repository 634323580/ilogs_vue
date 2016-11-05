<template>
  <div class="hello">
    
    <Navbar message="hello!"></Navbar>

    <Asides></Asides>

    <Articlelist></Articlelist>
  </div>
</template>
 
<script>
import Navbar from './nav'
import Asides from './aside'
import Articlelist from './articleList'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar,
    Asides,
    Articlelist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size:30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
