<script setup>
import { ref } from 'vue'

// to：要搬去哪裡
const toastTo = ref('#toast-root')
// disabled：true 就不搬，留在原地
const toastDisabled = ref(true)
</script>

<template>
  <div class="file-block" data-name="App.vue">
    <p>
      to：
      <button @click="toastTo = '#toast-root'">#toast-root</button>
      <button @click="toastTo = 'body'">body</button>
      目前：{{ toastTo }}
    </p>

    <p>
      disabled：
      <button @click="toastDisabled = false">搬（false）</button>
      <button @click="toastDisabled = true">不搬（true）</button>
      目前：{{ toastDisabled }}
    </p>

    <!-- Toast 移動到指定容器 -->
    <Teleport :to="toastTo" :disabled="toastDisabled">
      <div class="toast">
        <strong>我是 Toast 喔</strong>
      </div>
    </Teleport>
  </div>
</template>
