<template>
  <div id="continer">
    <div class="form" v-bind:class="[isActive ? enterClass : leaveClass]">
      <div class="topic">{{topicText}}</div>
      <form action="" method="post" >
        <div class="user border-bottom">
          <input id ="user-name" type="text" placeholder="请输入手机号" v-model="userNameDate" @input="handelUsernameInput" />
        </div>
        <div class="old-pwd border-bottom">
          <input id ="old-password" type="password" placeholder="请输入旧密码" v-model="oldPwdData" @input="handelOldPasswordInput" />
        </div>
        <div class="new-pwd border-bottom">
          <input id ="new-password" type="password" placeholder="请输入新密码" v-model="newPwdData" @input="handelNewPasswordInput" />
        </div>
        <input type="button" value="修改密码" class="sub" @click="handelChangePwdClick"/>
        <span class="close" @click="handelCloseClick">关闭</span>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'change-password',
    data () {
      return {
        topicText: '',
        userNameDate: '',
        oldPwdData: '',
        newPwdData: '',
        userNameStatus: false,
        oldPwdStatus: false,
        newPwdStatus: false,
        isActive: true,
        enterClass: 'animated bounceInDown',
        leaveClass: 'animated fadeOutUp'
      }
    },
    methods: {
      handelUsernameInput () {
        var reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
        if (!reg.test(this.userNameDate)) {
          this.userNameStatus = false
          this.topicText = '请输入有效的11位手机号'
        } else {
          this.userNameStatus = true
          this.topicText = ''
        }
      },
      handelOldPasswordInput () {
        var reg = /^[a-zA-Z\d]{6,16}$/
        if (!reg.test(this.oldPwdData)) {
          this.oldPwdStatus = false
          this.topicText = '请输入6-16位字母或数字密码'
        } else {
          this.oldPwdStatus = true
          this.topicText = ''
        }
      },
      handelNewPasswordInput () {
        var reg = /^[a-zA-Z\d]{6,16}$/
        if (!reg.test(this.newPwdData)) {
          this.newPwdStatus = false
          this.topicText = '请输入6-16位字母或数字密码'
        } else {
          this.newPwdStatus = true
          this.topicText = ''
        }
      },
      handelChangePwdClick () {
        this.changePwd()
      },
      changePwd () {
        if (this.oldPwdStatus && this.userNameStatus && this.newPwdStatus) {
          axios.post('/api/forgetPassword.json', {
            sessionId: this.userNameDate,
            oldPassword: this.oldPwdData,
            newPassword: this.newPwdData
          })
          .then(this.handleGetLoginDataSucc.bind(this))
          .catch(this.handleGetLoginDataErr.bind(this))
        } else if (!this.userNameDate) {
          this.topicText = '用户名不能为空'
        } else if (!this.userNameStatus) {
          this.topicText = '用户名格式不正确'
        } else if (!this.oldPwdData || !this.oldPwdStatus) {
          this.topicText = '密码不能为空'
        }
      },
      handleGetLoginDataSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.login) {
          window.sessionStorage.sessionId = res.data.sessionId
          this.$router.push({path: '/my/login'})
        } else {
          this.topicText = '用户名或密码错误'
        }
      },
      handleGetLoginDataErr () {
        console.log('服务器错误')
      },
      handelChangePassword () {
        this.$emit('changePawword')
      },
      handelCloseClick () {
        this.isActive = false
        setTimeout(() => {
          this.$emit("changePwdClose")
        },700)
      },
      changeEnterWay () {
        this.isActive = true
      }
    }
  }
</script>

<style scoped lang="stylus">
 #continer
  position: absolute
  left: 0
  top:0
  right: 0
  bottom: 0
  background: rgba(144,144,144,.8)
  .form
    display: flex
    flex-direction: column
    justify-content: center
    width: 5.26rem
    align-items: center
    margin: 4rem auto
    background: #fff
    padding: .5rem
    text-align: center
    .topic
      width: 100%
      height: .24rem
      font-size: .24rem
      margin-bottom: .61rem
      line-height: .24rem
      text-align: center
      color: #f15353
    .user
      padding-bottom: .19rem
      &::before
        border-color: #666
      input::-webkit-input-placeholder
        color: #999;
      #user-name
        width: 100%
        font-size: .24rem
        line-height: .24rem
        border: 0 
        color: #999
    .old-pwd
      padding: .5rem 0 .19rem
      &::before
        border-color: #666
      input::-webkit-input-placeholder{
        color: #999;
      }
      #old-password
        width: 100%
        font-size: .24rem
        line-height: .24rem
        border: 0
        color: #999
    .new-pwd
      padding: .5rem 0 .19rem
      margin-bottom: .3rem
      &::before
        border-color: #666
      input::-webkit-input-placeholder{
        color: #999;
      }
      #new-password
        width: 100%
        font-size: .24rem
        line-height: .24rem
        border: 0
        color: #999
    .sub
      width: 5.26rem
      height: .7rem
      text-align: center
      font-size: .3rem
      border-radius: .5rem
      border: none
      background: #303030
      color: #fff
      margin-bottom: .3rem
    .close
      padding: .3rem .5rem
</style>

