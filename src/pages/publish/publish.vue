v<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/my">&#xe60f;</router-link>我的发布
    </div>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="publish-con" v-for="(item,index) in publishInfo" :key="item.id">
          <div class="publish-header">
            <div class="head-photo-con"><img :src="item.user.headPhotoUrl" alt="" class="head-photo"></div>
            <dl class="user-info">
              <dt class="user-name">{{publishInfo.userName}}</dt>
              <dd class="publish-time">{{item.time}}</dd>
            </dl>
          </div>
          <div class="publish-text">{{item.content}}</div>
          <div class="img-con">
            <div class="publish-imgs-con">
              <img :src="item.imgs" alt="" class="publish-imgs-big">
              <!-- <img :src="itemImg" alt="" class="publish-imgs-big" v-if="item.imgs.length < 2 "> -->
              <!-- <img :src="itemImg" alt="" class="publish-imgs-small" v-else> -->
            </div>
          </div>
        </div>
      </div>
      <div class="topic" v-show="isShow">暂无任何发布信息~</div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'myPublish',
    data () {
      return {
        publishInfo: [],
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
      getPublishInfoData () {
        if (window.sessionStorage.sessionId) {
          axios.get('/api/getPublishInfoData.json', {
            params: {
              sessionId: window.sessionStorage.sessionId,
              pagination: this.pagination
            }
          })
          .then(this.handleGetPublishInfoDataSucc.bind(this))
          .catch(this.handleGetPublishInfoDataErr.bind(this))
        }
      },
      handleGetPublishInfoDataSucc (res) {
        this.pagination += 1
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.publishInfoData.length) {
          this.publishInfo = this.publishInfo.concat(JSON.parse(JSON.stringify(res.data.publishInfoData)))
        } else {
          this.isShow = true
        }
      },
      handleGetPublishInfoDataErr (error) {
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
        this.getPublishInfoData()
      },
      handleScrollEnd () {
        this.isLoading = true
      }
    },
    updated () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    mounted () {
      // this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
      // })
      this.getPublishInfoData()
      this.bindEvents()
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
        .publish-con
          display: flex
          flex-direction: column
          margin-top: .5rem
          .publish-header
            display: flex
            padding-left: .5rem
            .head-photo-con
              width: 1.26rem
              height: 1.26rem
              margin-right: .5rem
              .head-photo
                width: 100%
            .user-info
              display: flex
              flex-direction: column
              justify-content: space-around
          .publish-text
            margin-top: .3rem
            margin-left: .8rem
            font-size: .32rem
            color: #333
          .img-con
            display: flex
            flex-wrap: wrap
            margin-top: .5rem
            margin-left: .6rem
            .publish-imgs-con
              margin: 0 .2rem .2rem 0
              .publish-imgs-big
                width: 5rem
              .publish-imgs-small
                width: 1.5rem
                height: 1rem
      .topic
        font-size: .3rem
        color: #999
        margin-top: .2rem
        text-align: center
                
            
            
</style>
