<template>
  <div class="tabbar">
    <div class="tab">
      <div class="tablayout">
        <i class="index iconfont">&#xe614;</i>
        <p class="font">一人食</p>
      </div>
      <div class="tablayout">
        <i class="found iconfont">&#xe615;</i>
        <p class="font">发现</p>
      </div>
      <div class="tablayout">
        <i class="add iconfont">&#xe602;</i>
      </div>
      <div class="tablayout">
        <i class="message iconfont">&#xe658;</i>
        <p class="font">消息</p>
      </div>
      <div class="tablayout">
        <i class="my iconfont">&#xe60e;</i>
        <p class="font">我的</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbar'
  }
</script>

<style scoped lang="stylus">
  .tabbar
    width: 100%
    height: .88rem
    background: #f2f2f2
    z-index: 2
    padding-top: .1rem
    position: absolute
    bottom:0
    .tab
      display: flex
      justify-content:space-around
      .tablayout
        text-align: center
        .index
          display: inline-block
          width: .36rem
          height: .4rem
          font-size: .4rem
        .found
          display: inline-block
          width: .48rem
          height: .4rem
          font-size: .34rem
        .add
          display: inline-block
          width: .98rem
          height: .98rem
          line-height: .98rem
          background: #333
          color:#fff
          font-size: .55rem
          border-radius: 50%
          position: relative
          top: -.26rem
        .message
          display: inline-block
          width: .38rem
          height: .4rem
          font-size: .38rem
        .my
          display: inline-block
          width: .38rem
          height: .4rem
          font-size: .38rem
        .font
          font-size: .2rem
          color:#999
</style>