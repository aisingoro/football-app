import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    internalInfoItem: '223' //比赛列表点击进入详情id

  },
  mutations: {
    setInternalInfoItem(state, data) {
      state.internalInfoItem = data;
    }

  },
})