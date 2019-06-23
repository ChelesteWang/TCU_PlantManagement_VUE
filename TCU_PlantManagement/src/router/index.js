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
// plant
import ke from '@/components/plant/ke'
import shu from '@/components/plant/shu'
import zhong from '@/components/plant/zhong'
import plant from '@/components/plant/plant'
// document
import docCreate from '@/components/document/docCreate'
import docSupport from '@/components/document/docSupport'
import docList from '@/components/document/docList'
import plantmap from '@/components/document/plantmap'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/init', name: 'init', component: init },
    { path: '/login/:id', name: 'login', component: login },
    { path: '/', name: 'login', component: login,  meta: { needLogin: true } },
    { path: '/register', name: 'register', component: register },
    { path: '/recoverypw/', name: 'recoverypw', component: recoverypw },
    { path:'/resetpwd/:id', name:'resetpwd', component:resetpwd },
    { path: '/welcome', name: 'welcome', component: welcome },
    { path: '/ceshi', name: 'ceshi', component: ceshi },
    { path: '/menu', name: 'menu', component: menu,
      children:[
        { path:'', redirect:'index' },
        { path:'index', component:index },
        { path:'ke', component:ke },
        { path:'shu', component:shu },
        { path:'zhong', component:zhong },
        { path:'plant', component:plant },
        { path:'doccreate', component:docCreate },
        { path:'docsupport', component:docSupport },
        { path:'doclist', component:docList },
        { path:'plantmap', component:plantmap }
      ]
    }
  ]
})
