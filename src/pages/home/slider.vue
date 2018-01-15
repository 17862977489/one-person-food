<template>
  <swiper class="banner" :options="swiperOption">
    <swiper-slide v-for="item of slider" :key="item.Id" @click="handleBannerClick(item.Id)">
      <div class="banner-img-wrapper">
        <img  class="banner-img" :src="item.bannerImg"/>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'slider',
    props: {
      slider: Array
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          autoplay: 3000,
          loopedSlides: 20,
          pagination: '.swiper-pagination'
        }
      }
    },
    methods: {
      handleBannerClick (id) {
        this.$router.push({path: '/detail/' + id})
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner >>> .swiper-pagination-bullet
    background: #ccc
    opacity: 1
  .banner >>> .swiper-pagination-bullet-active
    background: #fff
  .banner >>> .swiper-pagination-bullets
    bottom: 0.4rem
  .banner
    background: #fff
    overflow: hidden
    height: 0
    padding-bottom: 53.33%
    padding-top: .2rem
    .banner-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 53.33%
      .banner-img
        width: 100%
</style>