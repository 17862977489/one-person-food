<template>
  <div class="cityHeaderMain">
    <div class="back iconfont" @click="handleBackClick">&#xe60f;</div>  
    <div class="search-wrapper">
      <i class="search-icon iconfont">&#xe679;</i>
      <input type="text" placeholder="请输入城市/拼音" class="search" @input="handleInputChange">
    </div>
    <div class="search-list" v-show="showList" ref="list">
      <ul>
        <li class="search-item border-bottom" v-show="!filterResult.length">
          无匹配城市
        </li>
        <li v-for="item in filterResult" class="search-item border-bottom">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'cityheader',
    props: {
      list: Object
    },
    data () {
      return {
        showList: false,
        filterResult: []
      }
    },
    computed: {
      result () {
        const result = []
        for (let i in this.list) {
          this.list[i].forEach((value) => {
            result.push({
              name: value.name,
              spell: value.spell
            })
          })
        }
        return result
      }
    },
    watch: {
      filterResult () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      ...mapMutations(['changeCity']),
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/index')
      },
      handleInputChange (e) {
        const value = e.target.value.toLowerCase()
        if (value) {
          this.showList = true
          this.filterResult = this.result.filter((item) => {
            if (item.spell.indexOf(value) > -1 || item.name.indexOf(value) > -1) {
              return true
            }
          })
        } else {
          this.showList = false
        }
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.list, {
        click: true
      })
    }
  }
</script>

<style scoped lang="stylus">
  .cityHeaderMain
    height: .74rem
    padding-top: .14rem
    .back
      position: absolute
      left: .2rem
      font-size: .38rem
      line-height: .62rem
      color: #453b39
    .search-wrapper
      margin: 0 auto
      width: 5rem
      height: .6rem
      position: relative
      .search-icon
        position: absolute
        left: .2rem
        line-height: .62rem
        font-size: .4rem
      .search
        width: 4.22rem
        line-height: .6rem
        font-size: .26rem
        border: 0.02rem solid #929292
        border-radius: 0.04rem
        padding-left: 0.78rem
    .search-list
      z-index:2
      position: absolute
      top: .88rem
      left: 0
      right: 0
      bottom: 0
      background: #fff
      overflow: hidden
      .search-item
        padding-left: .2rem
        line-height: .6rem
        background: #fff
        color: #333 
</style>