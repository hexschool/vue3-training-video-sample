<script setup>
const appName = import.meta.env.VITE_APP_NAME;
const apiUrl = import.meta.env.VITE_API_URL;

// 查看環境變數內容
console.log('import.meta.env', import.meta.env)
</script>

<template>
  <main>
    <h1>{{ appName }}</h1>
    <p>API URL：{{ apiUrl }}</p>
  </main>
</template>
