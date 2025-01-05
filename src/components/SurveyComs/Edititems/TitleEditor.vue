<template>
  <div>
    <div class="mb-10">标题内容</div>
    <el-input
      placeholer="请输入题目标题"
      v-model="text"
      @update:modelValue="inputHandle"
    ></el-input>
  </div>
</template>
<script setup lang="ts">
import type { VueComType, UpdateStatus } from '@/types'
import { inject, ref } from 'vue'
const props = defineProps<{
  status: string
  isShow: boolean
  configKey: string
  editCom: VueComType
  id: string
}>()
const text = ref(props.status)

const updateStatus = inject<UpdateStatus>('updateStatus')
function inputHandle(newVal: string) {
  text.value = newVal
  if (!updateStatus) return
  updateStatus(props.configKey, newVal)
}
</script>
