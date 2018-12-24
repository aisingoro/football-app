import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5';

let t = String(Date.parse(new Date()));
let newT = t.substring(0, t.length - 3);

axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.headers.common['channel'] = '';
axios.defaults.headers.common['platform'] = '';
axios.defaults.headers.common['package'] = '';
axios.defaults.headers.common['version'] = '1.0.0';
axios.defaults.headers.common['userid'] = '1';
axios.defaults.headers.common['vcode'] = '1';
axios.defaults.headers.common['t'] = newT;
axios.defaults.headers.common['sign'] = md5(newT + 'y73jkfks98ky9dgdfgv');
axios.defaults.baseURL = '/api'; //配置接口地址
// axios.defaults.baseURL = 'http://39.104.189.104'
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  //对响应数据做些事
  if (!res.data.success) {
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  // var t = String(Date.parse(new Date()));
  // var newT = t.substring(0, t.length - 3);
  return new Promise((resolve, reject) => {
    axios.post(url, params
      )
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