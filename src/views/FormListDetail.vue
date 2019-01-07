<template>
  <div class="form-list-detail">
    <x-header :left-options="{backText: ''}"
              title="他的荐单"></x-header>
    <div class="form-list-info">
      <h3>推荐理由</h3>
      <div class="form-list-desc">
        <p>国内功能很强大且图标内容很丰富的矢量 图标库</p>
      </div>
      <h3>推荐结果</h3>
      <p>此荐单收费：
        <span>8</span>元</p>
      <div class="btn">解锁查看</div>
      <span class="attention">请点击解锁查看，支付费用后可查看</span>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },

}
</script>
<style lang="scss" scoped>
.form-list-detail {
  .vux-header {
    background: #ffffff;
  }
  .form-list-info {
    width: 91.5%;
    margin: 0 auto;
    h3 {
      margin-top: 29px;
      margin-bottom: 14px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }
    .form-list-desc {
      width: 100%;
      height: 158px;
      background: rgba(248, 249, 250, 1);
      border-radius: 6px;
      overflow: hidden;
      p {
        margin: 20px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
    }
    & > p {
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
    }
    .btn {
      width: 100%;
      height: 40px;
      border-radius: 6px;
      border: 1px solid rgba(228, 236, 240, 1);
      color: #0393f8;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      margin-top: 12px;
    }
    .attention {
      display: block;
      width: 100%;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      margin-top: 100px;
    }
  }
}
</style>

<style>
.form-list-detail .vux-header .vux-header-title {
  color: #313233;
}
</style>
