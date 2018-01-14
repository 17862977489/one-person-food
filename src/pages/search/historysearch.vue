<template>
  <div class="historysearch">
    <div class="title">
      <h2>历史搜索</h2>
      <div class="clear" @click="handleClearClick">清除</div>
    </div>
    <div class="search-con" ref="search">
      <div class="search-item border" v-for="item in result"  @click="handleClick(item)">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'historysearch',
    data () {
      return {
        arr: [],
        result: []
      }
    },
    methods: {
      handleClearClick () {
        this.arr = []
        this.result = []
        window.localStorage.clear()
      },
      AddHistoryRecord (item) {
        this.arr.push(item)
        this.arr = Array.from(new Set(this.arr))
        localStorage.setItem('history', JSON.stringify(this.arr))
        this.result = JSON.parse(localStorage.history)
      },
      getHistorySearch () {
        if (localStorage.history) {
          this.result = JSON.parse(localStorage.history)
        }
      },
      handleClick (historyitem) {
        this.$emit('historysearch', historyitem)
      }
    },
    created () {
      this.getHistorySearch()
    }
  }
</script>

<style scoped lang="stylus">
  .historysearch
    .title
      color: #333
      font-size: .36rem
      margin-bottom: .5rem
      display: flex
      height: .32rem
      justify-content: space-between
      .clear
        font-size: .32rem
        color: #666
        line-height: .42rem
        margin-right: .72rem
    .search-con
      display: flex
      justify-content:flex-start
      flex-wrap: wrap
      .search-item
        padding: 0 0.36rem
        height: .52rem
        text-align: center
        line-height: .52rem
        margin-bottom: .38rem
        margin-right: .26rem
        &::before
          border-color: #adadad
</style>