<template>
  <swiper class="banner" :options="swiperOption">
    <swiper-slide v-for="item of slider" :key="item.Id">
      <div class="banner-img-wrapper">
        <img  class="banner-img" :src="item.bannerImg"/>
      </div>
    </swiper-slide>
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
          autoplay: 4000,
          pagination: '.swiper-pagination'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    height: 4.22rem
    background: #fff
    padding-top: .2rem
    .banner-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 53.33%
      .banner-img
        width: 100%
</style>