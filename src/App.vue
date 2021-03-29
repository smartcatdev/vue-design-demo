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
  color: #000;
  height: 100%;
}

#app.dark {
  background: #333f53;
  #customizer {
    background: #141c29;
    color: #fff;
  }
  #card-boxes {
    background: #141c29;
    color: #fff;
    .box {
      background: #182335;
    }
  }
  #nav{
    a {
      color: #fff;
      &.router-link-exact-active {
        color: #0077FF;
      }
    }
  }

  .box {
    background: #333;
    color: #fff;
    .button {
      border-color: #fff;
      a {
        color: #fff;
      }
    }
  }
}

#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #000;

    &.router-link-exact-active {
      color: #0077FF;
    }
  }
}
</style>
