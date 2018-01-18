<template>
  <div class="foundIndex">
    <foundheader @tab="handleSwitch"></foundheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <nearby :found="found" v-show="show"></nearby>
        <focus :focus="focus" v-show="!show"></focus>
      </div>
    </div>
    <tabbar src='foundClick.png' active="found"></tabbar>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import Foundheader from './header'
  import Nearby from './nearby'
  import Focus from './focus'
  import Tabbar from '../../components/tabbar'
  export default {
    name: 'found',
    components: {
      Tabbar,
      Foundheader,
      Nearby,
      Focus
    },
    data () {
      return {
        found: [],
        focus: [],
        show: true
      }
    },
    methods: {
      getIndexData () {
        axios.get('/static/found.json').then(this.handleGetDataSucc.bind(this))
         .catch(this.handleDataError.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.ret && res.data) {
          res.data.nearby && (this.found = res.data.nearby)
          res.data.focus && (this.focus = res.data.focus)
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      },
      handleSwitch (target) {
        if (target === 'focus') {
          this.show = false
        } else {
          this.show = true
        }
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
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">
  .foundIndex
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