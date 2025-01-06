<template>
  <ButtonGroup :title="`${configKey === 'titleColor' ? '标题' : '描述'}颜色`" :status="status">
    <el-color-picker v-model="text" @update:modelValue="inputHandle" />
  </ButtonGroup>
</template>
<script setup lang="ts">
import type { UpdateStatus } from '@/types'
import ButtonGroup from './ButtonGroup.vue'
import { inject, ref } from 'vue'

const props = defineProps<{
  status: string
  isShow: boolean
  configKey: string
}>()
const text = ref(props.status)

const updateStatus = inject<UpdateStatus>('updateStatus')
function inputHandle(newVal: string) {
  text.value = newVal
  if (!updateStatus) return
  updateStatus(props.configKey, newVal)
}
</script>
