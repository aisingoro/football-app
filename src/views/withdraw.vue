<!-- 提现页面 -->
<template>
	<div class="withdra-wrapper">
		<x-header :left-options="{backText: ''}"
		          title="提现"></x-header>
		<!-- 头部 -->
		<section class="header">
			<h1>可提现金额：</h1>
			<div class="header-center">
				<div class="withdra-number">{{$store.state.tx_balance/100}}</div>
				<div class="withdra-text">我的仙灵币（枚）</div>
			</div>
		</section>
		<section class="center">
			<div class="center-list">
				<group>
					<x-input title="提现金额"
					         v-model="withdraNumber"
					         placeholder="请输入提现金额"></x-input>
					<x-input title="提现账户"
					         :disabled="true"
					         v-model="withdraAccount"></x-input>
				</group>
			</div>
			<div class="Modify-accunt"
			     @click="modifyAccount">
				修改账户>>
			</div>
		</section>
		<div class="confim-btn"
		     @click="sureDraw">确认提现</div>
	</div>
</template>
<script>
import https from '../https.js'
import { XInput,XHeader,Group ,ToastPlugin} from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
export default {
	components: {
		XInput,
		XHeader,
		Group
  },
	data () {
		return {
			withdraNumber: '', // 提现金额
			withdraAccount: this.$store.state.cardnum //提现账户
		}
	},
	methods:{
		sureDraw(){
			if(this.withdraNumber==''){
 				this.$vux.toast.show({
					 type:'warn',
					text: '请填写提现金额',
				})
			}
			https.fetchPost('/user/tx_blance.jsp',{amount:this.withdraNumber*100} ).then((data) => {
				console.log("ugc",data.data)
				if(data.data.statuscode<0){
					this.$vux.toast.show({
					 type:'warn',
					text: data.data.statusmsg
				})
				}else{
					this.$vux.toast.show({
					text: '提现成功！'
				})
				}
      }).catch(err=>{
            console.log(err)
        }
      )
		},
		modifyAccount(){
			this.$router.push('/modify-account')
		}
	}
}
</script>
<style lang="scss" scope>
.withdra-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(242, 245, 248, 1);
  .vux-header {
    background: #ffffff;
  }
}

.header {
  width: 100%;
  height: 181px;
  background: rgba(3, 147, 248, 1);
  opacity: 0.8;
  & > h1 {
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    padding: 23px 0 0 23px;
    font-family: PingFangSC-Regular;
    font-weight: normal;
  }
  .header-center {
    width: 100%;
    text-align: center;
    padding-top: 31px;
    color: #fff;
    font-size: 14px;
    font-family: PingFangSC-Regular;

    .withdra-number {
      font-size: 36px;
      font-weight: bold;
      padding-bottom: 12px;
      font-family: BebasNeue;
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
    color: #0393f8;
    padding: 27px 30px 0 0;
    font-family: PingFangSC-Regular;
  }
}

.confim-btn {
  width: 187px;
  height: 44px;
  background: rgba(3, 147, 248, 1);
  border-radius: 24px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 44px;
  margin: 117px auto;
}
</style>

<style>
.withdra-wrapper .vux-header .vux-header-title {
  color: #313233;
}
.withdra-wrapper .weui-cell {
  padding: 16px 15px;
}

.withdra-wrapper .weui-cell:before {
  left: 0;
}

.withdra-wrapper .weui-input {
  text-align: right;
  color: rgba(49, 50, 51, 1);
  font-size: 18px;
}

.withdra-wrapper .vux-x-input.disabled .weui-input {
  color: rgba(49, 50, 51, 1);
  text-fill-color: rgba(49, 50, 51, 1);
  -webkit-text-fill-color: rgba(49, 50, 51, 1);
  opacity: 1;
}
.withdra-wrapper .weui-label {
  font-size: 14px;
  font-family: PingFangSC-Regular;
  color: #313233;
}
</style>

