<template>
  <swiper class="hot-img-shows" :class="{'hot-img-show-all':isShowAllImg}" :options="hotImgOption"  ref="mySwiper">
    <swiper-slide v-for="(item, index) in imgList" :key="index" class="hot-img-shows-li"> 
      <div class="hot-img-con"  @click= "handelTitleImgRes">
        <img :src="item" alt="" class="hot-img-shows-img">
      </div> 
    </swiper-slide>
    <div class="hot-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    props: ['imgList', 'isShowAllImg', 'initIndex'],
    data () {
      return {
        hotImgOption: {
          direction: 'horizontal',
          pagination: '.hot-pagination',
          paginationType: 'fraction'
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      handelTitleImgRes () {
        this.$emit('handelTitleImgSucc')
      }
    },
    updated () {
      this.swiper.slideTo(this.initIndex, 0, false)
    }
  }
</script>

<style scoped>
  .hot-img-shows {
   display:none;
   position:fixed;
   width:100%;
   height:100%;
   top:0;
   left:0;
   z-index:101;
   background:#000;
 }
 .hot-img-show-all{
   display:block;
 }
 .hot-pagination {
   position:absolute;
   left:0;
   bottom:1rem;
   color:#fff;
   text-align:center;
 }
 .hot-img-shows-li {
   width:100%;
   line-height:4rem;
   left:0;
   top:2rem;
 }
 .hot-img-shows-img {
   width:100%;
 }
 .hot-img-con {
   width:100%;
   height: 8rem;
   line-height:8rem;
   overflow: hidden
 }
 .hot-img-show-con {
   height:100%;
 }
</style>