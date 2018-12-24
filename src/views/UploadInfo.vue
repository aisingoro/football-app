<template>
  <div class="upload-info">
    <x-header :left-options="{backText: ''}"
              title="成为专家"></x-header>
    <div class="upload">
      <h3>上传身份证</h3>
      <div class="front-side">
        <p><img src="../../public/images/upload.png" />上传正面</p>
      </div>
      <div class="other-side">
        <p><img src="../../public/images/upload.png" />上传反面</p>
      </div>
      <p>上传规则：</p>
      <p class="rules">1.请注意正反面是否上传错误</p>
      <p class="rules">2.请身份证拍摄的清晰度，保证内容清晰</p>
      <button class="btn"
              @click="nextPage">下一步</button>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },
  methods:{
    nextPage(){
      this.$router.push("/fill-info")
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-info {
  .vux-header {
    background: #ffffff;
  }
  .upload {
    width: 91.5%;
    margin: 20px auto;
    & > h3 {
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(49, 50, 51, 1);
      line-height: 22px;
    }
    & > div {
      width: 100%;
      height: 188px;
      background: rgba(248, 249, 250, 1);
      border-radius: 6px;
      margin-bottom: 22px;
      margin-top: 12px;
      position: relative;
      p {
        width: 100%;
        text-align: center;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(49, 50, 51, 1);
        position: absolute;
        top: 50%;
        margin-top: -7px;
        display: inline-block;
        line-height: 20px;
        img {
          width: 14px;
          height: 14px;
          margin-right: 3px;
          vertical-align: middle;
        }
      }
    }
    & > p {
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
    }
    .rules {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(180, 202, 229, 1);
      line-height: 20px;
    }
    .btn {
      display: block;
      width: 187px;
      height: 44px;
      background: linear-gradient(
        90deg,
        rgba(1, 208, 255, 1) 0%,
        rgba(1, 186, 255, 1) 100%
      );
      border-radius: 22px;
      color: #ffffff;
      position: fixed;
      bottom: 15px;
      left: 50%;
      margin-left: -93.5px;
      border: none;
    }
  }
}
</style>
<style>
.upload-info .vux-header .vux-header-title {
  color: #313233;
}
</style>

