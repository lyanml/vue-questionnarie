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
    <div class="flex wrap">
      <el-radio-group v-model="radioValue" class="flex wrap" @click.stop>
        <el-radio
          v-for="(item, index) in computedState.options"
          class="picOption flex mb-15"
          :value="item.picTitle"
          :key="index"
        >
          <PicItem :key="index" v-bind="{ ...item, index }" />
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MaterialsHeader from '../../Common/MaterialsHeader.vue'
import PicItem from '../../Common/PicItem.vue'
import {
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getTextStatus,
  getValueStatus,
} from '@/utils'

import type { OptionsStatus, PicTitleDescStatusArr } from '@/types'
const props = defineProps<{
  nums: number
  status: OptionsStatus
}>()

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getValueStatus(props.status.options) as PicTitleDescStatusArr,
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

const radioValue = ref<string>('')
</script>
<style lang="scss" scoped>
.picOption {
  height: auto;
  flex-direction: column-reverse;
}
</style>
