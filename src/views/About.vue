<template>
  <div class="about">
		<div class="about-box">
			<img class="about-icon" src="../../public/images/about-icon.png" alt="">
			<h1>小球仙 V1.0</h1>
		</div>
		<div class="desc">北京球先科技有限公司研发产品</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
	.about {
		height: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
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
		color: #B4CAE5;
		font-size: 12px;
		position: absolute;
		bottom: 49px;
		left: 50%;
		transform: translate(-50%);
	}
</style>
