import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import QS from 'qs'
import { InfiniteScroll } from 'mint-ui'
// import md5 from 'js-md5';
// Vue.prototype.$md5 = md5;
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;
Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(InfiniteScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')