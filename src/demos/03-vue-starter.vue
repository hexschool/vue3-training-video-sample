<script setup>
import { onMounted, ref } from 'vue'

// 資料：畫面需要使用哪些資料？用 ref() 建立響應式資料
const count = ref(0)
// Template Ref：取得畫面上的 h1 元素
const h1Ref = ref(null);

// 功能：使用者操作時要做什麼？
const increase = () => {
  count.value++
}

const decrease = () => {
  count.value--
}

// 生命週期：元件顯示到畫面上之後，想執行的事情寫在 onMounted 裡
console.log("生命週期外", h1Ref.value)
onMounted(() => {
  console.log('元件已經顯示到畫面上的生命週期函數', h1Ref.value)
})
</script>

<template>
  <!-- 顯示目前的 count -->
  <h1 ref="h1Ref">{{ count }}</h1>

  <!-- 點擊按鈕操作 count -->
  <button type="button" v-on:click="decrease">-1</button>
  <button type="button" v-on:click="increase">+1</button>
</template>
