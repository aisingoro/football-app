<template>
  <div class="ugc">
    <h1>UGC</h1>
    <tab :line-width=2
         custom-bar-width='16'
         active-color='#0393F8'
         v-model="index"
         :scroll-threshold="6">
      <tab-item class="vux-center"
                :selected="demo2 === item"
                v-for="(item, index) in list2"
                @on-item-click="changeTab(index+1)"
                :key="index">{{item}}</tab-item>
      <tab-item class="vux-center"
                @on-item-click="changeTab(index+1)"><img class="ugc-badge"
             src="../../public/images/ugc-badge.png" /></tab-item>
    </tab>
    <swiper v-model="index"
            height="244px"
            :show-dots="false"
            style="box-shadow:0px 1px 0px 0px rgba(239,245,246,1);">
      <swiper-item v-for="(item, index) in list2"
                   :key="index">
        <div class="tab-swiper vux-center">
          <h2 class="title">选拔牛人
            <span>更多></span>
          </h2>
          <grid :cols="4"
                :show-lr-borders="false"
                :show-vertical-dividers="false">
            <grid-item v-for="(item,index) in ugcList"
                       :key="index"
                       :label="item.expertname"
                       @on-item-click="onItemClick(item.expertid)">
              <img slot="icon"
                   :src="item.expertpic">
            </grid-item>
          </grid>
        </div>
      </swiper-item>
      <swiper-item>
        <div class="tab-swiper vux-center">榜单 Container</div>
      </swiper-item>
    </swiper>
    <h2 class="title">牛人战绩
      <span>更多></span>
    </h2>
    <div class="ugcList-info"
         v-for="(item,index) in bottomList"
         :key="index">
      <img :src="item.expertpic" />
      <div>
        <p>{{item.expertname}}</p>
        <p>近期{{item.fcount}}中{{item.fright}} 盈利{{item.finfomation}}</p>
      </div>
      <div @click="onItemClick(item.expertid)">立即查看</div>
      <x-table :cell-bordered="false"
               style="background-color:#fff;">
        <tbody>
          <tr>
            <td>周一008</td>
            <td>天狼星 VS 卡尔玛</td>
            <td>...</td>
          </tr>
          <tr>
            <td>周一008</td>
            <td>天狼星 VS 卡尔玛</td>
            <td>...</td>
          </tr>
        </tbody>
      </x-table>
    </div>
    <img src="../../public/images/ugc-top.png"
         class="ugc-top" />
    <div class="ugc-set"
         @click="IssueOrder">发单</div>

  </div>
</template>

<script>
import { Tab, TabItem,Swiper,SwiperItem,Grid,GridItem,XTable } from 'vux'
import https from '../https.js'

export default {
 components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Grid,
    GridItem,
    XTable
  },
  data(){
    return{
      demo2: '牛人',
      index: 0,
      list2 : ['牛人', '命中', '盈利', '战绩', '关注'],
      ugcList:[],
      bottomList:[]
    }
  },
  methods:{
    IssueOrder(){
      this.$router.push("/issue-order")
    },
    //点击专家 跳转详情页面
    onItemClick(index){
      this.$router.push({path:'/ugc-info', query: {ugcId:index}})
    },
    //切换顶部tab栏目
    changeTab(args){
      console.log(111)
      https.fetchPost('/expert/expertlist.jsp',{type:args} ).then((data) => {
        console.log("ugc",data.data)
        this.ugcList = data.data.niurenlist;
        this.bottomList = data.data.list
      }).catch(err=>{
            console.log(err)
        }
      )
    }
  },
  mounted(){
    this.changeTab(1)
  }
}
</script>

<style lang="scss" scoped>
.ugc {
  width: 100%;
  height: calc(100% - 53px);
  overflow: hidden;
  overflow-y: scroll;
  background: #f8f9fa;
  & > h1 {
    background: #fff;
    width: 100%;
    padding: 7px 16px;
    font-size: 22px;
    font-weight: 500;
    color: #313233;
  }
  .ugc-badge {
    margin-top: 14px;
    width: 32px;
    height: 16px;
    padding: 0 18px;
    border-left: 1px solid #d8d8d8;
  }
  .title {
    font-size: 18px;
    padding: 14px 16px;
    font-weight: 500;
    span {
      float: right;
      font-size: 14px;
      font-weight: 400;
      font-family: PingFangSC-Regular;
    }
  }
  .ugcList-info {
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      float: left;
      margin: 8px 12px 12px 16px;
    }
    & > div {
      float: left;
      & > p:first-child {
        font-size: 16px;
        font-weight: 500;
        margin-top: 10px;
      }
      & > p:nth-child(2) {
        font-size: 14px;
        font-weight: 400;
        margin-top: 6px;
        font-family: PingFangSC-Regular;
      }
      &:nth-of-type(2) {
        float: right;
        margin-top: 17px;
        margin-right: 16px;
        width: 90px;
        height: 36px;
        background: #ffffff;
        border-radius: 18px;
        color: #0393f8;
        font-size: 14px;
        text-align: center;
        line-height: 36px;
      }
    }
    .vux-table {
      margin: 0 auto;
      width: 91.5%;
      font-size: 12px;

      tr {
        border-left: 1px solid #f1f4f6;
        border-right: 1px solid #f1f4f6;
        font-family: PingFangSC-Regular;
      }
      td:first-child {
        color: #b4cae5;
      }
    }
  }
  .ugc-set {
    width: 64px;
    height: 64px;
    background: url('../../public/images/ugc-set.png') no-repeat 100% 100%/100%
      100%;
    position: fixed;
    bottom: 58px;
    right: 16px;
    color: #fff;
    font-size: 16px;
    line-height: 56px;
    text-align: center;
  }
  .ugc-top {
    width: 64px;
    position: fixed;
    bottom: 122px;
    right: 16px;
  }
}
</style>
<style>
.ugc .vux-tab-ink-bar {
  width: 16px;
  margin: 0 auto;
  bottom: 7px;
  border-radius: 5px;
  overflow: hidden;
}
.ugc .vux-slider > .vux-swiper {
  background: #ffffff;
}
.ugc .weui-grid__icon {
  width: 48px;
  height: 48px;
}
.ugc .weui-grid__label {
  font-size: 12px;
}
.ugc .weui-grid {
  padding: 8px 10px;
}
.ugc .weui-grids:before {
  height: 0;
  border-top: none;
}
.ugc .weui-grid:after {
  border-bottom: none;
}
.ugc .vux-table td:before,
.vux-table th:before {
  border-bottom: 1px solid #f1f4f6;
}
.ugc .vux-table:after {
  border-top: 1px solid #f1f4f6;
}
</style>

