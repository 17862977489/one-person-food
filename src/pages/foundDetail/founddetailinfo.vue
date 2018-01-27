<template>
  <div class="founddetailinfo">
    <div class="con-header">
      <div class="img-wrapper">
        <img :src="detailInfo.userimg" alt="" class="userimg">
      </div>
      <div class="center">
        <div class="username">{{detailInfo.id}}</div>
        <div class="sign">{{detailInfo.sign}}</div>
      </div>
      <div class="focus" @click="handleFocusClick">+关注</div>
    </div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="img-wrapper"">
      <img :src="detailInfo.foodimg" alt="" class="img">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'founddetailinfo',
    props: {
      detailInfo: Object
    },
    methods: {
      handleFocusClick (e) {
        e.target.innerHTML = '已关注'
      }
    }
  }
</script>

<style scoped lang="stylus">
  .founddetailinfo
    margin: 0 .2rem
    padding-top: .5rem
    margin-bottom: .6rem
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
        height: 3.6rem
        overflow:hidden
        .img
          width: 100%
</style>