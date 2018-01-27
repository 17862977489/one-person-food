<template>
  <div class="classify-main">
    <div class="classify-wrapper" v-for="item in foodtype">
      <router-link :to="'/index/classifyList'+item.id" class="classify">
        <div class="img-wrapper">
          <img :src="item.foodTypeImg" alt="" :class=item.foodTypeClassName class="img">
        </div>
        <span class="foodTypeName ellipsis">{{item.foodTypeName}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'classify',
    props: {
      foodtype: Array
    }
  }
</script>

<style scoped lang="stylus">
  .classify-main
    height: 1.2rem
    display: flex
    background: #fff
    margin-top: .2rem
    .classify-wrapper
      flex: 1
      .classify
        display: block
        width: 1rem
        margin: 0 auto
        text-align: center
        font-size: .20rem
        color: #333
        .img-wrapper
          width: .7rem
          height: .5rem
          margin: 0 auto .1rem
          overflow: hidden
          .img
            width: 100%
            height: 100%
            overflow: hidden
        .foodTypeName
          display:inline-block
          width: 100%
          color:#3e3e3e
          text-align:center
          font-size: .26rem
</style>