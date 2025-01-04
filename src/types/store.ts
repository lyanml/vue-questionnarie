import type { Status } from './common'
import type { Material } from './material'

export interface MaterialStore {
  currentMaterialCom: Material
  coms: Record<Material, Status>
}
