<script setup>
import { ref } from 'vue';
import AppModal from './components/AppModal.vue';

const isModalOpen = ref(false);
</script>

<template>
  <div class="page">
    <!-- 按鈕要放在 .overlay 上面才點得到 -->
    <div class="toolbar">
      <button @click="isModalOpen = !isModalOpen">
        {{ isModalOpen ? '關閉 Modal' : '開啟 Modal' }}
      </button>
    </div>

    <div class="content">
      <!-- 1. 沒有 Teleport：Modal 被困在 .content 的 Stacking Context，會被 .overlay 蓋住 -->
      <AppModal v-if="isModalOpen" />

      <!-- 2. 改用 Teleport 搬到 body：註解掉上面那行、打開下面這段 -->
      <!-- <Teleport to="body">
        <AppModal v-if="isModalOpen" />
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

.toolbar {
  position: relative;
  z-index: 3;
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
