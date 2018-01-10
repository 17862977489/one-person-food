<template>
  <div class="hotcity border-bottom">
    <div class="hotcity-title">热门城市</div>
    <div class="hotcity-con">
      <div class="place border" v-for="item in hotcity">{{item.city}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hotcity',
    props: {
      hotcity: Array
    }
  }
</script>

<style scoped lang="stylus">
  .hotcity
    padding: 0 .2rem
    height: 4.1rem
    overflow: hidden
    .hotcity-title
      font-size: .32rem
      color: #666
      margin-bottom: .42rem
    .hotcity-con
      .place
        display: inline-block
        width: 1.76rem
        line-height: .7rem
        text-align: center
        margin-right: .4rem
        margin-bottom: .42rem
        &::before
          border-color: #666
          border-radius: .2rem
</style>