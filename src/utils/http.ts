import request from './request'

const http ={
    get(url: string, data: object, options = { loading: true, toast: true }) {
        return request(options).get(url, { params: data })
    },
    post(url: string, data: object, params: object, options = { loading: true, toast: true }){
        return request(options).post(url, data, { params: params })
    },    
    delete(url: string, data: object, options = { loading: true, toast: true }) {
        return request(options).delete(url, { params: data })
    },    
    put(url: string, data: object, params: object, options = { loading: true, toast: true }) {
        return request(options).put(url, data, { params: params })
    }
}
//导出
export default http
