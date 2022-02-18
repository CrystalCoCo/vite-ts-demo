import request from './request'

interface IResponseData<T> {
    message?: string;
    data: T;
    code: string;
}

const http ={
    get<T>(url: string, data?: object, options = { loading: true, toast: true }): Promise<IResponseData<T>> {
        return request(options).get(url, { params: data })
    },
    post<T>(url: string, data?: object, params?: object, options = { loading: true, toast: true }): Promise<IResponseData<T>> {
        return request(options).post(url, data, { params: params })
    },    
    delete<T>(url: string, data?: object, options = { loading: true, toast: true }): Promise<IResponseData<T>> {
        return request(options).delete(url, { params: data })
    },    
    put<T>(url: string, data?: object, params?: object, options = { loading: true, toast: true }): Promise<IResponseData<T>> {
        return request(options).put(url, data, { params: params })
    }
}
//导出
export default http
