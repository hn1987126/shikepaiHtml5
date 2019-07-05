import { message } from 'antd';
import axios from 'axios';

// 全局默认设置
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 创建实例
let rq = axios.create({
  timeout: 5000,
  withCredentials: true,
  transformRequest: [
    (data) => {
      let ret = '';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      ret = ret.substr(0, ret.length - 1);
      return ret;
    }
  ]
});

// 全局拦截器
rq.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

rq.interceptors.response.use(
  (res) => {
    let { data } = res;
    // 登录过期
    if (data.status === 1001) {
      message.warning('登录失效，请重新登录', () => {
        window.location.href = data.data.url;
      });
    }
    return res;
  },
  (error) => {
    message.error(error.name);
    return Promise.reject(error);
  }
);

let get = rq.get;
let post = rq.post;

export { get, post };
