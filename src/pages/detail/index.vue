<template>
  <div class="detail">
    <detailheader :name="name"></detailheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <detailinfo :detail="detail"></detailinfo>
        <fullofpraise :praise="praise"></fullofpraise>
        <comments :comments="comments"></comments>
        <nearby :nearby="nearby"></nearby>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import Detailinfo from './detailinfo'
  import Detailheader from './detailheader'
  import Fullofpraise from './fullofpraise'
  import Comments from './comments'
  import Nearby from './nearby'
  export default {
    name: 'detail',
    data () {
      return {
        detail: {},
        name: '',
        praise: [],
        comments: [],
        nearby: []
      }
    },
    components: {
      Detailheader,
      Detailinfo,
      Fullofpraise,
      Comments,
      Nearby
    },
    methods: {
      getIndexData () {
        axios.get('/api/detail.json').then(this.handleGetDataSucc.bind(this)).catch(this.handleDataError.bind(this))
      },
      createScroller () {
        this.scroll = new BScroll(this.$refs.scroller)
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.ret && res.data) {
          res.data.detail && (this.detail = res.data.detail)
          res.data.detail.name && (this.name = res.data.detail.name)
          res.data.detail.praise && (this.praise = res.data.detail.praise)
          res.data.detail.comments && (this.comments = res.data.detail.comments)
          res.data.detail.nearby && (this.nearby = res.data.detail.nearby)
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      }
    },
    mounted () {
      this.createScroller()
    },
    updated () {
      this.scroll.refresh()
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">
  .detail
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    display:flex
    flex-direction:column
    z-index: 1
    .scroll-container
      overflow: hidden
      height: 100%
</style>