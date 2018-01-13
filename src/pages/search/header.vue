<template>
  <div class="searchHeaderMain">
    <div class="searchHeader border-bottom">
      <div class="back iconfont" @click="handleBackClick">&#xe60f;</div>  
      <div class="search-wrapper">
        <i class="search-icon iconfont">&#xe679;</i>
        <input type="text" 
               placeholder="请输入美食，城市等" 
               class="searchInput"
               @keyup="show($event)"
               ref="input">
      </div>
    </div>
    <div class="search-list">
      <div v-show="showList" class="searchResult">
        <ul>
          <li class="search-item">
            无匹配数据
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searchheader',
    data () {
      return {
        result: Array,
        showList: false
      }
    },
    methods: {
      handleBackClick () {
        this.$router.go(-1)
      },
      handleHotSearch (item) {
        this.$refs.input.value = item
      },
      show (ev) {
        if (ev.key === 'Enter' && this.$refs.input.value !== '') {
          this.showList = true
          this.$emit('historysearch', this.$refs.input.value)
        } else {
          this.showList = false
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .searchHeaderMain
    .searchHeader
      padding-top: .14rem
      height: .74rem
      &::before
        border-color: #cdcdcd
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
        .searchInput
          width: 4.22rem
          line-height: .6rem
          font-size: .26rem
          border: 0.02rem solid #929292
          border-radius: 0.04rem
          padding-left: 0.78rem
    .search-list
      .searchResult
        position: absolute
        top: .88rem
        bottom: 0
        left: 0.2rem
        right: 0.2rem
        background: #fff
        z-index: 6
        .search-item
          line-height: .6rem
          background: #fff
          color: #333 
</style>