<template>
  <div class="login">
    <x-header :left-options="{backText: ''}">
    </x-header>
    <div class="title">注册</div>
    <x-input placeholder="请输入登录账号"
             v-model="username">
      <img slot="label"
           style="padding-right:10px;display:block;"
           src="../../public/images/login-phone.png"
           width="18"
           height="26"></x-input>
    <x-input placeholder="请设置密码"
             :type="inputType"
             :show-clear="false"
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
             v-model="userpsw">
      <div slot="right"
           class="get-num">获取验证码</div>
    </x-input>

    <x-button type="primary"
              @click="getLogin"
              :loading="loadbtn"
              :disabled="username!==''&&userpsw!==''?false:true"
              :text="loginText"></x-button>

    <!-- <p>版权所有 ©️ 小球仙 2019</p> -->
  </div>
</template>

<script>
import { XInput,XButton,XHeader } from 'vux'

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
                loginText: '注册',
                inputType: "password",
                username: 'wangwei@aos',
                userpsw: 'e10adc3949ba59abbe56e057f20f883e'
            }
        },
        methods: {
            getLogin(){
                let vm = this
                vm.loadbtn = true;
                vm.loginText = '登录中'
                vm.$router.push("/home/workbench") //展示屏蔽接口
                
                let data = {
                    "grant_type": "password",
                    "password": this.userpsw,//"e10adc3949ba59abbe56e057f20f883e",//md5 123456
                    "username": this.username//"wangwei@aos"
                }


                // ServicesManager.getService(ServicesNames.AUTHORIZATION, data).then(res => {
                //     let str = res.data.OutArgs.msg;
                //     var obj = JSON.parse(str);
                //     sessionStorage.setItem('aToken', obj.access_token.trim());
                //     let subData = {"userId":1}
                //     ServicesManager.getService(ServicesNames.LOGINSERVICE, subData).then(res => {
                //         console.log('LOGINSERVICE', res);
                //         vm.loadbtn = false
                //         vm.loginText = '登录'
                //         vm.$router.push("/home/workbench")
                //     })
                // }).catch(res => {
                //     vm.loadbtn = false;
                //     vm.loginText = '登录'
                //     vm.$aui.toast.show({
                //         text: '用户名密码错误',
                //         type: 'warn'
                //     })
                // })
            },
            signIn(){
              this.$router.push("/")
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


