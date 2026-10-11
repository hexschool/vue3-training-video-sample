<script setup>
import { ref, watch } from 'vue'

// 1. 本身就是 ref，可以直接傳入
const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log('count：', newValue, oldValue)
})


// 2. 監聽物件裡的某個屬性，要用 Getter
const user = ref({
  name: 'Antonio',
})

// console.log('user.value.name', user.value.name)
watch(
  () => user.value.name,
  (newValue, oldValue) => {
    console.log('name：', newValue, oldValue)
  }
)
</script>

<template>
  <div>
    <!-- 1. 直接傳入 ref -->
    <section>
      <h2>直接傳入 ref</h2>
      <p>Count：{{ count }}</p>
      <!-- 點擊後打開 Console，會印出新值與舊值 -->
      <button @click="count++">
        Count + 1
      </button>
    </section>

    <hr />

    <!-- 2. 用 Getter 監聽物件屬性 -->
    <section>
      <h2>用 Getter 監聽屬性</h2>
      <p>姓名：{{ user.name }}</p>
      <!-- 輸入文字後打開 Console，會印出新值與舊值 -->
      <input v-model="user.name" />
    </section>
  </div>
</template>
