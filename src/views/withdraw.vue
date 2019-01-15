<!-- 提现页面 -->
<template>
	<div class="withdra-wrapper">
		<!-- 头部 -->
		<section class="header">
			<h1>可提现金额：</h1>
			<div class="header-center">
				<div class="withdra-number">2470</div>
				<div class="withdra-text">我的仙灵币（枚）</div>
			</div>
		</section>
		<section class="center">
			<div class="center-list">
				<group>
					<x-input title="提现金额" v-model="withdraNumber" placeholder="请输入提现金额"></x-input>
					<x-input title="提现账户" disabled="true" v-model="withdraAccount"></x-input>
				</group>
			</div>
			<div class="Modify-accunt">
				修改账户>>
				</div>
		</section>
		<div class="confim-btn">确认提现</div>
	</div>
</template>
<script>
import { XInput } from 'vux'
export default {
	components: {
    XInput
  },
	data () {
		return {
			withdraNumber: '', // 提现金额
			withdraAccount: '6214830100967933' //提现账户
		}
	}
}
</script>
<style lang="scss" scope>
	.withdra-wrapper {
		width: 100%;
		height: 100%;
		background:rgba(242,245,248,1);
	}

	.header{
		width: 100%;
		height: 181px;
		background:rgba(3,147,248,1);
		opacity: 0.8;
		& > h1 {
			font-size:14px;
			color:rgba(255,255,255,1);
			padding: 23px 0 0 23px;
		}
		.header-center {
			width: 100%;
			text-align: center;
			padding-top: 31px;
			color: #fff;
			font-size: 14px;
			.withdra-number {
				font-size: 36px;
				font-weight: bold;
				padding-bottom: 12px;
				font-family:PingFangSC-Regular;
			}
		}
	}
	.center {
		.center-list {
			background: #fff;
		}

		.Modify-accunt {
			// width: 100%;
			text-align: right;
			font-size: 14px;
			color: #0393F8;
			padding: 27px 48px 0 0;
		}
	}

	.confim-btn {
		width:187px;
		height:44px;
		background:rgba(3,147,248,1);
		border-radius:24px;
		font-size: 20px;
		color: #fff;
		text-align: center;
		line-height: 44px;
		margin: 117px auto;
	}
</style>

<style>
	.withdra-wrapper .weui-cell {
		padding: 16px 15px;
	}

	.withdra-wrapper .weui-cell:before {
		left: 0;
	}

	.withdra-wrapper .weui-input {
		text-align: right;
		color:rgba(49,50,51,1);
		font-size:18px;
	}

	.withdra-wrapper .vux-x-input.disabled .weui-input {
		color:rgba(49,50,51,1);
		text-fill-color: rgba(49,50,51,1);
    -webkit-text-fill-color: rgba(49,50,51,1);
    opacity: 1;
	}
</style>

