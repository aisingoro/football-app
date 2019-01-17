<template>
  <div class="set-order">
    <x-header :left-options="{backText: ''}"
              title="发单"></x-header>
    <!-- <keep-alive> -->
    <div class="order-info">
      <div class="order-list"
           v-for="(item,index) in sureList"
           :key="index">
        <div class="side-left">
          <p>{{item.matchnum}}</p>
          <p>{{item.league}}</p>
          <p>{{item.matchtime}}</p>
        </div>
        <div class="side-right">
          <p>{{item.hometeam}}
            <span>vs</span> {{item.awayteam}}</p>
          <checker v-model="checkNum"
                   default-item-class="demo1-item"
                   selected-item-class="demo1-item-selected">

            <checker-item disabled
                          :class="item.bgColor[index1]?'demo1-item-unsel':''"
                          :value="sureList[index].bgColor[index1]"
                          v-for="(item1, index1) in item.odds.split(',')"
                          :key="index1">{{itemsTitle[index1]}}<br>{{item1}}</checker-item>
          </checker>
        </div>
      </div>

    </div>
    <div class="fixed-bottom">
      <h1>推荐理由</h1>
      <group>
        <x-textarea v-model="fconent"
                    placeholder="点击输入推荐理由，不少于20个字"
                    :show-counter="false"
                    :rows="1"
                    autosize></x-textarea>
      </group>

      <checklist :options="commonList"
                 v-model="radioValue"
                 :max="1"
                 class="bor-none">
      </checklist>
      <div class="pay-input">
        <input type="text"
               v-model="fmoney" />
        <span>¥</span>
        <check-icon :value.sync="isBack"
                    type="plain"> 不中返</check-icon>
      </div>

      <div class="btn"
           @click="setOrder">确定</div>
    </div>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import https from '../https.js'

import { XHeader,Checker, CheckerItem,XTextarea,Group,Checklist,ToastPlugin,CheckIcon } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
export default {
  components: {
    XHeader,
    Checker,
    CheckerItem,
    XTextarea,
    Group,
    Checklist,
    CheckIcon
  },
  data(){
    return{
      checkNum:'1',
      isBack:true,
      fmoney:'',
      fconent:'',
      sureList:[],
      selList:[],
      orderList:[],
      commonList: [ '免费', '收费' ],
      radioValue:[],
      demo1:null,
      itemsTitle:['胜','平','负','胜','平','负'],
      items1: [{
        key: '胜1',
        value: '1.65'
      }, {
        key: '平2',
        value: '2.65'
      }, {
        key: '负3',
        value: '3.65'
      },{
        key: '胜4',
        value: '2.65'
      }, {
        key: '平5',
        value: '2.65'
      }, {
        key: '负6',
        value: '1.65'
      }],
    }
  },
  methods:{
    //提交荐单
    setOrder(){
      //判断推荐理由是否达到20字
      if(this.fconent.length<20){
        this.$vux.toast.show({
          type:'warn',
          text: '推荐理由不足20字哦～',
        })
        return false
      }
      var matchnum1,matchnum2,forceval1,forceval2,isback
      if(this.selList.length==2){
        matchnum1 = this.selList[0].matchnum;
        forceval1 = this.selList[0].forceval;
        matchnum2 = this.selList[1].matchnum;
        forceval2 = this.selList[1].forceval;
      }
      if(this.selList.length==1){
        matchnum1 = this.selList[0].matchnum;
        forceval1 = this.selList[0].forceval;
        matchnum2 = '';
        forceval2 = '';
      }
      if(this.isBack==false){
        isback=0
      }else{
        isback=1
      }
      let args={
        matchnum1,
        forceval1,
        matchnum2,
        forceval2,
        fconent:this.fconent,
        fmoney:this.fmoney,
        isback
      }
      https.fetchPost('/forecast/recommendedsub.jsp',args ).then((data) => {
        if(data.data.statuscode==-1000){
          this.$router.push('/login')
          return false
        }
        this.$vux.toast.show({
          text: '保存荐单成功！',
        })
      }).catch(err=>{
            console.log(err)
        }
      )
    }
  },
  mounted(){
     this.selList = this.$route.query.selList
    this.orderList = this.$route.query.orderList
      for(var i=0;i<this.orderList.length;i++){
    
        for(var j=0;j<this.selList.length;j++){
          // console.log(this.selList[j].matchnum,this.orderList[i].matchnum,this.selList[j].matchnum==this.orderList[i].matchnum)
        
        if(this.selList[j].matchnum==this.orderList[i].matchnum){
          this.sureList.push({
            awayteam: this.orderList[i].awayteam,
            bgColor: this.selList[j].forceval,
            hometeam: this.orderList[i].hometeam,
            league: this.orderList[i].league,
            matchnum: this.orderList[i].matchnum,
            matchtime: this.orderList[i].matchtime,
            odds: this.orderList[i].odds,
          })
        }
      }
    }
    console.log('sureList',this.sureList)
    console.log('selList',this.$route.query.selList)
    console.log('orderList',this.$route.query.orderList)
   
    
  }
}
</script>

<style lang="scss" scoped>
.set-order {
  width: 100%;
  height: 100%;
  background: #f8f9fa;
  .vux-header {
    background: #ffffff;
  }
  .order-info {
    width: 91.5%;
    margin: 0 auto;
    overflow: hidden;
    & > p {
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      margin-top: 22px;
      margin-bottom: 14px;
    }
    .order-list {
      height: 136px;
      margin-top: 14px;
      .side-left {
        float: left;
        width: 20%;
        & > p:first-child {
          font-size: 12px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
        & > p:nth-child(2) {
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #7ba1d0;
          margin: 3px 0;
        }
        & > p:nth-child(3) {
          font-size: 12px;
          font-family: ArialMT;
          color: rgba(123, 161, 208, 1);
        }
      }
      .side-right {
        float: right;
        width: 78.7%;
        height: 136px;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;
        border: 1px solid rgba(239, 245, 246, 1);
        & > p {
          font-size: 12px;
          margin-top: 10px;
          margin-left: 14px;
          span {
            font-weight: bolder;
          }
        }
        .demo1-item {
          width: 26.7%;
          height: 38px;
          background: rgba(248, 249, 250, 1);
          border-radius: 3px;
          font-size: 12px;
          color: #7ba1d0;
          text-align: center;
          line-height: 17px;
          margin-left: 14px;
          margin-top: 8px;
          padding-top: 2px;
        }
        .demo1-item-selected {
          color: #ffffff;
          background: #0393f8;
        }
      }
    }
  }
  .fixed-bottom {
    width: 100%;
    height: 271px;
    background: #ffffff;
    margin-top: 150px;
    overflow: hidden;
    // position: fixed;
    // bottom: 0;
    // left: 0;
    .pay-input {
      margin-top: 10px;
      width: 25%;
      float: left;
      input {
        padding-left: 2px;
        width: 60%;
        border: none;
        border-bottom: 1px solid #eff5f6;
      }
    }
    h1 {
      font-size: 16px;
      margin: 16px;
    }
    .btn {
      margin: 0 auto;
      margin-top: 70px;
      width: 187px;
      height: 44px;
      background: #0393f8;
      border-radius: 24px;
      font-size: 20px;
      line-height: 44px;
      text-align: center;
      color: #ffffff;
    }
  }
}
</style>
<style lang="scss">
.set-order .vux-header .vux-header-title {
  color: #313233;
}
.set-order .weui-cells:before {
  border-top: none;
}
.set-order .weui-textarea::-webkit-input-placeholder {
  font-size: 16px;
  color: #b4cae5;
  font-family: PingFangSC-Regular;
  font-weight: 400;
}
.set-order .weui-cells:after {
  border-bottom: 1px solid #eff5f6;
}
.set-order .weui-cells__title + .weui-cells {
  display: flex;
}
.bor-none {
  width: 55%;
  float: left;
  .weui-cell__bd {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
  }
  .weui-cells:after {
    border-bottom: none;
  }
  .weui-cell:before {
    border-top: none;
  }
}

.set-order
  .weui-cells_checkbox
  .weui-check:checked
  + .weui-icon-checked:before {
  color: #0393f8;
  content: '\EA08';
}
.set-order .weui-cells_checkbox .weui-icon-checked:before {
  color: #eff5f6;
}
.set-order .vux-x-icon {
  fill: red;
  margin-top: 48px;
}
.set-order .vux-check-icon > span {
  font-size: 12px;
}
.set-order .weui-icon-success-circle {
  color: #0393f8;
}
.set-order .vux-check-icon > .weui-icon-success:before,
.vux-check-icon > .weui-icon-success-circle:before {
  color: #0393f8 !important;
}
</style>

