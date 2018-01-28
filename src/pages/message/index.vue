<template>
  <div class="messageIndex">
    <messageheader></messageheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <systeminforms></systeminforms>
        <friendmessage v-show="showfriend"></friendmessage>
      </div>
    </div>
    <tabbar src='messageClick.png' active="message"></tabbar>
  </div>
</template>

<script>
  import Messageheader from './header'
  import Systeminforms from './systemInforms'
  import Friendmessage from './friendMessage'
  import Tabbar from '../../components/tabbar'
  export default {
    name: 'found',
    data () {
      return {
        showfriend: false
      }
    },
    components: {
      Tabbar,
      Messageheader,
      Systeminforms,
      Friendmessage
    },
    created () {
      if (window.sessionStorage.sessionId) {
        this.showfriend = true
      } else {
        this.showfriend = false
      }
    }
  }
</script>


<style scoped lang="stylus">
  .messageIndex
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    display:flex
    flex-direction:column
    .scroll-container
      margin: 0 .2rem
      overflow: hidden
      flex:1
</style>
