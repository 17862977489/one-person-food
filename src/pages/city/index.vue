<template>
  <div class="cityIndexMain">
    <cityheader :list="list"></cityheader>
    <div class="borderBottom"></div>
    <div ref="scroller" class="wrapper">
      <div class="list">
        <choosecounty></choosecounty>
        <position></position>
        <hotcity :hotcity="hotcity"></hotcity>
        <citylist :list="list" ref="lists" @scrollTo="handleScrollTo"></citylist>
      </div>
    </div>
    <sidebar :list="list" :showSidebar="showSidebar" @changeLetter="handleLetterChange"></sidebar>
  </div>
</template>

<script>
  import citylist from '../../../static/citylist.json'
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import Cityheader from './header'
  import Choosecounty from './choosecounty'
  import Position from './position'
  import Hotcity from './hotcity'
  import Citylist from './list'
  import Sidebar from './sidebar'
  export default {
    name: 'cityindex',
    data () {
      return {
        list: {},
        hotcity: [],
        showSidebar: 0
      }
    },
    components: {
      Cityheader,
      Choosecounty,
      Position,
      Hotcity,
      Citylist,
      Sidebar
    },
    methods: {
      getListInfo () {
        axios.get('/api/city.json')
          .then(this.handleGetListSucc.bind(this))
          .catch(this.handleGetListErr.bind(this))
      },
      handleGetListSucc (res) {
        if (res && res.data) {
          res.data.hotcity && (this.hotcity = res.data.hotcity)
        } else {
          this.handleGetListErr()
        }
      },
      handleGetListErr () {
        console.log('请求返回失败')
      },
      handleLetterChange (e) {
        this.$refs.lists.setCityStart(e)
      },
      handleScrollTo (res) {
        this.scroll.scrollToElement(res.dom)
      },
      bindEvents () {
        this.scroll.on('scroll', this.handleScroll.bind(this))
      },
      handleScroll (e) {
        this.showSidebar = Math.abs(Math.round(e.y))
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scroller, {
          probeType: 3
        })
        this.bindEvents()
      })
      this.list = citylist.list
    },
    activated () {
      this.scroll && this.scroll.refresh()
    },
    created () {
      this.getListInfo()
    }
  }
</script>

<style scoped lang="stylus">
  .cityIndexMain
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    .borderBottom
      height: .02rem
      background: #000
      transform: scaleY(0.5)
    .wrapper
      overflow: hidden
      flex: 1
</style>