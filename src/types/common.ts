import type { defineComponent } from 'vue'
import type { Material } from './material'
export type VueComType = ReturnType<typeof defineComponent>

export interface Status {
  type: VueComType
  name: Material
  id: string
  status: {
    [key: string]: string
  }
}
