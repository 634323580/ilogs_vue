<template>
  <div class="hello">
      <router-link to="/404">404</router-link>
      <h2>213</h2>

    <!--左侧边栏-->
    <navbar message="hello!"></navbar>
  </div>
</template>

<script>
import navbar from './nav'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    navbar
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
