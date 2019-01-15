<template>
  <div class="issue-order">
    <x-header :left-options="{backText: ''}"
              title="发单"></x-header>
    <div class="order-info">
      <p>请至少选择1场比赛</p>
      <div class="order-list"
           v-for="(item,index) in orderList"
           :key="index">
        <div class="side-left">
          <p>{{item.matchnum}}</p>
          <p>{{item.league}}</p>
          <p>{{item.matchtime}}</p>
        </div>
        <div class="side-right">
          <p>{{item.hometeam}}
            <span>vs</span> {{item.awayteam}}</p>
          <checker v-model="demo1"
                   default-item-class="demo1-item"
                   selected-item-class="demo1-item-selected">
            <checker-item :value="item"
                          v-for="(item1, index1) in items"
                          :key="index1">{{itemsTitle[index]}}<br>{{item}}</checker-item>
          </checker>
        </div>
      </div>
    </div>
    <div class="fixed-bottom">
      <p>重选</p>
      <div class="btn"
           @click="setOrder">确定</div>
    </div>
  </div>
</template>

<script>
import https from '../https.js'
import { XHeader,Checker, CheckerItem } from 'vux'
export default {
  components: {
    XHeader,
    Checker,
    CheckerItem
  },
  data(){
    return{
      demo1:null,
      itemsTitle:['胜','平','负','胜','平','负'],
      items:[1.45,3.40,6.85,2.72,3.10,2.28],
      orderList:[],
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
    setOrder(){
      this.$router.push("/set-order")
    }
  },
  mounted(){
    https.fetchPost('/match/forecastmatchlist.jsp',{} ).then((data) => {
      this.orderList=data.data.list
      console.log(data.data)
    }).catch(err=>{
          console.log(err)
      }
    )
  }
}
</script>

<style lang="scss" scoped>
.issue-order {
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
    padding-bottom: 100px;
    & > p {
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      margin-top: 22px;
      margin-bottom: 14px;
    }
    .order-list {
      height: 136px;
      margin-bottom: 14px;
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
    height: 96px;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    p {
      float: left;
      font-size: 18px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: #0393f8;
      margin-left: 16px;
      margin-top: 25px;
    }
    .btn {
      float: right;
      margin-right: 15px;
      margin-top: 15px;
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
.issue-order .vux-header .vux-header-title {
  color: #313233;
}
</style>

