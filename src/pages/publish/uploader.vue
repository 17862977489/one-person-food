<template>
  <div class="editor-img">
    <div class="img-wrapper" v-for="(item,index) in imgList"  :key="index" 
    >
      <img :src="item" alt="" class="img" @click="handelImgShowClick" :data-index="index">
    </div>
    <div class="img-control">
      <div class="form-group">
        <div class="add-img">+</div>
        <input type="file" class="form-control" @change="onFileChange">
     </div>
    </div>
    <swiper-template :imgList="imgList" :isShowAllImg="isShowAllImg" v-on:handelTitleImgSucc="handelTitleImgSucc" :initIndex="initIndex"></swiper-template>
  </div>
</template>

<script>
import swiperTemplate from '../../components/maskSwiper'
export default {
  name: 'uploader',
  components: {
    swiperTemplate
  },
  data () {
    return {
      date: '',
      imgList: [],
      isShowAllImg: false,
      initIndex: 0
    }
  },
  methods: {
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      var date = new Date()
      var dateTime = (date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
      var com = ((date.getHours() > 17) ? '晚餐' : (date.getHours() > 11 ? '午餐' : '早餐'))
      this.formData = new FormData()
      this.formData.append('date', dateTime)
      this.formData.append('foodName', com)
      if ((/(?:jpg|gif|png|jpeg)$/i.test(e.target.value))) {
        this.formData.append('imgs', files[0])
        this.createImage(files)
      } else {
        alert('只能上传图片')
      }
    },
    createImage (file) {
      var vm = this
      var reader = null
      var leng = file.length
      for (var i = 0; i < leng; i++) {
        reader = new window.FileReader()
        reader.readAsDataURL(file[i])
        reader.onload = function (e) {
          vm.imgList.push(e.target.result)
        }
      }
    },
    handelImgShowClick (e) {
      this.initIndex = e.target.getAttribute('data-index')
      this.isShowAllImg = true
    },
    handelTitleImgSucc () {
      this.isShowAllImg = false
    },
    getFormData () {
      return this.formData
    }
  }
}
</script>

<style scoped lang="stylus">
  .el-message
    width: 2rem
    height: 5rem
    text-align: center
    background: #ccc
    .el-message__content
      color: red
  .editor-img
      margin: 0 .2rem
      display: flex
      flex-wrap: wrap
      .img-wrapper
        width: 2rem
        height: 1.98rem
        line-height: 1.98rem
        margin: 0 .16rem .16rem 0
        background: #f3f5f8
        text-align: center
        .img
          width: 100%
          height: 100%
      .img-control
        .form-group
          position: relative
          width: 2rem
          line-height: 1.98rem
          text-align: center
          background: #f3f5f8
          .form-control
            position: absolute
            left: 0
            top: 50%
            transform: translateY(-50%)
            opacity: 0
            margin-left: .3rem
            z-index: 2
          .img
            width: 100%
          .add-img
            color: #666
            font-size: 1rem
  
</style>