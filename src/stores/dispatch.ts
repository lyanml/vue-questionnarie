import { ElMessage } from 'element-plus'
import type { TypeStatus, OptionsStatus, EditorStore, MaterialStore } from '@/types'
import { hasType, hasOptions, isOptionsStatusByIndexPayload, isPicLink } from '@/types'
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

export function dispatchStatus(
  store: EditorStore | MaterialStore,
  status: TypeStatus | OptionsStatus,
  configKey: string,
  payload?: number | string | boolean | object,
  isShowChange?: boolean,
) {
  switch (configKey) {
    case 'type':
      if (hasType(status)) {
        if (typeof payload === 'number') {
          if (isShowChange) {
            setType(status, payload)
          }
          store.setTextType(status[configKey], payload)
        }
      }
      break
    case 'title':
    case 'desc':
      if (typeof payload !== 'string') {
        console.error('payload is invalid')
        return
      }
      store.setTextStatus(status[configKey], payload)
      break
    case 'options':
      if (hasOptions(status)) {
        if (typeof payload === 'number') {
          const flag = store.removeOption(status[configKey], payload)
          if (flag) {
            ElMessage.success('删除成功')
          } else {
            ElMessage.error('至少保留两个选项')
          }
        } else if (typeof payload === 'boolean') {
          store.setUse(status[configKey], payload)
        } else if (typeof payload === 'object' && isOptionsStatusByIndexPayload(payload)) {
          store.setOptionsStatusByIndex(status[configKey], payload)
        } else if (typeof payload === 'object' && isPicLink(payload)) {
          store.setPicLinkByIndex(status[configKey], payload)
        } else {
          store.addOption(status[configKey])
        }
      }
      break
    case 'position':
      if (typeof payload === 'number') {
        store.setPosition(status[configKey], payload)
      }
      break
    case 'titleSize':
    case 'descSize':
      if (typeof payload === 'number') {
        store.setSize(status[configKey], payload)
      }
      break
    case 'titleItalic':
    case 'descItalic':
      if (typeof payload === 'number') {
        store.setItalic(status[configKey], payload)
      }
      break
    case 'titleWeight':
    case 'descWeight':
      if (typeof payload === 'number') {
        store.setWeight(status[configKey], payload)
      }
      break
    case 'titleColor':
    case 'descColor':
      if (payload && typeof payload === 'string') {
        store.setColor(status[configKey], payload)
      }
      break
    default:
      console.warn(`Unknown configKey: ${configKey}`)
  }
}
