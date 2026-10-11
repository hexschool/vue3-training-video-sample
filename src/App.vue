<script setup>
/**
 * 根元件只做一件事：把目前網址對應的那一頁放上來。
 *
 * 清單與範例各自是一支 view（views/HomeView.vue、views/DemoView.vue），
 * 兩者輪流佔滿整個畫面。誰該出現由 router.js 決定，這裡不需要知道。
 *
 * 所以這支檔案沒有狀態：導覽的位置存在網址列裡。這是「重新整理不會跳回清單」
 * 的全部原因——網址列是瀏覽器在保管的，重新整理、上一頁、把連結貼給別人，
 * 三件事都因此自己成立，不用各寫一套。
 */
</script>

<template>
  <RouterView />
</template>
