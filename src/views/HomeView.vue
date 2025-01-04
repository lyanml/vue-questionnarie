<template>
  <div class="pt-20 pr-20 pt-20 pl-20">
    <h1 class="font-weight-100 text-center">低代码问卷系统</h1>
    <!-- 按钮组 -->
    <div class="mb-15">
      <el-button type="primary" :icon="Plus" @click="turnTo('editor')">创建问卷</el-button>
      <el-button type="success" :icon="House" @click="turnTo('editor')">组件仓库</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column fixed prop="createDate" label="创建日期" width="150" align="center" />
      <el-table-column prop="title" label="问卷标题" align="center" />
      <el-table-column prop="nums" label="题目数" width="150" align="center" />
      <el-table-column prop="updateDate" label="更新日期" width="150" align="center" />
      <el-table-column label="操作" width="300" align="center">
        <template #default>
          <el-button link type="primary" size="small">查看问卷</el-button>
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Plus, House } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const turnTo = (target: string) => {
  router.push(`/${target}`)
}
const tableData = ref([
  { createDate: '2022-09-22', title: '问卷1', nums: 10, updateDate: '2022-09-22' },
])
</script>
