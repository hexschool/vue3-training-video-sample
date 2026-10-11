<script setup>
import { ref } from 'vue'

const count = ref(0) // 資料

const add = () => {
  count.value++ // 更新資料
}
</script>

<template>
  <!-- 顯示資料 -->
  <div>{{ count }}</div>

  <!-- 觸發事件 -->
  <button type="button" v-on:click="add">+1</button>
</template>
