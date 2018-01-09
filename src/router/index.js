import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import Found from 'pages/found/index'
import Message from 'pages/message/index'
import My from 'pages/my/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/found',
    name: 'found',
    component: Found
  }, {
    path: '/message',
    name: 'message',
    component: Message
  }, {
    path: '/my',
    name: 'my',
    component: My
  }]
})
