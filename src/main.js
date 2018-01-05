import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import VueSwiper from 'vue-awesome-swiper'
import 'style/base/reset.css'
import 'style/base/border.css'
import 'style/base/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Fastclick.attach(document.body)
Vue.use(VueSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
