<template>
  <div class="index">
    <indexheader></indexheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <slider :slider="slider"></slider>
        <classify :foodtype="foodtype"></classify>
        <allloveto :allloveto="allloveto"></allloveto>
        <guess :guessyoulike="guessyoulike"></guess>
        <alldo :alldo="alldo"></alldo>
      </div>
    </div>
    <tabbar src='indexClick.png' active="index"></tabbar>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'
  import Indexheader from './header'
  import Slider from './slider'
  import Classify from './classify'
  import Allloveto from './allLoveTo'
  import Guess from './guesslike'
  import Alldo from './alldo'
  import Tabbar from '../../components/tabbar'

  export default {
    name: 'index',
    components: {
      Indexheader,
      Slider,
      Classify,
      Allloveto,
      Guess,
      Alldo,
      Tabbar
    },
    data () {
      return {
        slider: [],
        foodtype: [],
        allloveto: [],
        guessyoulike: [],
        alldo: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    watch: {
      city () {
        this.getIndexData()
      }
    },
    methods: {
      ...mapMutations(['changeCity']),
      getIndexData () {
        axios.get('/api/index.json?city=' + this.city).then(this.handleGetDataSucc.bind(this))
         .catch(this.handleDataError.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          res.data.Slider && (this.slider = res.data.Slider)
          res.data.foodType && (this.foodtype = res.data.foodType)
          res.data.allLoveTo && (this.allloveto = res.data.allLoveTo)
          res.data.guessYouLike && (this.guessyoulike = res.data.guessYouLike)
          res.data.allDo && (this.alldo = res.data.allDo)
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
        this.scroll = new BScroll(this.$refs.scroller, {
          click: true
        })
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
  .index
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