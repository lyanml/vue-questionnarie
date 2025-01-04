<template>
  <div>
    <div class="mb-10">标题内容</div>
    <el-input placeholer="请输入题目标题" v-model="text"></el-input>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ desc: string }>()
const text = ref(props.desc)
</script>
