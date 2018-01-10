<template>
  <div class="publishEditor">
    <div class="editor-header border-bottom">
      <div class="cancle" @click="handleBackClick">取消</div>
      <div class="title">发布</div>
      <div class="publish">确定</div>
    </div>
    <div class="editor-con">
      <div class="editor-desc">请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...请添加文字...</div>
    </div>
    <div class="editor-img">
      <div class="img-wrapper">
        <img src="/static/images/found/foodimg1.png" alt="" class="img">
      </div>
    </div>
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
      },
      handleBackClick () {
        this.$router.go(-1)
      }
    },
    created () {
      this.getNowDate()
    }
  }
</script>

<style scoped lang="stylus">
  .publishEditor
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
      &::before
        border-color:#cdcdcd
      .cancle
        line-height: .88rem
        font-size: .32rem
        position: absolute
        left: .2rem
        color:#333
      .title
        width: 100%
        line-height: .88rem
        text-align: center
        font-size: .36rem
        color:#333
      .publish
        position: absolute
        right: .2rem
        top: .2rem
        width: 1rem
        height: .46rem
        line-height: .46rem
        text-align: center
        font-size: .32rem
        background: #333
        color:#fff
        border-radius: .06rem
    .editor-con
      flex:1
      overflow: auto
      margin: .32rem .2rem
      .editor-desc
        color: #666
        font-size: .32rem
        padding-right: .4rem
    .editor-img
      height: 2rem
      margin: 0 .2rem
      .img-wrapper
        width: 2rem
        height: 1.98rem
        .img
          width: 100%
</style>