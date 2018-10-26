// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 使用axios库，进行ajax调用
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    // alert('需要登录')
    next()
  } else {
    next()
  }
})
Vue.component('remote-script', {
  render: function (createElement) {
    // var self = this
    return createElement('script', {
      attrs: {
        type: 'text/javascript',
        src: this.src
      }
    })
  },

  props: {
    src: {
      type: String,
      required: true
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
