<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/my">&#xe60f;</router-link>我的足迹
    </div>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="footmark-con" v-for="(item,index) in footmarkInfo" >
            <div class="head-photo-con">
              <img :src="item.merchantPhotoUrl" alt="" class="head-photo">
            </div>
            <div class="merchant-info">
              <div class="merchant-name">{{item.merchantName}}</div>
              <div class="merchant-address">{{item.merchantAddress}}</div>
              <div class="merchant-time">{{item.merchantTime}}</div>
            </div>  
        </div>
      </div>
      <div class="topic" v-show="isShow">暂无任何足迹~</div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'myFootmark',
    data () {
      return {
        footmarkInfo: [],
        bigStyle: true,
        smallStyle: false,
        isFreshing: false,
        isLoading: true,
        pagination: 0,
        isShow: false
      }
    },
    computed: {
      headPhoto () {
        return (this.userInfo.headPhotoUrl || '../../../static/images/my/headPhoto.jpg')
      }
    },
    methods: {
      getFootmarkInfoData () {
        if (window.sessionStorage.sessionId) {
          axios.get('/api/getFootMarkInfoData.json', {
            params: {
              sessionId: window.sessionStorage.sessionId,
              pagination: this.pagination
            }
          })
          .then(this.handleGetFootmarkInfoDataSucc.bind(this))
          .catch(this.handleGetFootmarkInfoDataErr.bind(this))
        }
      },
      handleGetFootmarkInfoDataSucc (res) {
        this.pagination += 1
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.footmarkInfoData.length) {
          this.footmarkInfo = this.footmarkInfo.concat(JSON.parse(JSON.stringify(res.data.footmarkInfoData)))
        } else {
          this.isShow = true
        }
      },
      handleGetFootmarkInfoDataErr (error) {
        console.log('数据获取失败' + error)
      },
      bindEvents () {
        this.scroll.on('scroll', this.handelScrollEvent.bind(this))
        this.scroll.on('scrollEnd', this.handleScrollEnd.bind(this))
      },
      handelScrollEvent (e) {
        if (((this.scroll.y) <= (this.scroll.maxScrollY - 50)) && this.isLoading) {
          // this.getMoreListInfo()
          this.isLoading = false
        }
      },
      getMoreListInfo () {
        this.getFootmarkInfoData()
      },
      handleScrollEnd () {
        this.isLoading = true
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
      this.getFootmarkInfoData()
      this.bindEvents()
    },
    updated () {
      this.scroll.refresh()
    }
  }
</script>


<style scoped lang="stylus">
  .container
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
      .content
        .footmark-con
          display: flex
          padding: .2rem
          .head-photo-con
            display: flex
            width: 2.5rem
            height: 2.5rem
            margin-right: .5rem
            .head-photo
              width: 100%
              border-radius: .2rem
          .merchant-info
            display: flex
            flex-direction: column
            justify-content: space-around
            .merchant-name
              font-size: .3rem
              font-weight: 900
              color: #333
            .merchant-address
              color: #666
            .merchant-time
              color: #999
      .topic
        font-size: .3rem
        color: #999
        margin-top: .2rem
        text-align: center        
</style>
