<template>
  <div class="nearby">
    <div class="found-item" v-for="item in found">
      <div class="con-header">
        <div class="img-wrapper">
          <img :src="item.headPhotoUrl" alt="" class="userimg">
        </div>
        <div class="center">
          <div class="username">{{item.userName}}</div>
          <div class="sign">{{item.userSign}}</div>
        </div>
        <div class="focus" @click="handleFocusClick">+关注</div>
      </div>
      <div class="desc">{{item.foodDesc}}</div>
      <div class="img-wrapper" @click="handleDesClick(item.userId,item.headPhotoUrl,item.userSign,item.foodDesc,item.foodImg,item.userName)">
        <img :src="item.foodImg" alt="" class="img">
      </div>
      <div class="date">{{item.date}} <i class="comments"></i> <i class="like"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nearby',
    props: {
      found: Array
    },
    methods: {
      handleFocusClick (e) {
        e.target.innerHTML = '已关注'
      },
      handleDesClick (id, userimg, sign, desc, foodimg) {
        this.$router.push({name: 'foundDetail', params: {id: id, userimg: userimg, sign: sign, desc: desc, foodimg: foodimg}})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .nearby
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
        .focus
          width: 1.1rem
          height: 0.46rem
          text-align: center
          line-height: 0.46rem
          border: 0.02rem solid #adadad
          color:#4e4e4e
          margin-top: 0.36rem
          z-index: 2
      .desc
        font-size: .32rem
        color: #333
        line-height: .3rem
        margin-bottom: .4rem
      .img-wrapper
        // height: 3.6rem
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