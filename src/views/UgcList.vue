<template>
  <div class="ugc-list">
    <x-header :left-options="{backText: ''}"
              title="成为专家"></x-header>
    <div class="ugc-list-item"
         v-for="(item,index) in ugcList"
         :key="index">
      <img src="../../public/images/index-team-01.png" />
      <div>
        <p>赵教授</p>
        <p>近期10中8 盈利100%</p>
      </div>
      <span class="more">></span>
    </div>
    <div class="ugc-list-item">
      <img src="../../public/images/index-team-01.png" />
      <div>
        <p>赵教授</p>
        <p>近期10中8 盈利100%</p>
      </div>
      <span class="more">></span>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },
  data(){
    return{
      ugcList:[]
    }
  },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
.ugc-list {
  width: 100%;
  height: 100%;
  background: #f2f5f8;
  .vux-header {
    background: #ffffff;
  }
  .ugc-list-item {
    width: 91.5%;
    height: 80px;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    border: 1px solid rgba(239, 242, 244, 1);
    margin: 0 auto;
    margin-top: 16px;
    position: relative;
    img {
      float: left;
      width: 48px;
      height: 48px;
      margin: 16px;
    }
    & > div {
      p {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        &:first-child {
          margin-top: 22px;
          font-size: 16px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
      }
    }
    .more {
      position: absolute;
      right: 30px;
      top: 50%;
      margin-top: -11px;
    }
  }
}
</style>
<style>
.ugc-list .vux-header .vux-header-title {
  color: #313233;
}
</style>

