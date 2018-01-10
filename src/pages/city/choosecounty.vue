<template>
  <div class="chooseCountyMain">
    <div class="current">你正在看: 北京</div>
    <div class="choose">选择县区<i class="down iconfont">&#xe73a;</i></div>
  </div>
</template>

<script>
  export default {
    name: 'choosecounty'
  }
</script>

<style scoped lang="stylus">
  .chooseCountyMain
    height: .9rem
    margin: 0 .2rem
    display: flex
    justify-content: space-between
    .current
      line-height: .9rem
      font-size: .32rem
      color: #333
    .choose
      line-height: .9rem
      font-size: .26rem
      color: #666
      margin-right: .5rem
</style>