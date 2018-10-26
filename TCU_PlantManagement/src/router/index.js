import Vue from 'vue'
import Router from 'vue-router'
import init from '@/components/init'
import login from '@/components/login'
import register from '@/components/register'
import recoverypw from '@/components/recoverypw'
import welcome from '@/components/welcome'
import ceshi from '@/components/ceshi'
import menu from '@/components/menu'

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
    },
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/recoverypw',
      name: 'recoverypw',
      component: recoverypw
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    }
  ]
})
