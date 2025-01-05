import type { TextProps } from 'element-plus'
import type { Status } from './common'
import type { Material } from './material'
import type { OptionsProps } from './editProps'

export interface Actions {
  setTextStatus: (textProps: TextProps, text: string) => void
  addOption: (optionProps: OptionsProps) => void
  removeOption: (optionProps: OptionsProps, index: number) => boolean
  setPosition: (positionProps: OptionsProps, index: number) => void
}

export interface MaterialStore extends Actions {
  currentMaterialCom: Material
  coms: Record<Material, Status>
}

export type UpdateStatus = (configKey: string, payload?: number | string | boolean | object) => void
