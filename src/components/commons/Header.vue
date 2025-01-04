<template>
  <div>
    <div class="container flex align-items-center border-box">
      <div class="left flex justify-content-center align-items-center">
        <el-button :icon="ArrowLeft" circle size="small" @click="goHome"></el-button>
      </div>
      <div class="center flex align-items-center space-between pl-15 pr-15"></div>
      <div class="right flex justify-content-center align-items-center">
        <el-avatar :size="30" :src="avatar"></el-avatar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import avatar from '@/assets/img/icon.gif'
const goHome = () => {
  router.push('/')
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--border-color);
  .left {
    width: 60px;
    height: 100%;
  }
  .center {
    flex: 1;
    height: 100%;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }
  .right {
    width: 80px;
    height: 100%;
  }
}
</style>
