<template>
  <div id="continer">
    <div class="box">
      <div class="form" v-bind:class="[isActive ? enterClass : leaveClass]">
        <div class="topic">{{topicText}}</div>
        <form action="" method="post" >
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
    
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  export default{
    name: 'change-password',
    data () {
      return {
        topicText: '',
        oldPwdData: '',
        newPwdData: '',
        oldPwdStatus: false,
        newPwdStatus: false,
        isActive: true,
        enterClass: 'animated bounceInDown',
        leaveClass: 'animated fadeOutUp'
      }
    },
    methods: {
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
        if (this.oldPwdStatus && this.newPwdStatus) {
          axios.post('/api/forgetPassword.json', {
            sessionId: window.sessionStorage.sessionId,
            oldPassword: this.oldPwdData,
            newPassword: this.newPwdData
          })
          .then(this.handleChangePwdSucc.bind(this))
          .catch(this.handleChangePwdErr.bind(this))
        } else if (!this.oldPwdData) {
          this.topicText = '旧密码不能为空'
        } else if (!this.oldPwdStatus) {
          this.topicText = '旧密码格式不正确'
        } else if (!this.newPwdData) {
          this.topicText = '新密码不能为空'
        } else if (!this.newPwdStatus) {
          this.topicText = '新密码格式不正确'
        }
      },
      handleChangePwdSucc (res) {
        res && (res = res.data)
        if (res && res.data && res.ret) {
          if (res.data.change === 0) {
            this.newPwdData = ''
            this.oldPwdData = ''
            alert('密码修改成功')
            this.handelCloseClick()
          }
          if (res.data.change === 1) {
            this.oldPwdData = ''
            alert('旧密码输入不正确,修改失败')
          }
        }
      },
      handleChangePwdErr () {
        console.log('服务器错误')
      },
      handelCloseClick () {
        this.isActive = false
        this.oldPwdData = ''
        this.newPwdData = ''
        setTimeout(() => {
          this.$emit('changePwdClose')
        }, 700)
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
  .box
    position: absolute
    left: 50%
    top: 50%
    transform: translateX(-50%) translateY(-50%)
    .form
      display: flex
      flex-direction: column
      justify-content: center
      width: 5.26rem
      align-items: center
      // margin: 2rem auto
      background: #fff
      padding: .5rem
      text-align: center
      z-index: 10
      .topic
        width: 100%
        height: .24rem
        font-size: .24rem
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

