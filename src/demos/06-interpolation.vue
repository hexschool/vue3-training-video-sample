<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue 100')
const count = ref(10)
const firstName = ref('Antonio')
const lastName = ref('Lin')
const isLogin = ref(true)

// 物件資料
const userInfo = ref({
  name: 'Antonio',
  age: 18,
  course: 'Vue 3',
})

const getWelcomeMessage = () => {
  return '歡迎來到 Vue 課程'
}
</script>

<template>
  <h2>雙花括號（Mustache）常見用法</h2>

  <!-- Vue 的響應式資料 -->
  <p>響應式資料：{{ message }}</p>

  <!-- 物件資料（小技巧：可看到物件完整值） -->
  <p>物件資料：{{ userInfo }}</p>

  <!-- 取得物件中的指定屬性 -->
  <p>物件屬性：{{ userInfo.name }}</p>

  <!-- JavaScript 表達式與簡單運算 -->
  <p>簡單運算：{{ count + 1 }}</p>

  <!-- 字串組合 -->
  <p>字串組合：{{ firstName + ' ' + lastName }}</p>

  <!-- 樣板字面值（Template Literal） -->
  <p>樣板字面值：{{ `${firstName} ${lastName}` }}</p>

  <!-- 三元運算 -->
  <p>三元運算：{{ isLogin ? '已登入' : '尚未登入' }}</p>

  <!-- 函式執行後的結果 -->
  <p>函式執行結果：{{ getWelcomeMessage() }}</p>

  <!-- JavaScript 方法執行後的結果 -->
  <p>方法執行結果：{{ message.toUpperCase() }}</p>

  <!-- 同一個標籤中可以使用多個雙花括號 -->
  <p>多個雙花括號：{{ firstName }} {{ lastName }}</p>
</template>
