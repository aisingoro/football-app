<template>
  <div class="public-info">
    <h3>联赛积分排名</h3>
    <div class="team-position">
      <div class="home-team">
        <h3>主队</h3>
        <div class="bg-empty"></div>
        <!-- <p>{{openHomeInfo.position}}</p> -->
        <p>{{openInfo.home.position==''?'--':openInfo.home.position}}</p>
        <p>{{openInfo.home.matchesplayed==''?'--':openInfo.home.matchesplayed}}</p>
        <p>{{openInfo.home.points==''?'--':openInfo.home.points}}</p>
        <p>{{openInfo.home.goalfor==''?'--':openInfo.home.goalfor}}</p>
        <p>{{openInfo.home.goalagainst==''?'--':openInfo.home.goalagainst}}</p>
        <p>{{openInfo.home.goaldiff==''?'--':openInfo.home.goaldiff}}</p>
        <p>
          <span :class="item=='L'?'lose':(item=='D'?'draw':'')"
                v-for="(item,index) in openInfo.home.lastmatches.split(',')"
                :key="index">{{item}}</span>
        </p>
        <p>
          <span :class="item=='L'?'lose':(item=='D'?'draw':'')"
                v-for="(item,index) in openInfo.home.lasthomematches.split(',')"
                :key="index">{{item}}</span>
        </p>
        <p>
          <span :class="item=='L'?'lose':(item=='D'?'draw':'')"
                v-for="(item,index) in openInfo.home.lastawaymatches.split(',')"
                :key="index">{{item}}</span>
        </p>
      </div>
      <div class="team-title">
        <img src="../../public/images/internal-icon.png" />
        <p>排名</p>
        <p>轮数</p>
        <p>得分</p>
        <p>进球</p>
        <p>失球</p>
        <p>净胜</p>
        <p>近5场</p>
        <p>近5主场</p>
        <p>近5客场</p>
      </div>
      <div class="away-team">
        <h3>客队</h3>
        <div class="bg-empty"></div>
        <p>{{openInfo.away.position==''?'--':openInfo.away.position}}</p>
        <p>{{openInfo.away.matchesplayed==''?'--':openInfo.away.matchesplayed}}</p>
        <p>{{openInfo.away.points==''?'--':openInfo.away.points}}</p>
        <p>{{openInfo.away.goalfor==''?'--':openInfo.away.goalfor}}</p>
        <p>{{openInfo.away.goalagainst==''?'--':openInfo.away.goalagainst}}</p>
        <p>{{openInfo.away.goaldiff==''?'--':openInfo.away.goaldiff}}</p>
        <p>
          <span :class="item=='L'?'lose':(item=='D'?'draw':'')"
                v-for="(item,index) in openInfo.away.lastmatches.split(',')"
                :key="index">{{item}}</span>
        </p>
        <p>
          <span :class="item=='L'?'lose':(item=='D'?'draw':'')"
                v-for="(item,index) in openInfo.away.lasthomematches.split(',')"
                :key="index">{{item}}</span>
        </p>
        <p>
          <span :class="item=='L'?'lose':(item=='D'?'draw':'')"
                v-for="(item,index) in openInfo.away.lastawaymatches.split(',')"
                :key="index">{{item}}</span>
        </p>
      </div>
    </div>
    <h3>赔率指数</h3>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#fff;"
             class="table-bg-fff">
      <thead>
        <tr>
          <th style="width:95px;">公司名称</th>
          <th style="width:43px;"></th>
          <th>胜</th>
          <th>平</th>
          <th>负</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in openInfo.baseodds"
            :key="index">
          <td style="text-align:left;padding-left:20px;">{{item.source}}</td>
          <td></td>
          <td class="win-col">{{item.win}}<br>{{openInfo.nowodds[index].win}}</td>
          <td class="draw-col">{{item.draw}}<br>{{openInfo.nowodds[index].draw}}</td>
          <td class="lose-col">{{item.loose}}<br>{{openInfo.nowodds[index].loose}}</td>
        </tr>

      </tbody>
    </x-table>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#fff"
             class="table-bg-fff">
      <thead>
        <tr>
          <th style="width:95px;">公司名称</th>
          <th style="width:43px;">让</th>
          <th>让胜</th>
          <th>让平</th>
          <th>让负</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in openInfo.letbaseodds"
            :key="index">
          <td style="text-align:left;padding-left:20px;">{{item.source}}</td>
          <td>{{openInfo.handicap}}</td>
          <td class="win-col">{{item.win}}<br>{{openInfo.letnowodds[index].win}}</td>
          <td class="draw-col">{{item.draw}}<br>{{openInfo.letnowodds[index].draw}}</td>
          <td class="lose-col">{{item.loose}}<br>{{openInfo.letnowodds[index].loose}}</td>
        </tr>
      </tbody>
    </x-table>
    <h3>亚盘指数</h3>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#F2F5F8;">
      <thead>
        <tr>
          <th>来源</th>
          <th>主队</th>
          <th>水位</th>
          <th>让球</th>
          <th>客队</th>
          <th>水位</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in openInfo.macaohandicap"
            :key="index">
          <td style="text-align:left;padding-left:20px;">{{item.source}}</td>
          <td>{{item.sp}}</td>
          <td :class="item.spupdown=='升'?'win-col':(item.spupdown=='平'?'draw-col':'lose-col')">{{item.spupdown}}</td>
          <td>{{item.pk}}</td>
          <td>{{item.xp}}</td>
          <td :class="item.xpupdown=='升'?'win-col':(item.xpupdown=='平'?'draw-col':'lose-col')">{{item.xpupdown}}</td>
        </tr>
      </tbody>
    </x-table>
    <h3>大小球</h3>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#F2F5F8;">
      <thead>
        <tr>
          <th>来源</th>
          <th>小球</th>
          <th>水位</th>
          <th>让球</th>
          <th>大球</th>
          <th>水位</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in openInfo.macaoball"
            :key="index">
          <td style="text-align:left;padding-left:20px;">{{item.source}}</td>
          <td>{{item.sp}}</td>
          <td :class="item.spupdown=='升'?'win-col':(item.spupdown=='平'?'draw-col':'lose-col')">{{item.spupdown}}</td>
          <td>{{item.pk}}</td>
          <td>{{item.xp}}</td>
          <td :class="item.xpupdown=='升'?'win-col':(item.xpupdown=='平'?'draw-col':'lose-col')">{{item.xpupdown}}</td>
        </tr>
      </tbody>
    </x-table>
    <h3>历史交战
    </h3>
    <p>
      近{{Number(openInfo.hisclashcount.win)+Number(openInfo.hisclashcount.loose)+Number(openInfo.hisclashcount.drawn)}}场交战，{{hometeam}}
      <span>{{openInfo.hisclashcount.win}}胜</span>{{openInfo.hisclashcount.drawn}}平
      <span>{{openInfo.hisclashcount.loose}}负</span> 胜率{{openInfo.hisclashcount.percentage}}%
    </p>
    <p></p>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#F2F5F8;">
      <thead>
        <tr>
          <th>赛事</th>
          <th>主队</th>
          <th>比分</th>
          <th>客队</th>
          <th>赛果</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in openInfo.hisclash"
            :key="index">
          <td style="line-height:14px;color:#A3ADB7;font-size:0.6rem;">{{item.leaguename}}<br> {{item.matchtime.split(" ")[0]}}</td>
          <td>{{item.home}}</td>
          <td>{{item.finalyscore}}({{item.halfscore}})</td>
          <td>{{item.away}}</td>
          <td>
            <div :class="item.result=='主胜'?'result-win':(item.result=='客胜'?'result-lose':'result-draw')">{{item.result=='主胜'?'胜':(item.result=='客胜'?'负':'平')}}</div>
          </td>
        </tr>
      </tbody>
    </x-table>
    <h3>近期战绩
    </h3>
    <p>近{{hometeam}}
      <span>{{openInfo.homerecentcount.win}}胜</span>{{openInfo.homerecentcount.drawn}}平
      <span>{{openInfo.homerecentcount.loose}}负</span> 胜率{{openInfo.homerecentcount.percentage}}%
    </p>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#F2F5F8;">
      <thead>
        <tr>
          <th>赛事</th>
          <th>主队</th>
          <th>比分</th>
          <th>客队</th>
          <th>赛果</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in openInfo.homerecent"
            :key="index">
          <td style="line-height:14px;color:#A3ADB7;font-size:0.6rem;">{{item.leaguename}}<br> {{item.matchtime.split(" ")[0]}}</td>
          <td>{{item.home}}</td>
          <td>{{item.finalyscore}}({{item.halfscore}})</td>
          <td>{{item.away}}</td>
          <td>
            <div :class="item.result=='主胜'?'result-win':(item.result=='客胜'?'result-lose':'result-draw')">{{item.result=='主胜'?'胜':(item.result=='客胜'?'负':'平')}}</div>
          </td>
        </tr>
      </tbody>
    </x-table>
    <h3>近期战绩
    </h3>
    <p>近{{awayteam}}
      <span>{{openInfo.awayrecentcount.win}}胜</span>{{openInfo.awayrecentcount.drawn}}平
      <span>{{openInfo.awayrecentcount.loose}}负</span> 胜率{{openInfo.awayrecentcount.percentage}}%
    </p>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#F2F5F8;">
      <thead>
        <tr>
          <th>赛事</th>
          <th>主队</th>
          <th>比分</th>
          <th>客队</th>
          <th>赛果</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in openInfo.awayrecent"
            :key="index">
          <td style="line-height:14px;color:#A3ADB7;font-size:0.6rem;">{{item.leaguename}}<br> {{item.matchtime.split(" ")[0]}}</td>
          <td>{{item.home}}</td>
          <td>{{item.finalyscore}}({{item.halfscore}})</td>
          <td>{{item.away}}</td>
          <td>
            <div :class="item.result=='主胜'?'result-win':(item.result=='客胜'?'result-lose':'result-draw')">{{item.result=='主胜'?'胜':(item.result=='客胜'?'负':'平')}}</div>
          </td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script>
import { XTable } from 'vux'
export default {
  components: {
    XTable
  },
  props: {
    openInfo:{
      type:Object
    },
    hometeam:{
      type:String
    },
    awayteam:{
      type:String
    }
  },
  data(){
    return{
      openHomeInfo:{},
      openAwayInfo:{},
      homelastmatches:[],
      homelasthomematches:[],
      homelastawaymatches:[],
      awaylastmatches:[],
      awaylasthomematches:[],
      awaylastawaymatches:[],
      hisclashcount:{},
      homerecentcount:{},
      awayrecentcount:{}
      // openInfo:openInfo
    }
  },
  watch: {
    openInfo: function(newVal,oldVal){
      
      console.log("9999",newVal.hisclashcount)
        this.openHomeInfo = newVal.home; 
        this.openAwayInfo = newVal.away;
        this.homelastmatches = newVal.home.lastmatches.split(',');
        this.awaylastmatches = newVal.away.lastmatches.split(',')
      this.homelasthomematches = newVal.home.lasthomematches.split(',')
      this.homelastawaymatches = newVal.home.lastawaymatches.split(',')
      this.awaylasthomematches = newVal.away.lasthomematches.split(',')
      this.awaylastawaymatches = newVal.away.lastawaymatches.split(',')
      this.hisclashcount = newVal.hisclashcount
      this.homerecentcount = newVal.homerecentcount;
      this.awayrecentcount = newVal.awayrecentcount;
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
.public-info {
  background: #ffffff;
  width: 100%;
  overflow: hidden;
  .team-position {
    display: flex;
    margin-top: 12px;
    .home-team,
    .team-title,
    .away-team {
      flex: 1;
      text-align: center;
      h3 {
        width: 100%;
        height: 36px;
        background: rgba(54, 101, 172, 1);
        border-radius: 6px 6px 0px 0px;
        color: #fff;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
      p {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(54, 101, 172, 1);
        margin-bottom: 22px;
        span {
          display: inline-block;
          width: 18px;
          height: 18px;
          color: #fff;
          line-height: 18px;
          text-align: center;
          border-radius: 50%;
          background: #ff4359;
          font-size: 10px;
          font-family: PingFangSC-Regular;
          margin-left: 3px;
        }
        .lose {
          background: #6dc21d;
        }
        .draw {
          background: #3665ac;
        }
      }
    }
    .home-team {
      margin-left: 16px;
      .bg-empty {
        width: 100%;
        height: 32px;
        background: linear-gradient(
          360deg,
          rgba(102, 158, 214, 0) 0%,
          rgba(54, 101, 172, 1) 100%
        );
        opacity: 0.1047;
      }
    }
    .team-title {
      img {
        width: 32px;
        height: 36px;
        margin: 0 auto;
        margin-bottom: 25px;
      }
      p {
        color: #313233;
      }
    }
    .away-team {
      margin-right: 16px;
      h3 {
        background: #42546f;
      }
      .bg-empty {
        width: 100%;
        height: 32px;
        background: linear-gradient(
          360deg,
          rgba(66, 84, 111, 0) 0%,
          rgba(66, 84, 111, 1) 100%
        );
        opacity: 0.1047;
      }
      p {
        color: #42546f;
      }
    }
  }
  & > h3 {
    font-size: 16px;
    margin-left: 16px;
    margin-top: 25px;
    span {
      font-size: 12px;
      padding: 3px 7px;
      border-radius: 11px;
      border: 1px solid rgba(231, 239, 240, 1);
      float: right;
      margin-right: 15px;
    }
  }
  & > p {
    margin-left: 16px;
    margin-top: 24px;
    margin-bottom: 10px;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(49, 50, 51, 1);
    & > span:first-child {
      color: #ff2503;
    }
    & > span:nth-child(2) {
      color: #70d23e;
    }
    &:nth-of-type(2) {
      margin-top: 0px;
      margin-bottom: 10px;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(163, 173, 183, 1);
    }
  }
  .desc {
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(163, 173, 183, 1);
  }
  .vux-table td:before,
  .vux-table th:before {
    border-bottom: none;
  }
  .table-bg-fff {
    margin-top: 0px;
    tbody {
      tr {
        border-bottom: 1px solid #e7ebf0;
        padding-left: 16px;
        td {
          line-height: 20px;
          padding: 5px 0;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }

    thead {
      height: 28px;
      line-height: 28px;
      background: #f2f5f8;
      color: #a3adb7;
    }
  }
  .vux-table:after {
    border-top: none;
  }
  .vux-table {
    margin-top: 10px;
    thead {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(163, 173, 183, 1);
    }
    tbody {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(49, 50, 51, 1);
      // tr {
      //   td:first-child {
      //     text-align: left;
      //     padding-left: 15px;
      //   }
      // }
      .result-lose {
        margin: 0 auto;
        width: 36px;
        height: 20px;
        line-height: 20px;
        background: #70d23e;
        border-radius: 10px;
        color: #fff;
      }
      .result-win {
        margin: 0 auto;
        width: 36px;
        height: 20px;
        line-height: 20px;
        background: #ff2503;
        border-radius: 10px;
        color: #fff;
      }
      .result-draw {
        margin: 0 auto;
        width: 36px;
        height: 20px;
        line-height: 20px;
        background: #fff;
        border-radius: 10px;
        color: #313233;
      }
    }
  }
}
.win-col {
  color: #ff4359;
}
.draw-col {
  color: #3665ac;
}
.lose-col {
  color: #6dc21d;
}
</style>
