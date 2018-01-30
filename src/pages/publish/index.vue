<template>
  <div class="publishIndex">
    <div class="con" ref="scroller">
      <div class="title">爱记录的人都是天使</div>
      <div class="camera" @click="handleCameraClick">
        <div class="img-wrapper">
          <img src="/static/images/icons/camera.png" alt="" class="camera-img">
        </div>
      </div> 
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from '../../components/tabbar'
  import BScroll from 'better-scroll'
  export default {
    name: 'publish',
    components: {
      Tabbar
    },
    methods: {
      handleCameraClick () {
        if (window.sessionStorage.sessionId) {
          this.$router.push({path: '/publish/editor'})
        } else {
          var con = confirm('登录后才能发布哟~')
          if (con === true) {
            this.$router.push({path: '/my/login'})
          }
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scroller, {
          click: true
        })
      })
    },
    updated () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  }
</script>

<style scoped lang="stylus">
  .publishIndex
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    display:flex
    flex-direction:column
    .con
      overflow: hidden
      flex:1
      margin: 0 auto
      .title
        margin-top: 2.74rem
        margin-bottom: .6rem
        font-size: .36rem
        color: #333
        text-align: center
      .camera
        width: 4.02rem
        height: 4.88rem
        background: #333
        border-radius: 0.1rem
        margin-bottom: 1.6rem
        position: relative
        .img-wrapper
          position: absolute
          left:0
          top:0
          bottom:0
          right:0
          margin: auto
          display: block
          width: .84rem
          height: .76rem
          .camera-img
            width: 100%
      .editor
        text-align: center
        font-size: .36rem
        color: #333
        font-weight: 600
</style>