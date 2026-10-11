<script setup>
import UserCard from './components/UserCard.vue'
</script>

<template>
  <div class="file-block" data-name="App.vue">
    <UserCard />

    <!-- 這裡沒有 import BaseButton，靠的是 main.js 裡的 app.component() -->
    <BaseButton />
  </div>
</template>
