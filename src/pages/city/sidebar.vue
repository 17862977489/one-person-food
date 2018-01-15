<template>
  <div class="sidebar">
    <div class="sidebar-list" ref="list">
      <div class="sidebar-item"
           v-for="(item, index) in alphabet"
           :key="item"
           @click="handleTouchStart(index)"
           ref="side">
        {{item}}
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-sidebar',
    props: {
      list: Object,
      showSidebar: false
    },
    data () {
      return {
        len: []
      }
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
      handleTouchStart (index) {
        this.$emit('changeLetter', index)
        this.len = this.$refs.side.length
        for (let i = 0; i < this.len; i++) {
          this.$refs.side[i].style.background = '#fff'
          this.$refs.side[i].style.color = '#333'
        }
        this.$refs.side[index].style.background = '#333'
        this.$refs.side[index].style.color = '#fff'
      }
    }
  }
</script>

<style scoped lang="stylus">
  .sidebar
    position: absolute
    right: 0
    top: .88rem
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
        border-radius: 50%
</style>
