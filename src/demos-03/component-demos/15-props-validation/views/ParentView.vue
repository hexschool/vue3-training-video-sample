<script setup>
import UserCard from '../components/UserCard.vue'
</script>

<template>
  <div class="file-block" data-name="views/ParentView.vue">
    <!-- 正確傳值：三個 props 都符合 UserCard 的驗證規則 -->
    <UserCard name="Antonio" :user-age="20" role="admin" />

    <!-- 故意傳錯：不傳必填的 name、role 傳驗證器不接受的 guest。畫面照樣顯示，
         Console 會有兩則 Vue warn；userAge 沒傳，用的是預設值 18 -->
    <UserCard role="admin" />
  </div>
</template>
