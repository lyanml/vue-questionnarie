// import type { Status } from './common'

export interface Survey {
  createDate?: string
  updateDate?: string
  title?: string
  surveyCount?: number
  coms?: string
}
export interface SurveyReturnData extends Survey {
  id?: number
}
export interface OnlineData extends Survey {
  answers?: string
  surveyNo?: string
  surveyTypeId?: number
}
export interface getOnlineData {
  [key: number]: OnlineData
}
