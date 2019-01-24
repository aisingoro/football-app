<template>
	<div class="about">
		<x-header :left-options="{backText: ''}"
		          title="关于我们"></x-header>
		<div class="about-box">
			<img class="about-icon"
			     src="../../public/images/about-icon.png"
			     alt="">
			<h1>小球仙 V1.0</h1>
		</div>
		<div class="desc">北京球先科技有限公司研发产品</div>
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

<style lang="scss">
.about {
  height: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 46px;
  .vux-header {
    border-bottom: 1px solid #f5f5f5;
    width: 100%;
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
}
.about-box {
  text-align: center;
  margin-top: 188px;
  .about-icon {
    width: 79px;
    height: 80px;
    display: inline-block;
  }
  h1 {
    color: #313233;
    font-size: 18px;
  }
}
.desc {
  color: #b4cae5;
  font-size: 12px;
  position: absolute;
  bottom: 49px;
  left: 50%;
  transform: translate(-50%);
}
</style>
<style>
.about .vux-header .vux-header-title {
  color: #313233;
}
</style>

