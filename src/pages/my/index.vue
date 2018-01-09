<template>
  <div class="main">
    <myheader></myheader>
    <div class="scroll-container" ref="scroller">
      <div class="content">
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
  .main
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
