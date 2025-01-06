import { defineStore } from 'pinia'
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap'
import {
  addOption,
  removeOption,
  setColor,
  setItalic,
  setPicLinkByIndex,
  setPosition,
  setSize,
  setTextStatus,
  setTextType,
  setWeight,
} from './action'
import type { Material } from '@/types'
export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialCom: 'single-select', // 当前选中的组件
    coms: {
      // 所有的业务组件
      'single-select': defaultStatusMap['single-select'](),
      'multi-select': defaultStatusMap['multi-select'](),
      'option-select': defaultStatusMap['option-select'](),
      'single-pic-select': defaultStatusMap['single-pic-select'](),
      'multi-pic-select': defaultStatusMap['multi-pic-select'](),
      'text-input': defaultStatusMap['text-input'](),
    },
  }),
  actions: {
    setCurrentMaterialCom(com: Material) {
      this.currentMaterialCom = com
    },
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setSize,
    setWeight,
    setItalic,
    setColor,
    setPicLinkByIndex,
    setTextType,
  },
})
