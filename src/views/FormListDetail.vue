<template>
  <div class="form-list-detail">
    <x-header :left-options="{backText: ''}"
              title="他的荐单"></x-header>
    <div class="form-list-info">
      <h3 v-if="statuscode>=0">推荐理由</h3>
      <div class="form-list-desc"
           v-if="statuscode>=0">
        <p>{{fdetails}}</p>
      </div>
      <h3>推荐结果</h3>
      <p v-if="statuscode<0">此荐单收费：
        <span>{{price}}</span>元</p>
      <div class="btn"
           @click="statuscode<0?(showPay=true):''">{{ statuscode>=0?'已解锁':'解锁查看'}}</div>
      <span class="attention"
            v-if="statuscode<0">请点击解锁查看，支付费用后可查看</span>
      <!-- <div v-if="statuscode>=0"
           class="total-result"><img :src="fresult=='1'?require('../../public/images/result-correct.png'):''" />{{fresult=='1'?'荐中':'未荐中'}}</div> -->
      <div v-if="statuscode>=0"
           v-for="(item,index) in list"
           :key="index">
        <h3 class="match-title">
          <span>{{item.matchnumshow}}</span>{{item.hometeam}} vs {{item.awayteam}}
          <span style="float:right;color:#353637"><img width=20
                 height=18
                 style="vertical-align:middle;margin-right:3px;"
                 :src="item.fresult=='1'?require('../../public/images/result-correct.png'):require('../../public/images/weizhong.jpg')" />{{item.fresult=='1'?'荐中':'未中'}}</span>
        </h3>
        <div class="paid-show"
             v-for="(items,indexs) in item.forecastlist"
             :key="indexs">
          <!-- <p>{{items.labname}}</p> -->
          <div class="paid-show-info">
            <div :class="{'sel-box':(items.labcheck).indexOf(_index.toString())!==-1,'hit-box': (items.labhit)==(items.labcheck),'gray-box':(items.labhit).indexOf(_index.toString())!==-1&&(items.labcheck).indexOf(_index.toString())==-1}"
                 v-for="(_item,_index) in items.labshow"
                 :key="_index">

              <p>{{_item}}
                <!-- <x-icon type="ios-checkmark-empty"
                        size="30"
                        class="check-icon"
                        v-if="items.labhit[0]==_index"></x-icon> -->
              </p>
              <p>{{items.labvalue[_index]}}</p>
            </div>

          </div>
        </div>
      </div>
      <!-- <x-table :cell-bordered="false"
               style="background-color:#fff;">
        <tbody>
          <tr v-for="(items,indexs) in list"
              :key="indexs">
            <td>{{items.match_num}}</td>
            <td>天狼星 VS 卡尔玛</td>
            <td>{{items.match_result==-1?'负':(items.match_result==1?'胜':'平')}}</td>
          </tr>
        </tbody>
      </x-table> -->
    </div>
    <popup v-model="showPay"
           height="220px"
           is-transparent>
      <div style="width: 95%;background-color:#fff;height:192px;margin:0 auto;border-radius:5px;padding-top:10px;">
        <div style="padding:20px 15px;">
          <p class="paidType">请选择支付方式：</p>
          <div class="paid-desc">
            <div>
              <img src="../../public/images/zhifubao.png"
                   class="zhifubao"
                   @click="userPayAli(paidInfo)" />
              <span class="zhifubao-text">支付宝支付</span>
            </div>
            <div>
              <img src="../../public/images/jinbi.png"
                   class="zhifubao"
                   @click="userPay(paidInfo)" />
              <span class="zhifubao-text">金币支付</span>
            </div>
          </div>

        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import https from '../https.js'
import { XHeader,Popup ,XTable,ToastPlugin} from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
export default {
  components: {
    XHeader,
    Popup,
    XTable
  },
  data(){
    return{
      showPay:false,
      price:'',
      statuscode:'',
      fdetails:'',
      list:[],
      fresult:''
    }
  },
  methods:{
    pay(args){
      https.fetchPost('/user/userpay.jsp',args).then((data) => {
        console.log(data.data.tourl)
        // window.location.href = data.data.tourl
        if(data.data.statuscode>0){
          //支付宝支付成功后会跳转支付页面
          if(data.data.tourl){
            window.location.href=data.data.tourl
          }else{
             //金币支付完成直接跳转支付成功页面
          this.$router.push({path:'/withdrawResult',query: {forceid:this.$route.query.forceid}})
          }
         
          // window.location.href = 'http://localhost:8080/#/withdrawResult'


        }else{
          this.$vux.toast.show({
            type:'warn',
                    text: data.data.statusmsg,
                  })
        }


      }).catch(err=>{
              console.log(err)
          }
      )
    },
    //支付宝支付
    userPayAli(){
      if(this.$store.state.userid==''||this.$store.state.userid==null||this.$store.state.userid==undefined){
        this.$router.push("/login")
        return false
      }
      let args={
        buyid:this.$route.query.forceid,
        buytype:'0002',
        paytype:'0006',
        // payback:'http://localhost:8080/index.html#/internal-info'
        payback: window.location.href

      }
      console.log(window.location.href)
      this.pay(args)
    },
    //金币支付
    userPay(){
      if(this.$store.state.userid==''||this.$store.state.userid==null||this.$store.state.userid==undefined){
        this.$router.push("/login")
        return false
      }
      let args={
        buyid:this.$route.query.forceid,
        buytype:'0002',
        // buytype:'0006',
        paytype:'0004',
        // payback:'http://localhost:8080/index.html#/internal-info'
        payback: window.location.href

      }
      console.log(window.location.href)
      this.pay(args)

    },
  },
  mounted(){
    https.fetchPost('/forecast/forecastdetails.jsp',{forceid:this.$route.query.forceid} ).then((data) => {
      console.log("forecastdetails",data.data.price)
      this.price = data.data.price
      this.statuscode = data.data.statuscode
      this.fdetails = data.data.fdetails
      this.list = data.data.list
      this.fresult = data.data.fresult


    }).catch(err=>{
          console.log(err)
      }
    )

  }

}
</script>
<style lang="scss" scoped>
.form-list-detail {
  margin-top: 46px;
  .vux-table {
    font-size: 12px;
    margin-top: 26px;
    tr {
      border-left: 1px solid #f1f4f6;
      border-right: 1px solid #f1f4f6;
      font-family: PingFangSC-Regular;
    }
    td:first-child {
      color: #b4cae5;
    }
    td:last-child {
      padding-right: 10px;
    }
  }
  .vux-header {
    background: #ffffff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .form-list-info {
    width: 91.5%;
    margin: 0 auto;
    // h3 {
    //   margin-top: 29px;
    //   margin-bottom: 14px;
    //   font-size: 16px;
    //   font-family: PingFangSC-Medium;
    //   font-weight: 500;
    // }
    .form-list-desc {
      width: 100%;
      height: 158px;
      background: rgba(248, 249, 250, 1);
      border-radius: 6px;
      overflow: hidden;
      p {
        margin: 20px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
    }
    & > p {
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
    }
    .btn {
      width: 100%;
      height: 40px;
      border-radius: 6px;
      border: 1px solid rgba(228, 236, 240, 1);
      color: #0393f8;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      margin-top: 12px;
    }
    .attention {
      display: block;
      width: 100%;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      margin-top: 100px;
    }
  }
}
.paidType {
  position: relative;
  font-size: 18px;
  color: #3a3b3b;
}
.zhifubao {
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 5px;
}
.zhifubao-text {
  display: block;
  width: 100%;
  text-align: center;
}
.zhifubao-close {
  position: absolute;
  width: 16px;
  height: 16px;
  right: 18px;
  top: 18px;
}
.total-result {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid #f1f4f6;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  font-size: 14px;
  img {
    width: 20px;
    height: 18px;
    display: block;
    margin: 0 auto;
    margin-top: 13px;
    margin-bottom: 2px;
  }
}
.paid-show {
  width: 100%;
  // height: 152px;
  overflow: hidden;
  border-radius: 0;
  border: none;
  & > p {
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 9px;
  }
  .paid-show-info {
    width: 70%;
    height: 72px;
    margin: 0 auto;
    display: flex;
    & > div {
      flex: 1;
      margin-left: 1px;
      & > p:first-child {
        width: 100%;
        background: #3665ac;
        color: #ffffff;
        text-align: center;
        height: 28px;
        line-height: 28px;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 12px;
        position: relative;
        .check-icon {
          position: absolute;
          right: -5px;
          top: -5px;
          color: #fff;
        }
      }
      & > p:nth-child(2) {
        width: 100%;
        height: 44px;
        background: #fff;
        color: #313233;
        text-align: center;
        line-height: 44px;
        font-size: 12px;
        margin-top: 0;
        margin-bottom: 0;
        border: 1px solid #e4ecf0;
        box-sizing: border-box;
      }
    }
    .sel-box {
      & > p:first-child {
        background: #0393f8;
      }
      & > p:nth-child(2) {
        box-sizing: border-box;
        // border: 1px solid #0393f8;
      }
    }
    .hit-box {
      & > p:first-child {
        background: #ffb340;
      }
      & > p:nth-child(2) {
        box-sizing: border-box;
        border: 1px solid #ffb340;
      }
    }
    .gray-box {
      & > p:first-child {
        background: #bebebe;
      }
      & > p:nth-child(2) {
        box-sizing: border-box;
        // border: 1px solid #bebebe;
      }
    }
  }
}
.match-title {
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  margin-top: 29px;
  margin-bottom: 14px;
  span {
    color: #b4cae5;
    margin-right: 5px;
  }
}
.paid-desc {
  display: flex;
  & > div {
    flex: 1;
  }
}
</style>

<style>
.form-list-detail .vux-header .vux-header-title {
  color: #313233 !important;
}
.form-list-detail .vux-x-icon {
  fill: rgba(255, 165, 36, 1);
}
</style>
