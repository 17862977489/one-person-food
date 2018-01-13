import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import Login from 'pages/login/login'
import Register from 'pages/register/register'
import City from 'pages/city/index'
import Found from 'pages/found/index'
import Message from 'pages/message/index'
import My from 'pages/my/index'
import Publish from 'pages/publish/index'
import myPublish from 'pages/publish/publish'
import Editor from 'pages/publish/editor'
import EditInfo from 'pages/editInfo/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/found',
      name: 'found',
      component: Found
    }, {
      path: '/publish',
      name: 'publish',
      component: Publish
    }, {
      path: '/mypublish',
      name: 'myPublish',
      component: myPublish
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
    }, {
      path: '/editInfo',
      name: 'editInfo',
      component: EditInfo
    }]
})
