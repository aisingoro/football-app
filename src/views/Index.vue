<template>
  <div class="index">
    <swiper :list="swiperList"
            :auto=true
            style="width:100%;margin:0 auto;"
            :aspect-ratio="150/343"
            dots-position="center"></swiper>
    <group class="maqueen">
      <cell>
        <img slot="icon"
             src="../../public/images/maqueen.png"
             width=18
             height=16/>
        <marquee>
          <marquee-item v-for="i in 5"
                        :key="i"
                        @click.native="onClick(i)">小球仙线，敬请期待！ {{i}}</marquee-item>
        </marquee>
      </cell>
    </group>
    <div class="index-info"
         v-if="flag">
      <!-- // . -->
      <h2 class="title-internal">独家内参
        <span @click="goInternal">更多></span>
      </h2>
      <div class="internalList"
           v-for="(item,index) in matchlist"
           :key="index"
           @click="goInfo(item.id)">
        <img src="../../public/images/index-badge.png"
             class="badge"
             v-if="item.paytype==0" />
        <h3>{{item.matchnumshow}}
          <span></span>
          <span>{{item.showntitle.split('(')[0]}} {{item.matchtime.substring(5,item.matchtime.length)}}</span>
        </h3>
        <div>
          <div style="display:flex;width:100%;">
            <div style="flex:1">
              <img :src="item.hometeampic" />
              <p>{{item.hometeam}}</p>
            </div>
            <div style="flex:1">
              <img src="../../public/images/index-vs.png"
                   style="width:47px;height:24px;" />
              <p>{{item.kickoff}}</p>
              <!-- <p>{{item.matchtime}}</p> -->
            </div>
            <div style="flex:1">
              <img :src="item.awayteampic" />
              <p>{{item.awayteam}}</p>
            </div>
          </div>

          <div class="weather-info">
            <div>
              <div><img src="../../public/images/weather-01.png"
                     class="weather-icon" />{{item.weather.split(',')[0]}}</div>
            </div>
            <div>
              <div><img src="../../public/images/weather-02.png"
                     class="weather-icon" />{{item.weather.split(',')[1]}}</div>
            </div>
            <div>
              <div><img src="../../public/images/weather-03.png"
                     class="weather-icon" />{{item.weather.split(',')[2]}}</div>
            </div>
          </div>
        </div>

      </div>
      <h3 class="index-title">竞彩7日赛果分布<img src="../../public/images/index-question.png" /></h3>
      <div class="seven-result">
        <div v-for="(item,index) in resultdistributionlist"
             :key="index">
          <div>
            <x-circle :percent="Number(item.showvaule1)"
                      :stroke-width="5"
                      :stroke-color="item.showtitle1.indexOf('胜')!==-1?'#FF4359':'#6DC21D'">
              <span class="circle-bg circle-win"
                    :class="item.showtitle1.indexOf('胜')!==-1?'circle-win':'circle-lose'">{{item.showvaule1}}%</span>
            </x-circle>
            {{ item.showtitle1}}
          </div>
          <div>
            <x-circle :percent="Number(item.showvaule2)"
                      :stroke-width="5"
                      :stroke-color="item.showtitle2.indexOf('胜')!==-1?'#FF4359':'#6DC21D'">
              <span class="circle-bg circle-win"
                    :class="item.showtitle2.indexOf('胜')!==-1?'circle-win':'circle-lose'">{{item.showvaule2}}%</span>
            </x-circle>
            {{ item.showtitle2 }}
          </div>
          <p class="result-badge">{{item.showtitle}}</p>
        </div>
      </div>
      <h3 class="index-title">真实赔率与竞彩赔率对比<img src="../../public/images/index-question.png" /></h3>
      <x-table :cell-bordered="false"
               :content-bordered="false"
               style="background-color:#fff;"
               v-for="(item,index) in oddsratiocomparisonlist"
               :key="index">
        <thead>
          <tr class="tr-style">
            <th style="width:100px;">{{item.matchnumshow}}</th>
            <th v-for="(items,indexs) in item.showtitle.split(',')"
                :key="indexs">{{items}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(items,indexs) in item.showvalue1.split(',')"
                :key="indexs">{{items}}</td>
          </tr>
          <tr>
            <td v-for="(items,indexs) in item.showvalue2.split(',')"
                :key="indexs">{{items}}</td>
          </tr>
        </tbody>
      </x-table>
      <div class="all-match"
           @click="showAllMatch">查看全部比赛</div>
    </div>
    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox"
                hide-on-blur
                class="dialog-demo"
                @on-hide="closeDialog">
        <p class="dialog-title">全部比赛竞彩赔率</p>
        <div v-infinite-scroll="loadMore"
             infinite-scroll-disabled="isDisableScroll"
             infinite-scroll-immediate-check="true"
             infinite-scroll-distance="10"
             class="img-box"
             style="height:400px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;background-color: #f8f9fa;">
          <x-table :cell-bordered="false"
                   :content-bordered="false"
                   style="background-color:#fff;"
                   v-for="(item,index) in allMatchList"
                   :key="index"
                   @click.native="goMatchDetail(item.id)">
            <thead>
              <tr class="tr-style">
                <th style="width:80px;">{{item.matchnumshow}}</th>
                <th v-for="(items,indexs) in item.showtitle.split(',')"
                    :key="indexs">{{items}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td v-for="(items,indexs) in item.showvalue1.split(',')"
                    :key="indexs">{{items}}</td>
              </tr>
              <tr>
                <td v-for="(items,indexs) in item.showvalue2.split(',')"
                    :key="indexs">{{items}}</td>
              </tr>
            </tbody>
          </x-table>
          <load-more tip="正在加载"
                     :show-loading="true"
                     v-show="loading"></load-more>
          <load-more v-show="noData"
                     :show-loading="false"
                     tip="暂无更多数据"
                     background-color="#fbf9fe"></load-more>
        </div>
        <div @click="closeDialog">
          <x-icon type="ios-close-outline"
                  size="30"></x-icon>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import https from '../https.js'
import {LoadMore,Group, Cell, Marquee, MarqueeItem,Swiper,XCircle,XTable,XDialog,TransferDomDirective as TransferDom } from 'vux'
const baseList = [{
        url: 'javascript:',
        img: require('../../public/images/index-swiper-01.png'),
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
      }, {
        url: 'javascript:',
        img: require('../../public/images/index-swiper-01.png'),
      }]
export default {
  directives: {
    TransferDom
  },
  components: {
    Swiper,XCircle,XTable,XDialog,Group, Cell, Marquee, MarqueeItem,LoadMore
  },
  data(){
    return {
      page: 1, // 分页页数
			matchtime: '', // 入参日期
			isDisableScroll: false, // 是否禁用滚动分页
			isCompleted: false, // 是否继续加载
			loading: false,
			noData: false,
      resultdistributionlist:[],
      allMatchList:[],
      oddsratiocomparisonlist:[],
      showScrollBox:false,
      swiperList:baseList,
      percent:50,
      matchlist:[{
        matchnum:'周日001',
        showntitle:'国际A',
        hometeam:'哈萨克斯坦',
        hometeampic:require('../../public/images/index-team-01.png'),
        matchtime:'12-08 02:30',
        awayteam:'拉脱维亚',
        awayteampic:require('../../public/images/index-team-02.png'),
        paytype:0
      },{
        matchnum:'周日002',
        showntitle:'国际A',
        hometeam:'哈萨克斯坦',
        hometeampic:require('../../public/images/index-team-01.png'),
        matchtime:'12-08 02:30',
        awayteam:'拉脱维亚',
        awayteampic:require('../../public/images/index-team-02.png'),
        paytype:1
      },{
        matchnum:'周日003',
        showntitle:'国际A',
        hometeam:'哈萨克斯坦',
        hometeampic:require('../../public/images/index-team-01.png'),
        matchtime:'12-08 02:30',
        awayteam:'拉脱维亚',
        awayteampic:require('../../public/images/index-team-02.png'),
        paytype:1
			}],
			timer: null, // .
			endTime: '1551234316', // .
			flag: true // .
    }
  },
  mounted(){
    https.fetchPost('/index/index.jsp',{} ).then((data) => {
        console.log("结果啊啊啊啊",data.data)
        this.swiperList=data.data.bannerlist
        for(var i=0;i<this.swiperList.length;i++){
          this.swiperList[i].img=data.data.bannerlist[i].pic
        };
        this.matchlist=data.data.matchlist;//独家内参比赛列表
        this.oddsratiocomparisonlist = data.data.oddsratiocomparisonlist//真实赔率无数据
        this.resultdistributionlist = data.data.resultdistributionlist[0].showlist;//七日

		}).catch(err=>{
						console.log(err)
				}
		)
		this.progressCountDown() // .
  },
  methods:{
		// 开始倒计时
		progressCountDown () { // .
			this.timer = setInterval(() => {
			this.progressnowTime()
			}, 1000)
		},
		// 倒计时进度
		progressnowTime () { // .
			if (!this.endTime) return
			let leftSeconds = this.endTime - this.getTimestamp()
			if (leftSeconds <= 0) {
			leftSeconds = 0
			this.flag = false
			console.log('触发.....')
			clearInterval(this.timer)
			}
			let clock = this.formatTimestamp(leftSeconds)
			// console.log(clock)
		},
		// 格式化时间戳 hours | minutes | seconds
		formatTimestamp(time) { // .
			let hours = Math.floor(time / 3600)
			let minutes = Math.floor((time - hours * 3600) / 60)
			let seconds = Math.floor(time - hours * 3600 - minutes * 60)
			let timeArr = [hours, minutes, seconds]
			let clock = `${hours}小时${minutes}分${seconds}秒`
			return clock
		},
		// 获取当前时间10位时间戳
		getTimestamp() { // .
			let currentTime = new Date().getTime() + '';
			return currentTime.substr(0, 10);
		},
		// 左边补零
		padLeftZero(str) { // .
			return ('00' + str).substring(str.length);
		},
    goInternal(){
      this.$store.state.selIndex = 1;
      this.$router.push('/home/internal-reference')

    },
    goMatchDetail(e){
      this.$store.commit('setInternalInfoItem',e)
      this.$router.push('/internal-info')
    },
    goInfo(e){
      this.$store.commit('setInternalInfoItem',e)
      this.$router.push('/internal-info')
    },
    // 加载更多
		loadMore () {
			if (this.isCompleted) return
			this.isDisableScroll = true
			let page = ++this.page
			this.getList(page,'loadMore')
    },
    //关闭弹窗 重置分页
    closeDialog(){
      this.showScrollBox=false
      this.page = 1; // 切换tab的时候 重置page页数为第一页
			this.isCompleted = false
			this.noData = false
    },
    //请求全部比赛列表（分页）
    getList(page,type){
      https.fetchPost('/index/oddsratiolist.jsp',{page} ).then((data) => {
        console.log("ugc",data.data)
        //分页拼接
        this.isDisableScroll = false
				if (type === 'init') {
          this.allMatchList = data.data.oddsratiocomparisonlist || []
          console.log('ugcList1',this.allMatchList)

				} else {
          this.loading = true
          console.log('ugcList2',type,this.allMatchList)

          this.allMatchList = this.allMatchList.concat(data.data.oddsratiocomparisonlist) || []
          console.log('ugcList3',type,this.allMatchList)
				}
				for (var i =0;i<data.data.oddsratiocomparisonlist.length;i++){
          data.data.oddsratiocomparisonlist[i].showInfoItem=false
				}
				if (!data.data.oddsratiocomparisonlist.length) {
					this.isCompleted = true
					this.loading = false
					this.noData = true
				}
      }).catch(err=>{
				this.isDisableScroll = false
            console.log(err)
        }
      )
    },
    showAllMatch(page,type){
      this.showScrollBox = true
      this.getList(this.page,  'init')

    }
  }


}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: calc(100% - 53px);
  overflow: hidden;
  overflow-y: scroll;
  background: #f8f9fa;
  .index-info {
    width: 91.5%;
    margin: 0 auto;
    padding-bottom: 22px;
    .title-internal {
      font-size: 22px;
      color: #313233;
      font-weight: 500;
      margin-top: 17px;
      span {
        float: right;
        font-size: 14px;
        font-weight: 400;
        margin-top: 4px;
        font-family: PingFangSC-Regular;
      }
    }
    .internalList {
      position: relative;
      .badge {
        position: absolute;
        width: 76px;
        height: 53px;
        right: 5px;
        top: 0px;
      }
      h3 {
        margin-top: 8px;
        font-size: 14px;
        line-height: 32px;
        font-family: 'PingFangSC-Regular';
        font-weight: 400;

        span:first-child {
          display: inline-block;
          width: 3px;
          height: 12px;
          background: #0393f8;
          border-radius: 2px;
          margin: 0 3px;
        }
        span:nth-child(2) {
          color: #b4cae5;
          font-weight: 400;
          font-family: 'PingFangSC-Regular';
        }
      }
      .weather-info {
        clear: both;
        width: 96%;
        height: 36px;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        margin-top: 9px;
        border-top: 1px solid #f2f5f8;
        & > div {
          flex: 1;
          font-size: 14px;
          line-height: 36px;
          color: #7ba1d0;
          // text-align: center;
          div {
            text-align: center;
            .weather-icon {
              display: inline-block;
              vertical-align: top;
              width: 17px;
              height: 17px;
              margin-top: 11px;
              // margin-left: 4px;
              margin-right: 6px;
            }
          }
          &:nth-child(2) {
            flex: 1.2;
          }
        }
      }
      & > div {
        overflow: hidden;
        width: 100%;
        // height: 155px;
        background: #ffffff;
        box-shadow: 0px 0px 6px 0px rgba(54, 101, 175, 0.1);
        border-radius: 6px;
        & > div {
          // float: left;
          width: 70px;
          // margin-left: 30px;
          margin-right: 12px;
          // display: flex;
          flex: 1;
          img {
            display: block;
            width: 40px;
            height: 40px;
            margin: 0 auto;
            margin-top: 24px;
            margin-bottom: 9px;
          }
          p {
            font-size: 14px;
            text-align: center;
            margin: 0 auto;
          }
          & > div:nth-child(2) {
            img {
              width: 47px;
              height: 24px;
              margin-top: 34px;
              margin-bottom: 2px;
            }
            p {
              font-size: 12px;
              &:nth-child(2) {
                color: #b4cae5;
                margin-bottom: 12px;
                margin-top: 8px;
                font-family: 'PingFangSC-Regular';
              }
              &:nth-child(3) {
                color: #01d0ff;
                padding: 2px 6px;
                background: rgba(1, 208, 255, 0.1);
                border-radius: 10px;
              }
            }
          }
          &:nth-child(3) {
            margin-left: 18px;
            margin-right: none;
          }
          &:nth-child(4) {
            margin-left: 2%;
            clear: both;
            margin-right: none;
          }
        }
      }
    }
    .index-title {
      font-size: 18px;
      margin-top: 22px;
      margin-bottom: 11px;
      img {
        float: right;
        width: 18px;
        height: 18px;
      }
    }
    .seven-result {
      overflow: hidden;
      & > div {
        width: 167px;
        height: 98px;
        float: left;
        background: #ffffff;
        position: relative;
        border-radius: 6px;
        border: 1px solid rgba(238, 244, 246, 1);
        &:nth-child(2) {
          float: right;
        }
        & > div {
          float: left;
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          border-right: 1px solid #e9edf0;
          text-align: center;
          font-size: 14px;
          &:nth-of-type(2) {
            border-right: none;
          }
          .vux-circle {
            width: 48px;
            height: 48px;
            margin: 14px auto;
            margin-bottom: 8px;
            .circle-bg {
              display: block;
              margin: 4px auto;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              color: #ffffff;
              line-height: 40px;
            }
            .circle-win {
              background: #ff4359;
            }
            .circle-lose {
              background: #6dc21d;
            }
          }
        }
        .result-badge {
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -15px;
          width: 30px;
          height: 18px;
          text-align: center;
          font-size: 12px;
          line-height: 18px;
          background: #0393f8;
          color: #ffffff;
        }
        .result-badge-red {
          background: #ff4359;
        }
      }
    }
    .vux-table.vux-table-no-content-bordered tr:last-child td:before {
      border-bottom-width: 0 !important;
    }
    .all-match {
      margin: 0 auto;
      margin-top: 16px;
      width: 167px;
      height: 36px;
      background: rgba(255, 255, 255, 1);
      border-radius: 18px;
      color: #0393f8;
      font-size: 14px;
      text-align: center;
      line-height: 36px;
      font-family: PingFangSC-Regular;
    }
  }
}
</style>

<style lang="scss">
.index .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {
  display: none;
}
.index .vux-slider > .vux-indicator,
.vux-slider .vux-indicator-right {
  bottom: 0;
}
.index .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
  background: #274a83;
}
.index .vux-slider > .vux-indicator > a > .vux-icon-dot,
.vux-slider .vux-indicator-right > a > .vux-icon-dot {
  width: 7px;
  height: 7px;
}
.index .weui-dialog {
  width: 91.5%;
  height: 80%;
}
.index .vux-table {
  border-radius: 6px;
  overflow: hidden;
  margin-top: 12px;
  td {
    font-size: 12px;
    &:nth-child(2) {
      color: #ff4359;
      font-family: ArialMT;
    }
    &:nth-child(3) {
      font-family: ArialMT;
    }
    &:nth-child(4) {
      color: #70d23e;
      font-family: ArialMT;
    }
  }
}
.vux-table.vux-table-no-content-bordered tr:last-child td:before {
  border-bottom-width: 0;
}
.tr-style {
  width: 100%;
  height: 26px;
  background: #0393f8;
  border-radius: 6px 6px 0px 0px;
  font-size: 13px;
  color: #fff;
  line-height: 26px;
}
.dialog-title {
  height: 40px;
  line-height: 40px;
}
.img-box .vux-table {
  width: 91.5%;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 12px;
  th {
    font-size: 13px;
  }
  tbody {
    font-size: 12px;
  }
}
.img-box .vux-table.vux-table-no-content-bordered tr:last-child td:before {
  border-bottom-width: 0px;
}

.vux-marquee-box li {
  font-size: 12px;
}
.vux-marquee {
  height: 18px !important;
}
.maqueen {
  width: 90%;
  margin: 0 auto;
}
.maqueen .vux-cell-primary {
  flex: 0.1;
}
.maqueen .weui-cell__ft {
  text-align: left;
}
.maqueen .weui-cells:before {
  border-top: none;
}
.maqueen .weui-cells {
  border-radius: 6px 6px 0px 0px;
  overflow: hidden;
}
.index .vux-x-icon {
  fill: #d5d5d5;
}
</style>
<style>
</style>

