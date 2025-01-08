// 题目类型
export type SurveyComName =
  | 'single-select'
  | 'multi-select'
  | 'option-select'
  | 'single-pic-select'
  | 'multi-pic-select'
  | 'text-input'
  | 'rate-score'
  | 'date-time'
  | 'personal-info-name'
  | 'personal-info-id'
  | 'personal-info-tel'
  | 'personal-info-wechat'
  | 'personal-info-qq'
  | 'personal-info-email'
  | 'personal-info-address'
  | 'personal-info-gender'
  | 'personal-info-age'
  | 'personal-info-education'
  | 'personal-info-career'
  | 'personal-info-birth'
  | 'personal-info-collage'
  | 'personal-info-major'
  | 'personal-info-industry'
  | 'personal-info-company'
  | 'personal-info-position'
// 业务组件类型
export type Material = SurveyComName | 'text-note'

// 编辑组件类型
export type EditComName =
  | 'title-editor'
  | 'desc-editor'
  | 'options-editor'
  | 'position-editor'
  | 'size-editor'
  | 'weight-editor'
  | 'italic-editor'

const SurveyComNameArr: SurveyComName[] = [
  'single-select',
  'multi-select',
  'option-select',
  'single-pic-select',
  'multi-pic-select',
  'text-input',
  'personal-info-name',
  'personal-info-id',
  'personal-info-tel',
  'personal-info-wechat',
  'personal-info-qq',
  'personal-info-email',
  'personal-info-address',
  'personal-info-gender',
  'personal-info-age',
  'personal-info-education',
  'personal-info-career',
  'rate-score',
  'date-time',
  'personal-info-birth',
  'personal-info-collage',
  'personal-info-major',
  'personal-info-industry',
  'personal-info-company',
  'personal-info-position',
]
export function isSurveyComName(value: string): value is SurveyComName {
  return SurveyComNameArr.includes(value as SurveyComName)
}
