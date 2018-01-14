<template>
  <div class="detailheader">
    <div class="back iconfont" @click="handleBackClick">&#xe60f;</div>  
  </div>
</template>

<script>
  export default {
    name: 'detailheader',
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .detailheader
    position: absolute
    width: 100%
    height: .88rem
    background: rgba(255, 255, 255, 0)
    z-index: 10
    .back
      position: absolute
      left: .2rem
      font-size: .38rem
      line-height: .62rem
      color: #dedede
      line-height: .88rem
</style>