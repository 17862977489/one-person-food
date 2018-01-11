<template>
  <div class="classify-main">
    <div class="classify-wrapper" v-for="item in foodtype">
      <router-link to="/" class="classify">
        <div class="img-wrapper">
          <img :src="item.foodTypeImg" alt="" :class=item.foodTypeClassName>
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
    margin-top: .22rem
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
          width: 100%
          overflow: hidden
          height: 0
          padding-bottom: 54%
          .baking
            width: .38rem
            height: .47rem
          .chinese-food
            width: .53rem
            height: .43rem
          .western-food
            width: .47rem
            height: .45rem
          .drink
            width: .52rem
            height: .46rem
        .foodTypeName
          color:#3e3e3e
</style>