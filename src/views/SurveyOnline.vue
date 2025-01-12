<template>
  <div>
    <div class="quiz-container mc">
      <div class="mt-30 mb-20">题目数量：{{ surveyOnlineData.surveyCount }}</div>
      <div class="content mb-10" v-for="(com, index) in surveyOnlineData.coms" :key="index">
        <component
          :is="com.type"
          :status="com.status"
          :nums="nums[index]"
          :answers="answers"
          @updateAnswer="updateAnswer(index, $event)"
        />
      </div>
      <div class="mt-20 mb-20 text-center">
        <el-button type="primary" @click="submitAnswers">提交答案</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { Ref } from 'vue'
import type { SurveyOnlineData } from '@/types'
// 工具
import { restoreComponentStatus } from '@/utils/hooks'
// 组合式函数
import { useSurveyNo } from '@/utils/hooks'
// 引入 ElementPlus 库
import { ElMessage } from 'element-plus'
// 路由
import { useRoute } from 'vue-router'
import { getSurveyOnline, updateSurveyOnline } from '@/api/surveyApi'
const route = useRoute()

const surveyOnlineData = ref<SurveyOnlineData>({
  coms: [],
  surveyCount: 0,
})

const answers: Ref<{ [key: number]: string | number | Date }> = ref({})

const nums = computed(() => useSurveyNo(surveyOnlineData.value?.coms).value)
const surveyNo = route.params.id as string
onMounted(async () => {
  const res = await getSurveyOnline(surveyNo)
  const data = res.data[0]
  if (data.answers) {
    answers.value = JSON.parse(data.answers)
  }
  if (data.coms) {
    const coms = JSON.parse(data.coms)
    restoreComponentStatus(coms)
    Object.assign(surveyOnlineData.value, { coms, surveyCount: data.surveyCount })
  }

  console.log(surveyOnlineData.value)
})

const updateAnswer = (index: number, answer: string | number | Date) => {
  console.log(index, answer)

  const serial = nums.value[index]
  if (serial !== null) {
    answers.value[serial] = answer
  }
}

const submitAnswers = async () => {
  const apiData = {
    answers: JSON.stringify(answers.value),
  }
  const res = await updateSurveyOnline(surveyNo, apiData)
  if (res.code === 200) {
    ElMessage({
      message: '答案已提交',
      type: 'success',
    })
  }
}
</script>

<style scoped lang="scss">
.quiz-container {
  width: 800px;
}
</style>
