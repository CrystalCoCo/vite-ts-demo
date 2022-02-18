import axios from 'axios'

interface CustomConfig {
  loading: boolean,
  toast: boolean,
  headers?: object
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



