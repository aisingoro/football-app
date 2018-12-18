<template>
  <div class="issue-order">
    <x-header :left-options="{backText: ''}"
              title="发单"></x-header>
    <div class="order-info">
      <p>请至少选择1场比赛</p>
      <div class="order-list">
        <div class="side-left">
          <p>周日001</p>
          <p>天皇杯</p>
          <p>02/08/02:30</p>
        </div>
        <div class="side-right">
          <p>哈萨克斯坦
            <span>vs</span> 葡萄牙</p>
          <checker v-model="demo1"
                   default-item-class="demo1-item"
                   selected-item-class="demo1-item-selected">
            <checker-item :value="item"
                          v-for="(item, index) in items1"
                          :key="index">{{itemsTitle[index]}}<br>{{item.value}}</checker-item>
          </checker>
        </div>
      </div>
      <div class="order-list">
        <div class="side-left">
          <p>周日001</p>
          <p>天皇杯</p>
          <p>02/08/02:30</p>
        </div>
        <div class="side-right">
          <p>哈萨克斯坦
            <span>vs</span> 葡萄牙</p>
          <checker v-model="demo1"
                   default-item-class="demo1-item"
                   selected-item-class="demo1-item-selected">
            <checker-item :value="item"
                          v-for="(item, index) in items1"
                          :key="index">{{itemsTitle[index]}}<br>{{item.value}}</checker-item>
          </checker>
        </div>
      </div>
      <div class="order-list">
        <div class="side-left">
          <p>周日001</p>
          <p>天皇杯</p>
          <p>02/08/02:30</p>
        </div>
        <div class="side-right">
          <p>哈萨克斯坦
            <span>vs</span> 葡萄牙</p>
          <checker v-model="demo1"
                   default-item-class="demo1-item"
                   selected-item-class="demo1-item-selected">
            <checker-item :value="item"
                          v-for="(item, index) in items1"
                          :key="index">{{itemsTitle[index]}}<br>{{item.value}}</checker-item>
          </checker>
        </div>
      </div>
    </div>
    <div class="fixed-bottom">
      <p>重选</p>
      <div class="btn">确定</div>
    </div>
  </div>
</template>

<script>
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
          margin-bottom: 7px;
          padding-top: 2px;
        }
        .demo1-item-selected {
          color: #ffffff;
          background: #01d0ff;
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
      color: rgba(38, 215, 255, 1);
      margin-left: 16px;
      margin-top: 25px;
    }
    .btn {
      float: right;
      margin-right: 15px;
      margin-top: 15px;
      width: 187px;
      height: 44px;
      background: linear-gradient(
        90deg,
        rgba(1, 208, 255, 1) 0%,
        rgba(1, 186, 255, 1) 100%
      );
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

