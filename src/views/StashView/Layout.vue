<template>
  <div class="layout-container flex">
    <div class="left flex wrap space-between">
      <slot />
    </div>
    <div class="center">
      <RouterView v-slot="{ Component }">
        <component :is="Component" :status="status" :nums="1"></component>
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
import type { MaterialStore, UpdateStatus } from '@/types'
import { ElMessage } from 'element-plus'
import { computed, provide } from 'vue'
const store = useMaterialStore() as unknown as MaterialStore
const status = store.coms[store.currentMaterialCom].status
const currentCom = computed(() => store.coms[store.currentMaterialCom])
const updateStatus: UpdateStatus = (
  configKey: string,
  payload?: number | string | boolean | object,
) => {
  switch (configKey) {
    case 'title':
    case 'desc':
      if (typeof payload !== 'string') {
        console.error('payload is invalid')
      }

      store.setTextStatus(status[configKey], payload)
      break
    case 'options':
      if (typeof payload === 'number') {
        const flag = store.removeOption(status[configKey], payload)
        if (flag) {
          ElMessage.success('删除成功')
        } else {
          ElMessage.error('至少保留两个选项')
        }
      } else {
        store.addOption(status[configKey])
      }
      break
    case 'position':
      store.setPosition(status[configKey], payload)
      break
    case 'titleSize':
    case 'descSize':
      if (typeof payload === 'number') {
        store.setSize(status[configKey], payload)
      }
      break
    case 'titleItalic':
    case 'descItalic':
      if (typeof payload === 'number') {
        store.setItalic(status[configKey], payload)
      }
      store.setItalic(status[configKey], payload)
      break
    case 'titleWeight':
    case 'descWeight':
      if (typeof payload === 'number') {
        store.setWeight(status[configKey], payload)
      }
      store.setWeight(status[configKey], payload)
      break
    case 'titleColor':
    case 'descColor':
      if (typeof payload === 'string') {
        store.setColor(status[configKey], payload)
      }
      store.setColor(status[configKey], payload)
      break
    default:
      console.warn(`Unknown configKey: ${configKey}`)
  }
}
provide('updateStatus', updateStatus)
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
