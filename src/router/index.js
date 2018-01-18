import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import Login from 'pages/login/login'
import Register from 'pages/register/register'
import City from 'pages/city/index'
import Found from 'pages/found/index'
import FoundDetail from 'pages/foundDetail/index'
import Message from 'pages/message/index'
import My from 'pages/my/index'
import Publish from 'pages/publish/index'
import myPublish from 'pages/publish/publish'
import Editor from 'pages/publish/editor'
import EditInfo from 'pages/editInfo/index'
import MyFriends from 'pages/myFriends/index'
import MyFootmark from 'pages/myFootmark/index'
import MyDrafts from 'pages/myDrafts/index'
import MySetting from 'pages/mySetting/index'
import Search from 'pages/search/search'
import Start from 'pages/start/start'
import Detail from 'pages/detail/index'
import ClassifyList from 'pages/classifyList/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'start',
    component: Start
  }, {
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: '/my/login',
    name: 'login',
    component: Login
  }, {
    path: '/my/login/register',
    name: 'register',
    component: Register
  }, {
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
    path: '/my/mypublish',
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
    path: '/publish/editor',
    name: 'editor',
    component: Editor
  }, {
    path: '/my/editInfo',
    name: 'editInfo',
    component: EditInfo
  }, {
    path: '/my/myFootmark',
    name: 'myFootmark',
    component: MyFootmark
  }, {
    path: '/my/myFriends',
    name: 'myFriends',
    component: MyFriends
  }, {
    path: '/my/myDrafts',
    name: 'myDrafts',
    component: MyDrafts
  }, {
    path: '/my/mySetting',
    name: 'mySetting',
    component: MySetting
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }, {
    path: '/index/classifyList:id',
    name: 'classifyList',
    component: ClassifyList
  }, {
    path: '/found/detail/:id/:userimg/:sign/:desc/:foodimg',
    name: 'foundDetail',
    component: FoundDetail
  }]
})
