<script setup>
import AppModal from './components/AppModal.vue';
</script>

<template>
  <div class="page">
    <div class="content">
      <!-- 1. 沒有 Teleport：Modal 被困在 .content 的 Stacking Context，會被 .overlay 蓋住 -->
      <AppModal />

      <!-- 2. 改用 Teleport 搬到 body：註解掉上面那行、打開下面這段 -->
      <!-- <Teleport to="body">
        <AppModal />
      </Teleport> -->
    </div>

    <div class="overlay">外層區塊</div>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
}

.content {
  position: relative;
  z-index: 1;
  transform: translateZ(0);
}

.overlay {
  position: fixed;
  inset: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
  background: rgba(255, 99, 71, 0.8);
}
</style>
