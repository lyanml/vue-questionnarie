export interface Survey {
  createDate: string
  updateDate: string
  title: string
  surveyCount: number
  coms: string
}
export interface SurveyReturnData extends Survey {
  id: number
}
