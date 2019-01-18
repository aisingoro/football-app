<!-- 个人中心 -->
<template>
  <div class="setting-wrapper">
    <x-header :left-options="{backText: ''}"
              title="个人中心"></x-header>
    <div class="setting-list">
      <group class="user-pic">
        <cell title="我的头像"
              is-link>
          <img slot
               src="../../public/images/index-team-01.png"
               width=60/>
        </cell>
      </group>
      <group>
        <cell title="名称"
              value="tianve12"
              is-link>
        </cell>
        <cell title="性别"
              value="男"
              is-link>
        </cell>
        <cell title="手机号"
              value="18518040722"
              is-link>
        </cell>
        <cell title="登录密码"
              value="未设置"
              is-link>
        </cell>
        <cell title="实名信息"
              value=""
              is-link>
        </cell>
      </group>
      <group>
        <cell title="提现账户"
              value=""
              is-link
              link="">
        </cell>
      </group>
    </div>
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

