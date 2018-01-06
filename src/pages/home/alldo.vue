<template>
  <div class="alldo">
    <div class="title-grounp">
      <span class="title">大家都爱做</span>
      <router-link to="/" class="right iconfont">&#xe6f8;</router-link>
    </div>
    <div class="item-wrapper" ref="scroller">
      <div class="item-con" ref="scroll">
        <div class="item" v-for="item in alldo">
          <div class="img-wrapper">
            <img :src="item.img" alt="" class="item-img">
          </div>
          <div class="item-name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'alldo',
    props: {
      alldo: Array
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        scrollX: true,
        eventPassthrough: 'vertical'
      })
    },
    methods: {
      caculateWidth () {
        const len = this.alldo.length
        this.$refs.scroll.style.width = len * 149 + 'px'
      }
    },
    updated () {
      this.caculateWidth()
    }
  }
</script>

<style scoped lang="stylus">
  .alldo
    height: 3.36rem
    background: #fff
    padding-bottom: 1.98rem
    .title-grounp
      display: flex
      margin-left: .29rem
      height: .28rem
      line-height: .28rem
      color:#303030
      .title
        flex: 1
        font-size: .32rem
      .right
        display: inline-block
        font-size: .42rem
        margin-right:.2rem
        color:#231815
        margin-top: -0.01rem
    .item-wrapper
      white-space:nowrap
      .item
        display: inline-block
        width: 2.6rem
        height: 2.78rem
        margin: .3rem .19rem 0 .19rem
        position: relative
        .img-wrapper
          width: 2.6rem
          height: 2.4rem
          overflow: hidden
          border-radius: .1rem
          position: relative
          margin-bottom: .1rem
          .item-img
            height: 100%
            position: absolute
            bottom:0
            left: -.4rem
        .item-name
          text-align: center
          font-size: .32rem
          line-height: .28rem
</style>