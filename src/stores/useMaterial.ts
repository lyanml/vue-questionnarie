import { defineStore } from 'pinia'
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap'
import {
  addOption,
  removeOption,
  setColor,
  setItalic,
  setPosition,
  setSize,
  setTextStatus,
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
    },
  }),
  actions: {
    setCurrentMaterialCom(com: Material) {
      console.log('useMaterial change current MatereialCom')

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
  },
})
