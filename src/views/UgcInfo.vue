<template>
  <div class="ugc-info">
    <x-header :left-options="{backText: ''}"
              title="他的战绩"></x-header>
    <div class="ugc-header">
      <img src="../../public/images/index-team-01.png" />
      <div class="ugc-name">
        <p>吴主任</p>
        <div>16</div>
      </div>
      <div class="ugc-desc">
        <p>近期10中8 盈利192%</p>
        <p>盈利率225%</p>
      </div>
      <div class="desc-more">
        <div>
          <p>68</p>
          <p>荐单</p>
        </div>
        <div>
          <p>1220</p>
          <p>粉丝</p>
        </div>
        <div>已关注</div>
      </div>
    </div>
    <p class="title">近10荐单</p>
    <div>
      <x-table :cell-bordered="false"
               style="background-color:#fff;">
        <tbody>
          <tr>
            <td>周一008</td>
            <td>天狼星 VS 卡尔玛</td>
            <td>...</td>
          </tr>
          <tr>
            <td>周一008</td>
            <td>天狼星 VS 卡尔玛</td>
            <td>...</td>
          </tr>
        </tbody>
      </x-table>
      <div class="table-result">立即<br>查看</div>
    </div>
    <div>
      <x-table :cell-bordered="false"
               style="background-color:#fff;">
        <tbody>
          <tr>
            <td>周一008</td>
            <td>天狼星 VS 卡尔玛</td>
            <td>...</td>
          </tr>
          <tr>
            <td>周一008</td>
            <td>天狼星 VS 卡尔玛</td>
            <td>...</td>
          </tr>
        </tbody>
      </x-table>
      <div class="table-result">立即<br>查看</div>
    </div>
  </div>
</template>

<script>
import { XHeader,XTable } from 'vux'

export default {
components: {
    XHeader,
    XTable
  },
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
        color: #0393F8;
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
          background: #0393F8;
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
  .vux-table {
    float: left;
    margin-left: 21px;
    width: 71%;
    font-size: 12px;
    margin-bottom: 18px;
    tr {
      border-left: 1px solid #f1f4f6;
      border-right: 1px solid #f1f4f6;
      font-family: PingFangSC-Regular;
    }
    td:first-child {
      color: #b4cae5;
    }
  }
  .table-result {
    float: left;
    width: 68px;
    height: 66px;
    background:#0393F8;
    color: #ffffff;
    padding-top: 18px;
    text-align: center;
    font-size: 14px;
  }
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
