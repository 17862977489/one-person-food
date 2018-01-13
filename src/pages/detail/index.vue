<template>
  <div class="detail">
    <detailheader></detailheader>
    <detailinfo :detail="detail"></detailinfo>
    <fullofpraise :praise="praise"></fullofpraise>
  </div>
</template>

<script>
  import axios from 'axios'
  import Detailinfo from './detailinfo'
  import Detailheader from './detailheader'
  import Fullofpraise from './fullofpraise'
  export default {
    name: 'detail',
    data () {
      return {
        detail: {},
        praise: []
      }
    },
    components: {
      Detailheader,
      Detailinfo,
      Fullofpraise
    },
    methods: {
      getIndexData () {
        axios.get('/api/detail.json').then(this.handleGetDataSucc.bind(this)).catch(this.handleDataError.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.ret && res.data) {
          res.data.detail && (this.detail = res.data.detail)
          res.data.praise && (this.praise = res.data.praise)
        } else {
          this.handleDataError()
        }
      },
      handleDataError () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">
  .detail
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    display:flex
    flex-direction:column
    z-index: 1
</style>