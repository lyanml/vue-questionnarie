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
    <div class="right">编辑面板</div>
  </div>
</template>

<script setup lang="ts">
import { useMaterialStore } from '@/stores/useMaterial'
import type { MaterialStore } from '@/types'
const store = useMaterialStore() as unknown as MaterialStore
const status = store.coms[store.currentMaterialCom].status
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
