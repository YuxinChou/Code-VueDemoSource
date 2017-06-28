import axios from 'axios';
import { Message } from 'element-ui';
// import store from '../store';
import router from '../router';

export function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: process.env.BASE_API,
      timeout: 20000 // 超时
    });
    instance(options)
    .then(response => {
      const res = response.data;
      if (res.retCode !== "10000") {
        // console.log(options); // for debug
        // 40600:Token 过期了 50008:非法的token
        if (res.retCode === "40600" || res.retCode === "50008") {
          Message({
            message: res.msg,
            type: 'error',
            duration: 5 * 1000
          });
          router.push({ path: '/login' })
        } else {
          Message({
            message: res.msg,
            type: 'error',
            duration: 5 * 1000
          });
        }
        reject(res);
      } else {
				resolve(res);
      }
    })
    .catch(error => {
      Message({
        message: error,
        type: 'error',
        duration: 5 * 1000
      });
      // console.log(error); // for debug
      reject(error);
    });
  });
}
