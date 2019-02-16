<template>
  <div class="internal-info">
    <div class="match-header">
      <x-header :left-options="{backText: ''}"
                title="内参详情"></x-header>
      <div class="internalList">
        <div>
          <div>
            <img :src="matchlist.hometeampic" />
            <p>{{matchlist.hometeamname}}</p>
          </div>
          <div>
            <img src="../../public/images/internal-info-vs.png" />
            <p>{{matchlist.kickoff}}</p>
            <p>{{matchlist.matchtime}}</p>
          </div>
          <div>
            <img :src="matchlist.awayteampic" />
            <p>{{matchlist.awayteamname}}</p>
          </div>
        </div>
        <div class="weather-info">
          <div><img src="../../public/images/weather-01.png"
                 class="weather-icon" />{{matchlist.weather}}</div>
          <div><img src="../../public/images/weather-02.png"
                 class="weather-icon" />风速4.4mph</div>
          <div><img src="../../public/images/weather-03.png"
                 class="weather-icon" />降水2%</div>

        </div>

      </div>
    </div>
    <div class="button-tab">
      <sticky ref="sticky"
              :offset="46"
              :disabled="disabled">
        <button-tab v-model="btnTab">
          <button-tab-item @on-item-click="goTop">公共信息</button-tab-item>
          <button-tab-item @on-item-click="goTop">独家内参</button-tab-item>
        </button-tab>
      </sticky>
      <div class=""
           v-if="btnTab==0"
           ref="internal">
        <public-info :hometeam="matchlist.hometeamname"
                     :awayteam="matchlist.awayteamname"
                     :openInfo="openInfo"></public-info>
      </div>
      <div class="show-info"
           v-if="btnTab==1">
        <div class="part-one">
          <div>
            <p>大概率事件结果对比：</p>
            <div>
              <div class="big-result-circle"
                   v-for="(item,index) in bigprobabilityevents"
                   :key="index">
                <x-circle :percent="Number(item)"
                          :stroke-width="6"
                          :trail-width="6"
                          trail-color="rgba(34,53,91,0.05)"
                          :stroke-color="bigTitle[index].color">
                  <span class="circle-bg">{{bigTitle[index].title}}<br>{{item}}%</span>
                </x-circle>
              </div>
            </div>
            <p>结果指数：</p>
            <div>
              <div v-for="(item,index) in resultList"
                   :key="index">
                <x-circle :percent="Number(item.split(':')[1])"
                          :stroke-width="6"
                          :trail-width="6"
                          trail-color="rgba(34,53,91,0.05)"
                          :stroke-color="(item.split(':')[0]=='胜让胜'||item.split(':')[0]=='胜让平')?'#FF4359':'#6DC21D'">
                  <span class="circle-bg">{{ item.split(':')[1] }}%</span>
                </x-circle>
                {{item.split(':')[0]}}
              </div>

            </div>
            <!-- <p>比分指数：</p> -->
            <div>
              <!-- <div v-for="(item,index) in scoreList"
                   :key="index">
                <span>{{item.split('(')[0]}}</span>
                <span>{{item.split('(')[1].split('%')[0]}}%</span>
                <x-progress :percent="Number(item.split('(')[1].split('%')[0])"
                            :show-cancel="false"></x-progress>
              </div> -->
            </div>

            <p>爆冷指数：</p>
            <div class="cold-point">
              <x-circle :percent="Number(coldindex)"
                        :stroke-width="8"
                        :trail-width="8"
                        :stroke-color="['#FFDE2E','#FFB726']"
                        trail-color="rgba(255, 193, 49, 0.1)">
                <span class="circle-bg">{{coldindex}}%</span>
              </x-circle>
              <p>小球仙大数据即时爆冷指数分析， 本场比赛爆冷概率为{{coldindex}}%</p>
            </div>
            <p v-if="price!==undefined">独家内参：</p>
            <div v-if="price!==undefined"
                 class="btn"
                 @click="showPayMethod('0001')">
              <span>{{Number(price)/100}}元</span>内参>></div>
            <!-- 整合按钮 -->
            <div v-if="machineforecast.needbuy!==''"
                 class="btn"
                 @click="showPayMethod('0001')">
              <span>{{Number(machineforecast.price)/100}}元</span>智能大数据推荐</div>
            <div v-if="subscription!=='1'"
                 class="btn"
                 @click="showPayMethod('0001')">
              <span>{{Number(subscription.price)/100}}元</span>包月会员VIP</div>
          </div>
        </div>
        <div v-if="needbuy=='1'"
             class="internal-wrapper">
          <!-- <div class="internal-wrapper"> -->
          <p class="contain-title"
             v-if="homeInfo.rating!=='' || awayInfo.rating!==''">【星级评分】</p>
          <div class="team-cli"
               v-if="homeInfo.rating!=='' || awayInfo.rating!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body">
                <span v-for="(item,index) in homeInfo.rating && homeInfo.rating.split('')"
                      :key="index">
                  <x-icon type="ios-star"
                          size="20"></x-icon>
                </span>
                <!-- <span v-for="i in (5-homeInfo.rating.length)"
                      :key="i">
                  <x-icon type="ios-star-outline"
                          size="20"></x-icon>
                </span> -->

              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body">
                <x-icon v-for="(item,index) in awayInfo.rating.split('')"
                        :key="index"
                        type="ios-star"
                        size="20"></x-icon>
                <!-- <x-icon v-for="i in (5-awayInfo.rating.length)"
                        :key="i"
                        type="ios-star-outline"
                        size="20"></x-icon> -->
              </div>
            </div>
          </div>
          <p class="contain-title"
             v-if="homeInfo.distance!=='' || homeInfo.trip!=='' || homeInfo.triptime!=='' || awayInfo.distance!=='' || awayInfo.trip!=='' || awayInfo.triptime!==''">【距离交通】</p>
          <div class="team-cli"
               v-if="homeInfo.distance!=='' || homeInfo.trip!=='' || homeInfo.triptime!=='' || awayInfo.distance!=='' || awayInfo.trip!=='' || awayInfo.triptime!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body traffic-text">
                <p>距球场：{{homeInfo.distance}}km</p>
                <p>交通方式：{{homeInfo.trip}}{{homeInfo.triptime}}</p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body traffic-text">
                <p>距球场：{{awayInfo.distance}}km</p>
                <p>交通方式：{{awayInfo.trip}}{{awayInfo.triptime}}</p>
              </div>
            </div>
          </div>
          <p class="contain-title"
             v-if="buyDetailInfo.referee!==''">【主帅&主裁】</p>
          <p class="contain-info">{{buyDetailInfo.referee}}</p>
          <p class="contain-title"
             v-if="homeInfo.playerssuspended!=='' || awayInfo.playerssuspended!==''">【伤停及复出】</p>
          <div class="team-cli"
               v-if="homeInfo.playerssuspended!=='' || awayInfo.playerssuspended!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队禁赛</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in homeInfo.playerssuspended"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队禁赛</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in awayInfo.playerssuspended"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="team-cli"
               v-if="homeInfo.playersdoubtful!=='' || awayInfo.playersdoubtful!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队上阵成疑</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in homeInfo.playersdoubtful"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队上阵成疑</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in awayInfo.playersdoubtful"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="team-cli"
               v-if="homeInfo.playerunavailable!=='' || awayInfo.playerunavailable!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队不可上场</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in homeInfo.playerunavailable"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队不可上场</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in awayInfo.playerunavailable"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="team-cli"
               v-if="homeInfo.playersrested!=='' || awayInfo.playersrested!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队休息</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in homeInfo.playersrested"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队休息</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in awayInfo.playersrested"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
          </div>
          <!-- <p class="contain-title">【未来赛事】</p>
          <div class="team-cli" v-if="homeInfo.rating!=='' || awayInfo.rating!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body">
                7天后即19年1月5日将客场 出战澳超排名第1的梅斯
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body">
                7天后即19年1月5日将客场 出战澳超排名第1的梅斯
              </div>
            </div>
          </div> -->
          <p class="contain-title"
             v-if="homeInfo.strength!=='' || awayInfo.strength!==''">【实力及战意】</p>
          <div class="team-cli"
               v-if="homeInfo.strength!=='' || awayInfo.strength!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in homeInfo.strength"
                   :key="index">{{item}}</p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in awayInfo.strength"
                   :key="index">{{item}}</p>
              </div>
            </div>
          </div>
          <p class="contain-title"
             v-if="homeInfo.brief!=='' || awayInfo.brief!==''">【Brief】</p>
          <div class="team-cli"
               v-if="homeInfo.brief!=='' || awayInfo.brief!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in homeInfo.brief"
                   :key="index">{{item}}</p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in awayInfo.brief"
                   :key="index">{{item}}</p>
              </div>
            </div>
          </div>
          <p class="contain-title"
             v-if="homeInfo.back!=='' || awayInfo.back!==''">【回顾】</p>
          <div class="team-cli"
               v-if="homeInfo.back!=='' || awayInfo.back!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body">
                <p class="red-contain"
                   v-for="(item,index) in homeInfo.back"
                   :key="index">
                  <span>{{item}}</span>
                  <span>·</span>
                </p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body">
                <p class="red-contain"
                   v-for="(item,index) in awayInfo.back"
                   :key="index">
                  <span>{{item}}</span>
                  <span>·</span>
                </p>
              </div>
            </div>
          </div>
          <p class="contain-title"
             v-if="homeInfo.ahead!=='' || awayInfo.ahead!==''">【前瞻】</p>
          <div class="team-cli"
               v-if="homeInfo.ahead!=='' || awayInfo.ahead!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body">
                <p class="red-contain"
                   v-for="(item,index) in homeInfo.ahead"
                   :key="index">
                  <span>{{item}}</span>
                  <span>·</span>
                </p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body">
                <p class="red-contain"
                   v-for="(item,index) in awayInfo.ahead"
                   :key="index">
                  <span>{{item}}</span>
                  <span>·</span>
                </p>
              </div>
            </div>
          </div>
          <div class="contain-info tips"
               v-if="buyDetailInfo.tips!==''">
            <p v-for="(item,index) in buyDetailInfo.tips"
               :key="index">{{item}}</p>
          </div>
          <p class="contain-title"
             v-if="homeInfo.playerslineup!=='' || awayInfo.playerslineup!==''">【预计首发】</p>
          <div class="team-cli"
               v-if="homeInfo.playerslineup!=='' || awayInfo.playerslineup!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in homeInfo.playerslineup"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in awayInfo.playerslineup"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
          </div>
          <p class="contain-title"
             v-if="homeInfo.playersbenched!=='' || awayInfo.playersbenched!==''">【替补】</p>
          <div class="team-cli"
               v-if="homeInfo.playersbenched!=='' || awayInfo.playersbenched!==''">
            <div class="home-cli">
              <div class="home-cli-header">主队</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in homeInfo.playersbenched"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
            <div class="away-cli">
              <div class="away-cli-header">客队</div>
              <div class="home-cli-body">
                <p v-for="(item,index) in awayInfo.playersbenched"
                   :key="index">{{item.indexOf('/')==-1?item:item.split('/')[0]}}
                  <span class="cli-badge"
                        v-if="item.indexOf('/')!==-1"
                        v-for="(items,indexs) in item.split('/').splice(1,item.split('/').length-1)"
                        :key="indexs">{{items}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-show-wrapper">
          <p>大数据智能荐单：</p>

          <div class="paid-show"
               v-if="machineforecast.needbuy=='1'"
               v-for="(item,index) in machineforecast.aiforecastlist"
               :key="index">
            <p>{{item.labname}}</p>
            <div class="paid-show-info">
              <div :class="item.labcheck[0]!=='' && item.labcheck==index?'sel-box':''"
                   v-for="(items,indexs) in item.labshow"
                   :key="indexs">

                <p>{{items}}
                  <x-icon type="ios-checkmark-empty"
                          size="30"
                          class="check-icon"
                          v-if="item.labhit[0]!=='' && item.labhit==index"></x-icon>
                </p>
                <p>{{item.labvalue[indexs]}}</p>
              </div>
            </div>

          </div>

          <!--<div v-if="machineforecastdxq.needbuy!==''">
            <div @click="machineforecastdxq.needbuy=='0'?showPayMethod('0008'):''">
              <span>大小球</span>内参</div>
            <div class="paid-show"
                 v-if="machineforecastdxq.needbuy=='1'">
              <p>大小球</p>
              <div class="paid-show-info">
                <div :class="machineforecastdxq.labcheck[0]!=='' && machineforecastdxq.labcheck==index?'sel-box':''"
                     v-for="(item,index) in machineforecastdxq.labshow"
                     :key="index">

                  <p>{{item}}
                    <x-icon type="ios-checkmark-empty"
                            size="30"
                            class="check-icon"
                            v-if="machineforecastdxq.labhit[0]!=='' && machineforecastdxq.labhit==index"></x-icon>
                  </p>
                  <p>{{machineforecastdxq.labvalue[index]}}</p>
                </div>
              </div>

            </div>
          </div>
          <div v-if="machineforecastyp.needbuy!==''">
            <div @click="machineforecastyp.needbuy=='0'?showPayMethod('0009'):''">
              <span>亚盘</span>内参</div>
            <div class="paid-show"
                 v-if="machineforecastyp.needbuy=='1'">
              <p>亚盘</p>
              <div class="paid-show-info">
                <div :class="machineforecastyp.labcheck[0]!=='' && machineforecastyp.labcheck==index?'sel-box':''"
                     v-for="(item,index) in machineforecastyp.labshow"
                     :key="index">

                  <p>{{item}}
                    <x-icon type="ios-checkmark-empty"
                            size="30"
                            class="check-icon"
                            v-if="machineforecastyp.labhit[0]!=='' && machineforecastyp.labhit==index"></x-icon>
                  </p>
                  <p>{{machineforecastyp.labvalue[index]}}</p>
                </div>
              </div>

            </div>
          </div>
          <div v-if="machineforecastscore.needbuy!==''">
            <div @click="machineforecastscore.needbuy=='0'?showPayMethod('0006'):''">
              <span>比分</span>内参</div>
            <div class="paid-show"
                 v-if="machineforecastscore.needbuy=='1' ">
              <p>比分</p>
              <div class="paid-show-info">
                <div :class="machineforecastscore.labcheck[0]!=='' && machineforecastscore.labcheck==index?'sel-box':''"
                     v-for="(item,index) in machineforecastscore.labshow"
                     :key="index">

                  <p>{{item}}
                    <x-icon type="ios-checkmark-empty"
                            size="30"
                            class="check-icon"
                            v-if="machineforecastscore.labhit[0]!=='' && machineforecastscore.labhit==index"></x-icon>
                  </p>
                  <p>{{machineforecastscore.labvalue[index]}}</p>
                </div>
              </div>

            </div>
          </div>
           <div v-if="machineforecasthf.needbuy!==''">
            <div @click="machineforecasthf.needbuy=='0'?showPayMethod('0007'):''">
              <span>半全场</span>内参</div>
            <div class="paid-show"
                 v-if="machineforecasthf.needbuy=='1'">
              <p>半全场</p>
              <div class="paid-show-info">
                <div :class="machineforecasthf.labcheck[0]!=='' && machineforecasthf.labcheck==index?'sel-box':''"
                     v-for="(item,index) in machineforecasthf.labshow"
                     :key="index">

                  <p>{{item}}
                    <x-icon type="ios-checkmark-empty"
                            size="30"
                            class="check-icon"
                            v-if="machineforecasthf.labhit[0]!=='' && machineforecasthf.labhit==index"></x-icon>
                  </p>
                  <p>{{machineforecasthf.labvalue[index]}}</p>
                </div>

              </div>

            </div>
          </div> -->

        </div>
        <div class="recommender">
          <h1><img src="../../public/images/internal-info-badge.png" />推荐专家</h1>
          <p>经验丰富 持续盈利 专家见解</p>
          <div class="recommender-list"
               v-for="(item,index) in recommenderList"
               :key="index">
            <img :src="item.expertpic" />
            <p class="list-name">{{item.expertname}}</p>
            <p>近期10中{{item.fright}} 盈利{{item.fprofitrate}}</p>
            <img src="../../public/images/user-arrow.png" />
          </div>
          <span class="change-btn">换一换</span>
        </div>

      </div>
    </div>
    <div>
      <popup v-model="showPay"
             height="220px"
             is-transparent>
        <div style="width: 95%;background-color:#fff;height:192px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <div style="padding:20px 15px;">
            <p class="paidType">请选择支付方式：</p>
            <div class="paid-desc">
              <div>
                <img src="../../public/images/zhifubao.png"
                     class="zhifubao"
                     @click="userPayAli(paidInfo)" />
                <span class="zhifubao-text">支付宝支付</span>
              </div>
              <div>
                <img src="../../public/images/jinbi.png"
                     class="zhifubao"
                     @click="userPay(paidInfo)" />
                <span class="zhifubao-text">金币支付</span>
              </div>
            </div>

            <img @click="showPay = false"
                 src="../../public/images/zhifubao-close.png"
                 class="zhifubao-close" />
          </div>
        </div>
      </popup>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
import { XHeader,ButtonTab, ButtonTabItem,Swiper,SwiperItem,XCircle,XProgress,Sticky ,Popup,XButton,ToastPlugin} from 'vux'
import PublicInfo from '../components/PublicInfo.vue'
import https from '../https.js'
import Vue from 'vue'
Vue.use(ToastPlugin)

export default {
  components: {
    XHeader,
    ButtonTab,
    ButtonTabItem,
    Swiper,
    SwiperItem,
    XCircle,
    XProgress,
    Sticky,
    PublicInfo,
    Popup,
    XButton
  },
  data(){
    return{
      isTop:false,
      star:0,
      price:'',
      paidInfo:'',
      showPay:false,
      bigTitle:[{title:'胜',color:'#FF4359'},{title:'平',color:'#3665AC'},{title:'负',color:'#6DC21D'}],
      openInfo:{},
      recommenderList:[],
      bigprobabilityevents:{},//大概率
      coldindex:'',
      needbuy:0,
      buyDetailInfo:{},
      scoreList:[],
      resultList:[],
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
      btnTab:1,
      percent:55,
      percent1:15,
      percent2:25,
      percent3:36,
      matchlist:{},
      awayInfo:[],
      homeInfo:[],
      machineforecast:{},//大数据智能
      subscription:{} //包月信息
      // machineforecastdxq:{},//大小球
      // machineforecasthf:{},//半全场
      // machineforecastscore:{},//比分内参
      // machineforecastyp:{}//亚盘
    }
  },
  methods:{
    //切换tab回到顶部
    goTop(){
      if(this.isTop){
        return false
      }
      let internal = this.$refs.internal
      let osTop = internal.scrollTop
      console.log(osTop)
      this.timer = setInterval(() => {
        document.documentElement.scrollTop=0
        if (document.documentElement.scrollTop===0) {
          this.isTop = true
          clearInterval(this.timer)
				}
      }, 50)
    },
    //支付宝支付
    userPayAli(e){
      if(this.$store.state.userid==''){
        this.$router.push("/login")
        return false
      }
      let args={
        buyid:this.$store.state.internalInfoItem,
        buytype:e,
        buytype:'0006',
        // paytype:'0004',
        // payback:'http://localhost:8080/index.html#/internal-info'
        payback: window.location.href
        
      }
      console.log(window.location.href)
      this.pay(args)
    },
    //金币支付
    userPay(e){
      if(this.$store.state.userid==''){
        this.$router.push("/login")
        return false
      }
      let args={
        buyid:this.$store.state.internalInfoItem,
        buytype:e,
        // buytype:'0006',
        paytype:'0004',
        // payback:'http://localhost:8080/index.html#/internal-info'
        payback: window.location.href
        
      }
      console.log(window.location.href)
      this.pay(args)

    },
    pay(args){
      https.fetchPost('/user/userpay.jsp',args).then((data) => {
        console.log(data.data.tourl)
        // window.location.href = data.data.tourl
        if(data.data.statuscode>0){
          //金币支付完成直接跳转支付成功页面
          this.$router.push('/withdrawResult')
          // window.location.href = 'http://localhost:8080/#/withdrawResult'

        }else{
          this.$vux.toast.show({
            type:'warn',
                    text: data.data.statusmsg,
                  })
        }
        
       
      }).catch(err=>{
              console.log(err)
          }
      )
    },
    showPayMethod(e){
      this.showPay=true;
      this.paidInfo = e
    }
  },
  mounted () {
    https.fetchPost('/match/matchinfo.jsp',{id:this.$store.state.internalInfoItem} ).then((data) => {
        this.openInfo = data.data.open //传递公共信息
        console.log('openInfo',data.data.open)
         this.machineforecast = data.data.machineforecast//大数据智能数据
         this.subscription = data.data.subscription //包月信息

        // this.machineforecastdxq=data.data.machineforecastdxq//大小球
        // this.machineforecasthf=data.data.machineforecasthf//半全场
        // this.machineforecastscore=data.data.machineforecastscore//比分内参
        // this.machineforecastyp=data.data.machineforecastyp//亚盘
        console.log("awayInfo",this.awayInfo)
        this.matchlist = data.data.matchinfo;//基本信息
        this.resultList = data.data.inside.details.resultindex.split(",") || []//结果指数
        this.needbuy = data.data.inside.needbuy;
        this.price = data.data.inside.price
        console.log('price',this.price)
        if(data.data.inside.buydetails){
          this.buyDetailInfo = data.data.inside.buydetails;
          this.awayInfo=data.data.inside.buydetails.awayteam ;
          this.homeInfo =data.data.inside.buydetails.hometeam;
        }
        this.bigprobabilityevents = data.data.inside.details.bigprobabilityevents.open.split(',')//大概率
        this.coldindex = data.data.inside.details.coldindex.split("%")[0];
        
        // this.scoreList = data.data.inside.details.scoreindex.split(",")//比分指数
        
        
        
       
		}).catch(err=>{
						console.log(err)
				}
    )
    https.fetchPost('/expert/randexpert.jsp',{matchnum:this.$store.state.matchnum} ).then((data) => {
      console.log("ugc",data.data.list)
      this.recommenderList = data.data.list;
		}).catch(err=>{
						console.log(err)
				}
    )
    
  }
}
</script>

<style lang="scss" scoped>
.internal-info {
  width: 100%;
  // height: 100%;
  // overflow: hidden;
  // overflow-y: scroll;
  background: #f2f5f8;
  .match-header {
    width: 100%;
    height: 216px;
    overflow: hidden;
    background: linear-gradient(
      360deg,
      rgba(55, 103, 175, 1) 0%,
      rgba(29, 61, 126, 1) 100%
    );
    .vux-header {
      width: 100%;
      height: 46px;
      background: linear-gradient(
        360deg,
        #1a4891 0%,
        rgba(29, 61, 126, 1) 100%
      );
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
    }
    .internalList {
      height: 170px;
      position: relative;
      top: 46px;

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
      & > div {
        width: 80%;
        height: 136px;
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
                margin-bottom: 5px;
                font-family: 'PingFangSC-Regular';
              }
              &:nth-child(3) {
                color: #0393f8;
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
      .weather-info {
        width: 100%;
        height: 36px;
        background: #215696;
        display: flex;
        & > div {
          flex: 1;
          font-size: 14px;
          line-height: 36px;
          color: #7ba1d0;
          .weather-icon {
            float: left;
            width: 17px;
            height: 17px;
            margin-top: 11px;
            margin-left: 19px;
            margin-right: 7px;
          }
        }
      }
    }
  }

  .vux-button-group {
    width: 100%;
    height: 80px;
    background: #ffffff;
    & > a.vux-button-group-current {
      background: #0393f8;
      color: #ffffff;
      font-family: PingFangSC-Regular;
    }
    & > a.vux-button-tab-item-first:after {
      border: 2px solid #0393f8;
      color: #0393f8;
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
      border-right: 2px solid #0393f8;
      border-top: 2px solid #0393f8;
      border-bottom: 2px solid #0393f8;
      border-left: none;
      color: #0393f8;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-radius: 0px 5px 5px 0px;
    }
  }

  .show-info {
    clear: both;
    width: 100%;
    .part-one {
      overflow: hidden;
      background: #fff;
    }
    .contain-title {
      font-size: 14px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(49, 50, 51, 1);
      margin-top: 22px;
      margin-left: 14px;
      margin-bottom: 10px;
    }
    .contain-info {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(49, 50, 51, 1);
      line-height: 17px;
      margin-left: 14px;
      margin-right: 16px;
    }
    .team-cli {
      // display:flex;
      overflow: hidden;
      margin-bottom: 7px;
      & > div {
        // flex:1;
        background: #fff;
        padding-bottom: 15px;
        float: left;
        width: 46%;
        margin-left: 2%;
        & > div:first-child {
          width: calc(100% - 10px);
          height: 28px;
          background: #3665ac;
          padding-left: 10px;
          font-size: 12px;
          color: #fff;
          line-height: 28px;
        }
      }
      .home-cli-body {
        font-size: 10px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        padding-left: 11px;
        margin-top: 10px;
        p {
          float: left;
          width: 100%;
          margin-top: 5px;
        }
        .red-contain {
          overflow: hidden;
          span:first-child {
            // display: inline-block;
            width: 85%;
            float: right;
            margin-right: 5.8%;
            font-size: 12px;
            font-weight: 500;
            color: #313233;
            line-height: 18px;
          }
          span:nth-child(2) {
            color: rgba(255, 75, 38, 1);
            margin-right: 2%;
            float: right;
            margin-top: -5px;
            font-size: 18px;
          }
        }
      }
      .cli-badge {
        float: right;
        margin-right: 8px;
        font-size: 9px;
        border-radius: 7px;
        padding: 0 5px;
        border: 1px solid rgba(255, 67, 89, 1);
      }
      .traffic-text {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(123, 161, 208, 1);
        padding-left: 15px;
        margin-top: 12px;
      }
      .home-cli {
        margin-right: 2%;
        .home-cli-header {
          background: #3665ac;
        }
      }
      .away-cli {
        .away-cli-header {
          background: #42546f;
        }
      }
    }
    .btn-show-wrapper {
      width: 100%;
      background: #ffffff;
      overflow: hidden;
      p {
        width: 91.5%;
        margin: 0 auto;
        font-size: 16px;
        margin-top: 22px;
        margin-bottom: 10px;
      }
      & > div > div {
        width: 343px;
        height: 40px;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;
        border: 1px solid rgba(228, 236, 240, 1);
        margin: 0 auto;
        margin-bottom: 10px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        span {
          color: #ff3145;
        }
      }
      .paid-show {
        width: 100%;
        height: 152px;
        overflow: hidden;
        background: #f2f5f8;
        border-radius: 0;
        border: none;
        & > p {
          margin: 0 auto;
          margin-top: 20px;
          margin-bottom: 9px;
        }
        .paid-show-info {
          width: 70%;
          height: 72px;
          margin: 0 auto;
          display: flex;
          & > div {
            flex: 1;
            margin-left: 1px;
            & > p:first-child {
              width: 100%;
              background: #3665ac;
              color: #ffffff;
              text-align: center;
              height: 28px;
              line-height: 28px;
              margin-top: 0;
              margin-bottom: 0;
              font-size: 12px;
              position: relative;
              .check-icon {
                position: absolute;
                right: -5px;
                top: -5px;
                color: #fff;
              }
            }
            & > p:nth-child(2) {
              width: 100%;
              height: 44px;
              background: #fff;
              color: #313233;
              text-align: center;
              line-height: 44px;
              font-size: 12px;
              margin-top: 0;
              margin-bottom: 0;
            }
          }
          .sel-box {
            & > p:first-child {
              background: #0393f8;
            }
            & > p:nth-child(2) {
              box-sizing: border-box;
              border: 2px solid #0393f8;
            }
          }
        }
      }
    }
    .recommender {
      width: 100%;
      height: 550px;
      background: #ffffff;
      overflow: hidden;
      margin-top: 14px;
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
    .part-one > div:first-child {
      width: 91.5%;
      margin: 0 auto;
      padding-bottom: 10px;
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
        overflow: hidden;
        .big-result-circle {
          float: left;
          margin-right: 30px;
          width: 72px;
          height: 72px;
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
        // height: 164px;
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
            &:nth-last-of-type(2) {
              float: left;
              margin-left: 26px;
              font-size: 18px;
              font-family: BebasNeue;
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
      .cold-point {
        margin-top: 10px;
        width: 100%;
        height: 88px;
        background: rgba(245, 246, 247, 1);
        border-radius: 6px;
        overflow: hidden;
        .vux-circle {
          float: left;
          margin-right: 23px;
          width: 52px;
          height: 52px;
          margin: 18px;
          .circle-bg {
            color: #ffd168;
            font-size: 14px;
            font-family: PingFangSC-Regular;
          }
        }
        p {
          float: left;
          width: 210px;
          margin-top: 24px;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
        }
      }

      .btn {
        width: 100%;
        height: 40px;
        background: #0393f8;
        color: #fff;
        border-radius: 6px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 22px;
      }
    }
  }
}
.paidType {
  position: relative;
  font-size: 18px;
  color: #3a3b3b;
}
.zhifubao {
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 5px;
}
.zhifubao-text {
  display: block;
  width: 100%;
  text-align: center;
}
.zhifubao-close {
  position: absolute;
  width: 16px;
  height: 16px;
  right: 18px;
  top: 18px;
}
</style>
<style lang="scss">
.internal-info .weui-progress__bar {
  height: 6px;
  background: rgba(255, 193, 49, 0.1);
  border-radius: 3px;
}
.internal-info .weui-progress__inner-bar {
  background-color: #ffb726 !important;
  border-radius: 3px;
}
.internal-info .vux-x-icon {
  fill: rgba(255, 165, 36, 1);
}
.tips {
  margin-top: 6px;
  background: url('../../public/images/tips.png') 100% 100%/100% 100%;
  padding: 8px;
  padding-top: 45px;
}
.paid-desc {
  display: flex;
  & > div {
    flex: 1;
  }
}
</style>

