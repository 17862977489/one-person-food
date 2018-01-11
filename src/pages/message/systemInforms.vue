<template>
  <div class="messageMain">
    <div class="systemInforms">
      <div class="inform system border-bottom">
        <div class="img-wrapper">
          <img src="../../assets/images/system.png" alt="" class="system-img">
        </div>
        <div class="title">系统通知</div>
        <i class="enter iconfont">&#xe6f8;</i>
      </div>
      <div class="inform praise border-bottom">
        <div class="img-wrapper">
          <img src="../../assets/images/praise.png" alt="" class="praise-img">
        </div>
        <div class="title">点赞</div>
        <i class="enter iconfont">&#xe6f8;</i>
      </div>
      <div class="inform comment border-bottom">
        <div class="img-wrapper">
          <img src="../../assets/images/comment.png" alt="" class="comment-img">
        </div>
        <div class="title">讨论</div>
        <i class="enter iconfont">&#xe6f8;</i>
      </div>
      <div class="inform foucs border-bottom">
        <div class="img-wrapper">
          <img src="../../assets/images/foucs.png" alt="" class="foucs-img">
        </div>
        <div class="title">关注</div>
        <i class="enter iconfont">&#xe6f8;</i>
      </div>
    </div>
    <friendmessage></friendmessage>
  </div>
</template>

<script>
  import Friendmessage from './friendMessage'
  export default {
    name: 'systemInforms',
    components: {
      Friendmessage
    }
  }
</script>

<style scoped lang="stylus">
  .messageMain
    margin: 0 .2rem
    .systemInforms
      .inform
        display: flex
        height: 1.28rem
        &::before
          border-color: #cdcdcd
        .img-wrapper
          margin-top: .32rem
          width: .64rem
          height: .64rem
          background: #333
          border-radius: 50%
          text-align: center
          .system-img
            width: 56.25%
            height: 62.5%
            padding-top: .12rem
          .praise-img
            width: 59.375%
            height: 54.6875%
            padding-top: .14rem
          .comment-img
            width: 59.375%
            height: 59.375%
            padding-top: .14rem
          .foucs-img
            width: 56.25%
            height: 59.375%
            padding-top: .12rem
        .title
          flex: 1
          color: #333
          font-size: .3rem
          line-height: 1.28rem
          margin-left: .32rem
        .enter
          line-height: 1.28rem
          font-size: .34rem
          margin-right: .16rem
    .friendMessage
      .friend-item
        line-height: 1.28rem
        &::before
          border-color: #cdcdcd
</style>