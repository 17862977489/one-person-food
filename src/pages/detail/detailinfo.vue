<template>
  <div class="detailinfo">
    <div class="img-wrapper">
      <img :src="detail.imgUrl" alt="" class="detail-img">
    </div>
    <div class="merchants border-bottom">
      <div class="name ellipsis">{{detail.name}}</div>
      <div class="address">
        <i class="address-icon"></i>
        <span class="detail-address ellipsis">{{detail.address}}</span>
        <i class="tel-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailinfo',
    props: {
      detail: Object
    }
  }
</script>

<style scoped lang="stylus">
  .img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 73.6%
    .detail-img
      width: 100%
  .merchants
    color: #333
    &::before
      border-color: #333
    .name
      font-size: .36rem
      font-weight: 900
      margin-left: .2rem
      line-height: .74rem
    .address
      height: .4rem
      margin-left: .2rem
      padding-bottom: .5rem
      display: flex
      .address-icon
        display: inline-block
        width: .32rem
        height: .42rem
        background: url('../../../static/images/detail/address.png')
        background-size:100% 100%
        margin-left: 0.06rem
      .detail-address
        flex: 1
        font-size: .33rem
        color: #333
        line-height: .42rem
        margin-left: .28rem
      .tel-icon
        display: inline-block
        width: .38rem
        height: .38rem
        background: url('../../../static/images/detail/tel.png')
        background-size:100% 100%
        margin-right: .7rem
</style>