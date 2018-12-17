import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import InternalReference from './views/InternalReference.vue'
import Ugc from './views/UGC.vue'
import User from './views/User.vue'

//内参详情
import InternalInfo from './views/InternalInfo.vue'
//专家详情
import UgcInfo from './views/UgcInfo.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
      path: '',
      redirect: '/home/index',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: "index",
        name: 'index',
        component: Index,
      }, {
        path: "internal-reference",
        name: 'internal-reference',
        component: InternalReference,
      }, {
        path: "ugc",
        name: 'ugc',
        component: Ugc,
      }, {
        path: "user",
        name: 'user',
        component: User,
      }]
    }, {
      path: "/internal-info",
      name: 'internal-info',
      component: InternalInfo,
    }, {
      path: "/ugc-info",
      name: 'ugc-info',
      component: UgcInfo,
    }, {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})