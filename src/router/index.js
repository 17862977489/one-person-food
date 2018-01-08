import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home/index'
import Found from 'pages/found/index'

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
  }]
})
