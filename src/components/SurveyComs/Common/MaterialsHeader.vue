<template>
  <div class="container mb-15">
    <h2 class="title font-weight-100">
      <span>01.默认单选题标题</span>
    </h2>
    <div class="desc">默认单选题描述</div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  > h2 {
    font-size: 20px;
    > span {
      margin: 0 5px;
    }
  }
}
.desc {
  font-size: var(--font-size-base);
  color: var(--font-size-light);
  text-indent: 5px;
}
</style>
