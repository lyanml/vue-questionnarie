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
    <el-select
      placeholder="请选择"
      v-model="optionValue"
      size="large"
      style="width: 240px"
      @click.stop
      @change="emitAnswer"
    >
      <el-option
        v-for="(item, index) in computedState.options"
        :key="index"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MaterialsHeader from '../../Common/MaterialsHeader.vue'
import {
  getCurrentStatus,
  getStringStatus,
  getStringStatusByCurrentStatus,
  getTextStatus,
} from '@/utils'

import type { OptionsStatus } from '@/types'
const props = defineProps<{
  nums: number
  status: OptionsStatus
}>()

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getStringStatus(props.status.options),
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

const optionValue = ref<string>('')

const emits = defineEmits(['updateAnswer'])
const emitAnswer = () => {
  emits('updateAnswer', optionValue.value)
}
</script>
