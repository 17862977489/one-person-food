<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/my">&#xe60f;</router-link>我的好友
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
        pagination: 0
      }
    },
    computed: {
      headPhoto () {
        return (this.userInfo.headPhotoUrl || '../../../static/images/my/headPhoto.jpg')
      }
    },
    methods: {
      getFriendsInfoData () {
        if (window.localStorage.sessionId) {
          axios.get('/api/getFriendsInfoData.json', {
            params: {
              sessionId: window.localStorage.sessionId,
              pagination: this.pagination
            }
          })
          .then(this.handleGetFriendsInfoDataSucc.bind(this))
          .catch(this.handleGetFriendsInfoDataErr.bind(this))
          console.log(this.pagination)
        }
      },
      handleGetFriendsInfoDataSucc (res) {
        this.pagination += 1
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.fiendsInfoData) {
          this.friendsInfo = this.friendsInfo.concat(JSON.parse(JSON.stringify(res.data.fiendsInfoData)))
          console.log(this.friendsInfo)
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
        console.log(222)
        this.getFriendsInfoData()
      },
      handleScrollEnd () {
        this.isLoading = true
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
      this.getFriendsInfoData()
      this.bindEvents()
    },
    watch: {
      friendsInfo: {
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
            
</style>
