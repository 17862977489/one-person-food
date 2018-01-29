<template>
  <div class="foundComments">
    <div class="comments-header">
      <span class="comments">评论(4)</span>
      <span class="praise">点赞(4)</span>
    </div>
    <div class="comments-con">
      <div class="comments-item" v-for="item in comments">
        <div class="img-wrapper">
          <img :src="item.userimg" alt="" class="userimg">
        </div>
        <div class="userinfo">
          <div class="userheader"><span class="userid">{{item.userid}}</span> <span class="date">{{item.date}}</span></div>
          <div class="usercomment">{{item.comment}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foundComments',
    data () {
      return {
        comments: [{
          userimg: '/static/images/found/userimg3.png',
          userid: 'cynthia',
          date: '2016.6.29',
          comment: '去过这家店，很不错！！!'
        }, {
          userimg: '/static/images/found/userimg4.png',
          userid: '总是在发疯',
          date: '2016.6.15',
          comment: '好好吃的样子。。。。'
        }, {
          userimg: '/static/images/found/userimg5.png',
          userid: 'Elizabeth',
          date: '2016.6.10',
          comment: '看着都流口水。。。。'
        }, {
          userimg: '/static/images/found/userimg6.png',
          userid: '小小',
          date: '2016.6.5',
          comment: '去过这家店，很不错！！!'
        }]
      }
    }
  }
</script>

<style scoped lang="stylus">
  .foundComments
    margin: 0 .2rem
    .comments-header
      font-size: .26rem
      .comments
        color: #333
        margin-right: .42rem
      .praise
        color: #999
    .comments-con
      padding-top: .2rem
      .comments-item
        display: flex
        margin-bottom: .3rem
        .img-wrapper
          width: 1rem
          height: 1rem
          .userimg
            width: 100%
            height: 100%
        .userinfo
          flex: 1
          margin-left: .3rem
          font-size: .3rem
          line-height: .44rem
          margin-top: .1rem
          .userheader
            width: 100%
            display: flex
            justify-content:space-between
            .userid
              color: #666
            .date
              color: #666
          .usercomment
            color: #333
</style>