<template>
  <div class="left-side-container flex">
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-item"
        :class="{ 'tab-show': routeName === tab.name }"
        @click="switchRouter(tab.name)"
      >
        <el-icon>
          <component :is="tab.icon" />
        </el-icon>
        <span class="tab-item-title mt-5">{{ tab.title }}</span>
      </div>
    </div>
    <RouterView class="tab-pane" />
  </div>
</template>
<script setup lang="ts">
import { Document, Memo } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const routeName = computed(() => route.name)

const tabs = [
  { name: 'survey-type', title: '题型', icon: Document },
  { name: 'outline', title: '大纲', icon: Memo },
]

const switchRouter = (name: string) => {
  router.push(`/editor/${name}`)
}
</script>

<style lang="scss" scoped>
.left-side-container {
  height: calc(100vh - 50px - 40px);
  width: 300px;
  position: fixed;
  left: 20px;
  top: 70px;
  background-color: var(--whiter);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  .tabs {
    width: 20%;
    height: 100%;
    border-right: 1px solid var(--border-color);
    > .tab-item {
      height: 100px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--font-color-light);
      text-decoration: none;
      cursor: pointer;
      > .tab-item-title {
        font-size: var(--font-size-base);
      }
    }
    > .tab-show {
      color: var(--primary-color);
    }
  }
  > .tab-pane {
    width: 80%;
    height: calc(100% - 50px);
    padding: 25px;
    overflow-y: scroll;
  }
}
</style>
