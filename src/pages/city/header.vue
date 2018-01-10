<template>
  <div class="cityHeaderMain border-bottom">
    <div class="back iconfont" @click="handleBackClick">&#xe60f;</div>
    <div class="search-wrapper">
      <i class="search-icon iconfont">&#xe679;</i>
      <input type="text" placeholder="请输入城市/拼音" class="search">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cityheader',
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .cityHeaderMain
    height: .74rem
    color: #333
    background: #fff
    position: relative
    padding-top: .14rem
    &::before
      border-color:#333
    .back
      position: absolute
      left: .2rem
      font-size: .38rem
      line-height: .62rem
    .search-wrapper
      margin: 0 auto
      width: 5rem
      height: .6rem
      position: relative
      .search-icon
        position: absolute
        left: .2rem
        line-height: .62rem
        font-size: .4rem
      .search
        width: 4.22rem
        line-height: .6rem
        font-size: .26rem
        border: 0.02rem solid #929292
        border-radius: 0.04rem
        padding-left: 0.78rem
</style>