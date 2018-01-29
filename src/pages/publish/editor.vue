<template>
  <div class="publishEditor">
    <div class="editor-header border-bottom">
      <div class="cancle" @click="handleBackClick">取消</div>
      <div class="title">发布</div>
      <div class="publish" ref="determine" @click="handlePublishClick">确定</div>
    </div>
    <div class="editor-con">
      <textarea class="editor-desc" v-model="editorCon" ref="textCon" placeholder='请输入文字...'
      ></textarea>
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
        var date = new Date()
        var dateTime = (date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
        var com = ((date.getHours() > 17) ? '晚餐' : (date.getHours() > 11 ? '午餐' : '早餐'))
        var formData = new FormData()
        formData.append('date', dateTime)
        formData.append('foodName', com)
        formData.append('content', this.editorCon)
        formData.append('sessionId', window.sessionStorage.sessionId)
        this.$refs.uploader.getFormData().forEach((value, item) => {
          formData.append('imgs', value)
        })
        if (this.publishFlag) {
          if (this.$refs.uploader.getFormData().length) {
            if (window.sessionStorage.sessionId) {
              axios.post('/api/sendDraftsInfoData.json', formData)
              .then(this.handleSaveDraftsInfoDataSucc.bind(this))
              .catch(this.handleSaveDraftsInfoDataErr.bind(this))
            } else {
              alert('请先登录')
              this.$router.push({path: '/my/login'})
            }
          } else {
            alert('请至少上传一张图片才能保存到草稿箱,如果不保存请将数据删掉哟~')
          }
        } else {
          this.$router.go(-1)
        }
      },
      handleSaveDraftsInfoDataSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.send) {
          alert('保存到草稿成功')
        } else {
          alert('保存到草稿失败')
        }
        this.$router.push({path: '/my/myDrafts'})
      },
      handleSaveDraftsInfoDataErr (error) {
        alert('服务器错误' + error)
      },
      handlePublishClick () {
        var date = new Date()
        var dateTime = (date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
        var com = ((date.getHours() > 17) ? '晚餐' : (date.getHours() > 11 ? '午餐' : '早餐'))
        var formData = new FormData()
        formData.append('date', dateTime)
        formData.append('foodName', com)
        formData.append('content', this.editorCon)
        formData.append('sessionId', window.sessionStorage.sessionId)
        this.$refs.uploader.getFormData().forEach((value, item) => {
          formData.append('imgs', value)
        })
        if (this.publishFlag && this.$refs.uploader.getFormData().length) {
          if (window.sessionStorage.sessionId) {
            axios.post('/api/sendPublishInfoData.json', formData)
            .then(this.handleSendPublishInfoDataSucc.bind(this))
            .catch(this.handleSendPublishInfoDataErr.bind(this))
          } else {
            alert('请先登录')
            this.$router.push({path: '/my/login'})
          }
        } else {
          alert('请至少上传一张图片和文字')
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
      margin: .32rem .2rem
      .editor-desc
        width: 90%
        height: 1.88rem
        color: #666
        font-size: .32rem
        padding-right: .4rem
        border: 0
        resize: none
        overflow: hidden
    
</style>