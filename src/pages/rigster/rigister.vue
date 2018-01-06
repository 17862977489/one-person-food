<template>
  <div class="login-con">
    <div class="login-header border-bottom">
      <div class="login">
        <span class="back iconfont">&#xe624;</span>
        <span class="login-text">登录</span>
      </div>
      <div class="rigister">注册</div>
    </div>
    <div class="form">
      <form action="" method="post" >
        <div class="user">
          <input id ="user-name" type="text" placeholder="用户名"/>
        </div>
        <div class="pwd">
          <input id ="password" type="text" placeholder="密码"/>
        </div>
        <div class="about-pwd">
          <p class="remmber"><input type="radio" class="remmber-pwd" value="记住密码"> 记住密码</p>
          <p class="forget">忘记密码</p>
        </div>
        <input type="button" value="登录" class="sub"/>
      </form>
    </div>
    <div class="login-type">
      <div class="login-type-header">
        <p class="login-line border-bottom"></p>
        <p class="login-text">其他账号登录</p>
      </div>
      <div class="login-type-con">
        <span class="qq iconfont">&#xe600;</span>
        <span class="wb iconfont">&#xe73c;</span>
        <span class="wx iconfont">&#xe631;</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'login'
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
      line-height: .8rem
      padding: .25rem
      justify-content: space-between;
      &::before
        transform: scale(1);
      .login
        .back
          margin-right: .5rem
          color: #333
          font-weight: 900
        .login-text
          font-weight: 900
          color: #000
          font-size: .4rem
      .rigister
        font-weight: 700
        color: #999;
        font-size: .4rem
    .form
      display: flex
      justify-content: center
      margin-top: 1.65rem
      #user-name
        width: 5rem
        height: .7rem
        text-indent: .4rem
        font-size: .26rem
      #password
        width: 5rem
        height: .7rem
        margin-top: .5rem
        text-indent: .4rem
        font-size: .26rem
      .about-pwd
        margin: .24rem 0 .46rem
        display: flex
        justify-content: space-between
        text-align: center
        font-size: .18rem
      .sub
        width: 5rem
        height: .7rem
        text-align: center
        border: none
        background: #666
        color: #fff
    .login-type
      over-flow: hidden
      .login-type-header
        position: relative
        margin-top: 2.4rem
        padding-bottom: .58rem
        .login-line
          &::before
            transform: scale(1)
            border-color: #000
        .login-text
          padding: 0 .65rem
          position: absolute
          left: 50%
          transform: translateX(-50%)
          top: -.12rem
          background: #fff
          font-size: .2rem
      .login-type-con
        text-align: center
        .qq
          margin-right: .8rem
          font-size: .5rem
        .wb
          margin-right: .8rem
          font-size: .5rem
        .wx
          font-size: .5rem
</style>