// 题目类型
export type SurveyComName =
  | 'single-select'
  | 'multi-select'
  | 'option-select'
  | 'single-pic-select'
  | 'multi-pic-select'
  | 'text-input'
// 业务组件类型
export type Material = SurveyComName

// 编辑组件类型
export type EditComName =
  | 'title-editor'
  | 'desc-editor'
  | 'options-editor'
  | 'position-editor'
  | 'size-editor'
  | 'weight-editor'
  | 'italic-editor'
