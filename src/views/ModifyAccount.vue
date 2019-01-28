<template>
  <div class="modify-account">
    <x-header :left-options="{backText: ''}"
              title="提现账户"></x-header>
    <group>
      <x-input title="银行卡号"
               placeholder="请输入银行卡号"
               v-model="cardnum"
               text-align="right"></x-input>
      <x-input title="开户行"
               text-align="right"
               placeholder="请输入开户行"
               v-model="openingbank"></x-input>
    </group>
    <div class="editModcard"
         @click="editModcard">确定修改</div>
  </div>
</template>

<script>
import https from '../https.js'
import {XHeader,Group,XInput,ToastPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
export default {
  components: {
    XHeader,
    Group,
    XInput
    
  },
  data(){
    return{
      cardnum:'',
      openingbank:''
    }
   
  },
mounted(){
  this.cardnum = this.$store.state.cardnum;
  this.openingbank = this.$store.state.openingbank
},
  methods:{
    editModcard(){
      https.fetchPost('/user/modcard.jsp',{cardnum:this.cardnum,openingbank:this.openingbank} ).then((data) => {
				console.log("结果！！！",data.data)
				if(data.data.statuscode=='1'){
          this.$vux.toast.show({
            text: '修改成功！',
          })
          this.$store.state.cardnum = this.cardnum
          this.$store.state.openingbank = this.openingbank
          this.$router.go(-1)
        }
      }).catch(err=>{
            console.log(err)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.modify-account {
  width: 100%;
  height: 100%;
  background: #f2f5f8;
  margin-top: 46px;
  .vux-header {
    background: #ffffff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .editModcard {
    width: 187px;
    height: 44px;
    background: rgba(3, 147, 248, 1);
    border-radius: 24px;
    margin: 200px auto;
    font-size: 20px;
    color: #fff;
    line-height: 44px;
    text-align: center;
  }
}
</style>
<style>
.modify-account .vux-header .vux-header-title {
  color: #313233;
}
.modify-account .weui-label {
  font-size: 14px;
}
.modify-account .weui-cell {
  padding: 30px 15px;
}
</style>

