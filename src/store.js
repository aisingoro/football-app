import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    internalInfoItem: '223', //比赛列表点击进入详情id
    matchnum: '', //场次编号
    userid: localStorage.getItem("userid"), //用户唯一标识 userid
    vcode: localStorage.getItem("vcode"), //版本号 ，原值为‘1’
    expertid: localStorage.getItem("expertid"), //是否为专家,原值为'0'
    fans: localStorage.getItem("fans"), //粉丝数,原值为'0'
    nickname: localStorage.getItem("nickname"), //用户昵称
    account: localStorage.getItem("account"), //手机号
    userpic: localStorage.getItem("userpic"), //用户头像
    fcount: localStorage.getItem("fcount"), //发单,原值为'0'
    follow: localStorage.getItem("follow"), //关注,原值为'0'
    signin: localStorage.getItem("signin"), //签到,原值为'0'
    balance: localStorage.getItem("balance"), //仙灵币,原值为'0'
    usersex: localStorage.getItem("usersex"), //性别,原值为'0'
    tx_balance: localStorage.getItem("tx_balance"), //可提现金额
    cardnum: localStorage.getItem("cardnum"), //银行卡号
    openingbank: localStorage.getItem("openingbank"), //开户银行
    expertDesc: localStorage.getItem("expertDesc"), //专家简介
    selIndex: localStorage.getItem("selIndex") //tabbar选中,原值为0
  },
  // getters: {
  //   getStorage: function (state) {
  //     if (state.userid == '') {
  //       state.userid = localStorage.getItem('userid')
  //     }
  //   }
  // },
  mutations: {
    setInternalInfoItem(state, data) {
      state.internalInfoItem = data;
      localStorage.setItem('internalInfoItem', data)

    },
    setMatchnum(state, data) {
      state.matchnum = data;
      localStorage.setItem('matchnum', data)

    },
    setUserid(state, data) {
      state.userid = data;
      localStorage.setItem('userid', data)
    },
    setExpertid(state, data) {
      state.expertid = data;
      localStorage.setItem('expertid', data)
    },
    setFans(state, data) {
      state.fans = data;
      localStorage.setItem('fans', data)
    },
    setNickname(state, data) {
      state.nickname = data;
      localStorage.setItem('nickname', data)
    },
    setAccount(state, data) {
      state.account = data;
      localStorage.setItem('account', data)
    },
    setUserpic(state, data) {
      state.userpic = data;
      localStorage.setItem('userpic', data)
    },
    setFcount(state, data) {
      state.fcount = data;
      localStorage.setItem('fcount', data)
    },
    setFollow(state, data) {
      state.follow = data;
      localStorage.setItem('follow', data)
    },
    setSignin(state, data) {
      state.signin = data;
      localStorage.setItem('signin', data)
    },
    setBalance(state, data) {
      state.balance = data;
      localStorage.setItem('balance', data)
    },
    setUsersex(state, data) {
      state.usersex = data;
      localStorage.setItem('usersex', data)
    },
    setTx_balance(state, data) {
      state.tx_balance = data;
      localStorage.setItem('tx_balance', data)
    },
    setCardnum(state, data) {
      state.cardnum = data;
      localStorage.setItem('cardnum', data)
    },
    setOpeningbank(state, data) {
      state.openingbank = data;
      localStorage.setItem('openingbank', data)
    },
    setExpertDesc(state, data) {
      state.expertDesc = data;
      localStorage.setItem('expertDesc', data)
    },
    setSelIndex(state, data) {
      state.selIndex = data;
      localStorage.setItem('selIndex', data)
    },
    setVcode(state, data) {
      state.vcode = data;
      localStorage.setItem('vcode', data)
    }
  },
})