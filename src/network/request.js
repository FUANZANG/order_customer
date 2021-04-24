import axios from 'axios'
import qs from 'qs'

export function request(config) {

  // 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://lishuo-api.liyangweb.com',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  instance.interceptors.request.use(config => {
    // console.log(config);
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
    config.method === 'post'
      ? config.data = qs.stringify({ ...config.data })
      : config.params = { ...config.params };// 转为formdata数据格式
    // if (config.method == "post") {
    // }
    return config
  }, err => {
    // console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)

}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 创建 axios 实例
//     const instance = axios.create({
//       baseURL: 'http://lishuo-api.liyangweb.com',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }