<template>
  <div>
    <div class="flex align-items-center space-between">
      <div class="flex align-items-cneter">
        <div class="mr-20">居中设置</div>
        <div class="currentStatus">{{ status[currentStatus] }}</div>
      </div>
      <div>
        <el-button-group>
          <el-button :class="{ select: currentStatus === 0 }" @click="changePosition(0)">
            <font-awesome-icon icon="align-left"></font-awesome-icon>
          </el-button>
          <el-button
            :class="{
              select: currentStatus === 1,
            }"
            @click="changePosition(1)"
          >
            <font-awesome-icon icon="align-center" />
          </el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StringStatusArr, UpdateStatus } from '@/types'
import { inject } from 'vue'

const props = defineProps<{
  currentStatus: number
  status: StringStatusArr
  isShow: boolean
  configKey: string
}>()
const updateStatus = inject<UpdateStatus>('updateStatus')
function changePosition(index: number) {
  if (!updateStatus) return
  updateStatus(props.configKey, index)
}
</script>
<style lang="scss" scoped>
.currentStatus {
  color: var(--info-color);
  font-size: var(--font-size-base);
}
</style>
