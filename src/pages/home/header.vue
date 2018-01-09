<template>
  <div>
    <div class="indexheader border-bottom">
      <div class="position ellipsis">北京</div>
      <div class="title ellipsis">一人食</div>
      <div class="search"><i class="search-icon iconfont">&#xe679;</i></div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'indexheader'
  }
</script>

<style scoped lang="stylus">
  .indexheader
    height: .88rem
    display: flex
    color: #333
    background: #fff
    &::before
      border-color:#cdcdcd
    .position
      margin-left: .2rem
      line-height: .88rem
      font-size: .36rem
      text-align: center
    .title
      flex: 1
      line-height: .88rem
      text-align: center
      font-size: .36rem
      text-indent: -.22rem
    .search
      margin-right: .2rem
      .search-icon
        font-size: .37rem!important
        line-height: .88rem
</style>