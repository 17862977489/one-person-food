<template>
  <div class="allLoveTo">
    <div class="title-grounp">
      <span class="title ellipsis">大家都爱去</span>
      <router-link :to="'/index/classifyList'+'5'" class="right iconfont">&#xe6f8;</router-link>
    </div>
    <div class="item-wrapper" ref="scroller">
      <div class="item-con" ref="scroll">
        <router-link class="item" v-for="item in allloveto" :key="item.id" :to="{path:'/detail/' + item.id}" tag="div">
          <div class="img-wrapper">
            <img :src="item.img" alt="" class="item-img">
          </div>
          <div class="item-name ellipsis">{{item.name}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'allloveto',
    props: {
      allloveto: Array
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
        const len = this.allloveto.length
        this.$refs.scroll.style.width = len * 149 + 'px'
      }
    },
    updated () {
      this.caculateWidth()
    }
  }
</script>

<style scoped lang="stylus">
  .allLoveTo
    height: 3.36rem
    background: #fff
    margin-bottom: .4rem
    .title-grounp
      display: flex
      margin-left: .29rem
      height: .32rem
      line-height: .32rem
      color:#303030
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
      white-space:nowrap
      .item
        display: inline-block
        width: 2.6rem
        height: 2.78rem
        margin: .3rem .19rem 0 .19rem
        position: relative
        z-index: 50
        .img-wrapper
          width: 2.6rem
          height: 2.4rem
          overflow: hidden
          border-radius: .1rem
          position: relative
          margin-bottom: .1rem
          .item-img
            width: 100%
            position: absolute
            bottom:0
        .item-name
          text-align: center
          font-size: .32rem
          line-height: .34rem
</style>