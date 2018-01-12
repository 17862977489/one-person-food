<template>
  <div class="myIndex">
    <myheader></myheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <div class="my-title border-bottom">
          <dl class="my-publish">
            <dt class="publish-img"></dt>
            <dd class="publish-text">我的发布</dd>
          </dl>
          <dl class="my-friends">
            <dt class="friends-img"></dt>
            <dd class="friends-text">我的好友</dd>
          </dl>
          <dl class="my-footmark">
            <dt class="footmark-img"></dt>
            <dd class="footmark-text">我的足迹</dd>
          </dl>
        </div>
        <div class="drafts-box border-bottom">
          <span class="drafts-icon iconfont">&#xe678;</span>
          <span class="drafts-text">草稿箱</span>
        </div>
        <div class="setting-box border-bottom">
          <span class="setting-icon iconfont">&#xe65c;</span>
          <span class="setting-text">设置</span>
        </div>
      </div>
    </div>
    <tabbar src='myClick.png' active="my"></tabbar>
  </div>
</template>

<script>
  import Myheader from './header'
  import Tabbar from '../../components/tabbar'
  export default {
    name: 'found',
    components: {
      Tabbar,
      Myheader
    }
  }
</script>


<style scoped lang="stylus">
  .myIndex
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
      .content
        .my-title
          display: flex
          justify-content: space-around
          padding: .91rem 0 .61rem
          &::before
            border-color: #cdcdcd
          .my-publish
            width: 1.25rem
            .publish-img
              margin: auto
              width: 1.14rem
              height: 1.23rem
              background: url('../../../static/images/my/my-publish.jpg') no-repeat center center
              background-size: 100%
              margin-bottom: .23rem
          .my-friends
            width: 1.25rem
            .friends-img
              width: .77rem
              height: 1.23rem
              margin: auto
              background: url('../../../static/images/my/my-friends.jpg') no-repeat center center
              background-size: 100%
              margin-bottom: .23rem
          .my-footmark
            width: 1.25rem
            .footmark-img
              width: .9rem
              height: 1.23rem
              margin: auto
              background: url('../../../static/images/my/my-footmark.jpg') no-repeat center center
              background-size: 100%
              margin-bottom: .23rem
        .drafts-box
          width: 7.1rem
          line-height: 1.1rem
          margin: auto
          &::before
            border-color: #cdcdcd
          .drafts-icon
            font-size: .44rem
            margin: 0 .46rem 0 .4rem
          .drafts-text
            font-size: .3rem
            color: #333
        .setting-box
          width: 7.1rem
          line-height: 1.1rem
          margin: auto
          &::before
            border-color: #cdcdcd
          .setting-icon
            margin: 0 .46rem 0 .4rem
            font-size: .44rem
          .setting-text
            font-size: .3rem
            color: #333
</style>
