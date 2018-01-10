<template>
  <div class="publishIndex">
    <div class="con">
      <div class="title">爱记录的人都是天使</div>
      <div class="camera">
        <div class="img-wrapper">
          <img src="/static/images/camera.png" alt="" class="camera-img">
        </div>
      </div>
      <router-link to="/editor" tag="div" class="editor">上传一日三餐</router-link>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from '../../components/tabbar'
  export default {
    name: 'publish',
    components: {
      Tabbar
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
</style>