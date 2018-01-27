<template>
  <div class="comments">
    <div class="comments-title">
      <div class="comments-name">评论<span class="comments-num">(23456+)</span></div>
      <div class="right iconfont">&#xe6f8;</div>
    </div>
    <div class="comments-main">
      <div class="comments-item" v-for="item in comments">
        <div class="userimg-wrapper">
          <div class="img-wrapper">
            <img class="userimg" :src="item.user.headPhotoUrl" alt="">
          </div>
        </div>
        <div class="comments-con">
          <div class="userid ellipsis">{{item.user.userName}}<span class="comments-date">{{item.time}}</span></div>
          <div class="user-comments">{{item.content}}</div>
          <div class="comments-img-list" v-if="item.imgs">
            <div class="img-wrapper">
              <img class="img-item" :src="item.imgs" alt="">
            </div>
            <div class="img-wrapper">
              <img class="img-item imgCenter" :src="item.imgs" alt="">
            </div>
            <div class="img-wrapper">
              <img class="img-item imgBottom" :src="item.imgs" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comments',
    props: {
      comments: Array
    }
  }
</script>

<style scoped lang="stylus">
  .comments
    margin: 0 .2rem .5rem
    .comments-title
      height: .4rem
      display: flex
      position: relative
      .comments-name
        line-height: .48rem
        font-size: .32rem
        color: #333
        .comments-num
          font-size: .32rem
          color: #666
          margin-left: .24rem
      .right
        position: absolute
        font-size: .52rem
        margin-right:.2rem
        color:#7d7d7d
        right: 0
    .comments-main
      .comments-item
        margin-top: .28rem
        display: flex
        .userimg-wrapper
          width: .8rem
          height: 100%
          .img-wrapper
            width: .64rem
            height: .64rem
            border-radius: .32rem
            overflow: hidden
            .userimg
              width: 100%
              height: 100%
        .comments-con
          width: 100%
          .userid
            width: 100%
            font-size: .28rem
            color: #333
            position: relative
            .comments-date
              position: absolute
              font-size: .24rem
              right: 0
          .user-comments
            line-height: .4rem
            font-size: .26rem
            color: #333
            margin-top: .08rem
            margin-bottom: .24rem
          .comments-img-list
            .img-wrapper
              width: 1.7rem
              height: 1.28rem
              overflow: hidden
              display: inline-block
              .img-item
                width: 100%
                height: 100%
</style>