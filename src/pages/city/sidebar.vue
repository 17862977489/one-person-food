<template>
  <div class="sidebar">
    <div class="sidebar-list" ref="list">
      <div class="sidebar-item"
           v-for="(item, index) in alphabet"
           :key="item"
           @touchstart="handleTouchStart(item)"
           @touchmove="handleTouchMove">
        {{item}}
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-sidebar',
    props: {
      list: Object
    },
    computed: {
      alphabet () {
        const arr = []
        for (let i in this.list) {
          arr.push(i)
        }
        return arr
      },
      areaTop () {
        return this.$refs.list.offsetTop - this.$refs.list.offsetHeight / 2 + 88
      }
    },
    methods: {
      handleTouchStart (item) {
        this.$emit('changeLetter', item)
      },
      handleTouchMove (e) {
        let index = (Math.floor((e.touches[0].clientY - this.areaTop) / 20))
        index = index < 0 ? 0 : index
        index = (index >= this.alphabet.length) ? (this.alphabet.length - 1) : index
        this.$emit('changeLetter', this.alphabet[index])
      }
    }
  }
</script>

<style scoped lang="stylus">
  .sidebar
    position: absolute
    right: 0
    top: 1.62rem
    bottom: 0
    width: .4rem
    .sidebar-list
      height: auto
      width: 100%
      position: absolute
      top: 50%
      transform: translateY(-50%)
      .sidebar-item
        width: 100%
        text-align: center
        line-height: .36rem
        color: #666
</style>
