<template>
  <div>
    <div class="foundheader border-bottom">
      <div class="search"><i class="search-icon iconfont">&#xe679;</i></div>
      <div class="title">
        <ul class="title-con">
          <li class="title-item ellipsis">附近</li>
          <li class="title-item ellipsis">关注</li>
        </ul>
      </div>
      <div class="omit"><i class="omit-icon iconfont">&#xe609;</i></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foundheader'
  }
</script>

<style scoped lang="stylus">
  .foundheader
    height: .88rem
    display: flex
    color: #333
    background: #fff
    &::before
      border-color:#cdcdcd
    .search
      margin-left: .2rem
      .search-icon
        font-size: .37rem!important
        line-height: .88rem
    .title
      flex: 1
      .title-con
        text-align: center
        .title-item
          color: #333
          display: inline-block
          line-height: .88rem
          padding: 0 .16rem 0
          margin:0 .25rem 0
          font-size: .36rem
          border-bottom: .04rem solid #333
    .omit
      margin-right: .2rem
      .omit-icon
        line-height: .88rem
        font-size: .5rem!important
</style>