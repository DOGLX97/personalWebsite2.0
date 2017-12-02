import Vue from 'vue'
import Router from 'vue-router'
import Introduce from '../components/introduce/Introduce'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/introduce'
    }, {
      path: '/introduce',
      component: Introduce
    }
  ]
})
