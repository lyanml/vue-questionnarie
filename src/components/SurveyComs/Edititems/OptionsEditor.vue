<template>
  <div>
    <div class="flex align-items-center mb-10">
      <div class="mr-10">题目选项</div>
      <el-button size="small" :icon="Plus" circle @click="addOptionHandle" />
    </div>
    <div v-for="(_, index) in status" :key="index" class="flex align-items-center">
      <el-input placeholder="选项" class="mt-5 mb-5" v-model="textArr[index]" />
      <el-button
        size="small"
        :icon="Minus"
        circle
        type="danger"
        class="ml-10"
        @click="removeOptionHandle(index)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { StringStatusArr, UpdateStatus, VueComType } from '@/types'
import { Minus, Plus } from '@element-plus/icons-vue'
import { inject, ref } from 'vue'

const props = defineProps<{
  currentStatus: number
  status: StringStatusArr
  isShow: boolean
  configKey: string
  editCom: VueComType
  id: string
}>()

const textArr = ref(props.status)

const updateStatus = inject<UpdateStatus>('updateStatus')

function addOptionHandle() {
  if (!updateStatus) return
  updateStatus(props.configKey)
}
function removeOptionHandle(index: number) {
  if (!updateStatus) return
  console.log(props.configKey, index)

  updateStatus(props.configKey, index)
}
</script>
