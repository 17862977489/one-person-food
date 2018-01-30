<template>
  <div>
    <div class="foundheader border-bottom">
      <router-link to="/search" tag="div" class="search"><i class="search-icon iconfont">&#xe679;</i></router-link>
      <div class="title">
        <ul class="title-con" ref="title">
          <li class="title-item ellipsis" name="nearby" @click="handleClick">附近<i class="active"></i></li>
          <li class="title-item ellipsis" name="focus" @click="handleClick">关注<i class=""></i></li>
        </ul>
      </div>
      <div class="omit"><i class="omit-icon iconfont">&#xe609;</i></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foundheader',
    methods: {
      handleClick (e) {
        if (window.sessionStorage.sessionId) {
          this.$emit('tab', e.target.getAttribute('name'))
          const li = this.$refs.title.children
          for (var i = 0; i < li.length; i++) {
            li[i].children[0].removeAttribute('class')
          }
          e.target.children[0].setAttribute('class', 'active')
        } else {
          var con = confirm('登录后才能发布哟~')
          if (con === true) {
            this.$router.push({path: '/my/login'})
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .foundheader
    height: .88rem
    display: flex
    color: #333
    background: #fff
    &::before
      border-color:#cdcdcd
    .search
      margin-left: .2rem
      .search-icon
        font-size: .37rem!important
        line-height: .88rem
        color:#333
    .title
      flex: 1
      .title-con
        text-align: center
        .title-item
          color: #333
          display: inline-block
          line-height: .88rem
          padding: 0 .16rem 0
          margin:0 .25rem 0
          font-size: .36rem
          position: relative
          .active
            position: absolute
            bottom:0
            right:.04rem
            display: block
            width: 1rem
            height: 0.04rem
            background: #333
    .omit
      margin-right: .2rem
      .omit-icon
        line-height: .88rem
        font-size: .5rem!important
        color: #333
</style>