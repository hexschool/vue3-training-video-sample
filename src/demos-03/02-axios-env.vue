<script setup>
import { ref, onMounted } from 'vue';
import { apiGetUsers } from './api/axios.js';

const users = ref([]);

// 元件掛載完成後再取資料
onMounted(async () => {
  const response = await apiGetUsers();

  console.log('response', response)

  // Axios 回傳完整的 Response Object，資料在 data 裡
  users.value = response.data;
});
</script>

<template>
  <p>完整的 users 資料：{{ users }}</p>
</template>
