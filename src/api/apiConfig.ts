/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

// 创建 Axios 实例
const api: AxiosInstance = axios.create({
  baseURL: '/api', // 根据环境变量配置 baseURL
  timeout: 10000, // 请求超时时间
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 在这里可以添加请求头，例如：
    // config.headers['Authorization'] = 'Bearer ' + getToken();
    return config
  },
  (error: any) => {
    // 更详细的错误处理
    console.error('请求错误:', error.message)
    return Promise.reject(error)
  },
)

// 响应拦截器
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在这里可以处理响应数据，例如：
    if (response.data.code !== 200) {
      console.error('请求失败:', response.data.message)
      return Promise.reject(new Error('请求失败'))
    }
    return response
  },
  (error: any) => {
    // 更详细的错误处理
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.error('响应错误:', error.response.status, error.response.data.message)
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('请求超时或无响应:', error.request)
    } else {
      // 在设置请求时发生了一些事情，触发了一个错误
      console.error('请求设置错误:', error.message)
    }
    return Promise.reject(error)
  },
)

export default api
