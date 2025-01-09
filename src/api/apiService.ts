/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './apiConfig'

// 定义响应数据的泛型接口
interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

// 封装 GET 请求
export const get = async <T>(url: string, params?: any): Promise<ApiResponse<T>> => {
  const res = await api.get(url, { params })
  return res.data
}

// 封装 POST 请求
export const post = async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
  const res = await api.post(url, data)
  return res.data
}

// 封装 PUT 请求
export const put = async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
  const res = await api.put(url, data)
  return res.data
}

// 封装 DELETE 请求
export const del = async <T>(url: string): Promise<ApiResponse<T>> => {
  const res = await api.delete(url)
  return res.data
}
