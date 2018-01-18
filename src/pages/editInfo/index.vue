<template>
  <div class="edit-contain">
    <div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/my">&#xe60f;</router-link>编辑资料
    </div>
    <div class="content">
      <div class="line head-photo border-bottom">
        <span class="con-title ">头像:</span>
        <span class="con-text"><img class="tiele-img" v-bind:src="headPhoto" alt=""></span>
      </div>
      <div class="line user-name border-bottom">
        <span class="con-title">昵称:</span>
        <input class="con-text ellipsis" placeholder="我是昵称" v-bind:value="userInfo.userName">
      </div>
      <div class="line user-sign border-bottom">
        <span class="con-title">签名:</span>
        <input class="con-text ellipsis" placeholder="我的签名" v-bind:value="userInfo.userSign">
      </div>
      <div class="line user-gender border-bottom">
        <span class="con-title">性别:</span>
        <span class="gender">{{userInfo.gender}}</span>
        <span class="iconfont mod-gender">&#xe6f8;</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'editInfo',
    data () {
      return {
        userInfo: ''
      }
    },
    computed: {
      headPhoto () {
        return (this.userInfo.headPhotoUrl || '../../../static/images/my/headPhoto.jpg')
      }
    },
    methods: {
      getEditInfoData () {
        if (window.localStorage.sessionId) {
          axios.get('/static/getEditInfoData.json', {
            params: {
              sessionId: window.localStorage.sessionId
            }
          })
          .then(this.handleGetEditInfoDataSucc.bind(this))
          .catch(this.handleGetEditInfoDataErr.bind(this))
        }
      },
      handleGetEditInfoDataSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.editInfoData) {
          this.userInfo = JSON.parse(JSON.stringify(res.data.editInfoData))
        }
      },
      handleGetEditInfoDataErr (error) {
        console.log('数据获取失败' + error)
      }
    },
    mounted () {
      this.getEditInfoData()
    }
  }
</script>


<style scoped lang="stylus">
  .header
    width: 100%
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
  .content
    width: 100%
    .line
      position: relative
      display: flex
      line-height: 1.28rem
      padding-left: .32rem
      font-weight: 700
      color: #333
      &::before
        color: #666
      .con-title
        margin-right: .5rem
      .con-text
        line-height: .8rem
        flex: 1
        margin: auto
        border: 0
        .tiele-img
          width: .8rem
          height: .8rem
      .gender
        font-size: .26rem
        font-weight: 100
      .mod-gender
        position: absolute
        right: .5rem
        top: 50%
        transform: translateY(-50%)
</style>
