<template>
  <div class="hotsearch">
    <h2 class="title">热门搜索</h2>
    <div class="search-con" ref="search">
      <div class="search-item border" v-for="item in arr" @click="handleClick(item)">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hotsearch',
    data () {
      return {
        arr: ['北京', '西餐', '面条', '火锅', '周记', '麻辣烫', '马记', '胖子', '烤肉', '烤鱼']
      }
    },
    methods: {
      handleClick (item) {
        this.$emit('hotsearch', item)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .hotsearch
    margin: .6rem 0 .1rem
    .title
      color: #333
      font-size: .36rem
      margin-bottom: .5rem
    .search-con
      .search-item
        display: inline-block
        padding: 0 .36rem
        text-align: center
        line-height: .52rem
        margin-right: .2rem
        margin-bottom: .38rem
        &::before
          border-color: #adadad
</style>