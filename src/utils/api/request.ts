import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, status } = response

    // 处理业务逻辑错误
    if (status !== 200) {
      return Promise.reject(new Error(data.message || 'Error'))
    }

    return data
  },
  (error: AxiosError) => {
    // 处理 HTTP 错误
    const { response } = error
    if (response) {
      switch (response.status) {
        case 401:
          // 未授权，跳转登录页
          // router.push('/login');
          break
        case 403:
          break
        case 404:
          break
        case 500:
          break
        default:
      }
    }
    else if (!window.navigator.onLine) {
      // 网络错误，提示用户网络连接异常
    }
    else {
      // 处理业务逻辑错误
    }

    return Promise.reject(error)
  },
)

// 封装常用请求方法
export const api = {
  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, { params, ...config })
  },

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },

  delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, { params, ...config })
  },

  upload<T = any>(url: string, data: FormData, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      ...config,
    })
  },
}

export default service
