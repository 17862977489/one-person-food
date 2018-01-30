<template>
  <div class="auth-code border-bottom">
    <input id ="auth-text" type="text" placeholder="请输入验证码" v-model="authCodeData"/>
    <!-- <input /> -->
    <button type="button" id ="auth-btn"  class="border-bottom" @click="handelGetAuthCodeClick">{{authCode}}</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'register-auth',
    props: ['phoneNum', 'usernameStatus'],
    data () {
      return {
        getAuthCodeStatus: true,
        authCodeData: '',
        authCode: '获取验证码',
        num: 60
      }
    },
    methods: {
      handelGetAuthCodeClick () {
        if (this.phoneNum && this.getAuthCodeStatus && this.usernameStatus) {
          this.getAuthCodeStatus = false
          axios.get('/api/getAuthCode.json', {
            params: {
              username: this.phoneNum
            }
          })
          .then(this.handelGetAuthCodeSucc.bind(this))
          .catch(this.handelGetAuthCodeErr.bind(this))
        } else if (!this.phoneNum) {
          this.$emit('userNameNull')
        } else if (!this.usernameStatus) {
          this.$emit('userNameError')
        }
      },
      handelGetAuthCodeSucc (res) {
        res && (res = res.data)
        if (res && res.data.ret && (res.data.authCodeRes === 0)) {
          this.$emit('getAuthCodeSucc')
          this.timer = setInterval(this.handelTimeDown.bind(this), 1000)
        } else if (res && res.data && res.data.ret && (res.data.authCodeRes !== 0)) {
          this.getAuthCodeStatus = true
          this.$emit('getAuthCodeErr', res.data.authCodeRes)
        }
      },
      handelGetAuthCodeErr () {
        console.log('验证码接口发送错误')
      },
      handelTimeDown () {
        this.num -= 1
        this.authCode = this.num + 's'
        if (this.num <= 0) {
          clearInterval(this.timer)
          this.authCode = '获取验证码'
          this.getAuthCodeStatus = true
          this.num = 60
        }
      },
      getAuthCodeData () {
        return this.authCodeData
      }
    }
  }
</script>

<style scoped lang="stylus">
  .auth-code
    position: relative
    padding: .5rem 0 .21rem
    &::before
        border-color: #666
    input::-webkit-input-placeholder{ 
      font-size: .24rem
      color: #999;
    }
    #auth-text
      width: 3.1rem
      padding: 0 1.5rem .1rem 0
      font-size: .22rem
      border: 0
      color: #999
    #auth-btn
      position: absolute
      right: .37rem
      bottom: .1rem
      width: 1.3rem
      height: .44rem
      font-size: .22rem
      background: #fff
      border: 0
      border: .02rem solid #b8b8b8
      color: #999;
      font-size: .24rem
      line-height: .24rem
</style>