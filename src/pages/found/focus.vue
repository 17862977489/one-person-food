<template>
  <div class="foundfocus">
    <div class="found-item" v-for="item in focus">
      <div class="con-header">
        <div class="img-wrapper">
          <img :src="item.userImg" alt="" class="userimg">
        </div>
        <div class="center">
          <div class="username">{{item.userId}}</div>
          <div class="sign">{{item.userSign}}</div>
        </div>
      </div>
      <div class="desc">{{item.foodDesc}}</div>
      <div class="img-wrapper">
        <img :src="item.foodImg" alt="" class="img">
      </div>
      <div class="date">{{item.date}} <i class="comments"></i> <i class="like"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'focus',
    props: {
      focus: Array
    }
  }
</script>

<style scoped lang="stylus">
  .foundfocus
    padding-bottom: .7rem
    .found-item
        width: 7.1rem
        margin: 0 auto
        margin-top: .5rem
        .con-header
          display: flex
          height: 1.4rem
          margin-bottom: .4rem
          .img-wrapper
            width: 1.4rem
            height: 1.4rem
            .userimg
              width: 100%
          .center
            flex: 1
            padding-left: 0.2rem
            margin-top: 0.26rem
            line-height: .5rem
            .username
              font-size: .32rem
              color:#333
            .sign
              font-size: .28rem
              color:#676767
        .desc
          font-size: .32rem
          color: #333
          line-height: .3rem
          margin-bottom: .4rem
        .img-wrapper
          height: 3.6rem
          .img
            width: 100%
        .date
          margin-top: .3rem
          height: 0.24rem
          position: relative
          .comments
            position: absolute
            display: block
            right:.98rem
            bottom:-0.06rem
            width: .4rem
            height: .34rem
            background: url('../../../static/images/icons/comments.png')
            background-size: 100% 100%
          .like
            position: absolute
            display: block
            right:0
            bottom:0
            width: .38rem
            height: .36rem
            background: url('../../../static/images/icons/like.png')
            background-size: 100% 100%
</style>