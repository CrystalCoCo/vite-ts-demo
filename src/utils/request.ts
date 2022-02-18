import axios from 'axios'
import store from '../store/index'
import { errorPrompt } from './errorPrompt'

interface CustomConfig {
  loading: boolean,
  toast: boolean,
  headers?: object
}

let loadingNum = 0
export function request(options: CustomConfig) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASEURL as any, // api base_url
    timeout: 6000 // 请求超时时间
  });
  instance.interceptors.request.use(config => {
    loadingNum ++
    options.loading && store.commit('loading', true)
    return config
  }, error => Promise.reject(error))

  instance.interceptors.response.use(response => {
    loadingNum --
    if(loadingNum <= 0) store.commit('loading', false)
    if(response.data.code === '0000') return response.data
    else {
      errorPrompt(response.data)
      return Promise.reject(response)
    }
  }, error => {
    loadingNum--
    if(loadingNum <= 0) store.commit('loading', false)
    errorPrompt(error.response)
    return Promise.reject(error.response)
  })
  return instance
}

export default request



