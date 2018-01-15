<template>
  <div class="detailheader" ref="header">
    <div class="back iconfont" @click="handleBackClick">&#xe60f;</div>
    <div class="header-title" v-show="showName">{{name}}</div>
  </div>
</template>

<script>
  export default {
    name: 'detailheader',
    props: {
      name: String,
      showName: false
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
    z-index: 10
    .back
      position: absolute
      left: .2rem
      font-size: .38rem
      line-height: .62rem
      color: #dedede
      line-height: .88rem
    .header-title
      line-height: .88rem
      text-align: center
      font-size: .36rem
      color: #333
</style>