<template>
  <div class="detailheader" ref="detailheader">
      <div class="back iconfont" @click="handleBackClick" ref="back">&#xe60f;</div>
      <div class="header-title ellipsis" ref="headertitle">{{name}}</div>
  </div>
</template>

<script>
  export default {
    name: 'detailheader',
    props: {
      name: String,
      scrolltop: Number,
      scrollend: Number
    },
    watch: {
      scrolltop () {
        if (this.scrolltop > 230) {
          this.$refs.headertitle.style.display = 'block'
          this.$refs.back.style.color = '#333'
          this.$refs.detailheader.style.background = 'rgba(255, 255, 255, 1)'
        } else {
          this.$refs.headertitle.style.display = 'none'
          this.$refs.back.style.color = '#dedede'
          this.$refs.detailheader.style.background = 'rgba(255, 255, 255, 0)'
        }
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
</style>