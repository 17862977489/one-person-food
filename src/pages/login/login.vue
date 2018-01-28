<template>
  <div class="login-con">
    <div class="login-header">
      <div class="login">
        <router-link class="close iconfont" tag="span" to="/my">&#xe849;</router-link>
      </div>
    </div>
    <form-template></form-template>
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
  import formTemplate from './form'
  export default{
    name: 'login',
    data () {
      return {
      }
    },
    components: {
      formTemplate
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