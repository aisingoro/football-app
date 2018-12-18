<template>
  <div class="public-info">
    <h3>联赛积分排名
      <span>主客</span>
      <span>全部</span>
    </h3>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#F2F5F8;">
      <thead>
        <tr>
          <th>排名</th>
          <th>赛事</th>
          <th>赛</th>
          <th>胜/平/负</th>
          <th>进/失</th>
          <th>积分</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9 <img src="../../public/images/index-team-01.png"
                 width="12" />甲府</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
        <tr>
          <td>3 <img src="../../public/images/index-team-01.png"
                 width="12" />鹿岛</td>
          <td>日职乙</td>
          <td>42</td>
          <td>16/11/15</td>
          <td>56/46</td>
          <td>59</td>
        </tr>
      </tbody>
    </x-table>
    <h3>历史交战
      <span>筛选</span>
    </h3>
    <p>近6场交战，甲府
      <span>1胜</span>1平
      <span>4负</span> 胜率17%</p>
    <p>场均净胜-1.3球，场均总进3.0球，大球4次，小球2次</p>
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
      <span>筛选</span>
    </h3>
    <p>近10甲府
      <span>6胜</span>2平
      <span>2负</span> 胜率60%</p>
    <p class="desc">场均净胜0.9球，场均失0.5球，大球1次，小球9次</p>
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
      <span>筛选</span>
    </h3>
    <p>近10鹿岛
      <span>4胜</span>4平
      <span>2负</span> 胜率40%</p>
    <p class="desc">场均净胜0.9球，场均失0.5球，大球1次，小球9次</p>
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
    <h3>未来赛事</h3>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#F2F5F8;">
      <thead>
        <tr style="background-color: #fff">
          <th style="font-size:16px;color:#313233">甲府</th>
          <th>日期</th>
          <th>主队</th>
          <th>客队</th>
          <th>相隔</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="5">暂无数据</td>
        </tr>
      </tbody>
    </x-table>
    <x-table :cell-bordered="false"
             :content-bordered="false"
             style="background-color:#F2F5F8;">
      <thead>
        <tr style="background-color: #fff">
          <th style="font-size:16px;color:#313233">鹿岛</th>
          <th>日期</th>
          <th>主队</th>
          <th>客队</th>
          <th>相隔</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>日职</td>
          <td>18-11-24</td>
          <td>仙台</td>
          <td>鹿岛</td>
          <td>3天</td>
        </tr>
        <tr>
          <td>日职</td>
          <td>18-11-24</td>
          <td>仙台</td>
          <td>鹿岛</td>
          <td>3天</td>
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
  }
}
</script>

<style lang="scss" scoped>
.public-info {
  background: #ffffff;
  width: 100%;
  overflow: hidden;
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
