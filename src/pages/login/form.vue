<template>
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
</template>

<script>
  import axios from 'axios'
  export default{
    name: 'formTem',
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
        var reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
        if (!reg.test(this.userNameDate)) {
          this.userNameStatus = false
          this.topicText = '请输入有效的11位手机号'
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
          axios.post('/api/login.json', {
            username: this.userNameDate,
            pwd: this.pwdData
          })
          .then(this.handleGetLoginDataSucc.bind(this))
          .catch(this.handleGetLoginDataErr.bind(this))
        } else if (!this.userNameDate) {
          this.topicText = '用户名不能为空'
        } else if (!this.userNameStatus) {
          this.topicText = '用户名格式不正确'
        } else if (!this.pwdData || !this.pwdStatus) {
          this.topicText = '密码不正确'
        }
      },
      handleGetLoginDataSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret && res.data.login) {
          window.sessionStorage.sessionId = res.data.sessionId
          this.$router.push({path: '/my'})
        } else {
          this.topicText = '用户名或密码错误'
        }
      },
      handleGetLoginDataErr () {
        this.topicText = '服务器错误'
      }
    }
  }
</script>

<style scoped lang="stylus">
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
        font-size: .3rem
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
</style>