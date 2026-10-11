<script setup>
import UserCard from '../components/UserCard.vue'
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <UserCard>
      <template #header>
        <h2>使用者資料</h2>
      </template>

      <p>Antonio</p>

      <template #footer>
        <button>查看詳細資料</button>
      </template>
    </UserCard>
  </div>
</template>
