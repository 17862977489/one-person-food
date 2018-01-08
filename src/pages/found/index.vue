<template>
  <div class="main">
    <foundheader></foundheader>
    <tabbar src='messageClick.png' active="message"></tabbar>
  </div>
</template>

<script>
  import Tabbar from '../../components/tabbar'
  export default {
    name: 'found',
    components: {
      Tabbar
    }
  }
</script>

<style scoped lang="stylus">

</style>