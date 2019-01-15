<!-- 设置 -->
<template>
	<div class="setting-wrapper">
		<div class="setting-list">
			<group>
				<cell title="关于我们"
					value="v1.0"
					is-link
					link="/About">
				</cell>
			</group>
		</div>
		<div class="login-out">退出登录</div>
	</div>
</template>
<script>
import { Group, Cell } from 'vux'
export default {
	components: {
		Group,
		Cell
  },
	data () {
		return {
		 list:[{
        title: '关于我们',
				url: '/About',
				desc: 'sss'
      }]
		}
	},
	methods: {

	},
}
</script>
<style lang="scss" scope>
	.setting-wrapper {
		width: 100%;
		height: 100%;
		background:rgba(242,245,248,1);
		overflow: hidden;
	}
	.setting-list {
		margin-top: 20px;
	}

	.login-out {
		width:331px;
		height:40px;
		background:rgba(255,255,255,1);
		border-radius:6px;
		border:1px solid rgba(228,236,240,1);
		color:#FF455B;
		font-size: 16px;
		text-align: center;
		line-height: 40px;
		margin: 47px auto 0;

	}
</style>
