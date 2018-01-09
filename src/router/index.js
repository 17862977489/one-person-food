import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import Found from 'pages/found/index'
import Message from 'pages/message/index'
import My from 'pages/my/index'
import Publish from 'pages/publish/index'
import Editor from 'pages/publish/editor'

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
    path: '/publish',
    name: 'publish',
    component: Publish
  }, {
    path: '/message',
    name: 'message',
    component: Message
  }, {
    path: '/my',
    name: 'my',
    component: My
  }, {
    path: '/editor',
    name: 'editor',
    component: Editor
  }]
})
