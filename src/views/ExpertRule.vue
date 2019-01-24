<template>
  <div class="expert-rule">
    <x-header :left-options="{backText: ''}"
              title="成为专家"></x-header>
    <div class="rule-box">
      <h3>专家守则:</h3>
      <p class="rule-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
      </p>
    </div>
    <check-icon :value.sync="isRule">同意此协议</check-icon>
    <button class="btn"
            :class="isRule?'sure-btn':''"
            @click="nextRule">下一步</button>
  </div>
</template>

<script>
import { XHeader,CheckIcon } from 'vux'

export default {
  components: {
    XHeader,
    CheckIcon
  },
  data(){
    return{
      isRule: false
    }
  },
  methods:{
    nextRule(){
      if(this.isRule){
        this.$router.push("/upload-info")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.expert-rule {
  height: 100%;
  margin-top: 46px;
  .vux-header {
    background: #ffffff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .rule-box {
    width: 90%;
    height: 72.2%;
    background: rgba(248, 249, 250, 1);
    border-radius: 6px;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    & > h3 {
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(49, 50, 51, 1);
      line-height: 22px;
      margin-left: 17px;
      margin-top: 22px;
      margin-bottom: 12px;
    }
    .rule-info {
      height: calc(100% - 56px);
      overflow: hidden;
      overflow-y: scroll;
      margin: 0 17px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .btn {
    display: block;
    width: 187px;
    height: 44px;
    background: #d1d6da;
    border-radius: 22px;
    color: #ffffff;
    position: fixed;
    bottom: 15px;
    left: 50%;
    margin-left: -93.5px;
    border: none;
  }
  .sure-btn {
    background: #0393f8;
  }
}
</style>
<style>
.expert-rule .vux-header .vux-header-title {
  color: #313233;
}
.expert-rule .weui-icon-circle:before {
  color: #0393f8;
}
.expert-rule .vux-check-icon > .weui-icon-success:before,
.vux-check-icon > .weui-icon-success-circle:before {
  color: #0393f8;
}
.expert-rule .weui-icon-success {
  font-size: 18px !important;
  color: #0393f8 !important;
}
.expert-rule .weui-icon-circle {
  font-size: 18px !important;
}
.expert-rule .vux-check-icon {
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  margin-left: 22px;
  margin-top: 20px;
}
</style>

