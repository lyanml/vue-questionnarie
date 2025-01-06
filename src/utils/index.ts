import type { OptionsProps, TextProps } from '@/types'
import {
  isTextProps,
  isOptionsProps,
  isStringArray,
  isValueStatusArray,
  isPicTitleDescArray,
} from '@/types'
export function getTextStatus(props: TextProps) {
  if (props && isTextProps(props)) {
    return props.status
  }
}

export function getStringStatus(props: OptionsProps) {
  if (props && isOptionsProps(props) && isStringArray(props.status)) {
    return props.status
  }
}
export function getCurrentStatus(props: OptionsProps) {
  return props && props.currentStatus
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isOptionsProps(props) && isStringArray(props.status)) {
    return props.status[props.currentStatus]
  }
}

export function getValueStatus(props: OptionsProps) {
  if (
    props &&
    isOptionsProps(props) &&
    (isValueStatusArray(props.status) || isPicTitleDescArray(props.status))
  ) {
    return props.status
  }
}
