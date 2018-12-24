<template>
  <div class="set-order">
    <x-header :left-options="{backText: ''}"
              title="发单"></x-header>
    <div class="order-info">
      <p>请至少选择1场比赛</p>
      <div class="order-list">
        <div class="side-left">
          <p>周日001</p>
          <p>天皇杯</p>
          <p>02/08/02:30</p>
          <x-icon type="ios-close-outline"
                  size="20"></x-icon>
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
          <x-icon type="ios-close-outline"
                  size="20"></x-icon>
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
      <h1>推荐理由</h1>
      <group>
        <x-textarea placeholder="点击输入推荐理由，不少于20个字"
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
        <input type="text" />
        <span>¥</span>
      </div>

      <div class="btn"
           @click="setOrder">确定</div>
    </div>
  </div>
</template>

<script>
import { XHeader,Checker, CheckerItem,XTextarea,Group,Checklist } from 'vux'
export default {
  components: {
    XHeader,
    Checker,
    CheckerItem,
    XTextarea,
    Group,
    Checklist
  },
  data(){
    return{
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
    setOrder(){
    }
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
          background: #01d0ff;
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
      width: 15%;
      float: left;
      border-bottom: 1px solid #eff5f6;
      input {
        padding-left: 2px;
        width: 60%;
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
  color: #26d7ff;
  content: '\EA08';
}
.set-order .weui-cells_checkbox .weui-icon-checked:before {
  color: #eff5f6;
}
.set-order .vux-x-icon {
  fill: red;
  margin-top: 48px;
}
</style>

