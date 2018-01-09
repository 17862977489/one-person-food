<template>
  <div class="tabbar">
    <div class="tab">
      <router-link to='/' class="tablayout">
        <i class="index" ref="index"></i>
        <p class="font ellipsis">一人食</p>
      </router-link>
      <router-link to='/found' class="tablayout">
        <i class="found" ref="found"></i>
        <p class="font ellipsis">发现</p>
      </router-link>
      <router-link to='/' class="tablayout">
        <i class="add iconfont">&#xe602;</i>
      </router-link>
      <router-link to='/message' class="tablayout">
        <i class="message" ref="message"></i>
        <p class="font ellipsis">消息</p>
      </router-link>
      <router-link to='/my' class="tablayout">
        <i class="my" ref="my"></i>
        <p class="font ellipsis">我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbar',
    props: ['src', 'active'],
    data () {
      return {

      }
    },
    mounted () {
      this.$refs[this.active].style.background = 'url(' + this.imgSrc + ')'
      this.$refs[this.active].style.backgroundSize = '100% 100%'
    },
    computed: {
      imgSrc () {
        return '/static/images/' + this.src
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus">
  .tabbar
    width: 100%
    height: .88rem
    background: #f2f2f2
    z-index: 2
    padding-top: .1rem
    position: relative
    bottom:0
    .tab
      display: flex
      justify-content:space-around
      position: relative
      bottom:0
      .tablayout
        text-align: center
        .index
          display: inline-block
          width: .36rem
          height: .4rem
          font-size: .4rem
          background: url('/static/images/indexNotClick.png')
          background-size: 100% 100%
        .found
          display: inline-block
          width: .48rem
          height: .3rem
          font-size: .34rem
          margin-top: .05rem
          margin-bottom: 0.05rem
          background: url('/static/images/foundNotClick.png')
          background-size: 100% 100%
        .add
          display: inline-block
          width: .98rem
          height: .98rem
          line-height: .98rem
          background: #333
          color:#fff
          font-size: .55rem
          border-radius: 50%
          position: relative
          top: -.26rem
        .message
          display: inline-block
          width: .38rem
          height: .4rem
          font-size: .38rem
          background: url('/static/images/messageNotClick.png')
          background-size: 100% 100%
        .my
          display: inline-block
          width: .38rem
          height: .4rem
          font-size: .38rem
          background: url('/static/images/myNotClick.png')
          background-size: 100% 100%
        .font
          font-size: .2rem
          color:#999
          margin-top: .1rem
</style>