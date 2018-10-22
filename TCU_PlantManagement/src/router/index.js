import Vue from 'vue'
import Router from 'vue-router'
import init from '@/components/init'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/init',
      name: 'init',
      component: init
    },
    {
      path: '/login/:id',
      name: 'login',
      component: login
    }
  ]
})
