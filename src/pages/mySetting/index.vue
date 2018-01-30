<template>
  <div class="container">
    <div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/my">&#xe60f;</router-link>设置
    </div>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="setting-con">
            <div class="line border-bottom">绑定账号</div>
            <div class="line border-bottom" @click="handelChangePassword">修改密码</div>
            <div class="line border-bottom">消息设置</div>
            <div class="line border-bottom">意见反馈</div>
            <div class="line border-bottom">向朋友推荐</div>
            <div class="line border-bottom">检查更新</div>
            <div class="line border-bottom">清除缓存</div>
            <div class="line border-bottom">关于我们</div>
        </div>
      </div>
      <change-password v-show="show" class="change-pwd" v-on:changePwdClose="changePwdClose" ref="changePwd"></change-password>
    </div>
    <div class="log-out" @click="handelLogOut">退出账号</div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import changePassword from './changePassword'
  export default {
    name: 'mySetting',
    data () {
      return {
        show: false
      }
    },
    components: {
      changePassword
    },
    methods: {
      handelLogOut () {
        window.sessionStorage.removeItem('sessionId')
        this.$router.go(-1)
      },
      changePwdClose () {
        this.show = false
        this.$refs.changePwd.changeEnterWay()
      },
      handelChangePassword () {
        this.show = true
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        click: true
      })
    }
  }
</script>


<style scoped lang="stylus">
  .container
    display: flex
    flex-direction:column
    height: 100%
    /*position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0*/
    .header
      height: .88rem
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
    .scroll-container
      overflow: hidden
      flex:1
      .content
        .setting-con
          display: flex
          flex-direction: column
          // justify-content: space-between
          line-height: 1rem
          &::before
            border-color: #333
          .line
            line-height: 1rem
            padding: 0 .2rem
            &::before
              border-color: #666
    .log-out
      height: .8rem
      line-height: .8rem
      width: 100%
      text-align: center
      font-size: .3rem
      background: #333
      color: #fff
</style>
