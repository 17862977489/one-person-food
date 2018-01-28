<template>
  <div class="container">
    <div class="header border-bottom">
      <div class="iconfont back" @click="handelBackClick">&#xe60f;</div>我的好友
    </div>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="friends-con border-bottom" v-for="(item,index) in friendsInfo" :key="item.id">
            <div class="head-photo-con">
              <img :src="item.headPhotoUrl" alt="" class="head-photo">
              <span class="user-name">{{item.userName}}</span>
            </div>
            <div class="iconfont more-icon">&#xe6f8;</div>  
        </div>
      </div>
      <div class="topic" v-show="isShow">暂无好友~</div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'myFriends',
    data () {
      return {
        friendsInfo: [],
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
      getFriendsInfoData () {
        if (window.sessionStorage.sessionId) {
          axios.get('/api/getFriendsInfoData.json', {
            params: {
              sessionId: window.sessionStorage.sessionId,
              pagination: this.pagination
            }
          })
          .then(this.handleGetFriendsInfoDataSucc.bind(this))
          .catch(this.handleGetFriendsInfoDataErr.bind(this))
        }
      },
      handleGetFriendsInfoDataSucc (res) {
        console.log(res)
        this.pagination += 1
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.fiendsInfoData.length) {
          this.friendsInfo = this.friendsInfo.concat(JSON.parse(JSON.stringify(res.data.fiendsInfoData)))
        } else {
          this.isShow = true
        }
      },
      handleGetFriendsInfoDataErr (error) {
        console.log('数据获取失败' + error)
      },
      bindEvents () {
        this.scroll.on('scroll', this.handelScrollEvent.bind(this))
        this.scroll.on('scrollEnd', this.handleScrollEnd.bind(this))
      },
      handelScrollEvent (e) {
        if (((this.scroll.y) <= (this.scroll.maxScrollY - 50)) && this.isLoading) {
          this.getMoreListInfo()
          this.isLoading = false
        }
      },
      getMoreListInfo () {
        this.getFriendsInfoData()
      },
      handleScrollEnd () {
        this.isLoading = true
      },
      handelBackClick () {
        this.$router.go(-1)
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
      this.getFriendsInfoData()
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
        .friends-con
          display: flex
          justify-content: space-between
          padding: .2rem
          line-height: 1rem
          &::before
            border-color: #999
          .head-photo-con
            display: flex
            width: 1.26rem
            height: 1.26rem
            .head-photo
              width: 100%
              margin-right: .5rem
      .topic
        font-size: .3rem
        color: #999
        margin-top: .2rem
        text-align: center
            
</style>
