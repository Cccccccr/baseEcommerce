import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/components/index.vue')
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: () => import('@/components/goodsDetail')
    },
    {
      path: '/personalInfo',
      name: 'PersonalInfo',
      component: () => import('@/components/personalInfo')
    }
  ]
})
