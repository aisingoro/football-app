<template>
  <div class="login">
    <x-header :left-options="{backText: ''}">
    </x-header>
    <div class="title">找回密码</div>
    <x-input placeholder="请输入登录账号"
             v-model="username">
      <img slot="label"
           style="padding-right:10px;display:block;"
           src="../../public/images/login-phone.png"
           width="18"
           height="26"></x-input>
    <x-input placeholder="请设置密码"
             :type="inputType"
             v-model="userpsw">
      <img slot="label"
           style="padding-right:10px;display:block;"
           src="../../public/images/login-psw.png"
           width="20"
           height="24">
    </x-input>
    <x-input placeholder="请输入验证码"
             :type="inputType"
             :show-clear="false"
             v-model="userNum">
      <div slot="right"
           class="get-num"
           @click="sendauthsms">获取验证码</div>
    </x-input>

    <x-button type="primary"
              @click.native="getRegister"
              :loading="loadbtn"
              :disabled="username!==''&&userpsw!==''?false:true"
              :text="loginText"></x-button>

    <!-- <p>版权所有 ©️ 小球仙 2019</p> -->
  </div>
</template>

<script>
import https from '../https.js'
import { XInput,XButton,XHeader,ToastPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
    export default {
      components: {
        XInput,
        XButton,
        XHeader
      },
        data() {
            return {
                isPsw: true,
                loadbtn: false,
                loginText: '找回密码',
                inputType: "password",
                username: '18518040722',
                userpsw: '123456',
                userNum:''
            }
        },
        methods: {
          //发送短信验证码
          sendauthsms(){
            https.fetchPost('/system/sendauthsms.jsp',{account:this.username,m:'modpass'} ).then((data) => {
                  console.log("ugcinfo",data.data)
                }).catch(err=>{
                      console.log(err)
                  }
                )

          },
          
          //注册用户
            getRegister(){
              console.log(1111)
                https.fetchPost('/system/checkauthcode.jsp',{account:this.username,autcode:this.userNum} ).then((data) => {
                  console.log("ugcinfo",data.data)
                }).catch(err=>{
                  this.$vux.toast.show({
                    text: '验证码有误！',
                  })
                  }
                )
                https.fetchPost('/user/modpass.jsp',{account:this.username,newpass:this.userpsw,autcode:this.userNum} ).then((data) => {
                  console.log("ugcinfo",data.data)
                  if(data.data.statuscode<0){
                    this.$vux.toast.show({
                      type:'warn',
                    text: data.data.statusmsg
                  })
                  }
                  this.$vux.toast.show({
                    text: '修改密码成功！',
                  })
                  this.$router.go(-1)
                }).catch(err=>{
                      console.log(err)
                  }
                )
            },
            
        }
    };
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 46px;
  .title {
    font-size: 26px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    margin: 65px auto;
    text-align: center;
  }
  .change-btn {
    display: block;
    width: 100%;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #0393f8;
    text-align: center;
    margin-top: 22px;
  }
  .get-num {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(41, 59, 81, 1);
    border-left: 3px solid #fff;
    padding-left: 10px;
  }
}
.vux-header {
  background: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.login > img {
  display: block;
  width: 50%;
  margin: 76px auto;
}

.login p {
  width: 200px;
  text-align: center;
  font-size: 10px;
  position: fixed;
  bottom: 35px;
  left: 50%;
  margin-left: -100px;
}
.sign-up {
  float: left;
  margin-left: 10%;
  margin-top: 10px;
  font-size: 12px;
}
.sign-in {
  float: right;
  margin-right: 10%;
  margin-top: 10px;
  font-size: 12px;
}
</style>
<style>
.login .weui-cell {
  margin: 0 32px;
  background: #f8f9fa;
  margin-top: 25px;
  border-radius: 25px;
}

.login .weui-cell:before {
  border-top: 0;
  border-bottom: none;
  bottom: 0;
  top: inherit;
  right: 15px;
}

.login button {
  width: 80%;
  margin-top: 44px;
}

.login .weui-icon-clear {
  height: 24px;
  color: rgba(0, 0, 0, 0);
  background: url('../../public/images/delete.png') 100% 100%/24px 24px
    no-repeat;
}

.login .weui-cell__ft img {
  width: 24px;
  height: 24px;
}

.login .weui-btn_primary {
  background: #0393f8;
  border-radius: 22px;
  width: 80%;
  margin-top: 78px;
}

.login .weui-btn_loading.weui-btn_primary,
.weui-btn_loading.weui-btn_warn {
  color: #ffffff;
}
.login .weui-btn_disabled.weui-btn_primary {
  background: #33c3cf;
  opacity: 0.5;
}
.login .vux-header .vux-header-title {
  color: #313233;
}
.login .vux-header .vux-header-right a,
.vux-header .vux-header-right button {
  color: #293b51;
}
.login .vux-header .vux-header-left .left-arrow:before {
  border: 1px solid #293b51;
  border-width: 1px 0 0 1px;
}
</style>


