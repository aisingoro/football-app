<template>
  <div class="internal-reference">
    <h1>独家内参</h1>
    <div class="internalList"
         v-for="(item,index) in internalList"
         :key="index">
      <div class="list-info">
        <div>
          <p>周日001</p>
          <p>国际A</p>
          <p>02/08/02:30</p>
          <p @click="showInfo=!showInfo">分析</p>
        </div>
        <div>
          <div>
            <img src="../../public/images/index-team-01.png" />
            <p>哈萨克斯坦</p>
          </div>
          <div>
            <img src="../../public/images/index-vs.png" />
            <p>未开赛</p>
          </div>
          <div>
            <img src="../../public/images/index-team-02.png" />
            <p>拉脱维亚</p>
          </div>
        </div>
        <img src="../../public/images/internal-badge.png" />
      </div>
      <div class="show-info"
           v-if="showInfo">
        <div>
          <p>大概率事件结果对比：</p>
          <div>
            <div>胜
              <span>65%</span>
            </div>
            <div>平
              <span>23%</span>
            </div>
            <div>负
              <span>12%</span>
            </div>
          </div>
          <p>结果指数：</p>
          <div>
            <div>
              <x-circle :percent="percent"
                        :stroke-width="6"
                        stroke-color="#3761A3">
                <span class="circle-bg">{{ percent }}%</span>
              </x-circle>
              胜让胜
            </div>
            <div>
              <x-circle :percent="percent"
                        :stroke-width="6"
                        stroke-color="#3761A3">
                <span class="circle-bg">{{ percent }}%</span>
              </x-circle>
              胜让平
            </div>
            <div>
              <x-circle :percent="percent"
                        :stroke-width="6"
                        stroke-color="#3761A3">
                <span class="circle-bg">{{ percent }}%</span>
              </x-circle>
              平让负
            </div>
            <div>
              <x-circle :percent="percent"
                        :stroke-width="6"
                        stroke-color="#3761A3">
                <span class="circle-bg">{{ percent }}%</span>
              </x-circle>
              负让负
            </div>
          </div>
          <p>比分指数：</p>
          <div>
            <div>1:0
              <span>15%</span>
            </div>
            <div>2:1
              <span>15%</span>
            </div>
            <div>1:1
              <span>15%</span>
            </div>
          </div>
          <p>爆冷指数：</p>
          <div class="range">
            <div class="range-info"></div>
          </div>
          <span class="more"
                @click="getInternalInfo">查看完整版>></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {XCircle} from 'vux'

export default {
  components: {
    XCircle
  },
  data(){
    return{
      percent:55,
      showInfo:false,
      internalList:[1,2,3,4,5,6]
    }
  },
  methods:{
    getInternalInfo(){
      this.$router.push('/internal-info')
    }
  }

}
</script>

<style lang="scss" scoped>
.internal-reference {
  width: 100%;
  height: calc(100% - 53px);
  overflow: hidden;
  overflow-y: scroll;
  background: #f8f9fa;
  padding-bottom: 22px;
  & > h1 {
    width: 91.5%;
    margin: 7px auto;
    font-size: 22px;
    font-weight: 500;
    color: #313233;
    margin-bottom: 24px;
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
        top: -5px;
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
          margin-top: 15px;
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
      height: 397px;
      background: #eaedf2;
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
          border: 1px solid rgba(220, 226, 234, 1);
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
