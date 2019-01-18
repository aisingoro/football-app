<template>
  <div class="user">
    <h1>我的</h1>
    <div class="user-card"
         @click="goUserDetail">
      <img src="../../public/images/index-team-01.png" />
      <div>
        <p>tianve12</p>
        <p>手机号：18678766767</p>
      </div>
      <img src="../../public/images/user-header-arrow.png" />
    </div>
    <div class="user-grid">
      <div>
        <p>28</p>
        <p>我的发单</p>
      </div>
      <div>
        <p>920</p>
        <p>我的粉丝</p>
      </div>
      <div>
        <p>64</p>
        <p>我的关注</p>
      </div>
    </div>
    <div class="user-bg">我的仙灵币：2333枚</div>
    <panel :list="list"
           type="3"></panel>
    <panel :list="list2"
           type="3"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'
export default {
  components: {
    Panel
  },
  data(){
    return{
      list2:[{
        src: require('../../public/images/user-pannel-01.png'),
        title: '设置',
        url: '/setting'
      }],
      list: [{
        src: require('../../public/images/user-pannel-01.png'),
        title: '账户详情',
        url: '/count-detail'
      },  {
        src: require('../../public/images/user-pannel-04.png'),
        title: '我的购买',
        url: '/myPurchase'
      },{
        src: require('../../public/images/user-pannel-02.png'),
        title: '分享好友',
        url: '/component/cell'
      }, {
        src: require('../../public/images/user-pannel-03.png'),
        title: '意见反馈',
        url: '/feedBack'
      }],
    }
  },
  methods:{
    goUserDetail(){
      this.$router.push('/user-detail')
    }
  }

}
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: calc(100% - 53px);
  overflow: hidden;
  overflow-y: scroll;
  background: #f8f9fa;
  & > h1 {
    width: 100%;
    padding: 7px 16px;
    font-size: 22px;
    font-weight: 500;
    color: #313233;
  }
  .user-card {
    width: 91.5%;
    height: 96px;
    background: #fff;
    margin: 0 auto;
    border-radius: 6px;
    border: 1px solid rgba(239, 245, 246, 1);
    overflow: hidden;
    & > img:first-child {
      width: 60px;
      height: 60px;
      margin: 18px;
      float: left;
    }
    & > div {
      float: left;
      & > p:first-child {
        color: #293b51;
        font-size: 20px;
        margin-top: 24px;
        font-weight: 500;
      }
      & > p:nth-child(2) {
        color: #7ba1d0;
        font-size: 14px;
        font-weight: 400;
        font-family: 'PingFangSC-Regular';
      }
    }
    & > img:nth-of-type(2) {
      width: 9px;
      height: 16px;
      margin-top: 34px;
      float: right;
      margin-right: 15px;
    }
  }
  .user-grid {
    display: flex;
    margin-top: 21px;
    & > div {
      flex: 1;
      margin-left: 16px;
      color: #293b51;
      font-size: 14px;
      font-size: 400;
      font-family: 'PingFangSC-Regular';
      & > p:first-child {
        font-size: 24px;
        font-family: 'Bebas Neue';
        color: rgba(49, 50, 51, 1);
        line-height: 29px;
      }
    }
  }
  .user-bg {
    width: 91.5%;
    height: 44px;
    margin: 0 auto;
    margin-top: 21px;
    background: url('../../public/images/user-bg.png') no-repeat 100% 100%/100%
      100%;
    font-size: 18px;
    font-family: 'PingFangSC-Regular';
    color: #ffffff;
    padding-left: 12px;
    font-weight: 400;
    line-height: 44px;
  }
}
</style>
<style lang="scss">
.user .weui-cell {
  padding: 16px 15px;
  color: #293b51;
  font-size: 18px;

  // &:last-child {
  //   margin-top: 18px;
  //   &:before {
  //     border-top: none;
  //   }
  // }
  p {
    font-weight: normal;
    font-family: 'PingFangSC-Regular';
    margin-left: 8px;
  }
}
.user .weui-cell:before {
  border-top: 1px solid #eff5f6;
  left: 0;
}
.user .weui-cells:after {
  border-bottom: none;
}
.user .weui-panel {
  margin-top: 0;
  margin-bottom: 18px;
  &:after {
    border-bottom: none;
  }
}
</style>

