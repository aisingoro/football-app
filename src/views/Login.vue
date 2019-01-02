<template>
    <div class="login">
        <img src="../../public/images/logo.png" />
        <x-input placeholder="请输入登录账号" v-model="username"></x-input>
        <x-input placeholder="登录密码" :type="inputType" :show-clear="false" v-model="userpsw">
            <img slot="right" :src="isPsw?require('../../public/images/psw-open.png'):require('../../public/images/psw-close.png')" @click="inputType=='password'?inputType='text':inputType='password',isPsw=!isPsw" />
        </x-input>
        <x-button type="primary" @click="getLogin" :loading="loadbtn" :disabled="username!==''&&userpsw!==''?false:true" :text="loginText"></x-button>
        <div class="sign-up" @click="signIn">立即注册</div>
        <div class="sign-in" @click="forgetPsw">找回密码</div>
        <p>版权所有 ©️ 赞同科技 SINCE 1993</p>
    </div>
</template>

<script>
import { XInput,XButton } from 'vux'

    export default {
      components: {
        XInput,
        XButton
      },
        data() {
            return {
                isPsw: true,
                loadbtn: false,
                loginText: '登录',
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
.sign-up{
  float:left;
  margin-left:10%;
  margin-top:10px;
  font-size:12px;
  
}
.sign-in{
  float:right;
  margin-right:10%;
  margin-top:10px;
  font-size:12px;
  
  
  }
</style>
<style>
.login .weui-cell {
  margin: 8px 32px;
}

.login .weui-cell:before {
  border-top: 0;
  border-bottom: 1px solid #dcdcdc;
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
  background: #33c3cf;
  width: 80%;
  margin-top: 44px;
}

.login .weui-btn_loading.weui-btn_primary,
.weui-btn_loading.weui-btn_warn {
  color: #ffffff;
}
.login .weui-btn_disabled.weui-btn_primary{
  background:#33c3cf;
  opacity:0.5;
}
</style>


