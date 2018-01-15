<template>
  <div class="classify-container">
  	<div class="header border-bottom">
      <router-link class="iconfont back" tag="div" to="/index">&#xe60f;</router-link>列表
    </div>

  	<div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="friends-con border-bottom">
            <div class="head-photo-con">
              <img src="" alt="" class="head-photo">
              <span class="user-name"></span>
            </div>
            <div class="iconfont more-icon">&#xe6f8;</div>  
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'list',
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
    },
    updated () {
      this.scroll.refresh()
    }
  }
</script>

<style scoped lang="stylus">
  .classify-container
    display: flex
    flex-direction:column
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    .header
      line-height: .88rem
      position: relative
      text-align: center
      font-size: .33rem
      &::before
        border-color: #333
      .back
        position: absolute
        left: .2rem
        top: 50%
        transform: translateY(-50%)
        font-size: .38rem
        color: #231815
    .scroll-container
      overflow: hidden
      flex:1
</style>