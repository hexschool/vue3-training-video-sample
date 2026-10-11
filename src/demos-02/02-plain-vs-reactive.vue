<script setup>
import { ref } from 'vue'

// 一般變數
let plainCount = 0
const increasePlain = () => {
  plainCount++
  console.log('plainCount：', plainCount)
}

// 響應式變數
const count = ref(0)
const increaseCount = () => {
  count.value++
}
</script>

<template>
  <div>
    <!-- 1. 一般變數 -->
    <section>
      <h2>一般變數</h2>
      <p>數量：{{ plainCount }}</p>
      <button @click="increasePlain">
        一般變數 + 1
      </button>
    </section>

    <hr />

    <!-- 2. 響應式變數 -->
    <section>
      <h2>響應式變數（ref）</h2>
      <p>數量：{{ count }}</p>
      <button @click="increaseCount">
        ref + 1
      </button>
    </section>
  </div>
</template>
