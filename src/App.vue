<template>
  <div class="app">
    <div id="nav">
      <router-link to="/">Symbol</router-link>
      |
      <router-link to="/fontClass">Font class</router-link>
      |
      <router-link to="/icoMoon">icoMoon</router-link>
      |
      <router-link to="/packageCom">packageCom</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus" scoped>
  .app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    margin-top 60px

    a
      text-decoration none
</style>
