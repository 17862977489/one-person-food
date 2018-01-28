<template>
  <div class="edit-contain">
    <div class="header border-bottom">
      <div class="iconfont back" @click="handelBackClick">&#xe60f;</div>编辑资料
    </div>
    <div class="content">
      <div class="line head-photo border-bottom">
        <span class="con-title">头像:</span>
        <span class="con-text"><img class="tiele-img" v-bind:src="headPhoto" alt=""></span>
      </div>
      <div class="line user-name border-bottom">
        <span class="con-title">昵称:</span>
        <input class="con-text ellipsis" placeholder="我是昵称" v-bind:value="userInfo.userName" 
          v-on:input="handelUserInputChange">
      </div>
      <div class="line user-sign border-bottom">
        <span class="con-title">签名:</span>
        <input class="con-text ellipsis" placeholder="我的签名" v-bind:value="userInfo.userSign" 
          v-on:input="handelSignInputChange">
      </div>
      <div class="line user-gender border-bottom">
        <span class="con-title">性别:</span>
        <div class="form-control" id="numbers" @click="handelEditGenderClick">{{userInfo.gender}}</div>
        <div class="iconfont mod-gender" @click="handelEditGenderClick" v-bind:class="{ pulldown : isPullDown }">&#xe6f8;</div>
      </div>
      <div class="gender-select" v-show="genderShow">
        <p class="man" @click="handelSelectGenderClick">男</p>
        <p class="woman" @click="handelSelectGenderClick">女</p>
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
        userInfo: '',
        genderShow: false,
        isSelected: false,
        isPullDown: false,
        genderStatus: false,
        signInputStatus: false,
        userInputStatus: false
      }
    },
    computed: {
      headPhoto () {
        return (this.userInfo.headPhotoUrl || '../../../static/images/my/headPhoto.jpg')
      }
    },
    methods: {
      getEditInfoData () {
        if (window.sessionStorage.sessionId) {
          axios.get('/api/getEditInfoData.json', {
            params: {
              sessionId: window.sessionStorage.sessionId
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
      },
      handelBackClick () {
        if (this.genderStatus || this.signInputStatus || this.userInputStatus) {
          axios.get('/api/edit.json', {
            params: {
              sessionId: window.sessionStorage.sessionId,
              userName: this.userInfo.userName,
              userSign: this.userInfo.userSign,
              gender: this.userInfo.gender
            }
          })
          .then(this.handleGetBackEditInfoDataSucc.bind(this))
          .catch(this.handleGetBackEditInfoDataErr.bind(this))
        } else {
          this.$router.go(-1)
        }
      },
      handleGetBackEditInfoDataSucc (res) {
        if (!res || !res.data || !res.data.ret || !res.data.data.edit) {
          alert('修改资料失败')
        }
        this.$router.go(-1)
      },
      handleGetBackEditInfoDataErr (error) {
        this.$router.go(-1)
        console.log('修改用户信息错误' + error)
      },
      handelEditGenderClick () {
        if (!this.genderShow && !this.isPullDown) {
          this.genderShow = true
          this.isPullDown = true
        } else {
          this.genderShow = false
          this.isPullDown = false
        }
      },
      handelSelectGenderClick (e) {
        this.genderShow = false
        this.isPullDown = false
        this.genderStatus = true
        if (this.userInfo.gender) {
          this.userInfo.gender = e.target.innerHTML
        }
      },
      handelUserInputChange (e) {
        this.userInputStatus = true
        this.userInfo.userName = e.target.value
      },
      handelSignInputChange (e) {
        this.signInputStatus = true
        this.userInfo.userSign = e.target.value
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
    .user-gender
      display: flex
      // position: relative
      .gender
        font-size: .26rem
        font-weight: 100
      .mod-gender
        // position: absolute
        // right: 1rem
        // top: 50%
        // transform: translateY(-50%)
        width: .8rem
        text-align: center
      .form-control
        flex: 1
        border: 0
        appearance:none
      .pulldown
        transform:rotate(90deg)
    .gender-select
      width: 100%
      text-align: center
      line-height: .6rem
      .gender
        background: #eee
</style>
