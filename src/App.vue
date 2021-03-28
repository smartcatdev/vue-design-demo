<template>
  <div id="app" :class="this.$store.getters.theme">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#app.dark {
  background: rgba(0,0,0,0.9);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0077FF;
    }
  }
}
</style>
