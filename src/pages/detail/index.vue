<template>
  <div class="detail">
    <detailheader :name="name" :scrolltop="scrolltop"></detailheader>
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
        nearby: [],
        scrolltop: 0,
        scrollend: 0
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
        const id = this.$router.currentRoute.params.id
        axios.get('/api/detail.json', {
          params: {
            id: id
          }
        }).then(this.handleGetDataSucc.bind(this)).catch(this.handleDataError.bind(this))
      },
      createScroller () {
        this.scroll = new BScroll(this.$refs.scroller, {
          probeType: 3,
          click: true,
          deceleration: 0.008
        })
      },
      bindEvents () {
        this.scroll.on('scroll', this.handleScroll.bind(this))
      },
      handleScroll (e) {
        this.scrolltop = Math.abs(Math.round(e.y))
      },
      handleGetDataSucc (res) {
        if (res && res.data) {
          res.data.detail && (this.detail = res.data.detail)
          res.data.detail.name && (this.name = res.data.detail.name)
          res.data.praise && (this.praise = res.data.praise)
          res.data.comments && (this.comments = res.data.comments)
          res.data.nearby && (this.nearby = res.data.nearby)
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.createScroller()
        this.bindEvents()
      })
    },
    updated () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
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