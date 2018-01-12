<template>
  <div>
    <div class="my-header border-bottom">我的</div>
    <div class="my-infophoto">
      <router-link class="info-box" to="/login" tag="div">
        <div class="img-box"></div>
        <div class="img-text">请先登录</div>
      </router-link>
    </div>
    <div class="info">
      <div class="fans-and-attention">
        <dl class="attention">

          <dt class="attention-num">0</dt>
          <dd class="attention-text">关注</dd>
        </dl>
        <div class="division border"></div>
        <div class="fans">
          <i class="fans-num">0</i>
          <i class="fans-text">粉丝</i>
        </div>
      </div>
      <div class="edit">
        <span class="iconfont edit-icon">&#xe62b;</span>
        <span class="edit-text">编辑资料</span>                     
      </div> 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myheader',
    data () {
      return {

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
    height: 3.8rem
    background: #e0e0e0
    .info-box
      text-align: center
      transform: translateX(-50%) translateY(-50%)
      position: absolute
      left: 50%
      top: 50%
      .img-box
        margin: auto
        width: 1.62rem
        height: 1.62rem
        margin-bottom: .27rem
        background: url('../../../static/images/my/photo.jpg') no-repeat center center
        background-size: 100%
      .img-text
        font-size: .3rem
        font-weight: 900
  .info
    display: flex
    justify-content: space-between
    height: .86rem
    // line-height: .86rem
    padding: 0 .2rem 0 .6rem
    background: #f9f9f9
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