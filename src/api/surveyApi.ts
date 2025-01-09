import type { Survey } from '@/types'
import { get, post, put, del } from './apiService'

// 示例：获取所有问卷
export const getAllSurveys = () => {
  return get<Survey[]>('/surveys')
}

// 示例：根据 ID 获取问卷
export const getSurveyById = (id: number) => {
  return get<Survey>(`/surveys/${id}`)
}

// 示例：保存新的问卷
export const saveSurvey = (survey: Survey) => {
  return post<Survey>('/surveys', survey)
}

// 示例：更新问卷
export const updateSurvey = (id: number, survey: Survey) => {
  return put<Survey>(`/surveys/${id}`, survey)
}

// 示例：删除问卷
export const deleteSurvey = (id: number) => {
  return del<Survey>(`/surveys/${id}`)
}
