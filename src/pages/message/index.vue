<template>
  <div class="messageIndex">
    <messageheader></messageheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
        <systeminforms></systeminforms>
      </div>
    </div>
    <tabbar src='messageClick.png' active="message"></tabbar>
  </div>
</template>

<script>
  import Messageheader from './header'
  import Systeminforms from './systemInforms'
  import Tabbar from '../../components/tabbar'
  export default {
    name: 'found',
    components: {
      Tabbar,
      Messageheader,
      Systeminforms
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
      overflow: hidden
      flex:1
</style>
