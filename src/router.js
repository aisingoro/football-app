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
//发单
import IssueOrder from './views/IssueOrder.vue'
import SetOrder from './views/SetOrder.vue'
import PaidInfo from './views/PaidInfo.vue'

//专家守则
import ExpertRule from './views/ExpertRule.vue'
import UploadInfo from './views/UploadInfo.vue'
import FillInfo from './views/FillInfo.vue'

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
      path: "/issue-order",
      name: 'issue-order',
      component: IssueOrder,
    }, {
      path: "/set-order",
      name: 'set-order',
      component: SetOrder,
    }, {
      path: "/paid-info",
      name: 'paid-info',
      component: PaidInfo,
    }, {
      path: "/expert-rule",
      name: 'expert-rule',
      component: ExpertRule,
    }, {
      path: "/upload-info",
      name: 'upload-info',
      component: UploadInfo,
    }, {
      path: "/fill-info",
      name: 'fill-info',
      component: FillInfo,
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