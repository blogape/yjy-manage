import axios from "axios";
// import QS from 'qs';

import { getToken, removeToken,getmyToken } from './token.js'
import history from './history'

import { message } from "antd";



axios.defaults.baseURL='http://192.168.1.52:8765';
// create an axios instance
// const service = axios.create({
//   baseURL:'http://192.168.1.52:8765',// api的base_url
//   timeout: 20000
// });

//request interceptor

axios.interceptors.request.use(
  config => {
    // loading.show(config);
    let token = getToken();
    if (token) {
     var mytoken=JSON.parse(token);
      config.headers.Token = mytoken.token; //让每个请求携带token ['X-Token'] 为自定义key
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error);
  }
);

// respone interceptor

axios.interceptors.response.use(
  response => {

    // loading.hide(response.config);
    const res = response.data;
    if (res.code !== 0) {
   
      message.error(res.msg);
      return Promise.reject(res.msg);
    } else {
   
      return response.data;
    }
  },
  error => {
    // loading.hide(error.config);
    if (error.response && error.response.status === 401) {
      removeToken();
      if (error.config.url.indexOf("layout") === -1) {
        message.error("登录信息已过期，请重新登录！");
      }
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    } else if (error.response && error.response.status === 500) {
      message.error("系统错误！");
    } else if (error.message && error.message.indexOf("timeout") > -1) {
      message.error("网络超时!");
    } else if (error === "403") {
      message.error("没有请求权限!");
    } else {
      message.error("网络错误!");
    }
    return Promise.reject(error);
  }
);
export default axios;
