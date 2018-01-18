<template>
  <div id="start">
    <div class="img-layout" ref="layout">
      <div class="start-wrapper">
        <img src="../../../static/images/splash/splash.jpg" class="start-img"/>
      </div>
    </div>
    <div class="logo-wrapper">
      <img src="../../../static/images/splash/logo.png" alt="" class="logo-img">
    </div>
    <div class="start-theme">让吃饭变得更简单</div>
  </div>
</template>

<script>
  export default {
    name: 'start',
    data () {
      return {
        width: 0,
        height: 0
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        setTimeout(() => {
          vm.$router.push({path: '/index'})
        }, 3000)
      })
    },
    created () {
      this.height = document.documentElement.clientHeight
      this.height = this.height * 512 / 667
      this.width = this.height * 750 / 1024
    },
    mounted () {
      this.$refs.layout.style.height = this.height + 'px'
      this.$refs.layout.style.width = this.width + 'px'
    }
  }
</script>

<style scoped lang="stylus">
  #start
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    display:flex
    flex-direction:column
    .img-layout
      margin: 0 auto
      .start-wrapper
        width: 100%
        height: 100%
        margin-bottom: .1rem
        .start-img
          width: 100%
    .logo-wrapper
      width: 1.9rem
      height: 1.9rem
      margin: 0 auto .12rem
      .logo-img
        width: 100%
    .start-theme
      font-size: .33rem
      color: #333
      text-align: center
      padding-bottom: .2rem
</style>