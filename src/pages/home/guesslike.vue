<template>
  <div class="guess">
    <div class="title-grounp">
      <span class="title ellipsis">猜你喜欢</span>
      <router-link :to="'/index/classifyList'+'6'" class="right iconfont">&#xe6f8;</router-link>
    </div>
    <div class="item-wrapper">
      <div class="item" v-for="item in guessyoulike" :key="item.id" @click="handleGuessClick(item.id)">
        <div class="img-wrapper">
          <img :src="item.img" alt="" class="item-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'guess',
    props: {
      guessyoulike: Array
    },
    methods: {
      handleGuessClick (id) {
        this.$nextTick(() => {
          this.$router.push({path: '/detail/' + id})
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .guess
    height: 7.08rem
    margin-bottom: .4rem
    .title-grounp
      display: flex
      margin-left: .29rem
      height: .32rem
      line-height: .32rem
      color:#303030
      margin-bottom: .3rem
      .title
        flex: 1
        font-size: .32rem
        line-height: .32rem
      .right
        display: inline-block
        font-size: .42rem
        margin-right:.2rem
        color:#231815
        margin-top: -0.01rem
    .item-wrapper
      overflow: hidden
      .item
        width: 7.1rem
        height: 3.14rem
        margin: .2rem auto 0
        border-radius: .1rem
        overflow: hidden
        .img-wrapper
          height: 0
          padding-bottom: 44.22%
          overflow: hidden
          .item-img
            width: 100%
</style>