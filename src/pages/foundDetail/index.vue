<template>
  <div class="founddetail">
    <founddetailheader></founddetailheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <founddetailinfo :detailInfo="detailInfo"></founddetailinfo>
        <foundcomments></foundcomments>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Founddetailheader from './header'
  import Founddetailinfo from './founddetailinfo'
  import Foundcomments from './comments'
  export default {
    name: 'founddetail',
    data () {
      return {
        detailInfo: Object
      }
    },
    components: {
      Founddetailheader,
      Founddetailinfo,
      Foundcomments
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scroller, {
          click: true
        })
      })
    },
    updated () {
      this.scroll.refresh()
    },
    created () {
      const routers = this.$route.params
      this.detailInfo = {
        id: routers.id,
        userimg: routers.userimg,
        sign: routers.sign,
        desc: routers.desc,
        foodimg: routers.foodimg
      }
    }
  }
</script>

<style scoped lang="stylus">
  .founddetail
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    display:flex
    flex-direction:column
    .scroll-container
      overflow: hidden
      flex:1
</style>