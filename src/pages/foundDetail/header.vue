<template>
  <div class="founddetailheader border-bottom">
    <div class="back iconfont backactive" @click="handleBackClick">&#xe60f;</div>
    <div class="header-title nameactive ellipsis">详情</div>
  </div>
</template>

<script>
  export default {
    name: 'founddetailheader',
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .founddetailheader
    position: relative
    top: 0
    width: 100%
    height: .88rem
    background: #fff
    z-index: 2
    &::before
      border-color: #cdcdcd
    .back
      position: absolute
      left: .2rem
      font-size: .38rem
      line-height: .62rem
      color: #231815
      line-height: .88rem
    .header-title
      line-height: .88rem
      text-align: center
      font-size: .36rem
      color: #333
</style>