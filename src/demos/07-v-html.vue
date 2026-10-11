<script setup>
import { ref } from 'vue'

const content = ref('<strong>Hello Vue</strong>')
</script>

<template>
  <div>
    <h2>v-html 的用法</h2>
    <p v-html="content"></p>
  </div>

  <hr />

  <!-- 對照：同一份資料用雙花括號會看到標籤本身 -->
  <p>雙花括號的用法：{{ content }}</p>
</template>
