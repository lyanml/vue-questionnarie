<template>
  <div class="layout-container flex">
    <div class="left flex wrap space-between">
      <slot />
    </div>
    <div class="center">
      <RouterView v-slot="{ Component }">
        <component
          :is="Component"
          :status="store.coms[store.currentMaterialCom].status"
          :nums="1"
        ></component>
      </RouterView>
    </div>
    <div class="right">
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditPannel from '@/components/SurveyComs/Edititems/EditPannel.vue'
import { useMaterialStore } from '@/stores/useMaterial'
import {
  isPicLink,
  type GetLink,
  type MaterialStore,
  type OptionsStatus,
  type PicLink,
  type TypeStatus,
  type UpdateStatus,
} from '@/types'
import { ElMessage } from 'element-plus'
import { computed, provide } from 'vue'
const store = useMaterialStore() as unknown as MaterialStore
const currentCom = computed(() => store.coms[store.currentMaterialCom])
const updateStatus: UpdateStatus = (
  configKey: string,
  payload?: number | string | boolean | object,
) => {
  const statusKey = store.coms[store.currentMaterialCom].status[configKey] as unknown as
    | TypeStatus
    | OptionsStatus
  switch (configKey) {
    case 'type':
      if (statusKey) {
        if (typeof payload === 'number') {
          store.setTextType(statusKey, payload)
        }
      }
      break
    case 'title':
    case 'desc':
      if (typeof payload !== 'string') {
        console.error('payload is invalid')
        return
      }
      store.setTextStatus(statusKey, payload)
      break
    case 'options':
      if (typeof payload === 'number') {
        const flag = store.removeOption(statusKey, payload)
        if (flag) {
          ElMessage.success('删除成功')
        } else {
          ElMessage.error('至少保留两个选项')
        }
      } else if (typeof payload === 'object' && isPicLink(payload)) {
        store.setPicLinkByIndex(statusKey, payload)
      } else {
        store.addOption(statusKey)
      }
      break
    case 'position':
      store.setPosition(statusKey, payload)
      break
    case 'titleSize':
    case 'descSize':
      if (typeof payload === 'number') {
        store.setSize(statusKey, payload)
      }
      break
    case 'titleItalic':
    case 'descItalic':
      if (typeof payload === 'number') {
        store.setItalic(statusKey, payload)
      }
      store.setItalic(statusKey, payload)
      break
    case 'titleWeight':
    case 'descWeight':
      if (typeof payload === 'number') {
        store.setWeight(statusKey, payload)
      }
      store.setWeight(statusKey, payload)
      break
    case 'titleColor':
    case 'descColor':
      if (typeof payload === 'string') {
        store.setColor(statusKey, payload)
      }
      store.setColor(statusKey, payload)
      break
    default:
      console.warn(`Unknown configKey: ${configKey}`)
  }
}
provide('updateStatus', updateStatus)
const getPicLink: GetLink = (link: PicLink) => {
  updateStatus('options', link)
}
provide('getPicLink', getPicLink)
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  // Header组件高度50px, h1高度50px，上下margin 40px，
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}
.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
}
.center {
  width: 550px;
  // 上下padding 60px
  height: calc(100vh - 100px - 40px - 20px - 60px);
  overflow-y: scroll;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}
.right {
  width: 350px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: scroll;
  border-left: 1px solid var(--border-color);
}
</style>
