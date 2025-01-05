<template>
  <div>
    <div class="mb-10">描述内容</div>
    <el-input
      :row="5"
      type="textarea"
      placeholeer="请输入题目说明（选填）"
      v-model="text"
      @update:modelValue="inputHandle"
    ></el-input>
  </div>
</template>

<script setup lang="ts">
import type { VueComType, UpdateStatus } from '@/types'

const props = defineProps<{
  status: string
  isShow: boolean
  configKey: string
  editCom: VueComType
  id: string
}>()

import { inject, ref } from 'vue'
const text = ref(props.status)

const updateStatus = inject<UpdateStatus>('updateStatus')
function inputHandle(newVal: string) {
  text.value = newVal
  if (!updateStatus) return
  updateStatus(props.configKey, newVal)
}
</script>
