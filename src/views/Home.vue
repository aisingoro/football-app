<template>
  <div class="home">
    <x-header></x-header>
    <v-chart :data="data">
      <v-scale x
               type="timeCat"
               mask="MM/DD"
               :tick-count="3" />
      <v-scale y
               :min="0"
               alias="日均温度"
               :tick-count="5" />
      <v-point :style="{
          stroke: '#fff',
          lineWidth: 1
        }"
               shape="smooth" />
      <v-line shape="smooth" />
    </v-chart>
    <img alt="Vue logo"
         src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import https from '../https.js'
import HelloWorld from '@/components/HelloWorld.vue'
import {XHeader, VChart, VLine, VPoint, VScale, VTooltip } from 'vux'
export default {
  name: 'home',
  components: {
    HelloWorld,
    VChart,
    VPoint,
    VLine,
    VScale,
    VTooltip,
    XHeader
  },
  data(){
    return{
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
  mounted(){
    let params ={'page': '1', 'pageSize': '10', 'openid': 'o3HY-5XljrBDFpzVdSYi66Z_9Af4','unionid':'oXhLb1M3dFxgwB97V79lzoqPxpQs'}
                https.fetchGet('/listbooks',params ).then((data) => {
                    console.log("结果啊啊啊啊",data)
                }).catch(err=>{
                        console.log(err)
                    }
                )
  }
}
</script>
