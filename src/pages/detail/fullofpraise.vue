<template>
  <div class="fullofpraise">
    <div class="praise">赞不绝口</div>
    <div class="praise-img-list">
      <div class="img-wrapper" v-for="item in praise">
        <img class="praise-img" :src="item.imgUrl" alt="">
        <p class="praise-title ellipsis">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fullofpraise',
    props: {
      praise: Array
    }
  }
</script>

<style scoped lang="stylus">
  .fullofpraise
    .praise
      margin: .3rem 0 .3rem .2rem
      color: #333
      font-size: .32rem
    .praise-img-list
      margin: 0 .2rem
      .img-wrapper
        display: inline-block
        width: 3.1rem
        height: 4rem
        margin-left: .3rem
        margin-bottom: .3rem
        position: relative
        .praise-img
          width: 100%
        .praise-title
          position: absolute
          bottom: 0
          font-size: .32rem
          color: #333
          line-height: .5rem
          padding-left: .3rem
          width: 2.8rem
          background: rgba(255, 255, 255, 0.8)
</style>