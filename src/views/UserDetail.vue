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
               :src="userpic"
               width=60 />
        </cell>
      </group>
      <group>
        <cell title="名称"
              :value="nickname"
              is-link
              @click.native="showPay=true">
        </cell>
        <cell title="性别"
              :value="sex.toString()"
              is-link
              @click.native="showPopupPicker=true">
        </cell>
        <cell title="手机号"
              :value="$store.state.account"
              is-link>
        </cell>
        <cell title="登录密码"
              value="未设置"
              is-link>
        </cell>
        <cell title="实名信息"
              :value="$store.state.expertid=='0'?'未认证':'已认证'"
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
    <group>
      <popup-picker :show.sync="showPopupPicker"
                    :show-cell="false"
                    title="TEST"
                    :data="[['男', '女']]"
                    v-model="sex"
                    @on-change="changeSex"></popup-picker>
    </group>
    <popup v-model="showPay"
           height="220px"
           is-transparent>
      <div style="width: 95%;background-color:#fff;height:192px;margin:0 auto;border-radius:5px;padding-top:10px;">
        <div style="padding:20px 15px;">
          <p class="paidType">请填写新昵称</p>
          <input type="text"
                 class="nickname"
                 v-model="nickname">
          <x-button @click.native="changeName">确定</x-button>
        </div>
      </div>
    </popup>

  </div>
</template>
<script>
import https from '../https.js'
import { Group, Cell,XHeader,PopupPicker,Popup ,XButton} from 'vux'
export default {
	components: {
		Group,
		Cell,
    XHeader,
    PopupPicker,
    Popup,
    XButton
  },
	data () {
		return {
      userpic:this.$store.state.userpic,
      nickname:this.$store.state.nickname,
      sex:[],
      showPopupPicker:false,
      showPay:false,
		 list:[{
        title: '关于我们',
				url: '/About',
				desc: 'sss'
      }]
		}
  },
  mounted(){
    this.sex = (this.$store.state.usersex==0?['男']:['女'])
  },
	methods: {
    changeUserInfo(e){
      let args=e
      https.fetchPost('/user/moduser.jsp',args).then((data) => {
        console.log(data.data)
        this.$store.state.usersex=this.sex.toString()
      }).catch(err=>{
            console.log(err)
        }
      )
    },
    changeSex(e){
      console.log(e)
        let args={
          userpic:this.userpic,
          nickname:this.nickname,
          sex:e.toString()
        }
        this.changeUserInfo(args)
    },
    changeName(){
        let args={
          userpic:this.userpic,
          nickname:this.nickname,
          sex:this.sex.toString()
        }
        this.changeUserInfo(args)
        this.showPay=false
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
.user-pic img {
  border-radius: 50%;
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
.nickname {
  height: 40px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #f5f5f5;
}
</style>

