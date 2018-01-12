<template>
  <div class="search">
    <searchheader></searchheader>
    <div class="havesearch">
      <hotsearch></hotsearch>
      <historysearch></historysearch>
    </div>
  </div>
</template>

<script>
  import Searchheader from './header'
  import Hotsearch from './hotsearch'
  import Historysearch from './historysearch'
  export default {
    name: 'searchIndex',
    components: {
      Searchheader,
      Hotsearch,
      Historysearch
    }
  }
</script>

<style scoped lang="stylus">
  .havesearch
    margin: 0 .72rem
    margin-right: 0
</style>