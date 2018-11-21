import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import recoverypw from '@/components/recoverypw'
import menu from '@/components/menu'
import resetpwd from '@/components/resetPwd'
//test
import init from '@/components/test/init'
import welcome from '@/components/test/welcome'
import ceshi from '@/components/test/ceshi'
// manage
import index from '@/components/mange/index'
import map from '@/components/mange/map'
// document
import docCreate from '@/components/document/docCreate'
import docSupport from '@/components/document/docSupport'
import docList from '@/components/document/docList'

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
      path: '/recoverypw/',
      name: 'recoverypw',
      component: recoverypw
    },
    {
      path:'/resetpwd/:id',
      name:'resetpwd',
      component:resetpwd
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
      component: menu,
      children:[
        {
          path:'index',
          component:index
        },
        // {
        //   path:'init',
        //   component:init
        // },
        // {
        //   path:'map',
        //   component:map
        // },
        {
          path:'doccreate',
          component:docCreate
        },
        {
          path:'docsupport',
          component:docSupport
        },
        {
          path:'doclist',
          component:docList
        }
      ]
    }
  ]
})
