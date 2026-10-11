<script setup>
import { ref } from 'vue'

// 姓名。v-model 綁的就是這一格，輸入框打字會直接改到它
const name = ref('Anna')
</script>

<template>
  <!-- v-model：輸入框與 name 雙向綁定，打字改資料、資料改畫面 -->
  <p>
    <label for="name">姓名：</label>
    <input id="name" v-model="name" type="text" placeholder="請輸入姓名" />
  </p>
</template>
