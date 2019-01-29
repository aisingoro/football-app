<template>
  <div class="home">
    <router-view></router-view>
    <tabbar v-model="selIndex"
            @on-index-change="changeSel">
      <tabbar-item link="/home/index">
        <img slot="icon"
             src="../../public/images/tabbar-01.png">
        <img slot="icon-active"
             src="../../public/images/tabbar-sel-01.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/home/internal-reference">
        <img slot="icon"
             src="../../public/images/tabbar-02.png">
        <img slot="icon-active"
             src="../../public/images/tabbar-sel-02.png">
        <span slot="label">内参</span>
      </tabbar-item>
      <tabbar-item link="/home/ugc">
        <img slot="icon"
             src="../../public/images/tabbar-03.png">
        <img slot="icon-active"
             src="../../public/images/tabbar-sel-03.png">
        <span slot="label">UGC</span>
      </tabbar-item>
      <tabbar-item link="/home/user">
        <img slot="icon"
             src="../../public/images/tabbar-04.png"
             style="width:90%">
        <img slot="icon-active"
             src="../../public/images/tabbar-sel-04.png"
             style="width:90%">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import https from '../https.js'
import {Tabbar,TabbarItem } from 'vux'
export default {
  name: 'home',
  components: {
    Tabbar,
    TabbarItem
  },
  data(){
    return{
      // selIndex:this.$store.state.selIndex,
      data: [
        { time: '2016-08-08 00:00:00', tem: 10 },
        { time: '2016-08-08 00:10:00', tem: 22 },
        { time: '2016-08-08 00:30:00', tem: 20 },
        { time: '2016-08-09 00:35:00', tem: 26 },
        { time: '2016-08-09 01:00:00', tem: 20 },
        { time: '2016-08-09 01:20:00', tem: 26 },
        { time: '2016-08-10 01:40:00', tem: 28 },
        { time: '2016-08-10 02:00:00', tem: 20 },
        { time: '2016-08-10 02:20:00', tem: 18 }
      ]
    }
  },
  methods:{
    changeSel(e){
      console.log('选中',e)
      this.$store.state.selIndex = e
    }
  },
  computed: {
    selIndex() {
        return this.$store.state.selIndex;
    }
  },
  mounted(){
    // let params ={'page': '1', 'pageSize': '10', 'openid': 'o3HY-5XljrBDFpzVdSYi66Z_9Af4','unionid':'oXhLb1M3dFxgwB97V79lzoqPxpQs'}
		// https.fetchPost('/index/index.jsp',{} ).then((data) => {
		// 		console.log("结果啊啊啊啊",data)
		// }).catch(err=>{
		// 				console.log(err)
		// 		}
		// )
  }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: #0393f8 !important;
}
</style>

