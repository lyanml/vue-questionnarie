import { isStringArray, type OptionsProps, type TextProps } from '@/types'

export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text
}

export function addOption(optionProps: OptionsProps) {
  if (isStringArray(optionProps.status)) {
    optionProps.status.push('新增选项')
  }
}

export function removeOption(optionProps: OptionsProps, index: number): boolean {
  if (optionProps.status.length === 2) return false
  optionProps.status.splice(index, 1)
  return true
}

export function setPosition(positionProps: OptionsProps, index: number) {
  positionProps.currentStatus = index
}
