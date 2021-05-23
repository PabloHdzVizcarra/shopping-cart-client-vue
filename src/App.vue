<template>
  <MainPage />
</template>

<script>

import MainPage from './pages/MainPage'
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>

body, html {
  height: 100%;
}
#app {
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
