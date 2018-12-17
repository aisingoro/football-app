<template>
  <div class="internal-info">
    <div class="match-header">
      <x-header :left-options="{backText: ''}"
                title="内参详情"></x-header>
      <div class="internalList"
           v-for="(item,index) in matchlist"
           :key="index">
        <div>
          <div>
            <img :src="item.hometeampic" />
            <p>{{item.hometeam}}</p>
          </div>
          <div>
            <img src="../../public/images/internal-info-vs.png" />
            <p>未开赛</p>
            <p>{{item.matchtime}}</p>
          </div>
          <div>
            <img :src="item.awayteampic" />
            <p>{{item.awayteam}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="button-tab">
      <button-tab v-model="btnTab">
        <button-tab-item>公共信息</button-tab-item>
        <button-tab-item>独家内参</button-tab-item>
      </button-tab>
      <swiper v-model="btnTab"
              :show-dots="false">
        <swiper-item>公共信息</swiper-item>

        <swiper-item>
          <div class="show-info">
            <div>
              <p>大概率事件结果对比：
                <span><img src="../../public/images/index-team-01.png" />自有赔率</span>
                <span><img src="../../public/images/index-team-01.png" />竞彩赔率</span>
              </p>
              <div>
                <div>
                  <span class="title">胜</span>
                  <div class="percent1">
                    <div class="percent-info">
                      <span>9.40</span>
                    </div>

                  </div>
                  <div class="percent1">
                    <div class="percent-info">
                      <span>7.10</span>
                    </div>

                  </div>
                </div>
                <div>
                  <span class="title">平</span>
                  <div class="percent1">
                    <div class="percent-info">
                      <span>9.40</span>
                    </div>

                  </div>
                  <div class="percent1">
                    <div class="percent-info">
                      <span>7.10</span>
                    </div>

                  </div>
                </div>
                <div>
                  <span class="title">负</span>
                  <div class="percent1">
                    <div class="percent-info">
                      <span>9.40</span>
                    </div>

                  </div>
                  <div class="percent1">
                    <div class="percent-info">
                      <span>7.10</span>
                    </div>

                  </div>
                </div>

              </div>
              <p>结果指数：</p>
              <div>
                <div>
                  <x-circle :percent="percent"
                            :stroke-width="6"
                            stroke-color="#01D0FF">
                    <span class="circle-bg">{{ percent }}%</span>
                  </x-circle>
                  胜让胜
                </div>
                <div>
                  <x-circle :percent="percent"
                            :stroke-width="6"
                            stroke-color="#01D0FF">
                    <span class="circle-bg">{{ percent }}%</span>
                  </x-circle>
                  胜让平
                </div>
                <div>
                  <x-circle :percent="percent"
                            :stroke-width="6"
                            stroke-color="#01D0FF">
                    <span class="circle-bg">{{ percent }}%</span>
                  </x-circle>
                  平让负
                </div>
                <div>
                  <x-circle :percent="percent"
                            :stroke-width="6"
                            stroke-color="#01D0FF">
                    <span class="circle-bg">{{ percent }}%</span>
                  </x-circle>
                  负让负
                </div>
              </div>
              <p>比分指数：</p>
              <div>
                <div>
                  <span>1:0</span>
                  <span>{{percent1}}%</span>
                  <x-progress :percent="percent1"
                              :show-cancel="false"></x-progress>
                </div>
                <div>
                  <span>2:1</span>
                  <span>{{percent2}}%</span>
                  <x-progress :percent="percent2"
                              :show-cancel="false"></x-progress>
                </div>
                <div>
                  <span>2:2</span>
                  <span>{{percent3}}%</span>
                  <x-progress :percent="percent3"
                              :show-cancel="false"></x-progress>
                </div>

              </div>
              <p>爆冷指数：</p>
              <div></div>
              <p>独家内参：</p>
              <div class="btn">
                <span>5元</span>解锁</div>
            </div>
            <div class="recommender">
              <h1><img src="../../public/images/internal-info-badge.png" />推荐专家</h1>
              <p>经验丰富 持续盈利 专家见解</p>
              <div class="recommender-list">
                <img src="../../public/images/index-team-01.png" />
                <p class="list-name">赵教授</p>
                <p>近期10中8 盈利100%</p>
                <img src="../../public/images/user-arrow.png" />
              </div>
              <div class="recommender-list">
                <img src="../../public/images/index-team-01.png" />
                <p class="list-name">赵教授</p>
                <p>近期10中8 盈利100%</p>
                <img src="../../public/images/user-arrow.png" />
              </div>
              <div class="recommender-list">
                <img src="../../public/images/index-team-01.png" />
                <p class="list-name">赵教授</p>
                <p>近期10中8 盈利100%</p>
                <img src="../../public/images/user-arrow.png" />
              </div>
              <div class="recommender-list">
                <img src="../../public/images/index-team-01.png" />
                <p class="list-name">赵教授</p>
                <p>近期10中8 盈利100%</p>
                <img src="../../public/images/user-arrow.png" />
              </div>
              <span class="change-btn">换一换</span>
            </div>

          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import { XHeader,ButtonTab, ButtonTabItem,Swiper,SwiperItem,XCircle,XProgress } from 'vux'
export default {
components: {
    XHeader,
    ButtonTab,
    ButtonTabItem,
    Swiper,
    SwiperItem,
    XCircle,
    XProgress
  },
  data(){
    return{
      btnTab:0,
      percent:55,
      percent1:15,
      percent2:25,
      percent3:36,
      matchlist:[{
        matchnum:'周日001',
        showntitle:'国际A',
        hometeam:'哈萨克斯坦',
        hometeampic:require('../../public/images/index-team-01.png'),
        matchtime:'12-08 02:30',
        awayteam:'拉脱维亚',
        awayteampic:require('../../public/images/index-team-02.png'),
        paytype:0
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.internal-info {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  // overflow-y: scroll;
  background: #f2f5f8;
  .match-header {
    width: 100%;
    height: 174px;
    background: linear-gradient(
      360deg,
      rgba(55, 103, 175, 1) 0%,
      rgba(29, 61, 126, 1) 100%
    );
    .vux-header {
      background: none;
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
          background: #01d0ff;
          border-radius: 2px;
          margin: 0 3px;
        }
        span:nth-child(2) {
          color: #b4cae5;
          font-weight: 400;
          font-family: 'PingFangSC-Regular';
        }
      }
      & > div {
        width: 80%;
        height: 134px;
        margin: 0 auto;
        display: flex;
        & > div {
          width: 70px;
          flex: 1;
          img {
            display: block;
            width: 56px;
            height: 56px;
            margin: 0 auto;
            margin-top: 24px;
            margin-bottom: 9px;
          }
          p {
            font-size: 14px;
            text-align: center;
            margin: 0 auto;
            color: #ffffff;
          }
          &:nth-child(2) {
            width: 82px;
            margin-left: 18px;
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
                font-family: 'PingFangSC-Regular';
              }
              &:nth-child(3) {
                color: #01d0ff;
                padding: 2px 6px;
                background: rgba(1, 208, 255, 0.1);
                border-radius: 10px;
                border: 1px solid rgba(1, 208, 255, 1);
              }
            }
          }
          &:last-child {
            margin-left: 18px;
            margin-right: none;
          }
        }
      }
    }
  }
  .button-tab {
    width: 100%;
    height: calc(100% - 174px);
    .vux-slider {
      height: calc(100% - 80px);
      overflow: hidden;
      overflow-y: scroll;
      & > .vux-swiper {
        overflow-y: scroll;
      }
    }
  }
  .vux-button-group {
    width: 100%;
    height: 80px;
    background: #ffffff;
    & > a.vux-button-group-current {
      background: #01d0ff;
      color: #ffffff;
      font-family: PingFangSC-Regular;
    }
    & > a.vux-button-tab-item-first:after {
      border: 2px solid #01d0ff;
      color: #01d0ff;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-radius: 5px 0px 0px 5px;
    }
    & > a.vux-button-tab-item-first {
      margin-left: 16px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-radius: 5px 0px 0px 5px;
    }
    & > a.vux-button-tab-item-last {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: 16px;
      border-radius: 0px 5px 5px 0px;
    }
    & > a {
      height: 40px;
      line-height: 40px;
      color: #313233;
      font-family: PingFangSC-Regular;
      font-size: 18px;
      margin-top: 20px;
    }
    & > a.vux-button-tab-item-last:after {
      border-right: 2px solid #01d0ff;
      border-top: 2px solid #01d0ff;
      border-bottom: 2px solid #01d0ff;
      border-left: none;
      color: #01d0ff;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-radius: 0px 5px 5px 0px;
    }
  }

  .show-info {
    clear: both;
    width: 100%;
    height: 397px;
    .recommender {
      width: 100%;
      height: 550px;
      background: #ffffff;
      overflow: hidden;
      .change-btn {
        display: block;
        width: 120px;
        height: 36px;
        background: rgba(245, 247, 249, 1);
        border-radius: 18px;
        margin: 22px auto;
        font-size: 14px;
        text-align: center;
        line-height: 36px;
      }
      & > h1 {
        font-size: 20px;
        text-align: center;
        margin-top: 22px;
        margin-bottom: 5px;
        img {
          width: 22px;
          height: 20px;
        }
      }
      & > p {
        font-size: 12px;
        color: #b4cae5;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        text-align: center;
        margin-bottom: 20px;
      }
      .recommender-list {
        width: 91.5%;
        height: 80px;
        border-radius: 6px;
        border: 1px solid rgba(239, 242, 244, 1);
        margin: 12px auto;
        position: relative;
        & > img:first-child {
          width: 48px;
          height: 48px;
          float: left;
          margin: 16px;
        }
        .list-name {
          font-size: 16px;
          margin-top: 20px;
        }
        & > p:nth-child(3) {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
        }
        & > img:nth-child(4) {
          width: 5px;
          height: 10px;
          position: absolute;
          right: 30px;
          top: 35px;
        }
      }
    }
    & > div:first-child {
      width: 91.5%;
      margin: 0 auto;
      & > p {
        font-size: 16px;
        color: #313233;
        margin-top: 22px;
        span {
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          line-height: 17px;
          &:first-child {
            margin-left: 40px;
            margin-right: 10px;
          }
          img {
            width: 12px;
            height: 12px;
            margin-top: 2.5px;
          }
        }
      }
      & > div:nth-of-type(1) {
        margin-top: 10px;
        & > div {
          width: 100%;
          height: 56px;
          background: #ffffff;
          border-radius: 6px;
          margin-bottom: 6px;
          .title {
            float: left;
            margin: 14px 15px 14px 18px;
          }
          .percent1 {
            float: left;
            width: 60%;
            height: 6px;
            margin-bottom: 5px;
            border-radius: 3px;
            &:nth-child(2) {
              margin-top: 17px;
              .percent-info {
                position: relative;
                width: 50%;
                height: 100%;
                background: linear-gradient(
                  90deg,
                  rgba(30, 120, 255, 1) 0%,
                  rgba(1, 208, 255, 1) 100%
                );
                border-radius: 3px;
                & > span {
                  position: absolute;
                  top: -6px;
                  right: -30px;
                  font-size: 12px;
                  font-family: PingFangSC-Regular;
                  font-weight: 400;
                }
              }
            }
            &:nth-child(3) {
              .percent-info {
                position: relative;
                width: 70%;
                height: 100%;
                background: linear-gradient(
                  90deg,
                  rgba(255, 36, 2, 1) 0%,
                  rgba(255, 113, 48, 1) 100%
                );
                border-radius: 3px;
                & > span {
                  position: absolute;
                  top: -6px;
                  right: -30px;
                  font-size: 12px;
                  font-family: PingFangSC-Regular;
                  font-weight: 400;
                }
              }
            }
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
        margin-top: 10px;
        width: 100%;
        height: 164px;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;
        overflow: hidden;
        & > div {
          & > span {
            float: right;
            margin-top: 15px;
            margin-bottom: 3px;
            margin-right: 26px;
            font-size: 14px;
            font-family: ArialMT;
            color: #ff5130;
            &:nth-last-of-type(2) {
              float: left;
              margin-left: 26px;
              font-size: 18px;
              font-family: ArialMT;
              color: #313233;
            }
          }
          .weui-progress {
            clear: both;
            width: 85%;
            margin: 0 auto;
          }
        }
      }
      .range {
        overflow: hidden;

        float: left;
        margin-top: 10px;
        width: 167px;
        height: 10px;
        background: rgba(248, 249, 250, 1);
        border-radius: 18px;
        .range-info {
          overflow: hidden;
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
      .btn {
        width: 100%;
        height: 40px;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid rgba(228, 236, 240, 1);
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 22px;
        span {
          color: #ff3145;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.internal-info .vux-slider > .vux-swiper {
  height: 100% !important;
  overflow-y: scroll;
  // height: calc(100% - 254px) !important;
}
.internal-info .weui-progress__bar {
  height: 6px;
  background: rgba(255, 193, 49, 0.1);
  border-radius: 3px;
}
.internal-info .weui-progress__inner-bar {
  background-color: inherit !important;
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    rgba(255, 149, 49, 1) 0%,
    rgba(255, 214, 22, 1) 100%
  );
}
</style>

