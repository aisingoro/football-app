<!-- 设置 -->
<template>
	<div class="setting-wrapper">
		<x-header :left-options="{backText: ''}"
		          title="设置"></x-header>
		<div class="setting-list">
			<group>
				<cell title="关于我们"
				      value="v1.0"
				      is-link
				      link="/About">
				</cell>
			</group>
		</div>
		<div class="login-out" @click="loginOut">退出登录</div>
	</div>
</template>
<script>
import { Group, Cell,XHeader } from 'vux'
export default {
	components: {
		Group,
		Cell,
		XHeader
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
		loginOut () {
			let data = localStorage.getItem('loginInfo')
			this.$store.commit('loginOut',JSON.parse(data))
			this.$store.state.userid = ''
			this.$router.go(-1)
		}
	},
}
</script>
<style lang="scss" scope>
.setting-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(242, 245, 248, 1);
  overflow: hidden;
  .vux-header {
    background: #ffffff;
  }
}
.setting-list {
  margin-top: 20px;
}

.login-out {
  width: 331px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  border: 1px solid rgba(228, 236, 240, 1);
  color: #ff455b;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  margin: 47px auto 0;
}
</style>
<style>
.setting-wrapper .vux-header .vux-header-title {
  color: #313233;
}
.setting-wrapper .weui-cell__ft {
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(142, 175, 215, 1);
}
</style>

