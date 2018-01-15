<template>
  <div class="classify-container">
  	<div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/index">&#xe60f;</router-link>
      <span>{{classifyInfo.title}}</span>
    </div>

  	<div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="friends-con border-bottom">
            <div class="head-photo-con">
              <img src="" alt="" class="head-photo">
              <span class="user-name"></span>
            </div>
            <div class="iconfont more-icon">&#xe6f8;</div>  
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'classifyList',
    data () {
      return {
        classifyInfo: {},
        pagination: 0
      }
    },
    methods: {
      getClassifyInfoData () {
        if (window.localStorage.sessionId) {
          axios.get('/api/getClassifyInfoData.json', {
            params: {
              sessionId: window.localStorage.sessionId,
              pagination: this.pagination
            }
          })
          .then(this.handleGetClassifyInfoDataSucc.bind(this))
          .catch(this.handleGetClassifyInfoDataErr.bind(this))
          console.log(this.pagination)
        }
      },
      handleGetClassifyInfoDataSucc (res) {
        this.pagination += 1
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.classifyInfoData) {
          for (var item in res.data.classifyInfoData) {
            if (this.$route.params.id === item) {
              var obj = JSON.parse(JSON.stringify(res.data.classifyInfoData[item]))
              this.classifyInfo = Object.assign(this.classifyInfo, obj)
            }
          }
        }
      },
      handleGetClassifyInfoDataErr (error) {
        console.log('数据获取失败' + error)
      }
    },
    updated () {
      this.scroll.refresh()
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
      this.getClassifyInfoData()
    }
  }
</script>

<style scoped lang="stylus">
  .classify-container
    display: flex
    flex-direction:column
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    .header
      line-height: .88rem
      position: relative
      text-align: center
      font-size: .33rem
      &::before
        border-color: #333
      .back
        position: absolute
        left: .2rem
        top: 50%
        transform: translateY(-50%)
        font-size: .38rem
        color: #231815
    .scroll-container
      overflow: hidden
      flex:1
</style>