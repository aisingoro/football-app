import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    internalInfoItem: '223', //比赛列表点击进入详情id
    matchnum: '', //场次编号
    userid: '0' //用户唯一标识 userid

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