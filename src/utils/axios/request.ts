import axios from 'axios'

interface CustomConfig {
  loading: boolean,
  toast: boolean
}

export function request(options: CustomConfig) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASEURL as any, // api base_url
    timeout: 6000 // 请求超时时间
  });
  instance.interceptors.request.use(config => {
    
    return config
  }, error => Promise.reject(error))
  instance.interceptors.response.use(response => {
    
  }, error => {
    
  })
  return instance
}

export default request
// function request(url: string, options: ApiConfig) {
//   // 创建 axios 实例
//   const service = axios.create({
//     baseURL: import.meta.env.VITE_APP_BASEURL as any, // api base_url
//     timeout: 6000 // 请求超时时间
//   });
//   // 请求拦截
//   service.interceptors.request.use(config => {
//     // 这里可设置请求头等信息
//     if (options && options.body) {
//       config.data = options.body;
//     }
//     return config;
//   });
//   // 返回拦截
//   service.interceptors.response.use(response => {
//     // 这里可进行返回数据的格式化等操作
//     return response.data;
//   });
//   return service
// }
// export default request


