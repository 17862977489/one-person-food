<template>
  <div class="main">
    <div class="editor-header border-bottom">
      <div class="back iconfont">&#xe60f;</div>
      <div class="title">编辑发布</div>
    </div>
    <div class="editor-con"></div>
    <div class="publish">发布</div>
  </div>
</template>

<script>
  export default {
    name: 'editor',
    data () {
      return {
        date: ''
      }
    },
    methods: {
      getNowDate () {
        this.date = new Date().toLocaleDateString()
        this.date = this.date.replace(/\//g, ' ')
      }
    },
    created () {
      this.getNowDate()
    }
  }
</script>

<style scoped lang="stylus">
  .main
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    display:flex
    flex-direction:column
    .editor-header
      height: .88rem
      position: relative
      .back
        line-height: .88rem
        position: absolute
        left: .2rem
      .title
        width: 100%;
        line-height: .88rem
        text-align: center
        font-size: .36rem
        color:#333
    .editor-con
      flex:1
    .publish
      height: .98rem
      line-height: .98rem
      text-align: center
      font-size: .32rem
      color:#333
</style>