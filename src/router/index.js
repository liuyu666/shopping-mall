import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GoodsCar from '@/components/GoodsCar'
import Modal from '@/components/Modal'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goodscar',
      name: 'GoodsCar',
      component: GoodsCar
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    }
  ]
})
