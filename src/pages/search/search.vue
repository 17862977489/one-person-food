<template>
  <div class="searchMain">
    <searchheader ref="searchInput" @historysearch="addHistorySearch"></searchheader>
    <div class="havesearch">
      <hotsearch @hotsearch="handleHotSearch"></hotsearch>
      <historysearch ref="addhistory" @historysearch="handleHistorySearch"></historysearch>
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
    },
    methods: {
      handleHotSearch (Hotitem) {
        this.$refs.searchInput.handleHotSearch(Hotitem)
      },
      addHistorySearch (item) {
        this.$refs.addhistory.AddHistoryRecord(item)
      },
      handleHistorySearch (Historyitem) {
        this.$refs.searchInput.handleHotSearch(Historyitem)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .havesearch
    margin: 0 .72rem
    margin-right: 0
</style>