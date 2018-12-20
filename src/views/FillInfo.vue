<template>
  <div class="fill-info">
    <x-header :left-options="{backText: ''}"
              title="成为专家"></x-header>
    <div class="fill">
      <x-input title="真实姓名"
               v-model="name"
               placeholder="请输入您的真实姓名"></x-input>
      <x-input title="身份证号"
               v-model="idCard"
               placeholder="请输入您的身份证号"></x-input>
      <x-input title="昵称"
               v-model="ugcName"
               placeholder="请输入您的昵称"></x-input>
      <p>昵称是您的专家宣传标识，提交申请后，昵称将不可更改</p>
      <h3>自我介绍</h3>
      <group class="text-bg">
        <x-textarea :max="200"
                    placeholder="点击此处填写您的自我介绍、竞猜经验、相关经 历等，以提高您审核通过的机率，200字以内"></x-textarea>
      </group>
      <button class="btn">提交</button>
    </div>

  </div>
</template>

<script>
import { XHeader,XInput,XTextarea,Group } from 'vux'

export default {
  components: {
    XHeader,
    XInput,
    XTextarea,
    Group
  },
  data(){
    return{
      name:'',
      idCard:'',
      ugcName:''
    }
  }
}
</script>

<style lang="scss" scoped>
.fill-info {
  .vux-header {
    background: #ffffff;
  }
  .fill {
    width: 91.5%;
    margin: 40px auto;
    & > p {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 69, 91, 1);
      line-height: 14px;
      margin-top: 14px;
    }
    & > h3 {
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(49, 50, 51, 1);
      line-height: 22px;
      margin-top: 36px;
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
<style lang="scss">
.fill-info .vux-header .vux-header-title {
  color: #313233;
}
.fill-info .weui-cell__hd {
  width: 120px;
  font-size: 16px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(49, 50, 51, 1);
}
.fill-info .weui-cell:before {
  border-top: none;
}
.fill-info .weui-cell {
  border-bottom: 1px solid #eaecee;
  margin-top: 20px;
}
.fill-info .weui-input::-webkit-input-placeholder {
  font-size: 16px;
  color: #b4cae5;
  font-family: PingFangSC-Regular;
  font-weight: 400;
}
.fill-info .vux-x-textarea.weui-cell .weui-cell__hd {
  width: 0;
}
.text-bg {
  width: 100%;
  height: 158px;
  background: rgba(248, 249, 250, 1);
  border-radius: 6px;
  .weui-cell {
    border-bottom: none;
  }
}
.fill-info .weui-cells,
textarea {
  background-color: rgba(248, 249, 250, 1) !important;
}
.fill-info .weui-cells:before {
  border-top: none;
}
.fill-info .weui-cells:after {
  height: 0;
  border-bottom: none !important;
}
.fill-info .weui-textarea::-webkit-input-placeholder {
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(180, 202, 229, 1);
  line-height: 24px;
}
.fill-info .weui-textarea-counter {
  font-size: 12px;
}
</style>

