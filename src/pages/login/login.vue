<template>
  <div class="login-con">
    <div class="login-header">
      <div class="login">
        <router-link class="close iconfont" tag="span" to="/my">&#xe849;</router-link>
      </div>
    </div>
    <div class="form">
      <div class="topic">{{topicText}}</div>
      <form action="" method="post" >
        <div class="user border-bottom">
          <input id ="user-name" type="text" placeholder="请输入手机号" v-model="userNameDate" @input="handelUsernameInput" />
        </div>
        <div class="pwd border-bottom">
          <input id ="password" type="password" placeholder="请输入密码" v-model="pwdData" @input="handelPasswordInput" />
        </div>
        <div class="about-pwd">
          <p class="forget">忘记密码?</p>
        </div>
        <input type="button" value="登录" class="sub" @click="handelLoginClick"/>
        <router-link :to="{path:'/my/login/register'}" class="register" tag="p">注册</router-link>
      </form>
    </div>
    <div class="login-type">
      <div class="login-type-header">
        <p class="login-line border-bottom"></p>
        <p class="login-text">第三方登录</p>
      </div>
      <div class="login-type-con">
        <span class="qq iconfont"><a href="javascript:;" class="qq-icon">&#xe61b;</a></span>
        <span class="wb iconfont"><a href="javascript:;" class="wb-icon">&#xe67e;</a></span>
        <span class="wx iconfont"><a href="javascript:;" class="wx-icon">&#xe611;</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    name: 'login',
    data () {
      return {
        topicText: '',
        userNameDate: '',
        pwdData: '',
        userNameStatus: false,
        pwdStatus: false
      }
    },
    methods: {
      handelUsernameInput () {
        var reg = /^1(3|5|7|8)\d{9}$/
        if (!reg.test(this.userNameDate)) {
          this.userNameStatus = false
          this.topicText = '请输入11位手机号'
        } else {
          this.userNameStatus = true
          this.topicText = ''
        }
      },
      handelPasswordInput () {
        var reg = /^[a-zA-Z\d]{6,16}$/
        if (!reg.test(this.pwdData)) {
          this.pwdStatus = false
          this.topicText = '请输入6-16位字母或数字密码'
        } else {
          this.pwdStatus = true
          this.topicText = ''
        }
      },
      handelLoginClick () {
        this.getLoginData()
      },
      getLoginData () {
        if (this.pwdStatus && this.userNameStatus) {
          axios.get('/api/login.json', {
            params: {
              username: this.userNameDate,
              pwd: this.pwdData
            }
          })
          .then(this.handleGetLoginDataSucc.bind(this))
          .catch(this.handleGetLoginDataErr.bind(this))
        } else if (!this.userNameDate) {
          this.topicText = '用户名不能为空'
        } else if (!this.userNameStatus) {
          this.topicText = '用户名格式不正确'
        } else if (!this.pwdData || !this.pwdStatus) {
          this.topicText = '密码不能为空'
        }
      },
      handleGetLoginDataSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.login) {
          window.localStorage.sessionId = res.data.sessionId
          this.$router.push({path: '/index'})
        } else {
          this.topicText = '用户名或密码错误'
        }
      },
      handleGetLoginDataErr () {
        console.log('服务器错误')
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
      margin-top: .68rem
      margin-bottom: 2.26rem
      .login
        .close
          font-size: .32rem
          margin-left: .2rem
          color: #333
          font-weight: 900
    .form
      display: flex
      flex-direction: column
      width: 5.26rem
      align-items: center
      margin: auto
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
        input::-webkit-input-placeholder{ 
          color: #999;
        }
        #user-name
          width: 100%
          font-size: .24rem
          line-height: .24rem
          border: 0 
          color: #999
      .pwd
        padding: .5rem 0 .19rem
        &::before
            border-color: #666
        input::-webkit-input-placeholder{
          color: #999;
        }
        #password
          width: 100%
          font-size: .24rem
          line-height: .24rem
          border: 0
          color: #999
      .about-pwd 
        .forget
          margin: .20rem 0 .61rem 3.84rem
          font-size: .16rem
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
      .register
        text-align: center
        margin: .5rem 0 1.31rem
        font-size: .3rem
        color: #303030
    .login-type
      over-flow: hidden
      .login-type-header
        width: 6.3rem
        text-align: center
        position: relative
        margin: auto
        padding-bottom: 1.19rem
        .login-line
          &::before
            transform: scale(1)
            border-color: #aaa
        .login-text
          padding: 0 .17rem
          position: absolute
          left: 50%
          transform: translateX(-50%)
          top: -.12rem
          background: #fff
          font-size: .24rem
          color: #999
      .login-type-con
        text-align: center
        .qq
          margin-right: .9rem
          .qq-icon
            font-size: .44rem
            color: #4a90e2
        .wb
          margin-right: .94rem
          .wb-icon
            font-size: .42rem
            color: #56aa00
        .wx
          .wx-icon
            font-size: .38rem
            color: #f16853
</style>