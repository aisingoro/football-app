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
    <div class="show-dialog">
      <check-icon :value.sync="demo1"> </check-icon>
      <span @click="showDialog=!showDialog">用户协议</span>
    </div>

    <x-button type="primary"
              @click.native="getRegister"
              :loading="loadbtn"
              :disabled="username!==''&&userpsw!==''?false:true"
              :text="loginText"></x-button>

    <x-dialog v-model="showDialog">
      <iframe name="myiframe"
              id="myrame"
              src="http://api.xiaoqiuxian.com/about/registrationagreement.html"
              frameborder="0"
              align="left"
              style="width:100%;height:90%;margin-bottom:5px;">
        <p>你的浏览器不支持iframe标签</p>
      </iframe>
      <div @click="showDialog=false">
        <x-icon type="ios-close-outline"
                size="30"></x-icon>
      </div>
    </x-dialog>

    <!-- <p>版权所有 ©️ 小球仙 2019</p> -->
  </div>
</template>

<script>
import https from '../https.js'
import { XInput,XButton,XHeader,ToastPlugin,CheckIcon,XDialog, TransferDomDirective as TransferDom } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
    export default {
      directives: {
        TransferDom
      },
      components: {
        XInput,
        XButton,
        XHeader,
        CheckIcon,
        XDialog
      },
        data() {
            return {
              showDialog:false,
                isPsw: true,
                loadbtn: false,
                loginText: '注册',
                inputType: "password",
                username: '18518040722',
                userpsw: '123456',
                userNum:'',
                demo1:false
            }
        },
        methods: {
          //发送短信验证码
          sendauthsms(){
            https.fetchPost('/system/sendauthsms.jsp',{account:this.username,m:'reguser'} ).then((data) => {
                  console.log("ugcinfo",data.data)
                }).catch(err=>{
                      console.log(err)
                  }
                )

          },
          
          //注册用户
            getRegister(){
              if(this.demo1==false){
                this.$vux.toast.show({
                    type:'warn',
                    text: '请先勾选用户协议！',
                  })
                return false
              }
              console.log(1111)
                https.fetchPost('/system/checkauthcode.jsp',{account:this.username,autcode:this.userNum} ).then((data) => {
                  console.log("ugcinfo",data.data)
                }).catch(err=>{
                  this.$vux.toast.show({
                    type:'warn',
                    text: '验证码有误！',
                  })
                  }
                )
                https.fetchPost('/user/reguser.jsp',{account:this.username,pass:this.userpsw,autcode:this.userNum} ).then((data) => {
                  console.log("ugcinfo",data.data)
                  if(data.data.statuscode<0){
                    this.$vux.toast.show({
                      type:'warn',
                      text: data.data.statusmsg,
                    })
                  }else{
                    this.$vux.toast.show({
                      text: '注册成功！',
                    })
                    this.$router.go(-1)
                  }
                  
                }).catch(err=>{
                      console.log(err)
                  }
                )


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
.login .weui-dialog {
  width: 90%;
  height: 500px;
}
.show-dialog {
  font-size: 14px;
  margin-left: 30px;
  margin-top: 20px;
}
.show-dialog .vux-check-icon > .weui-icon-success:before,
.vux-check-icon > .weui-icon-success-circle:before {
  color: #0393f8;
}
</style>


