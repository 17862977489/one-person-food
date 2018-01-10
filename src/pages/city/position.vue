<template>
  <div class="position">
    <div class="position-title">定位/最近访问</div>
    <div class="position-show">
      <div class="place border">北京</div>
      <div class="place border">上海</div>
      <div class="place border">哈尔滨</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'position'
  }
</script>

<style scoped lang="stylus">
  .position
    margin: 0 .2rem
    .position-title
      padding-top: .4rem
      font-size: .32rem
      color:#666
      margin-bottom: .4rem
    .position-show
      margin-bottom: .4rem
      .place
        display: inline-block
        width: 1.76rem
        line-height: .7rem
        text-align: center
        margin-right: .4rem
        &::before
          border-color: #666
          border-radius: .2rem
</style>