<template>
  <div :class="{ 'text-center': computedState.position }">
    <MaterialsHeader
      :nums="nums"
      :title="computedState.title"
      :titleSize="computedState.titleSize"
      :titleWeight="computedState.titleWeight"
      :titleItalic="computedState.titleItalic"
      :titleColor="computedState.titleColor"
      :desc="computedState.desc"
      :descSize="computedState.descSize"
      :descWeight="computedState.descWeight"
      :descItalic="computedState.descItalic"
      :descColor="computedState.descColor"
    />
    <el-input v-if="computedState.type === 0" v-model="inputValue" @click.stop />
    <el-input v-else :rows="5" type="textarea" v-model="inputValue" @click.stop />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MaterialsHeader from '../../Common/MaterialsHeader.vue'
import { getCurrentStatus, getStringStatusByCurrentStatus, getTextStatus } from '@/utils'

import type { TypeStatus } from '@/types'

const props = defineProps<{
  nums: number
  status: TypeStatus
}>()

const computedState = computed(() => ({
  type: getCurrentStatus(props.status.type),
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}))

const inputValue = ref<string>('')
</script>
