<template>
  <div class="login">
    <x-header :left-options="{backText: ''}">
      <a slot="right"
         @click="signIn">注册</a>
    </x-header>
    <div class="title">{{pswTap?'密码登录':'验证码登录'}}</div>
    <x-input placeholder="请输入登录账号"
             v-model="username">
      <img slot="label"
           style="padding-right:10px;display:block;"
           src="../../public/images/login-phone.png"
           width="18"
           height="26"></x-input>
    <x-input placeholder="请输入密码"
             :type="inputType"
             :show-clear="false"
             v-model="userpsw"
             v-if="pswTap">
      <img slot="label"
           style="padding-right:10px;display:block;"
           src="../../public/images/login-psw.png"
           width="20"
           height="24">
    </x-input>
    <x-input placeholder="请输入验证码"
             :type="inputType"
             :show-clear="false"
             v-model="userNum"
             v-if="!pswTap">
      <div slot="right"
           class="get-num"
           @click="getNum">获取验证码</div>
    </x-input>
    <div class="sign-in"
         @click="forgetPsw"
         v-if="pswTap">找回密码</div>
    <x-button type="primary"
              @click.native="getLogin"
              :loading="loadbtn"
              :disabled="username!==''&&userpsw!==''?false:true"
              :text="loginText"></x-button>
    <span class="change-btn"
          @click="pswTap=!pswTap">切换/验证码登录</span>
    <p>版权所有 ©️ 小球仙 2019</p>
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
              userNum:'',
                pswTap:true,
                isPsw: true,
                loadbtn: false,
                loginText: '登录',
                inputType: "password",
                username: '18518040722',
                userpsw: '123456'
            }
        },
        methods: {
          //发送短信验证码
          getNum(){
            https.fetchPost('/system/sendauthsms.jsp',{account:this.username,m:''} ).then((data) => {
                  console.log("ugcinfo",data.data)
                }).catch(err=>{
                      console.log(err)
                  }
                )
          },
            getLogin(){
              var args={
                    account:this.username,
                    vcode:this.userNum
                  }
                if(this.pswTap){
                  args={
                    account:this.username,
                    pass:this.userpsw,
                  }
                }
                https.fetchPost('/user/login.jsp',args ).then((data) => {
                  this.$store.state.userid=data.data.user.userid
                  this.$vux.toast.show({
                    text: '登录成功！',
                  })
                  this.$router.go(-1)
                }).catch(err=>{
                      console.log(err)
                  }
                )
            },
            signIn(){
              this.$router.push("/register")
            },
            forgetPsw(){
              
            }

        }
    };
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
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


