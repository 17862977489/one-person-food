<template>
  <div class="login-con">
    <div class="login-header">
      <div class="login">
        <span class="back iconfont" @click="handelBackClick">&#xe624;</span>
      </div>
    </div>
    <div class="form">
      <form action="" method="post" >
        <div class="topic">{{topicText}}</div>
        <div class="user border-bottom">
          <input id ="user-name" type="text" placeholder="请输入手机号" @input="handelUsernameInput" v-model="usernameData" />
        </div>
        <authcode-template :phoneNum="usernameData" :usernameStatus="usernameStatus"
          v-on:getAuthCodeErr="getAuthCodeErr" v-on:getAuthCodeSucc="getAuthCodeSucc" 
          v-on:userNameNull="userNameNull" v-on:userNameError="userNameError"
          ref="authcode">
        </authcode-template>
        <div class="pwd border-bottom">
          <input id ="password" type="password" placeholder="请输入6-16位字母或数字密码" @input="handelPwdInput"  v-model="pwdData"/>
        </div>
        <div class="agreement"><span class="agree-left">注册视为同意</span><span class="agree-right">一人食用户协议</span></div>
        <input type="button" value="注册" class="sub" @click="handelRegisterClick"/>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import authcodeTemplate from './components/authcode'
export default {
  name: 'register',
  data () {
    return {
      usernameData: '',
      pwdData: '',
      topicText: '',
      usernameStatus: false,
      pwdStatus: false,
      authCodeStatus: false
    }
  },
  components: {
    authcodeTemplate
  },
  methods: {
    handelUsernameInput () {
      var reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
      if (!reg.test(this.usernameData)) {
        this.usernameStatus = false
        this.topicText = '请输入有效的11位手机号'
      } else {
        this.usernameStatus = true
        this.topicText = ''
      }
    },
    handelPwdInput () {
      var reg = /^[a-zA-Z\d]{6,16}$/
      if (!reg.test(this.pwdData)) {
        this.pwdStatus = false
        this.topicText = '请输入6-16位字母或数字密码'
      } else {
        this.pwdStatus = true
        this.topicText = ''
      }
    },
    userNameNull () {
      this.topicText = '手机号不能为空'
    },
    userNameError () {
      this.topicText = '手机号不正确'
    },
    handelRegisterClick () {
      var authcodedata = this.$refs.authcode.getAuthCodeData()
      if (authcodedata && this.usernameStatus && this.pwdStatus && this.authCodeStatus) {
        axios.post('/api/register.json', {
          phoneNum: this.usernameData,
          authcodedata: authcodedata,
          password: this.pwdData
        })
        .then(this.handelRegisterSucc.bind(this))
        .catch(this.handelRegisterError.bind(this))
      } else if (!this.usernameStatus) {
        this.topicText = '手机号格式不正确'
      } else if (!authcodedata) {
        this.topicText = '验证码不能为空'
      } else if (!this.authCodeStatus) {
        this.topicText = '验证码没获取'
      } else if (!this.pwdData) {
        this.topicText = '密码不能为空'
      } else if (!this.pwdStatus) {
        this.topicText = '密码格式不正确'
      }
    },
    handelRegisterSucc (res) {
      res && (res = res.data)
      if (res && res.data && res.data.register) {
        this.topicText = ''
        this.$router.push({path: '/my/login'})
      } else {
        this.topicText = '验证码不正确'
      }
    },
    handelRegisterError (error) {
      this.topicText = '服务器错误'
      console.log(error)
    },
    handelBackClick () {
      this.$router.push({path: '/my/login'})
    },
    getAuthCodeSucc () {
      this.authCodeStatus = true
    },
    getAuthCodeErr (authCodeRes) {
      if (authCodeRes === 1) {
        this.topicText = '用户名已存在'
      }
      if (authCodeRes === 2) {
        this.topicText = '获取验证码失败,请稍后重试'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .login-con
    position: absolute
    left: 0
    top: 0
    bottom: 0
    right: 0
    background: #fff
    .login-header
      display: flex
      margin:.65rem 0 2.23rem .2rem
      justify-content: space-between;
      .login
        .back
          font-size: .38rem
          color: #231815
    .form
      display: flex
      justify-content: center
      margin-top: 2.82rem
      over-flow: hidden
      .topic
        width: 100%
        height: .24rem
        margin-bottom: .61rem
        line-height: .24rem
        font-size: .24rem
        text-align: center
        color: #f15353
      .user
        width: 5.26rem
        padding-bottom: .19rem
        &::before
            border-color: #666
        input::-webkit-input-placeholder{ 
          font-size: .24rem
          color: #999;
        }
        #user-name
          border: 0
          color: #999
      .pwd
        width: 5.26rem
        padding: .5rem 0 .21rem
        &::before
          border-color: #666
        input::-webkit-input-placeholder{ 
          font-size: .24rem
          color: #999;
        }
        #password
          border: 0
          color: #999
      .agreement
        margin-top: .23rem
        font-size: .24rem
        .agree-left
          color: #999
        .agree-right
          color: #333
      .sub
        width: 5.26rem
        height: .7rem
        margin-top: .54rem
        text-align: center
        border: none
        background: #303030
        color: #fff
        border-radius: .5rem      
</style>