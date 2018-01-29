<template>
  <div class="nearby">
    <div class="title-grounp">
      <span class="title ellipsis">附近推荐</span>
    </div>
    <div class="item-wrapper" ref="scroller">
      <div class="item-con" ref="scroll">
        <router-link to="/found" tag="div" class="item" v-for="item in nearby" :key="item.id">
          <div class="img-wrapper">
            <img :src="item.foodImg" alt="" class="item-img">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'nearby',
    props: {
      nearby: Array
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        scrollX: true,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    methods: {
      caculateWidth () {
        const len = this.nearby.length
        this.$refs.scroll.style.width = len * 2.34 + 'rem'
      }
    },
    updated () {
      this.caculateWidth()
    }
  }
</script>

<style scoped lang="stylus">
  .nearby
    height: 3.36rem
    background: #fff
    margin: 0 0 0 .2rem
    padding-bottom: 0.08rem
    .title-grounp
      display: flex
      height: .32rem
      line-height: .32rem
      color:#303030
      .title
        font-size: .32rem
        line-height: .32rem
    .item-wrapper
      white-space:nowrap
      .item
        display: inline-block
        width: 2.14rem
        height: 2.34rem
        margin: .3rem .2rem 0 0
        position: relative
        .img-wrapper
          width: 2.14rem
          height: 2.34rem
          overflow: hidden
          margin-bottom: .1rem
          .item-img
            width: 100%
</style>