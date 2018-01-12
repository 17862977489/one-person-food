<template>
  <div class="searchMain">
    <div class="searchHeader border-bottom">
      <div class="back iconfont" @click="handleBackClick">&#xe60f;</div>  
      <div class="search-wrapper">
        <i class="search-icon iconfont">&#xe679;</i>
        <input type="text" placeholder="请输入美食，城市等" class="searchInput" @input="handleInputChange">
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'searchheader',
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      handleInputChange () {
        console.log('r')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .searchMain
    .searchHeader
      padding-top: .14rem
      height: .74rem
      &::before
        border-color: #cdcdcd
      .back
        position: absolute
        left: .2rem
        font-size: .38rem
        line-height: .62rem
        color: #453b39
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
        .searchInput
          width: 4.22rem
          line-height: .6rem
          font-size: .26rem
          border: 0.02rem solid #929292
          border-radius: 0.04rem
          padding-left: 0.78rem
</style>