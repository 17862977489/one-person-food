<template>
  <div class="position">
    <div class="position-title">定位/最近访问</div>
    <div class="position-show">
      <div class="place border ellipsis" 
           @click="handleCityClick(city)">{{city}}</div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'position',
    computed: {
      ...mapState({
        city (state) {
          return state.city || '北京'
        }
      })
    },
    methods: {
      ...mapMutations(['changeCity']),
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/index')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .position
    margin: 0 .2rem
    .position-title
      padding-top: .4rem
      font-size: .32rem
      color:#666
      margin-bottom: .4rem
    .position-show
      margin-bottom: .4rem
      .place
        display: inline-block
        width: 1.76rem
        line-height: .7rem
        text-align: center
        margin-right: .4rem
        &::before
          border-color: #666
          border-radius: .2rem
</style>