<template>
  <div ref="preview-container" class="preview-container pb-40">
    <div class="center mc">
      <div class="button-group flex space-between align-items-center">
        <div class="flex space-between no-print">
          <el-button type="danger" @click="gobackHandle">返回</el-button>
        </div>
        <div class="mr-15">
          <el-text class="mx-1">题目数量：{{ store.surveyCount }}</el-text>
        </div>
      </div>
      <div class="content-group no-border">
        <div class="content mb-10" v-for="(com, index) in store.coms" :key="index">
          <component :is="com.type" :status="com.status" :nums="nums[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

import { useEditorStore } from '@/stores/useEditor'
const store = useEditorStore()

import { restoreComponentStatus } from '@/utils/hooks'

const id = Number(route.params.id)
if (id) {
  getSurveyById(Number(id)).then((res) => {
    if (res) {
      console.log(res.data)
      const coms = JSON.parse(res.data.coms) as Status[]
      Object.assign(res.data, { coms })
      console.log(res.data)

      restoreComponentStatus(res.data.coms)
      store.setStore(res.data)
    }
  })
}

const scrollToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
onMounted(() => {
  scrollToTop()
})

import { useSurveyNo } from '@/utils/hooks'
import { getSurveyById } from '@/api/surveyApi'
import type { Status } from '@/types'

const nums = computed(() => useSurveyNo(store.coms).value)

const gobackHandle = () => {
  const path = history.state.from
  console.log(history)

  if (path === 'home') {
    router.back()
  } else {
    router.push(`/editor/${id}/survey-type`)
  }
}
</script>

<style scoped lang="scss">
.preview-container {
  width: 100vw;
  min-height: 100vh;
  background: url('@/assets/img/editor_background.png');
}
.center {
  width: 800px;
}
.button-group {
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: var(--white);
  z-index: 100;
}
.content-group {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  background: var(--white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
@media print {
  .no-print {
    display: none;
  }
  .no-border {
    border: none;
    box-shadow: none;
  }
}
</style>
