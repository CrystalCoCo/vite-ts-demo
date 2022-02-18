import request from './request'
import { Method } from 'axios'
interface CustomConfig {
    loading: boolean,
    toast: boolean
}

const http ={
    get(url: string, data: object, options = { loading: true, toast: true } as CustomConfig) {
        return request(options).get(url, { params: data })
    },
    post(url: string, data: object, params: object, options = { loading: true, toast: true } as CustomConfig){
        return request(options).post(url, data, { params: params })
    },    
    delete(url: string, data: object, options = { loading: true, toast: true } as CustomConfig) {
        return request(options).delete(url, { params: data })
    },    
    put(url: string, data: object, params: object, options = { loading: true, toast: true } as CustomConfig) {
        return request(options).put(url, data, { params: params })
    }
}
//导出
export default http