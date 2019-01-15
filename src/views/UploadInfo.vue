<template>
  <div class="upload-info">
    <x-header :left-options="{backText: ''}"
              title="成为专家"></x-header>
    <div class="upload">
      <h3>上传身份证</h3>
      <div class="front-side"
           @click="uploadFront">
        <div :class="obj"
             :style='{"height":height,"width":width}'>
          <img :style='{"height":height,"width":width}'
               v-if="uploadImage"
               class="img"
               :src="uploadImage" />
          <input class="aui-uploader__input"
                 type="file"
                 accept="image/*"
                 @change="uploadFile"
                 :class="{inputHide: inputHide}" />
        </div>
        <!-- <input class="upload"
               @change='add_img'
               type="file">
        <img :src="imgItem"
             width=50
             height=50> -->
        <p><img src="../../public/images/upload.png" />上传正面</p>
      </div>
      <div class="other-side">
        <p><img src="../../public/images/upload.png" />上传反面</p>
      </div>
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
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },
  data(){
    return{
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
    uploadFront(){
      //上传头像正面
    },
    nextPage(){
      // this.$router.push("/fill-info")
    },
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
              console.log(data.data)
            }).catch(err=>{
                  console.log(err)
              }
            )
      };
      if (file) fileReader.readAsDataURL(file);
      
    },
    //上传照片
    
        add_img(event){  
            let reader =new FileReader();
            let img1=event.target.files[0];
            let type=img1.type;//文件的类型，判断是否是图片
            let size=img1.size;//文件的大小，判断图片的大小
            if(this.imgData.accept.indexOf(type) == -1){
                alert('请选择我们支持的图片格式！');
                return false;
            }
            if(size>3145728){
                alert('请选择3M以内的图片！');
                return false;
            }
            var uri = ''
            let imgfile = new FormData(); 
            imgfile.append('file',img1,img1.name);
            console.log("imgfile",img1)
            var args={imgfile:imgfile}
            https.fetchPost('/system/uploadimg.jsp',imgfile).then((data) => {
              console.log(data.data)
            }).catch(err=>{
                  console.log(err)
              }
            )
            // this.$http.post('/file/upload',form,{
            //     headers:{'Content-Type':'multipart/form-data'}
            // }).then(response => {
            //     console.log(response.data)
            //     uri = response.data.url
            //     reader.readAsDataURL(img1);
            //     var that=this;
            //     reader.onloadend=function(){
            //         that.imgs.push(uri);
            //     }
            // }).catch(error => {
            //     alert('上传图片出错！');
            // })    
}
    
  }
}
</script>

<style lang="scss" scoped>
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

