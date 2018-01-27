<template>
  <div class="citylist" ref="listtop">
    <div class="area" v-for="(item, key) in list"
         :ref="key"
         :key="key">
      <div class="title">{{key}}</div>
      <div class="content">
        <div class="content-item border-bottom ellipsis"
             v-for="innerItem in item"
             @click="handleCityClick(innerItem.name)">
           {{innerItem.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'citylist',
    props: {
      list: Object
    },
    watch: {
      list () {

      }
    },
    methods: {
      ...mapMutations(['changeCity']),
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/index')
      },
      setCityStart (e) {
        const area = e
        this.$emit('scrollTo', {
          dom: this.$refs[area][0]
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .citylist
    margin: 0 .4rem 0 .2rem
    .title
      line-height: .4rem
      font-size: .32rem
    .content
      .content-item
        line-height: .94rem
        &::before
          border-color: #cdcdcd
</style>