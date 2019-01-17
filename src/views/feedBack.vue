<!-- 意见反馈 -->
<template>
	<div class="feedBack-wrapper">
		<x-header :left-options="{backText: ''}"
		          title="意见反馈"></x-header>
		<div class="feedBack-title">欢迎您提出宝贵的意见与建议</div>
		<group>
			<x-textarea :autosize="true"
			            :max="120"
			            placeholder="请输入您的意见与建议（不超过120字）"
			            v-model="textareaValue">
			</x-textarea>
		</group>
		<Toast v-model="isMsg"
		       :text="toastText"
		       width="10em"
		       position="top"
		       type="text"></Toast>
		<div class="confim-btn"
		     @click="submit">提交</div>
	</div>
</template>
<script>
import https from '../https.js'
import { XTextarea, Toast,Group,XHeader } from 'vux'

export default {
	components: {
		XTextarea,
		Toast,
		Group,
		XHeader
  },
	data () {
		return {
			textareaValue: '',
			toastText: '请填写不得少于20字的反馈内容哦!',
			isMsg: false
		}
	},
	methods: {
		// 提交
		submit () {
			if (this.textareaValue == ''||this.textareaValue.length<20) {
				this.isMsg = true
			} else {
				let args={
					message:this.textareaValue,
					mtype:'0001'
				}
				// 提交
				https.fetchPost('/user/feedback.jsp',args ).then((data) => {
					console.log(data.data)
					if(data.data.statuscode>0){
						this.toastText='反馈成功！'
						this.isMsg=true
						this.$router.go(-1)
					}
				}).catch(err=>{
							console.log(err)
					}
				)
			}
		}
	},
}
</script>
<style lang="scss" scope>
.feedBack-wrapper {
  width: 100%;
  height: 100%;
  background: #fff;
  .vux-header {
    background: #ffffff;
  }
  .feedBack-title {
    width: 100%;
    color: #313233;
    font-size: 16px;
    text-align: center;
    padding-top: 56px;
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
    margin: 40px auto;
  }
}
</style>
<style>
.feedBack-wrapper .weui-textarea {
  width: 331px;
  min-height: 192px;
  background: rgba(248, 249, 250, 1);
  border-radius: 6px;
  margin: 18px auto 0;
  padding: 19px 0 0 19px;
  font-size: 16px;
  /* color: #b4cae5; */
}
.feedBack-wrapper .vux-header .vux-header-title {
  color: #313233;
}
.feedBack-wrapper .weui-cells:before {
  border-top: none;
}
.feedBack-wrapper .weui-cells:after {
  border-bottom: none;
}
</style>


