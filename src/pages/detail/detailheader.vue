<template>
  <div class="detailheader headeractive">
    <div class="back iconfont backactive" @click="handleBackClick" ref="back">&#xe60f;</div>
    <div class="header-title nameactive ellipsis">{{name}}</div>
  </div>
</template>

<script>
  export default {
    name: 'detailheader',
    props: {
      name: String,
      scrolltop: Number
    },
    watch: {
      scrolltop () {
      }
    },
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
    z-index: 2
  .headeractive
    background: rgba(255, 255, 255, 1)
    .back
      position: absolute
      left: .2rem
      font-size: .38rem
      line-height: .62rem
      color: #dedede
      line-height: .88rem
    .backactive
      color: #333
    .header-title
      display: none
      line-height: .88rem
      text-align: center
      font-size: .36rem
      color: #333
    .nameactive
      display: block
</style>