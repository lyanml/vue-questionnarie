<template>
  <div ref="preview-container" class="preview-container pb-40">
    <div class="center mc">
      <div class="button-group flex space-between align-items-center">
        <div class="flex space-between no-print">
          <el-button type="danger" @click="gobackHandle">返回</el-button>
          <el-button type="success" @click="handleOnline">生成在线问卷</el-button>
          <el-button type="warning" @click="handlePDF">生成本地PDF</el-button>
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
  <el-dialog v-model="dialogVisible" title="信息" width="500">
    分享链接: <a :href="link" target="_blank">{{ link }}</a>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="copyLink">复制链接</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

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
      if (res.data.coms) {
        const coms = JSON.parse(res.data.coms) as Status[]
        Object.assign(res.data, { coms })
        restoreComponentStatus(coms)
        store.setStore(res.data)
      }
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
import { getSurveyById, saveSurveyOnline } from '@/api/surveyApi'
import { isUseForPDF, type OnlineData, type Status } from '@/types'
import { ElMessage } from 'element-plus'

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

function handlePDF() {
  const checked = store.coms.every((item) => isUseForPDF(item.name))
  if (!checked) {
    ElMessage({
      type: 'warning',
      message: '下拉选择组件,评价/打分组件,日期/时间组件导出pdf效果不佳，请更改成其他类型',
    })
    return
  }
  window.print()
}
const dialogVisible = ref(false)
const link = ref('')

import { v4 as uuidv4 } from 'uuid'

async function handleOnline() {
  const surveyNo = uuidv4()

  const apiData: OnlineData = {
    surveyTypeId: id,
    surveyNo,
    answers: '{}',
  }
  const data = await saveSurveyOnline(apiData)
  console.log(data)

  if (data.code === 200) {
    link.value = `${window.location.origin}/online/${data.data.surveyNo}`
    dialogVisible.value = true
  }
}
function copyLink() {
  dialogVisible.value = false
  navigator.clipboard.writeText(link.value)
  ElMessage({
    message: '链接已复制',
    type: 'success',
  })
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
