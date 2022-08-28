<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <nav>
    <router-link to="/">homepage</router-link> |
    <router-link to="/about">suggestion</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  inject: ['GStore'], // <----
  created() {
    document.title = 'Vaccination'
  }
}
</script>
<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3 s;
}
</style>
<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  background-image: url('./assets/back.jpeg');
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: absolute;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h4 {
  font-size: 20px;
}
</style>
