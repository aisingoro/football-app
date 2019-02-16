import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    internalInfoItem: '223', //比赛列表点击进入详情id
    matchnum: '', //场次编号
    userid: '', //用户唯一标识 userid
    vcode: '1',
    expertid: '0', //是否为专家
    fans: '0', //粉丝数
    nickname: '', //用户昵称
    account: '', //手机号
    userpic: '', //用户头像
    fcount: '0', //发单
    follow: '0', //关注
    signin: '0', //签到
    balance: '0', //仙灵币
    usersex: '0', //性别
    tx_balance: '', //可提现金额
    cardnum: '', //银行卡号
    openingbank: '', //开户银行
    expertDesc: '', //专家简介
    selIndex: 0 //tabbar选中
  },
  mutations: {
    setInternalInfoItem(state, data) {
      state.internalInfoItem = data;
    },
    setMatchnum(state, data) {
      state.matchnum = data;
    }

  },
})