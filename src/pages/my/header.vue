<template>
  <div>
    <div class="my-header border-bottom">我的</div>
    <div class="my-infophoto" v-bind:style="{background:  '#e0e0e0 url('+ titlePhotoBjUrl +') no-repeat center center'}">
      <router-link class="info-box" to="/login" tag="div">
        <img v-bind:src="headPhotoUrl" alt="" class="img-box">
        <div class="user-name ellipsis">{{userName}}</div>
        <div class="img-sign ellipsis">{{userSign}}</div>
      </router-link>
    <div class="info" >
      <div class="fans-and-attention">
        <dl class="attention" @click="handelClick">
          <dt class="attention-num">{{attentionNum}}</dt>
          <dd class="attention-text">关注</dd>
        </dl>
        <div class="division border"></div>
        <div class="fans">
          <i class="fans-num">{{fansNum}}</i>
          <i class="fans-text">粉丝</i>
        </div>
      </div>
      <div class="edit" @click="handelClick">
        <span class="iconfont edit-icon">&#xe62b;</span>
        <router-link class="edit-text" tag="span" to="/editInfo" >编辑资料</router-link>                     
      </div> 
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'myheader',
    props: ['userInfo'],
    data () {
      return {
      }
    },
    computed: {
      fansNum () {
        return this.userInfo.fansNum || '0'
      },
      attentionNum () {
        return this.userInfo.attentionNum || '0'
      },
      titlePhotoBjUrl () {
        return (this.userInfo.titlePhotoBjUrl)
      },
      userName () {
        return this.userInfo.userName || '请先登录'
      },
      headPhotoUrl () {
        return (this.userInfo.headPhotoUrl || '../../../static/images/my/photo.jpg')
      },
      userSign () {
        return (this.userInfo.userSign || '愿你所愿，终能实现')
      }
    },
    methods: {
      handelClick () {
        this.$emit('handelClick')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .my-header
    line-height: .88rem
    text-align: center
    font-size: .33rem
  .my-infophoto
    position: relative
    width: 100%
    height: 4.64rem
    background: #e0e0e0
    background-size: 100%
    .info-box
      text-align: center
      width: 1.62rem
      transform: translateX(-50%) translateY(-50%)
      position: absolute
      left: 50%
      top: 45%
      .img-box
        margin: auto
        height: 1.62rem
        margin-bottom: .27rem
        background-size: 100%
        border-radius: 50%
        text-align: center
      .user-name
        font-size: .3rem
        font-weight: 900
      .img-sign
        font-size: .26rem
        margin-top: .2rem
  .info
    position: absolute
    left: 0
    bottom: 0
    width: 90%
    display: flex
    justify-content: space-between
    height: .86rem
    padding: 0 .2rem 0 .6rem
    background: rgba(249,249,249,.7)
    .fans-and-attention
      display: flex
      .attention
        display: flex
        flex-direction: column
        height: .86rem
        width: .5rem
        font-size: .24rem
        text-align: center
        justify-content: center
        .attention-num
          margin-bottom: .09rem
      .division
        width: .02rem
        height: .5rem
        margin: .2rem .16rem 0 .16rem
        &::before
          transition: scale(1)
          border-color: #333
      .fans
        display: flex
        flex-direction: column
        height: .86rem
        width: .5rem
        font-size: .24rem
        text-align: center
        justify-content: center
        .fans-num
          margin-bottom: .09rem
    .edit
      height: .86rem
      line-height: .86rem
</style>