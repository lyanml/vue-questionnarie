import {
  isPicTitleDescArray,
  isStringArray,
  type OptionsProps,
  type PicLink,
  type TextProps,
} from '@/types'

export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text
}

export function addOption(optionProps: OptionsProps) {
  if (isStringArray(optionProps.status)) {
    optionProps.status.push('新增选项')
  } else if (isPicTitleDescArray(optionProps.status)) {
    optionProps.status.push({
      value: '',
      picTitle: `新增图片标题`,
      picDesc: `说明（选填，限30字）`,
    })
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

export function setPicLinkByIndex(optionsProps: OptionsProps, payload: PicLink) {
  if (isPicTitleDescArray(optionsProps.status))
    optionsProps.status[payload.index].value = payload.link
}

export function setTextType(typeProps: OptionsProps, index: number) {
  typeProps.currentStatus = index
}
