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

export function setSize(sizeProps: OptionsProps, index: number) {
  sizeProps.currentStatus = index
}

export function setWeight(weightProps: OptionsProps, index: number) {
  weightProps.currentStatus = index
}
export function setItalic(italicProps: OptionsProps, index: number) {
  italicProps.currentStatus = index
}
export function setColor(colorProps: TextProps, color: string) {
  colorProps.status = color
}
