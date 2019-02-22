<template>
  <div class="upload-info">
    <x-header :left-options="{backText: ''}"
              title="成为专家"></x-header>
    <div class="upload">
      <h3>上传身份证</h3>
      <div class="front-side"
           v-bind:style="{backgroundImage:'url(' + uploadImageFront + ')'}">
        <input class="aui-uploader__input"
               type="file"
               accept="image/*"
               @change="uploadFile"
               :class="{inputHide: inputHide}" />
        <p v-if="uploadImageFront==''"><img src="../../public/images/upload.png" />上传正面</p>
      </div>
      <div class="other-side"
           v-bind:style="{backgroundImage:'url(' + uploadImageSide + ')'}">
        <input class="aui-uploader__input"
               type="file"
               accept="image/*"
               @change="uploadFileSide"
               :class="{inputHide: inputHide}" />
        <p v-if="uploadImageSide==''"><img src="../../public/images/upload.png" />上传反面</p>
      </div>
      <!-- <div class="other-side">
        <p><img src="../../public/images/upload.png" />上传反面</p>
      </div> -->
      <p>上传规则：</p>
      <p class="rules">1.请注意正反面是否上传错误</p>
      <p class="rules">2.请身份证拍摄的清晰度，保证内容清晰</p>
      <button class="btn"
              @click="nextPage">下一步</button>
    </div>
  </div>
</template>

<script>
import https from '../https.js'
import { XHeader,ToastPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
export default {
  components: {
    XHeader
  },
  data(){
    return{
      uploadImageSide:'',
      uploadImageFront:'',
      height:'50px',
      width:'50px',
      uploadImage:'',
      inputHide: false,
      obj: {
        "aui-uploader__input-box": true,
        "aui-uploader__input-box_after": false
      },
      imgItem:'',
      formData:new FormData(),
      imgs: {},
      imgLen:0,
      imgData: {
            accept: 'image/gif, image/jpeg, image/png, image/jpg',
        }
    }
    
  },
  methods:{
    
    nextPage(){
      if(this.uploadImageFront==''||this.uploadImageSide==''){
        this.$vux.toast.show({
          type:'warn',
          text: '请先上传身份照片',
        })
        return false;
      }
      let args={
        idcardpic1:this.uploadImageFront,
        idcardpic2:this.uploadImageSide
      }
      https.fetchPost('/user/saveidcard.jsp',args).then((data) => {
        console.log(data.data)
        this.$router.push("/fill-info")
      }).catch(err=>{
            console.log(err)
        }
      )
      // this.$router.push("/fill-info")
    },
    //上传照片
    uploadFile(event) {

      let _this = this;
      let file = event.target.files[0];

      let fileReader = new FileReader();
      fileReader.onload = function(e) {
        _this.inputHide = true;
        _this.obj["aui-uploader__input-box"] = false;
        _this.obj["aui-uploader__input-box_after"] = true;
        _this.$emit("change",e.target.result)
        var args={imgfile:e.target.result}
            https.fetchPost('/system/uploadimg.jsp',args).then((data) => {
              console.log(data.data.imgurl)
              _this.uploadImageFront = data.data.imgurl
            }).catch(err=>{
                  console.log(err)
              }
            )
      };
      if (file) fileReader.readAsDataURL(file);
      
    },
    //上传反面
    uploadFileSide(){
      let _this = this;
      let file = event.target.files[0];

      let fileReader = new FileReader();
      fileReader.onload = function(e) {
        _this.inputHide = true;
        _this.obj["aui-uploader__input-box"] = false;
        _this.obj["aui-uploader__input-box_after"] = true;
        _this.$emit("change",e.target.result)
        var args={imgfile:e.target.result}
            https.fetchPost('/system/uploadimg.jsp',args).then((data) => {
              console.log(data.data.imgurl)
              _this.uploadImageSide = data.data.imgurl
            }).catch(err=>{
                  console.log(err)
              }
            )
      };
      if (file) fileReader.readAsDataURL(file);
    }
    
    
  }
}
</script>

<style lang="scss" scoped>
.front-side,
.other-side {
  background-size: 100% 100% !important;
}
.aui-uploader__input {
  opacity: 0;
  width: 100%;
  height: 100%;
}
.upload-info {
  .vux-header {
    background: #ffffff;
  }
  .upload {
    width: 91.5%;
    margin: 20px auto;
    & > h3 {
      font-size: 16px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(49, 50, 51, 1);
      line-height: 22px;
    }
    & > div {
      width: 100%;
      height: 188px;
      background: rgba(248, 249, 250, 1);
      border-radius: 6px;
      margin-bottom: 22px;
      margin-top: 12px;
      position: relative;
      p {
        width: 100%;
        text-align: center;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(49, 50, 51, 1);
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -7px;
        display: inline-block;
        line-height: 20px;
        img {
          width: 14px;
          height: 14px;
          margin-right: 3px;
          vertical-align: middle;
        }
      }
    }
    & > p {
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
    }
    .rules {
      font-size: 12px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(180, 202, 229, 1);
      line-height: 20px;
    }
    .btn {
      display: block;
      width: 187px;
      height: 44px;
      background: linear-gradient(
        90deg,
        rgba(1, 208, 255, 1) 0%,
        rgba(1, 186, 255, 1) 100%
      );
      border-radius: 22px;
      color: #ffffff;
      position: fixed;
      bottom: 15px;
      left: 50%;
      margin-left: -93.5px;
      border: none;
    }
  }
}
</style>
<style>
.upload-info .vux-header .vux-header-title {
  color: #313233;
}
</style>

