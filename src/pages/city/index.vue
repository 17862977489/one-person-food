<template>
  <div class="cityIndexMain">
    <cityheader></cityheader>
    <div ref="scroller" class="wrapper">
      <div class="list">
        <choosecounty></choosecounty>
        <position></position>
        <hotcity :hotcity="hotcity"></hotcity>
        <citylist :list="list"></citylist>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import Cityheader from './header'
  import Choosecounty from './choosecounty'
  import Position from './position'
  import Hotcity from './hotcity'
  import Citylist from './list'
  export default {
    name: 'cityindex',
    data () {
      return {
        list: {},
        hotcity: []
      }
    },
    components: {
      Cityheader,
      Choosecounty,
      Position,
      Hotcity,
      Citylist
    },
    methods: {
      getListInfo () {
        axios.get('/api/city.json')
          .then(this.handleGetListSucc.bind(this))
          .catch(this.handleGetListErr.bind(this))
      },
      handleGetListSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          res.data.list && (this.list = res.data.list)
          res.data.hotcity && (this.hotcity = res.data.hotcity)
        } else {
          this.handleGetListErr()
        }
      },
      handleGetListErr () {
        console.log('请求返回失败')
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.scroller)
      })
    },
    updated () {
      this.scroll.refresh()
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
    .wrapper
      overflow: hidden
      flex: 1
</style>