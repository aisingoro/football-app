<!-- 提现页面 -->
<template>
	<div class="withdra-result-wrapper">
		<div class="center-content">
			<!--根据提现结果 展示不同的状态-->
			<!-- 成功失败icon自己写一个 -->
			<h2 class="status-title">提现成功</h2>
			<div class="status-text">具体到账时间以银行为准</div>
		</div>
	</div>
</template>
<script>
import { Icon } from 'vux'
export default {
	components: {
		Icon
  },
	data () {
		return {
			status: 'success' // 提现结果状态
		}
	},
	computed: {

	},
}
</script>
<style lang="scss" scope>
	.withdra-result-wrapper {
		width: 100%;
		height: 100%;
	}
	.center-content {
		text-align: center;
		padding-top: 218px;
	}

	.status-title {
		color:#313233;
		font-size:20px;
		padding:10px 0;
	}
	.status-text {
		color:#8EAFD7;
		font-size:14px;
	}
</style>


