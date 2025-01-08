<template>
  <div>
    <div class="header">
      <Header />
    </div>
    <!-- 主体区域 -->
    <div class="container">
      <LeftSide />
      <RightSide />
    </div>
    <div>
      <Center />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/commons/Header.vue'
import LeftSide from './LeftSide/Index.vue'
import RightSide from './RightSide.vue'
import Center from './Center.vue'

import { dispatchStatus } from '@/stores/dispatch'
import type {
  EditorStore,
  GetLink,
  OptionsStatus,
  PicLink,
  TypeStatus,
  UpdateStatus,
} from '@/types'
import { ElMessage } from 'element-plus'
import { provide } from 'vue'

import { useEditorStore } from '@/stores/useEditor'
const store = useEditorStore() as unknown as EditorStore
store.initStore()

const updateStatus: UpdateStatus = (
  configKey: string,
  payload?: number | string | boolean | object,
  isShowChange?: boolean,
) => {
  // 如果没有选中组件，不执行
  if (store.currentComponentIndex === -1) {
    ElMessage({
      message: '请先将组件处于编辑状态',
      type: 'warning',
    })
    return
  }

  const status = store.coms[store.currentComponentIndex].status as unknown as
    | TypeStatus
    | OptionsStatus
  dispatchStatus(store, status, configKey, payload, isShowChange)
}
provide('updateStatus', updateStatus)
const getPicLink: GetLink = (link: PicLink) => {
  updateStatus('options', link)
}
provide('getPicLink', getPicLink)
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: var(--whiter);
  position: fixed;
  top: 0;
  z-index: 10;
}
.container {
  width: calc(100vw - 40px);
  padding: 20px;
  height: calc(100vh - 50px - 40px);
  background: url('@/assets/img/editor_background.png');
  position: fixed;
  top: 50px;
}
</style>
