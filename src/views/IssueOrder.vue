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
          <checker v-model="orderList[index].selNum"
                   default-item-class="demo1-item"
                   selected-item-class="demo1-item-selected"
                   @on-change="onChange">

            <checker-item @on-item-click="onItemClick"
                          :disabled="item.bgColor[index1]"
                          :class="item.bgColor[index1]?'demo1-item-unsel':''"
                          :value="orderList[index].matchnum+'/'+index1"
                          v-for="(item1, index1) in item.odds.split(',')"
                          :key="index1">{{itemsTitle[index1]}}<br>{{item1}}{{item.bgColor[index1]}}</checker-item>
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
import { XHeader,Checker, CheckerItem,ToastPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
export default {
  components: {
    XHeader,
    Checker,
    CheckerItem
  },
  data(){
    return{
      demo1:null,
      itemsTitle:['胜','平','负','让胜','让平','让负'],
      items:[1.45,3.40,6.85,2.72,3.10,2.28],
      newCopyList:[],
      newArr:[],//场次编号数组
      matchnum1:'',
      matchnum2:'',
      matchnumItem:'',
      orderList:[],
      // ifSel:false,
      bgCol:[false,false,false,false,false,false],
      selList:[],
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
  watch:{
    // 'orderList':{//深度监听，可监听到对象、数组的变化
    //         handler(val, oldVal){
    //             console.log("监听orderlist: "+val, oldVal);//但是这两个值打印出来却都是一样的
    //         },
    //         deep:true
    //     }

  },
  methods:{
    onChange(val){
      console.log(this.orderList)
      console.log('val',val)
      var match=val.split('/')[0];
      var matchIndex = val.split('/')[1];
      var index=0;//要删除
      var changeIndex=0//切换的index
      var Arr=[0,0,0,0,0,0];//上传荐单结果
      Arr.splice(matchIndex,1,1)
      
          console.log('qiehuan',matchIndex)

        // 如果matchIndex='',代表取消选项
        if(matchIndex=='' || matchIndex==undefined){
          //将重新把所有选项打开可以选择
          for(var i=0;i<this.orderList.length;i++){
            this.orderList[i].bgColor=[false,false,false,false,false,false]
          }
        //将已选择列表中删除该项
          for(var i=0;i<this.selList.length;i++){
            //长度超过2
            if(this.selList[i].matchnum==this.matchnumItem){
                var index = i;
                this.selList.splice(index, 1);
                var delIndex= this.newArr.indexOf(this.matchnumItem);
                this.newArr.splice(delIndex, 1) //将场次编号数组中删除该项
              }
            
          }
              console.log('超过2selList',this.selList,this.newArr)
          
        }else{
          //如果matchIndex!='',代表新增或切换选项
          //新增
          if(this.newArr.indexOf(this.matchnumItem)==-1){
          //超过两场提示
          console.log('newArr数量',this.newArr.length)
          if(this.newArr.length>=2){
            this.$vux.toast.show({
              type:'warn',
              text: '最多只能选择两场比赛！',
            })
            
            return false
          }
          this.newArr.push(this.matchnumItem)//添加到场次编号列表
          console.log('新增后',this.newArr)
          //未添加过，添加到已选列表
          this.selList.push({
            matchnum:val.split('/')[0],
            forceval:Arr.join('')
          })
        }else{
          //切换
           for(var i=0;i<this.selList.length;i++){
              if(this.selList[i].matchnum==this.matchnumItem){
                var changeIndex = i;//要切换的索引
                this.selList[changeIndex].forceval=Arr.join('')
              }
            }
        }
      }
    },
    onItemClick (value, disabled) {
      this.matchnumItem = value.split('/')[0]
      console.log("111111",this.matchnumItem,disabled)
      
            for(var i=0;i<this.orderList.length;i++){
              //达到选择最大长度
              if(this.newArr.length>=2){
                //新增情况下
                if(this.newArr.indexOf(this.matchnumItem)==-1 && this.orderList[i].matchnum==this.matchnumItem){
                    this.$set(this.orderList[i].bgColor, value.split('/')[1], true);
                    console.log('999999')
                }else{
                  //切换情况下
                  this.$set(this.orderList[i].bgColor, value.split('/')[1], false);
                  
                }
              
            }
          }
          
      // this.selList.push(value);
      // if(this.selList.length>2) {
      //   this.$vux.toast.show({
      //     type:'warn',
      //     text: '最多只能选择两场比赛！',
      //   })
      // }

    },
    setOrder(){
      this.$router.push("/set-order")
    }
  },
  mounted(){
    this.orderList=[
      {
        awayteam: "菲律宾",
        awayteampic: "菲律宾",
        hometeam: "吉尔吉斯",
        hometeampic: "吉尔吉斯",
        league: "亚洲杯",
        matchnum: "20190116029",
        matchtime: "2019-01-16 21:30:00",
        odds: ",3.90,3.52,1.70",
        weather: "",
        bgColor:['false','false','false','false','false','false']
      },
      {
        awayteam: "菲律宾",
        awayteampic: "菲律宾",
        hometeam: "吉尔吉斯",
        hometeampic: "吉尔吉斯",
        league: "亚洲杯",
        matchnum: "20190116030",
        matchtime: "2019-01-16 21:30:00",
        odds: ",3.90,3.52,1.70",
        weather: "",
        bgColor:['false','false','false','false','false','false']
        
      },
      {
        awayteam: "菲律宾",
        awayteampic: "菲律宾",
        hometeam: "吉尔吉斯",
        hometeampic: "吉尔吉斯",
        league: "亚洲杯",
        matchnum: "20190116031",
        matchtime: "2019-01-16 21:30:00",
        odds: ",3.90,3.52,1.70",
        weather: "",
        bgColor:['false','false','false','false','false','false']
        
      },
      {
        awayteam: "菲律宾",
        awayteampic: "菲律宾",
        hometeam: "吉尔吉斯",
        hometeampic: "吉尔吉斯",
        league: "亚洲杯",
        matchnum: "20190116032",
        matchtime: "2019-01-16 21:30:00",
        odds: ",3.90,3.52,1.70",
        weather: "",
        bgColor:['false','false','false','false','false','false']
      }
    ]
for(var i=0;i<this.orderList.length;i++){
        this.orderList[i].bgColor=[false,false,false,false,false,false]
      }

    // https.fetchPost('/match/forecastmatchlist.jsp',{} ).then((data) => {
    //   for(var i=0;i<data.data.list.length;i++){
    //     data.data.list[i].bgColor=[false,false,false,false,false,false]
    //   }
    //   this.orderList=data.data.list
    //   for(var i=0;i<this.orderList.length;i++){
    //     this.orderList[i].selNum=''
    //   }
    //   console.log(data.data)
    // }).catch(err=>{
    //       console.log(err)
    //   }
    // )
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
        .demo1-item-unsel {
          color: #7ba1d0;
          background: rgba(248, 249, 250, 1);
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

