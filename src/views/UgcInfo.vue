<template>
  <div class="ugc-info">
    <x-header :left-options="{backText: ''}"
              :title="$route.query.ugcId==$store.state.expertid?'我的战绩':'他的战绩'"></x-header>
    <div class="ugc-header">
      <img :src="expertinfo.expertpic" />
      <div class="ugc-name">
        <p>{{expertinfo.expertname}}</p>
        <div>{{expertinfo.expertlevel}}</div>
      </div>
      <div class="ugc-desc">
        <p>近期{{expertinfo.fcount}}中{{expertinfo.fright}} 盈利{{expertinfo.finfomation}}</p>
        <p>盈利率{{expertinfo.finfomation}}</p>
      </div>
      <div class="desc-more">
        <div>
          <p>{{expertinfo.fcount}}</p>
          <p>荐单</p>
        </div>
        <div>
          <p>{{expertinfo.followcount}}</p>
          <p>粉丝</p>
        </div>
        <div :class="isFollow=='1'?'unfollowUgc':'followUgc'"
             @click="followUgc"
             v-if="$route.query.ugcId!==$store.state.expertid">{{isFollow=='1' ?'已关注': '关注'}}
        </div>
      </div>
    </div>
    <p class="title">近10荐单</p>
    <div v-for="(item,index) in listInfo"
         :key="index"
         class="table-box">
      <x-table :cell-bordered="false"
               style="background-color:#fff;">
        <tbody>
          <tr v-for="(items,indexs) in item.title"
              :key="indexs">
            <td>{{items.match_num}}</td>
            <td>{{items.hometeam}} VS {{items.awayteam}}</td>
            <td>{{items.match_result==-1?'负':(items.match_result==1?'胜':'平')}}</td>
          </tr>
        </tbody>
      </x-table>
      <div class="table-result"
           @click="listDetail(item.fid)">
        <div>{{item.fresult==-99?'立即查看':(item.fresult==-1?'未中':'荐中')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import https from '../https.js'
import { XHeader,XTable } from 'vux'

export default {
  components: {
    XHeader,
    XTable
  },
  data(){
    return{
      expertinfo:{},
      listInfo:[],
      isFollow:'0'//是否关注该专家
    }
  },
  methods:{
    //跳转荐单详情
    listDetail(index){
      this.$router.push({path:'/form-list-detail', query: {forceid:index}})
    },
    followUgc(){
      var args={expertid:this.$route.query.ugcId}
      
      if(this.isFollow=='1'){
        args={expertid:this.$route.query.ugcId,type:'-1'}
      }
      https.fetchPost('/expert/follow.jsp',args ).then((data) => {
        
        if(data.data.statuscode=='-1098'||data.data.statuscode=='-1030'){
          this.$router.push('/login')
        }
        if(this.isFollow=='0'){
          this.isFollow='1'
        }{
          this.isFollow='0'
        }
      }).catch(err=>{
            console.log(err)
        }
      )
    }
  },
  mounted(){
    https.fetchPost('/forecast/expertforecast.jsp',{expertid:this.$route.query.ugcId} ).then((data) => {
        this.expertinfo = data.data.expertinfo;
        this.listInfo = data.data.list;
        this.isFollow = data.data.expertinfo.isfollow
      }).catch(err=>{
            console.log(err)
        }
      )
    console.log(this.$route.query.ugcId)
  }
}
</script>
<style lang="scss" scoped>
.ugc-info {
  width: 100%;
  height: 100%;
  background: #f8f9fa;
  .ugc-header {
    width: 100%;
    height: 156px;
    background: #ffffff;
    overflow: hidden;
    & > img {
      float: left;
      width: 48px;
      height: 48px;
      margin-top: 24px;
      margin-left: 24px;
      margin-right: 12px;
      border-radius: 50%;
    }
    .ugc-name {
      float: left;
      p {
        font-size: 16px;
        margin-top: 27px;
      }
      & > div {
        width: 19px;
        height: 18px;
        font-size: 12px;
        padding-left: 18px;
        color: #0393f8;
        background: url('../../public/images/ugc-info-badge.png') no-repeat 100%
          100%/100% 100%;
      }
    }
    .ugc-desc {
      float: left;
      margin-left: 38px;
      margin-top: 25px;
      font-size: 18px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      p:last-child {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #ffca40;
      }
    }
    .desc-more {
      clear: both;
      & > div {
        float: left;
        margin-top: 16px;
        &:first-child,
        &:nth-child(2) {
          margin-left: 28px;
          text-align: center;
          p:first-child {
            font-size: 24px;
            font-family: BebasNeue;
            color: rgba(49, 50, 51, 1);
          }
          p:nth-child(2) {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(180, 202, 229, 1);
          }
        }
        &:nth-child(3) {
          width: 68px;
          height: 36px;
          color: #ffffff;
          line-height: 36px;
          text-align: center;
          border-radius: 18px;
          float: right;
          margin-right: 21px;
          margin-top: 26px;
          font-size: 14px;
        }
      }
    }
  }
  .title {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    margin-top: 25px;
    margin-left: 21px;
    margin-bottom: 16px;
  }
  .table-box {
    display: flex;
    margin-bottom: 18px;
    .vux-table {
      flex: 3.5;
      margin-left: 21px;
      // width: 71%;
      font-size: 12px;
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
    .table-result {
      flex: 1;
      background: #0393f8;
      color: #ffffff;
      position: relative;
      margin-right: 21px;
      & > div {
        width: 100%;
        text-align: center;
        font-size: 14px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
      }
      // padding-top: 18px;
    }
  }
}
.followUgc {
  background: #0393f8;
}
.unfollowUgc {
  background: #ececec;
}
</style>

<style lang="scss">
.ugc-info .vux-header {
  background: #ffffff;
}
.ugc-info .vux-header .vux-header-title {
  color: #313233;
}
.ugc-info .vux-table td:before,
.vux-table th:before {
  border-bottom: 1px solid #f1f4f6;
}
.ugc-info .vux-table:after {
  border-top: 1px solid #f1f4f6;
}
</style>
