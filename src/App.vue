<template>
  <div id="app">
    <keep-alive include="index">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped lang="stylus">
  .fade-enter-active, .fade-leave-active 
    transition: opacity .5s
  .fade-enter, .fade-leave-to 
    opacity: 0
</style>
