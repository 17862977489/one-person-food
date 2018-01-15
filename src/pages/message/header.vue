<template>
  <div class="messageHeader border-bottom">
    <img class="search-img" src="/static/images/icons/search.png" alt="">
    <div class="message">消息</div>
    <router-link to="/my/myFriends">
      <img class="my-img" src="/static/images/icons/myNotClick.png" alt="">
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'messageHeader'
  }
</script>

<style scoped lang="stylus">
  .messageHeader
    line-height: .88rem
    &::before
      border-color: #333
    .search-img
      position: absolute
      top: .24rem
      left: .2rem
      width: .38rem
      height: .38rem
    .message
      text-align: center
      color: #333
      font-size: .36rem
    .my-img
      position: absolute
      top: .24rem
      right: .2rem
      width: .38rem
      height: .38rem
</style>