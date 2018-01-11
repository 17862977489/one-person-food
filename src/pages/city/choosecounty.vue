<template>
  <div>
    <div class="chooseCountyHeader">
      <div class="current ellipsis">你正在看: {{city}}</div>
      <div class="choose" @click="handlechooseClick">选择县区<i class="down iconfont" ref="icon">&#xe73a;</i></div>
    </div>
    <div class="chooseCounty" v-show="showCounty">
      <div class="county border">全城</div>
      <div class="county border">朝阳区</div>
      <div class="county border">东城区</div>
      <div class="county border">海淀区</div>
      <div class="county border">西城区</div>
      <div class="county border">丰台区</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'choosecounty',
    computed: {
      ...mapState(['city'])
    },
    data () {
      return {
        showCounty: false
      }
    },
    methods: {
      handlechooseClick () {
        if (!this.showCounty) {
          this.$refs.icon.innerHTML = '&#xe600;'
        } else {
          this.$refs.icon.innerHTML = '&#xe73a;'
        }
        this.showCounty = !this.showCounty
      }
    }
  }
</script>

<style scoped lang="stylus">
  .chooseCountyHeader
    line-height: .9rem
    margin: 0 .2rem
    display: flex
    justify-content: space-between
    .current
      line-height: .9rem
      font-size: .32rem
      color: #333
    .choose
      line-height: .9rem
      font-size: .26rem
      color: #666
      margin-right: .5rem
  .chooseCounty
    margin: 0 .2rem
    .county
      display: inline-block
      width: 1.76rem
      line-height: .7rem
      text-align: center
      margin-right: .4rem
      margin-bottom: .42rem
      &::before
        border-color: #666
        border-radius: .2rem
</style>