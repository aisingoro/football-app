<!-- 提现页面 -->
<template>
	<div class="withdra-result-wrapper">
		<x-header :left-options="{backText: ''}"
		          title="购买成功"></x-header>
		<div class="center-content">
			<!--根据提现结果 展示不同的状态-->
			<!-- 成功失败icon自己写一个 -->
			<h2 class="status-title">购买成功</h2>
			<!-- <div class="status-text">具体到账时间以银行为准</div> -->
		</div>
	</div>
</template>
<script>
import { Icon ,XHeader} from 'vux'
export default {
	components: {
		Icon,
		XHeader
  },
	data () {
		return {
			status: 'success' // 提现结果状态
		}
	},
	computed: {

	},
	mounted() {
		// 购买成功 跳回上一级页面
		setTimeout(() => {
			 this.$router.go(-1)
		}, 3000);
	},
}
</script>
<style lang="scss" scope>
.withdra-result-wrapper {
  width: 100%;
  height: 100%;
  .vux-header {
    background: #ffffff;
  }
}
.center-content {
  text-align: center;
  padding-top: 218px;
}

.status-title {
  color: #313233;
  font-size: 20px;
  padding: 10px 0;
}
.status-text {
  color: #8eafd7;
  font-size: 14px;
}
</style>
<style>
.withdra-result-wrapper .vux-header .vux-header-title {
  color: #313233;
}
</style>



