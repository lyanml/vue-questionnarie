<template>
  <div class="survey-type-container">
    <SurveyComGroup v-for="(group, index) in SurveyComsList" v-bind="group" :key="index" />
  </div>
</template>

<script setup lang="ts">
import SurveyComGroup from '@/components/Editor/SurveyComGroup.vue'
import { SurveyComsList } from '@/configs/surveyGroupConfig'
</script>
<style lang="scss" scoped>
.survey-type-container {
  height: calc(100vh - 50px - 40px);
  overflow: hidden;
}
</style>
