import {
  isPicTitleDescArray,
  isStringArray,
  type OptionsProps,
  type optionsStatusByIndexPayload,
  type PicLink,
  type TextProps,
  type TypeStatus,
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

export function setUse(optionsProps: OptionsProps, isUse: boolean) {
  optionsProps.isUse = isUse
}

export function setOptionsStatusByIndex(
  optionsProps: OptionsProps,
  payload: optionsStatusByIndexPayload,
) {
  optionsProps.status[payload.index] = payload.val
}
export function setType(status: TypeStatus, payload: number) {
  if (payload !== status.type.currentStatus) {
    status.title.isShow = !status.title.isShow
    status.desc.isShow = !status.desc.isShow
    status.position.isShow = !status.position.isShow
    status.titleSize.isShow = !status.titleSize.isShow
    status.descSize.isShow = !status.descSize.isShow
    status.titleWeight.isShow = !status.titleWeight.isShow
    status.descWeight.isShow = !status.descWeight.isShow
    status.titleItalic.isShow = !status.titleItalic.isShow
    status.descItalic.isShow = !status.descItalic.isShow
    status.titleColor.isShow = !status.titleColor.isShow
    status.descColor.isShow = !status.descColor.isShow
  }
}
