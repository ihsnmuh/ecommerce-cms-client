<template>
  <div id="app">
    <div id="nav" style="text-align: center;">
      <a href="" @click.prevent="toLoginPage">Login</a> |
      <router-link to="/">Home</router-link> |
      <router-link to="/addproduct">Add Product</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    toLoginPage () {
      this.$router.push('/login').catch(() => {})
    }
  }
}
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
