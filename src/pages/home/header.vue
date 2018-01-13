<template>
  <div class="indexheader border-bottom">
    <router-link to="/city" class="position ellipsis" tag="div">{{city}}</router-link>
    <div class="title ellipsis">一人食</div>
    <router-link to="/search" tag="div" class="search"><i class="search-icon iconfont">&#xe679;</i></router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default{
    name: 'indexheader',
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style scoped lang="stylus">
  .indexheader
    height: .88rem
    display: flex
    color: #333
    background: #fff
    position: relative
    &::before
      border-color:#cdcdcd
    .position
      position: absolute
      left: .2rem
      line-height: .88rem
      font-size: .36rem
      text-align: left
      width: 1.8rem
    .title
      width: 100%
      line-height: .88rem
      text-align: center
      font-size: .36rem
    .search
      position: absolute
      right: .2rem
      .search-icon
        font-size: .37rem!important
        line-height: .88rem
</style>