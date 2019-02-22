import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index.vue'
import InternalReference from './views/InternalReference.vue'
import Ugc from './views/UGC.vue'
import Information from './views/Information.vue'
import User from './views/User.vue'

//内参详情
import InternalInfo from './views/InternalInfo.vue'
//专家详情
import UgcInfo from './views/UgcInfo.vue'
import UgcList from './views/UgcList.vue'
import FormListDetail from './views/FormListDetail.vue'

//发单
import IssueOrder from './views/IssueOrder.vue'
import SetOrder from './views/SetOrder.vue'
import PaidInfo from './views/PaidInfo.vue'

//专家守则
import ExpertRule from './views/ExpertRule.vue'
import UploadInfo from './views/UploadInfo.vue'
import FillInfo from './views/FillInfo.vue'

//登录
import Login from './views/Login.vue'
//注册
import Register from './views/Register.vue'
// 提现
import withdraw from './views/withdraw.vue'
// 提现结果
import withdrawResult from './views/withdrawResult.vue'
// 我的购买
import myPurchase from './views/myPurchase.vue'
// 意见反馈
import feedBack from './views/feedBack.vue'
// 设置
import setting from './views/setting.vue'
//账户详情
import CountDetail from './views/CountDetail.vue'
//个人用户修改
import UserDetail from './views/UserDetail.vue'
//修改提现账号
import ModifyAccount from './views/ModifyAccount.vue'
//找回密码
import EditPsw from './views/EditPsw.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
      path: '',
      redirect: '/home/index?channel=2',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: "index?channel=2",
        name: 'index',
        component: Index,
      }, {
        path: "index",
        name: 'index',
        component: Index,
      }, {
        path: "internal-reference",
        name: 'internal-reference',
				component: InternalReference
      }, {
        path: "ugc",
        name: 'ugc',
        component: Ugc,
      }, {
        path: "information",
        name: 'information',
        component: Information,
      }, {
        path: "user",
        name: 'user',
        component: User
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
      path: "/login",
      name: 'login',
      component: Login,
    }, {
      path: "/ugc-list",
      name: 'ugc-list',
      component: UgcList,
    }, {
      path: "/register",
      name: 'register',
      component: Register,
    }, {
      path: "/form-list-detail",
      name: 'form-list-detail',
      component: FormListDetail,
    },
    {
      path: "/withdraw",
      name: 'withdraw',
      component: withdraw,
    },
    {
      path: "/withdrawResult",
      name: 'withdrawResult',
      component: withdrawResult,
    }, {
      path: "/modify-account",
      name: 'modify-account',
      component: ModifyAccount,
    }, {
      path: "/myPurchase",
      name: 'myPurchase',
      component: myPurchase,
    }, {
      path: "/count-detail",
      name: 'count-detail',
      component: CountDetail,
    }, {
      path: "/user-detail",
      name: 'user-detail',
      component: UserDetail,
    }, {
      path: "/feedBack",
      name: 'feedBack',
      component: feedBack,
    }, {
      path: "/setting",
      name: 'setting',
      component: setting,
    }, {
      path: "/edit-psw",
      name: 'edit-psw',
      component: EditPsw,
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