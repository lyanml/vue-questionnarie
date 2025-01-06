<template>
  <ButtonGroup
    :title="`${configKey === 'titleItalic' ? '标题' : '描述'}倾斜`"
    :status="status[currentStatus]"
  >
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0,
        }"
        @click="changeFontItalic(0)"
      >
        <font-awesome-icon icon="font" size="lg" />
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 1,
        }"
        @click="changeFontItalic(1)"
      >
        <font-awesome-icon icon="font" size="sm" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>
<script setup lang="ts">
import type { UpdateStatus, StringStatusArr } from '@/types'
import ButtonGroup from './ButtonGroup.vue'
import { inject } from 'vue'

const props = defineProps<{
  currentStatus: number
  status: StringStatusArr
  isShow: boolean
  configKey: string
}>()

const updateStatus = inject<UpdateStatus>('updateStatus')
function changeFontItalic(index: number) {
  if (!updateStatus) return
  updateStatus(props.configKey, index)
}
</script>
