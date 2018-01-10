<template>
  <div class="citylist">
    <div class="area" v-for="(item, key) in list"
         :ref="key"
         :key="key">
      <div class="title">{{key}}</div>
      <div class="content">
        <div class="content-item border-bottom"
             v-for="innerItem in item">
           {{innerItem.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'citylist',
    props: {
      list: Object
    },
    watch: {
      list () {

      }
    }
  }
</script>

<style scoped lang="stylus">
  .citylist
    margin: 0 .2rem
    .title
      line-height: .4rem
      font-size: .32rem
    .content
      .content-item
        line-height: .94rem
        &::before
          border-color: #cdcdcd
</style>