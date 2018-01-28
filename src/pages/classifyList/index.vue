<template>
  <div class="classify-container">
  	<div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/index">&#xe60f;</router-link>
      <span class="title">{{classifyInfo.title}}</span>
    </div>

  	<div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="list-con" v-for="(item, index) in classifyInfo.list">
          <div class="head-photo-con">
            <img :src="item.img" alt="" class="head-photo">
          </div> 
           <div class="user-name" v-if="item.merchantName ? item.merchantName : '1111' ">{{item.merchantName}}</div>
           <div class="user-con" v-if="(item.merchantCon)">{{item.merchantCon}}</div>
           <div class="user-con" v-if="(item.merchantAddress)">{{item.merchantAddress}}</div>
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
        classifyInfo: '',
        pagination: 0
      }
    },
    methods: {
      getClassifyInfoData () {
        axios.get('/api/getClassifyInfoData.json', {
          params: {
            sessionId: window.sessionStorage.sessionId,
            pagination: this.pagination
          }
        })
        .then(this.handleGetClassifyInfoDataSucc.bind(this))
        .catch(this.handleGetClassifyInfoDataErr.bind(this))
      },
      handleGetClassifyInfoDataSucc (res) {
        this.pagination += 1
        if (res && res.data && res.data.classifyInfoData) {
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
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3,
        click: true
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
      height: 0
      padding-bottom: .88rem
      .title
        height: .8rem
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
      .content
        // height: auto
        .list-con
          padding: .2rem
          .head-photo-con
            height: auto
            height: 3rem
            overflow: hidden
            .head-photo
              width: 100%
              border-radius: .1rem
          .user-name
            font-size: .3rem
            color: #333
            font-weight: 900
            margin: .2rem 0
          .user-con
            height: .3rem
            font-size: .24rem
            color: #666
          
</style>