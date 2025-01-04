import type { VueComType } from './common'

export interface BaseProps {
  id: string
  isShow: boolean
  name: string
  editCom: VueComType
}

export interface TextProps extends BaseProps {
  status: string
}

export type StringStatusArr = string[]
export type valueStatusArr = Array<{ value: string; status: string }>

export type StatusArray = StringStatusArr | valueStatusArr

export interface OptionsProps extends BaseProps {
  status: StringStatusArr
  currentStatus: number
}

export interface BaseStaus {
  title: TextProps
  desc: TextProps
  position: OptionsProps
  titleSize: OptionsProps
  descSize: OptionsProps
  titleWeight: OptionsProps
  descWeight: OptionsProps
  titleItalic: OptionsProps
  descItalic: OptionsProps
  titleColor: TextProps
  descColor: TextProps
}

export interface TypeStatus extends BaseStaus {
  type: OptionsProps
}

export interface OptionsStatus extends BaseStaus {
  options: OptionsProps
}
// 检查props 是否为 TextProps
export function isTextProps(props: TextProps | OptionsProps): props is TextProps {
  return typeof props.status === 'string'
}
// 检查props 是否为 TextProps
export function isOptionsProps(props: TextProps | OptionsProps): props is OptionsProps {
  return props && Array.isArray(props.status)
}
// 检查 status 是否为string[]
export function isStringArray(status: StatusArray): status is string[] {
  return Array.isArray(status) && (status.length === 0 || typeof status[0] === 'string')
}
