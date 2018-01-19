<template>
  <div class="publishEditor">
    <div class="editor-header border-bottom">
      <div class="cancle" @click="handleBackClick">取消</div>
      <div class="title">发布</div>
      <div class="publish" ref="determine" @click="handlePublishClick">确定</div>
    </div>
    <div class="editor-con">
      <textarea class="editor-desc" v-model="editorCon" ref="textCon" placeholder='请输入文字...'></textarea>
    </div>
    <up-loader ref="uploader"></up-loader>
  </div>
</template>

<script>
  import upLoader from './uploader'
  import axios from 'axios'

  export default {
    name: 'editor',
    components: {
      upLoader
    },
    data () {
      return {
        date: '',
        editorCon: '',
        publishFlag: false
      }
    },
    watch: {
      editorCon: function (e) {
        if (e.length > 0) {
          this.$refs.determine.style.background = '#333'
          this.$refs.determine.style.color = '#fff'
          this.publishFlag = true
        } else {
          this.$refs.determine.style.background = '#f3f5f8'
          this.$refs.determine.style.color = '#666'
          this.publishFlag = false
        }
      }
    },
    methods: {
      getNowDate () {
        this.date = new Date().toLocaleDateString()
        this.date = this.date.replace(/\//g, ' ')
      },
      handleBackClick () {
        this.$router.go(-1)
      },
      handlePublishClick () {
        if (this.publishFlag) {
          if (window.localStorage.sessionId) {
            axios.get('/api/sendPublishInfoData.json', {
              params: {
                sessionId: window.localStorage.sessionId,
                imgs: this.$refs.uploader.getFormData()
              }
            })
            .then(this.handleSendPublishInfoDataSucc.bind(this))
            .catch(this.handleSendPublishInfoDataErr.bind(this))
          } else {
            this.$router.push({path: '/my/login'})
          }
        }
      },
      handleSendPublishInfoDataSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.sendPublish) {
          this.$router.push({path: '/my/myPublish'})
        }
      },
      handleSendPublishInfoDataErr (error) {
        console.log('获取数据错误' + error)
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
        background: #f3f5f8
        color:#666
        border-radius: .06rem
    .editor-con
      height: 1.88rem
      overflow: auto
      margin: .32rem .2rem
      .editor-desc
        width: 94%
        height: 1.88rem
        color: #666
        font-size: .32rem
        padding-right: .4rem
        border: 0
        resize: none
    
</style>