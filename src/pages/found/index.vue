<template>
  <div class="foundIndex">
    <foundheader></foundheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <nearby :found="found"></nearby>
        <focus></focus>
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
        found: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/found.json').then(this.handleGetDataSucc.bind(this))
         .catch(this.handleDataError.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.ret && res.data) {
          res.data.user && (this.found = res.data.user)
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