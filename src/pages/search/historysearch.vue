<template>
  <div class="historysearch">
    <h2 class="title">历史搜索</h2>
    <div class="search-con" ref="search">
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
      <div class="search-item border">北京</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'historysearch'
  }
</script>

<style scoped lang="stylus">
  .historysearch
    .title
      color: #333
      font-size: .36rem
      margin-bottom: .5rem
    .search-con
      display: flex
      justify-content:flex-start
      flex-wrap: wrap
      .search-item
        width: 1.3rem
        height: .52rem
        text-align: center
        line-height: .52rem
        margin-bottom: .38rem
        margin-right: .26rem
        &::before
          border-color: #adadad
</style>