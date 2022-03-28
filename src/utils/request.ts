import axios from 'axios'
import store from '../store/index'
import { errorPrompt } from './errorPrompt'

declare module "axios" {
  export interface AxiosRequestConfig {
    showLoading?: boolean
  }
}

let loadingNum = 0
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL as any, // api base_url
  timeout: 30000, // 请求超时时间
  showLoading: true
});
instance.interceptors.request.use(config => {
  if(config.showLoading != false) {
    loadingNum ++
    store.commit('loading', true)
  }
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

interface IResponseData<T> {
  message?: string;
  data: T;
  code: string;
}

export function get<T>(url: string, data?: object, loading?: boolean): Promise<IResponseData<T>> {
  let params = loading == false ? { params: data, showLoading: loading } : { params: data }
  return instance.get(url, params)
}
export function post<T>(url: string, data?: object, params?: object): Promise<IResponseData<T>> {
  return instance.post(url, data, { params: params })
}    
export function deleteReq<T>(url: string, data?: object): Promise<IResponseData<T>> {
  return instance.delete(url, { params: data })
}   
export function put<T>(url: string, data?: object, params?: object): Promise<IResponseData<T>> {
  return instance.put(url, data, { params: params })
}


