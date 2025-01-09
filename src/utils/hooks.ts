import { computed } from 'vue'
// 类型
import type { EditComName, Status } from '@/types'
import { isSurveyComName } from '@/types'
import { componentMap } from '@/configs/componentMap'

// 计算题目编号
export function useSurveyNo(coms: Status[]) {
  return computed(() => {
    let questionNumber = 1
    return coms.map((com) => {
      if (isSurveyComName(com.name)) {
        return questionNumber++
      }
      return null
    })
  })
}

/**
 * 回显组件数据
 * @param coms 题目数组
 */
export const restoreComponentStatus = (coms: Status[]) => {
  coms.forEach((com) => {
    com.type = componentMap[com.name]
    for (const key in com.status) {
      const name = com.status[key].name as EditComName
      com.status[key].editCom = componentMap[name]
    }
  })
}
