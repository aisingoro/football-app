<template>
  <div class="internal-reference"
			 ref="scroll"
       v-infinite-scroll="loadMore"
       infinite-scroll-disabled="isDisableScroll"
       infinite-scroll-immediate-check="true"
       infinite-scroll-distance="10">
    <h1>独家内参</h1>
    <tab>
      <tab-item @on-item-click="onItemClick">{{yesterdayWeek}}<br>{{yesterday}}</tab-item>
      <tab-item selected
                @on-item-click="onItemClick">{{todayWeek}}<br>{{today}}</tab-item>
      <tab-item @on-item-click="onItemClick">{{tomorrowWeek}}<br>{{tomorrow}}</tab-item>
    </tab>
    <div class="internalList"
         v-for="(item,index) in internalList"
         :key="index">
      <div class="list-info">
        <div>
          <p>{{item.matchnumshow}}</p>
          <p>{{item.showntitle.split('(')[0]}}</p>
          <p>{{item.matchtime.substring(5,item.matchtime.length)}}</p>
          <!-- <p @click="showInfo(index)">分析
            <x-icon type="ios-arrow-down"
                    size="10"></x-icon>
          </p> -->
          <p @click="showInfo(index)">分析
            <x-icon v-if="!item.showInfoItem"
                    type="ios-arrow-down"
                    size="10"></x-icon>
            <x-icon v-if="item.showInfoItem"
                    type="ios-arrow-up"
                    size="10"></x-icon>
          </p>
        </div>
        <div @click="getInternalInfo(item.id,item.matchnum)">
          <div>
            <img :src="item.hometeampic" />
            <p>{{item.hometeam}}</p>
          </div>
          <div>
            <img src="../../public/images/index-vs.png" />
            <p>未开赛</p>
          </div>
          <div>
            <img :src="item.awayteampic" />
            <p>{{item.awayteam}}</p>
          </div>
        </div>
        <img src="../../public/images/internal-badge.png" />
      </div>
      <div class="show-info"
           v-if="item.showInfoItem">

        <img class="show-list-up"
             src="../../public/images/inter-list-up.png" />
        <div>
          <p>大概率事件结果对比：</p>
          <div>
            <div>胜
              <span>{{item.details.bigprobabilityevents.open.split(",")[0]}}%</span>
            </div>
            <div>平
              <span>{{item.details.bigprobabilityevents.open.split(",")[1]}}%</span>
            </div>
            <div>负
              <span>{{item.details.bigprobabilityevents.open.split(",")[2]}}%</span>
            </div>
          </div>
          <p>结果指数：</p>
          <div>
            <div>
              <x-circle :percent="Number(item.details.resultindex.split(',')[0].split(':')[1])"
                        :stroke-width="6"
                        :trail-width="6"
                        trail-color="rgba(255,67,89,0.1)"
                        stroke-color="#FF4359">
                <span class="circle-bg">{{ item.details.resultindex.split(",")[0].split(":")[1] }}%</span>
              </x-circle>
              {{item.details.resultindex.split(",")[0].split(":")[0]}}
            </div>
            <div>
              <x-circle :percent="Number(item.details.resultindex.split(',')[1].split(':')[1])"
                        :stroke-width="6"
                        :trail-width="6"
                        trail-color="rgba(255,67,89,0.1)"
                        stroke-color="#FF4359">
                <span class="circle-bg">{{item.details.resultindex.split(",")[1].split(":")[1]}}%</span>
              </x-circle>
              {{item.details.resultindex.split(",")[1].split(":")[0]}}
            </div>
            <div>
              <x-circle :percent="Number(item.details.resultindex.split(',')[2].split(':')[1])"
                        :stroke-width="6"
                        :trail-width="6"
                        trail-color="rgba(109,194,29,0.1)"
                        stroke-color="#6DC21D">
                <span class="circle-bg">{{ item.details.resultindex.split(',')[2].split(':')[1] }}%</span>
              </x-circle>
              {{item.details.resultindex.split(",")[2].split(":")[0]}}
            </div>
            <div>
              <x-circle :percent="Number(item.details.resultindex.split(',')[3].split(':')[1])"
                        :stroke-width="6"
                        :trail-width="6"
                        trail-color="rgba(109,194,29,0.1)"
                        stroke-color="#6DC21D">
                <span class="circle-bg">{{ item.details.resultindex.split(',')[3].split(':')[1] }}%</span>
              </x-circle>
              {{item.details.resultindex.split(',')[3].split(':')[0]}}
            </div>
          </div>
          <div>
            <!-- <div>{{item.details.scoreindex.split(',')[0].split('(')[0]}}
              <span>{{item.details.scoreindex.split(',')[0].split('(')[1].slice(0,item.details.scoreindex.split(',')[0].split('(')[1].length-1)}}</span>
            </div>
            <div>{{item.details.scoreindex.split(',')[1].split('(')[0]}}
              <span>{{item.details.scoreindex.split(',')[1].split('(')[1].slice(0,item.details.scoreindex.split(',')[1].split('(')[1].length-1)}}</span>
            </div>
            <div>{{item.details.scoreindex.split(',')[2].split('(')[0]}}
              <span>{{item.details.scoreindex.split(',')[2].split('(')[1].slice(0,item.details.scoreindex.split(',')[2].split('(')[1].length-1)}}</span>
            </div> -->
          </div>
          <p>爆冷指数：</p>
          <div class="range">
            <div class="range-info"
                 :style="{ width:item.details.coldindex  }"></div>
          </div>
          <!-- <span>{{item.details.coldindex}}</span> -->
          <span class="more"
                @click="getInternalInfo(item.id,item.matchnum)">查看完整版>></span>
        </div>
      </div>
    </div>
    <load-more tip="正在加载"
               :show-loading="true"
               v-show="loading"></load-more>
    <load-more v-show="noData"
               :show-loading="false"
               tip="暂无更多数据"
               background-color="#fbf9fe"></load-more>
  </div>
</template>

<script>
import {XCircle,Tab,TabItem,LoadMore} from 'vux'
import https from '../https.js'
export default {
  components: {
    XCircle,
    Tab,
		TabItem,
		LoadMore
  },
  data(){
    return{
      dayVal:'',
      yesterdayWeek:'',
      yesterday:'',
      todayWeek:'',
      today:'',
      tomorrowWeek:'',
      tomorrow:'',
      percent:55,
			internalList:[1,2,3,4,5,6],
			page: 1, // 分页页数
			matchtime: '', // 入参日期
			isDisableScroll: false, // 是否禁用滚动分页
			isCompleted: false, // 是否继续加载
			loading: false,
			noData: false,
			scrollTop: 0
    }
  },
  methods:{
    //请求切换日期渲染对应比赛列表
    changeMatch(page, matchtime, type){
      https.fetchPost('/match/neican.jsp',{
				page,
				matchtime
			} ).then((data) => {
				this.isDisableScroll = false
				if (type === 'init') {
					this.internalList = data.data.list || []
				} else {
					this.loading = true
					this.internalList = this.internalList.concat(data.data.list) || []
				}
				for (var i =0;i<this.internalList.length;i++){
          this.internalList[i].showInfoItem=false
				}
				if (!data.data.list.length) {
					this.isCompleted = true
					this.loading = false
					this.noData = true
				}
      }).catch(err=>{
				console.log(err)
				this.isDisableScroll = false
			}
      )
    },
    onItemClick(index){
			this.GetDateStr(index-1);
			this.page = 1; // 切换tab的时候 重置page页数为第一页
			this.isCompleted = false
			this.noData = false
      this.changeMatch(this.page, this.dayVal, 'init')
    },
    getInternalInfo(index,matchnum){
      console.log(index)
      this.$store.commit('setInternalInfoItem',index)
      this.$store.commit('setMatchnum',matchnum)

      console.log("store",this.$store.state.internalInfoItem)
      this.$router.push('/internal-info')
    },
    showInfo(index){
    var obj = this.internalList[index];
    var showItem=this.internalList[index].showInfoItem;

    console.log("赋值前",obj.showInfoItem)
      for(var i=0;i<this.internalList.length;i++){
        this.internalList[i].showInfoItem=false;
      }
      console.log("赋值中",obj.showInfoItem)
      obj.showInfoItem = !showItem;
    console.log("赋值后",obj.showInfoItem)

    this.$set(this.internalList, index, obj);


		},
		// 加载更多
		loadMore () {
			if (this.isCompleted) return
			this.isDisableScroll = true
			let page = ++this.page
			this.changeMatch(page, this.dayVal, 'loadMore')
		},
  //获取日期方法
    GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = (dd.getMonth()+1).toString();//获取当前月份的日期
        var d = dd.getDate().toString();
        var day = dd.getDay();
        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var week = arr_week[day];
        if(m.length<=1){
            m='0'+m;
        }
        if(d.length<=1){
            d='0'+d;
        }
        this.dayVal=y+m+d;
        console.log("dayVal",this.dayVal)
        return m+"-"+d+'/'+week;
		},
		handelscroll(e) {
			this.scrollTop = e.target.scrollTop
			console.log(this.scrollTop)
		}

	},
	beforeRouteLeave (to, from , next) {
		if (to.name === 'internal-info') {
				sessionStorage.setItem('scrollTop', this.scrollTop)
				next()
		} else {
			sessionStorage.setItem('scrollTop', 0)
				next()
		}
	},
  mounted () {
    this.yesterdayWeek=this.GetDateStr(-1).split('/')[0];
    this.yesterday=this.GetDateStr(-1).split('/')[1];
    this.todayWeek=this.GetDateStr(0).split('/')[0];
    this.today=this.GetDateStr(0).split('/')[1];
    this.tomorrowWeek=this.GetDateStr(1).split('/')[0];
    this.tomorrow=this.GetDateStr(1).split('/')[1];
		this.changeMatch(this.page, '', 'init')
		document.addEventListener('scroll',this.handelscroll, true)
		setTimeout(() => {
			let internal = this.$refs.scroll
			console.log('=========>' + internal)
			internal.scrollTop = document.documentElement.scrollTop = window.pageYOffset =sessionStorage.getItem('scrollTop')
  	}, 200)
	},
	created() {
	}
}
</script>

<style lang="scss" scoped>
.internal-reference {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  background: #f8f9fa;
  padding-bottom: 22px;
  // margin-top: 46px;
  & > h1 {
    padding-left: 16px;
    padding-top: 7px;
    padding-bottom: 7px;
    font-size: 22px;
    font-weight: 500;
    color: #313233;
    background: #fff;
    // position: fixed;
    // left: 0;
    // top: 0;
    // z-index: 9999;
  }
  .vux-tab-wrap {
    margin-bottom: 26px;
  }
  .vux-tab .vux-tab-item.vux-tab-selected {
    color: #0393f8;
    border-bottom: none;
  }

  .internalList {
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    .list-info {
      clear: both;
      width: 91.5%;
      height: 96px;
      margin: 0 auto;
      & > img {
        position: absolute;
        width: 60px;
        height: 20px;
        right: 0;
        top: -7px;
      }
      & > div:first-child {
        float: left;
        width: 22%;
        overflow: hidden;
        p {
          font-size: 12px;
          color: #7ba1d0;
          margin-top: 2px;
          font-family: 'PingFangSC-Regular';
        }
        & > p:first-child,
        :last-child {
          color: #313233;
          margin-top: 5px;
          font-family: 'PingFangSC-Medium';
        }
        & > p:last-child {
          margin-top: 10px;
          font-family: 'PingFangSC-Regular';
        }
      }
      & > div:nth-child(2) {
        margin-bottom: 12px;
        float: right;
        width: 77%;
        height: 100%;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid rgba(239, 245, 246, 1);
        & > div {
          float: left;
          width: 70px;
          margin-left: 16px;
          img {
            display: block;
            width: 36px;
            margin: 0 auto;
            margin-top: 18px;
          }
          p {
            font-size: 14px;
            color: #313233;
            text-align: center;
            margin-top: 3px;
          }
          &:nth-child(2) {
            img {
              margin-top: 27px;
              margin-bottom: 11px;
            }
            p {
              color: #b4cae5;
              font-family: 'PingFangSC-Regular';
            }
          }
        }
      }
    }
    .show-info {
      clear: both;
      width: 100%;
      height: 328px;
      background: #e1e7ef;
      & > div {
        width: 91.5%;
        margin: 0 auto;
        overflow: hidden;
        & > p {
          font-size: 14px;
          color: #313233;
          margin-top: 22px;
        }
        & > div:nth-of-type(1) {
          display: flex;
          margin-top: 10px;
          div {
            flex: 1;
            height: 36px;
            margin-right: 11px;
            background: rgba(248, 249, 250, 1);
            border-radius: 6px;
            border: 1px solid rgba(220, 226, 234, 1);
            text-align: center;
            line-height: 36px;
            font-size: 16px;
            span {
              color: #ff6500;
              margin-left: 5px;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
        & > div:nth-of-type(2) {
          display: flex;
          margin-top: 10px;
          & > div {
            flex: 1;
            margin-right: 26px;
            text-align: center;
            font-size: 12px;
            color: #313233;
            &:last-child {
              margin-right: 0;
            }
            .vux-circle {
              width: 48px;
              height: 48px;
              margin: 5px auto;
              .circle-bg {
                display: block;
                margin: 5px auto;
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background: #ffffff;
                line-height: 38px;
              }
            }
          }
        }
        & > div:nth-of-type(3) {
          display: flex;
          margin-top: 10px;
          border-radius: 6px;
          overflow: hidden;
          & > div {
            flex: 1;
            height: 36px;
            background: #fff;
            border-right: 1px solid #d0d8e2;
            text-align: center;
            line-height: 36px;
            font-size: 14px;
            span {
              color: #ff6500;
              margin-left: 5px;
            }
            &:last-child {
              border-right: none;
            }
          }
        }
        .range {
          float: left;
          margin-top: 10px;
          width: 167px;
          height: 10px;
          background: rgba(248, 249, 250, 1);
          border-radius: 18px;
          overflow: hidden;
          .range-info {
            width: 107px;
            height: 100%;
            background: linear-gradient(
              270deg,
              rgba(255, 203, 8, 1) 0%,
              rgba(255, 165, 36, 1) 100%
            );
            border-radius: 18px;
          }
        }
        .more {
          margin-top: 5px;
          font-size: 14px;
          color: #313233;
          float: right;
          font-family: PingFangSC-Regular;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.internal-reference .vux-tab-ink-bar {
  background-color: #fff !important;
}

.internal-reference .weui-loadmore {
  margin: 10px auto;
}
.internal-reference .vux-tab .vux-tab-item {
  background: none;
  line-height: inherit;
}
.internal-reference .vux-tab .vux-tab-item:after {
  content: '|';
  color: #e0e7ed;
  float: right;
  margin-top: -10px;
}
.internal-reference .vux-tab .vux-tab-item {
  &:nth-child(3) {
    &:after {
      content: '';
      color: #e0e7ed;
      float: right;
    }
  }
}
.show-info {
  position: relative;
  margin-top: 20px;
}
.show-list-up {
  position: absolute;
  top: -10px;
  left: 20px;
  width: 20px;
  height: 10px;
}
</style>
