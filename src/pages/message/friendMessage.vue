<template>
  <div class="friendMessageMain">
    <div class="friendMessage">
      <div class="friend-item border-bottom">
        <div class="img-wrapper">
          <img src="../../../static/images/icons/userimg1.png" alt="" class="userimg">
        </div>
        <div class="user">
          <p class="userid">迷你屋</p>
          <p class="message-con">哈哈哈哈哈</p>
        </div>
        <div class="date">2天前</div>
      </div>
      <div class="friend-item border-bottom">
        <div class="img-wrapper">
          <img src="../../../static/images/icons/userimg2.png" alt="" class="userimg">
        </div>
        <div class="user">
          <p class="userid">阿狸</p>
          <p class="message-con">哈哈哈哈哈</p>
        </div>
        <div class="date">2天前</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'friendMessage'
  }
</script>

<style scoped lang="stylus">
  .friend-item
    display: flex
    height: 1.28rem
    &::before
      border-color: #cdcdcd
    .img-wrapper
      width: .64rem
      height: .64rem
      margin-top: .32rem
      .userimg
        width: 100%
    .user
      line-height: .44rem
      color: #333
      flex: 1
      margin-top: .24rem
      margin-left: .32rem
      .userid
        font-size: .3rem
      .message-con
        font-size: .24rem
    .date
      line-height: 1.28rem
      margin-right: .18rem
</style>