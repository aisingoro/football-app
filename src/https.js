import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5';
// import Vuex from 'vuex'
import store from './store'


//sign加密对象格式排序方法
// function objKeySort(obj) { //排序的函数
//   var newkey = Object.keys(obj).sort();
//   //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
//   var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
//   for (var i = 0; i < newkey.length; i++) { //遍历newkey数组
//     newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
//   }
//   console.log("newObj", newObj)
//   return newObj; //返回排好序的新对象
// }

axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
// axios.defaults.baseURL = '/api'; //配置接口地址
axios.defaults.baseURL = 'http://api.xiaoqiuxian.com'
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  console.log('userid', store.state.userid)
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  let t = String(Date.parse(new Date()));
  let newT = t.substring(0, t.length - 3);
  config.headers.common['channel'] = localStorage.getItem('channel');
  config.headers.common['platform'] = '';
  config.headers.common['package'] = '';
  config.headers.common['version'] = '1.0.0';
  config.headers.common['userid'] = store.state.userid;
  config.headers.common['vcode'] = store.state.vcode;
  config.headers.common['t'] = newT;
  config.headers.common['sign'] = md5(newT + 'y73jkfks98ky9dgdfgv');

  console.log('config:' + config.data)
  if (config.data !== "") {
    config.headers.common['sign'] = md5(config.data.split("&").sort().join('|') + '|' + newT + 'y73jkfks98ky9dgdfgv');
    console.log('加密前！！！！！！', config.data.split("&").sort().join('|') + '|' + newT + 'y73jkfks98ky9dgdfgv')
    console.log('加密后！！！！！！', config.headers.common['sign'])
    console.log('测试加密：', md5('cardnum=sss|expertdesc=%E6%94%B6%E6%8B%BE%E6%94%B6%E6%8B%BE%E6%94%B6%E6%8B%BE|expertname=%E5%BE%97%E5%88%B0%E7%9A%84|idcard=1111|openingbank=2222|truename=ss|1547720442y73jkfks98ky9dgdfgv'))

  }
  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  console.log('响应拦截的内容：')
  console.log(res)
  //对响应数据做些事
  if (res.status === 200) {
    if (res.data.statuscode >= 0) {
      return Promise.resolve(res);
    } else {
      console.log('请求错误...' + res.data.statusmsg)
      Vue.$vux.toast.text(res.data.statusmsg, 'top')
    }

  }
  return res;
}, (error) => {
  console.log('网络异常')
  Vue.$vux.toast.text('网络异常,请稍后重试!', 'top')
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  // var t = String(Date.parse(new Date()));
  // var newT = t.substring(0, t.length - 3);
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: param
      })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  fetchPost,
  fetchGet,
}