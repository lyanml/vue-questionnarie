import { defineStore } from 'pinia'
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap'

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialCom: 'single-select', // 当前选中的组件
    coms: {
      // 所有的业务组件
      'single-select': defaultStatusMap['single-select'](),
    },
  }),
})
