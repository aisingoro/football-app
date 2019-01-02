<template>
  <div class="public-info">
    <h3>联赛积分排名</h3>
    <div class="team-position">
      <div class="home-team">
        <h3>主队</h3>
        <div class="bg-empty"></div>
        <p>9</p>
        <p>32</p>
        <p>26</p>
        <p>9</p>
        <p>9</p>
        <p>8</p>
        <p>
          <span>W</span>
          <span>W</span>
          <span>W</span>
          <span class="lose">L</span>
          <span class="draw">D</span>
        </p>
         <p>
          <span>W</span>
          <span>W</span>
          <span>W</span>
          <span class="lose">L</span>
          <span class="draw">D</span>
        </p>
         <p>
          <span>W</span>
          <span>W</span>
          <span>W</span>
          <span class="lose">L</span>
          <span class="draw">D</span>
        </p>
      </div>
      <div class="team-title">
        <img src="../../public/images/index-team-01.png"/>
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
        <p>9</p>
        <p>32</p>
        <p>26</p>
        <p>9</p>
        <p>9</p>
        <p>8</p>
        <p>
          <span>W</span>
          <span>W</span>
          <span>W</span>
          <span class="lose">L</span>
          <span class="draw">D</span>
        </p>
         <p>
          <span>W</span>
          <span>W</span>
          <span>W</span>
          <span class="lose">L</span>
          <span class="draw">D</span>
        </p>
         <p>
          <span>W</span>
          <span>W</span>
          <span>W</span>
          <span class="lose">L</span>
          <span class="draw">D</span>
        </p>
      </div>
    </div>
    <h3>赔率指数</h3>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#fff;" class="table-bg-fff">
      <thead>
        <tr>
          <th>公司名称</th>
          <th>胜</th>
          <th>平</th>
          <th>负</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
        </tr>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
        </tr>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
        </tr>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
        </tr>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
        </tr>
      </tbody>
    </x-table>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#fff" class="table-bg-fff">
      <thead>
        <tr>
          <th>公司名称</th>
          <th>让</th>
          <th>让胜</th>
          <th>让平</th>
          <th>让负</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          
        </tr>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          
        </tr>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          
        </tr>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          
        </tr>
        <tr>
          <td>竞彩官方</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          <td>1.5<br>1.8</td>
          
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
        <tr>
          <td>澳门</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
          <td>59</td>
        </tr>
        <tr>
          <td>bet45</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
        <tr>
          <td>bet45</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
        <tr>
          <td>bet45</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
        <tr>
          <td>bet45</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
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
          <th>主队</th>
          <th>水位</th>
          <th>让球</th>
          <th>客队</th>
          <th>水位</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>澳门</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
          <td>59</td>
        </tr>
        <tr>
          <td>bet45</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
        <tr>
          <td>bet45</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
        <tr>
          <td>bet45</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
        <tr>
          <td>bet45</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
      </tbody>
    </x-table>
    <h3>历史交战
    </h3>
    <p>近6场交战，甲府
      <span>1胜</span>1平
      <span>4负</span> 胜率17%</p>
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
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
      </tbody>
    </x-table>
    <h3>近期战绩
    </h3>
    <p>近10甲府
      <span>6胜</span>2平
      <span>2负</span> 胜率60%</p>
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
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
      </tbody>
    </x-table>
    <h3>近期战绩
    </h3>
    <p>近10鹿岛
      <span>4胜</span>4平
      <span>2负</span> 胜率40%</p>
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
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
          </td>
        </tr>
        <tr>
          <td>日职 17-07-29</td>
          <td>[2]鹿岛</td>
          <td>3:0(0:0)</td>
          <td>甲府[15]</td>
          <td>
            <div class="result-lose">负</div>
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
    
  }
}
</script>

<style lang="scss" scoped>
.public-info {
  background: #ffffff;
  width: 100%;
  overflow: hidden;
  .team-position{
    display:flex;
    margin-top:12px;
    .home-team,.team-title,.away-team{
      flex:1;
      text-align:center;
      h3{
        width:100%;
        height:36px;
        background:rgba(54,101,172,1);
        border-radius:6px 6px 0px 0px;
        color:#fff;
        line-height:36px;
        text-align:center;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
      }
      p{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(54,101,172,1);
        margin-bottom:22px;
        span{
          display:inline-block;
          width:18px;
          height:18px;
          color:#fff;
          line-height:18px;
          text-align:center;
          border-radius:50%;
          background:#FF4359;
          font-size:10px;
          font-family:PingFangSC-Regular;
        }
        .lose{
          background:#6DC21D;
        }
        .draw{
          background:#3665AC;
        }
      }
    }
    .home-team{
      margin-left:16px;
      .bg-empty{
        width:100%;
        height:32px;
        background:linear-gradient(360deg,rgba(102,158,214,0) 0%,rgba(54,101,172,1) 100%);
        opacity:0.1047;
      }
    }
    .team-title{
      img{
        width:32px;
        height:36px;
        margin:0 auto;
        margin-bottom:25px;
      }
      p{
        color:#313233;
      }
    }
    .away-team{
      margin-right:16px;
      h3{
        background:#42546F;
      }
      .bg-empty{
        width:100%;
        height:32px;
        background:linear-gradient(360deg,rgba(66,84,111,0) 0%,rgba(66,84,111,1) 100%);
        opacity:0.1047;
      }
      p{
        color:#42546F;
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
  .table-bg-fff{
    margin-top:0px;
    tbody{
      tr{
        border-bottom:1px solid #E7EBF0;
        padding-left:16px;
        line-height:25px;
        &:last-child{
          border-bottom:none;
        }
      }
    }
    
    thead{
      height:28px;
      line-height:28px;
      background:#F2F5F8;
      color:#A3ADB7;
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
      .result-lose {
        margin: 0 auto;
        width: 36px;
        height: 20px;
        line-height: 20px;
        background: #70d23e;
        border-radius: 10px;
        color: #fff;
      }
    }
  }
}
</style>
