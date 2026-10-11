<script setup>
import UserList from './01-vite-config/components/users/UserList.vue'
import ProxyCheck from './01-vite-config/components/ProxyCheck.vue'
</script>

<template>
  <h3>使用 alias 簡化 import 路徑</h3>
  <UserList />

  <h3>使用 proxy 轉發 API 請求</h3>
  <ProxyCheck />
</template>
