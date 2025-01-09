import {
  ageStatus,
  careerStatus,
  educationStatus,
  genderStatus,
} from '@/configs/defaultStatus/initStatus'
import type { Material, OptionsProps, Status, TextProps } from '@/types'
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
export function getValueStatusByCurrentStatus(props: OptionsProps) {
  if (
    props &&
    isOptionsProps(props) &&
    (isValueStatusArray(props.status) || isPicTitleDescArray(props.status))
  ) {
    return props.status[props.currentStatus]
  }
}

export const updateInitStatusBeforeAdd = (comStatus: Status, newMaterialName: Material) => {
  switch (newMaterialName) {
    case 'personal-info-name': {
      comStatus.name = 'personal-info-name'
      comStatus.status.title.status = '您的姓名是'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-id': {
      comStatus.name = 'personal-info-id'
      comStatus.status.title.status = '请填写身份证号'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-tel': {
      comStatus.name = 'personal-info-tel'
      comStatus.status.title.status = '请填写手机号'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-wechat': {
      comStatus.name = 'personal-info-wechat'
      comStatus.status.title.status = '请填写微信号'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-qq': {
      comStatus.name = 'personal-info-qq'
      comStatus.status.title.status = '请填写QQ号'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-email': {
      comStatus.name = 'personal-info-email'
      comStatus.status.title.status = '请填写邮箱'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-address': {
      comStatus.name = 'personal-info-address'
      comStatus.status.title.status = '请填写地址'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-gender': {
      comStatus.name = 'personal-info-gender'
      comStatus.status.title.status = '您的性别是'
      comStatus.status.options.status = genderStatus()
      break
    }
    case 'personal-info-age': {
      comStatus.name = 'personal-info-age'
      comStatus.status.title.status = '您的年龄是'
      comStatus.status.options.status = ageStatus()
      break
    }
    case 'personal-info-education': {
      comStatus.name = 'personal-info-education'
      comStatus.status.title.status = '到目前为止，您的最高学历是'
      comStatus.status.options.status = educationStatus()
      break
    }
    case 'personal-info-career': {
      comStatus.name = 'personal-info-career'
      comStatus.status.title.status = '您目前的职业是'
      comStatus.status.options.status = careerStatus()
      break
    }
    case 'personal-info-birth': {
      comStatus.name = 'personal-info-birth'
      comStatus.status.title.status = '请选择出生日期'
      break
    }
    case 'personal-info-collage': {
      comStatus.name = 'personal-info-collage'
      comStatus.status.title.status = '请填写您的大学'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-major': {
      comStatus.name = 'personal-info-major'
      comStatus.status.title.status = '请填写您的专业'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-industry': {
      comStatus.name = 'personal-info-industry'
      comStatus.status.title.status = '请填写您的行业'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-company': {
      comStatus.name = 'personal-info-company'
      comStatus.status.title.status = '请填写您的公司'
      comStatus.status.type.isShow = false
      break
    }
    case 'personal-info-position': {
      comStatus.name = 'personal-info-position'
      comStatus.status.title.status = '请填写您的职位'
      comStatus.status.type.isShow = false
      break
    }
  }
}

export function handleScroll(event: WheelEvent) {
  const target = event.currentTarget as HTMLElement

  // 使用 Math.round() 将值转换为整数
  const scrollTop = Math.round(target.scrollTop)
  const scrollHeight = Math.round(target.scrollHeight)
  const clientHeight = Math.round(target.clientHeight)

  const isAtTop = scrollTop === 0
  const isAtBottom = scrollHeight - scrollTop === clientHeight

  if ((isAtTop && event.deltaY < 0) || (isAtBottom && event.deltaY > 0)) {
    event.preventDefault()
    event.stopPropagation()
  }
}
