<template>
  <div class="pt-20 pr-20 pt-20 pl-20">
    <h1 class="font-weight-100 text-center">问卷小助手</h1>
    <!-- 按钮组 -->
    <div class="mb-15">
      <el-button type="primary" :icon="Plus" @click="turnTo('/editor/survey-type')"
        >创建问卷</el-button
      >
      <el-button type="success" :icon="House" @click="turnTo('/stash')">组件仓库</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column fixed prop="createDate" label="创建日期" width="150" align="center" />
      <el-table-column prop="title" label="问卷标题" align="center" />
      <el-table-column prop="surveyCount" label="题目数" width="150" align="center" />
      <el-table-column prop="updateDate" label="更新日期" width="150" align="center" />
      <el-table-column label="操作" width="300" align="center">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="switchRouter('preview', scope.row.id)"
            >查看</el-button
          >
          <el-button link type="primary" size="small" @click="switchRouter('editor', scope.row.id)"
            >编辑</el-button
          >
          <el-button link type="primary" size="small" @click="delSurvey(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { getAllSurveys } from '@/api/surveyApi'
import type { SurveyReturnData } from '@/types'
import { remove } from '@/utils/apiOperate'
import { Plus, House } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const turnTo = (target: string) => {
  router.push(`${target}`)
}
const tableData = ref<SurveyReturnData[]>([])

const getData = async () => {
  const response = await getAllSurveys()
  tableData.value = response.data
}

// 在组件挂载时调用 API 获取所有问卷数据
onMounted(async () => {
  try {
    await getData()
  } catch (error) {
    console.error('获取问卷数据失败:', error)
  }
})
const switchRouter = (type: string, id: string) => {
  if (type === 'editor') {
    router.push(`/editor/${id}/survey-type`)
  } else if (type === 'preview') {
    router.push({ path: `/preview/${id}`, state: { from: 'home' } })
  }
}
const delSurvey = (id: number) => {
  remove(id).then(() => {
    getData()
  })
}
</script>
