<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/my">&#xe60f;</router-link>
      <span class="drafts">草稿箱</span>
      <span class="clear" @click="handelClearClick">清空</span>
    </div>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="drafts-con" v-for="(item,index) in draftsInfo" >
          <div class="head-photo-con">
            <img :src="item.imgs" alt="" class="head-photo">
          </div>
          <div class="food-info">
            <div class="food-name">{{item.foodName}}</div>
            <div class="food-completion">{{item.foodCompletion}}</div>
            <div class="food-time">{{item.foodTime}}</div>
          </div> 
        </div> 
      </div>
      <div class="topic" v-show="isShow">暂无任何草稿~</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'myDrafts',
    data () {
      return {
        draftsInfo: [],
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
      getDraftsInfoData () {
        if (window.sessionStorage.sessionId) {
          axios.get('/api/getDraftsInfoData.json', {
            params: {
              sessionId: window.sessionStorage.sessionId,
              pagination: this.pagination
            }
          })
          .then(this.handleGetDraftsInfoDataSucc.bind(this))
          .catch(this.handleGetDraftsInfoDataErr.bind(this))
        }
      },
      handleGetDraftsInfoDataSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.draftsInfoData.length) {
          this.isShow = false
          this.pagination += 1
          this.draftsInfo = this.draftsInfo.concat(JSON.parse(JSON.stringify(res.data.draftsInfoData)))
        } else {
          this.isShow = true
        }
      },
      handleGetDraftsInfoDataErr (error) {
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
        this.getDraftsInfoData()
      },
      handleScrollEnd () {
        this.isLoading = true
      },
      handelClearClick () {
        axios.get('/api/ClearDrafts.json', {
          params: {
            sessionId: window.sessionStorage.sessionId
          }
        })
        .then(this.handleClearDraftsSucc.bind(this))
        .catch(this.handleClearDraftsErr.bind(this))
      },
      handleClearDraftsSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.clearDrafts) {
          this.draftsInfo = []
          this.isShow = true
        }
      },
      handleClearDraftsErr () {
        console.log('删除草稿箱错误')
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
      this.getDraftsInfoData()
      this.bindEvents()
    },
    watch: {
      draftsInfo: {
        handler: function () {
          this.scroll.refresh()
        },
        deep: true
      }
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
      display: flex
      justify-content: space-between
      line-height: .88rem
      padding: 0 .2rem
      text-align: center
      font-size: .33rem
      &::before
        border-color: #333
      .back
        font-size: .38rem
        color: #231815
    .scroll-container
      overflow: hidden
      flex:1
      .content
        .drafts-con
          display: flex
          padding: .2rem
          .head-photo-con
            // display: flex
            width: 2.5rem
            height: 2rem
            line-height: 2rem
            overflow: hidden
            margin-right: .5rem
            .head-photo
              width: 100%
              border-radius: .2rem
          .food-info
            display: flex
            flex-direction: column
            justify-content: space-around
            .food-name
              font-size: .3rem
              font-weight: 900
              color: #333
            .food-time
              color: #999
      .topic
        font-size: .3rem
        color: #999
        margin-top: .2rem
        text-align: center
            
</style>
