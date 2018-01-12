<template>
  <div class="hotsearch">
    <h2 class="title">热门搜索</h2>
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
    name: 'hotsearch'
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
        width: 1.3rem
        height: .52rem
        text-align: center
        line-height: .52rem
        margin-right: .2rem
        margin-bottom: .38rem
        &::before
          border-color: #adadad
</style>